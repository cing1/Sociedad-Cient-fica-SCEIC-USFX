/* ════════════════════════════════════════════════════════
   NORMAS Y REGLAMENTOS — Google Drive API v3
   ════════════════════════════════════════════════════════ */

const API_KEY       = "AIzaSyAfDZfDU0o_geHnvartz3OkVqb42lCd1DE";
const ROOT_FOLDER_ID = "1eLx8fZsNgF0MV6ORfjIyZPIFjF8kxmim";

/* Datos dinámicos cargados desde Drive */
let NORMAS_DATA  = [];   // { title, cat, type, driveId, mimeType, thumbnail }
let CATEGORIES   = [];   // { id, label }  — una por subcarpeta

/* ────────────────────────────────────────────────────────
   GOOGLE DRIVE — carga recursiva
   ──────────────────────────────────────────────────────── */

/**
 * Lista los archivos/carpetas de un folder de Drive.
 * @param {string} folderId
 * @returns {Promise<Array>}  array de items de la API
 */
async function driveListChildren(folderId) {
  const fields  = "files(id,name,mimeType,thumbnailLink,size)";
  const query   = encodeURIComponent(`'${folderId}' in parents and trashed=false`);
  const url     = `https://www.googleapis.com/drive/v3/files?q=${query}&key=${API_KEY}&fields=${fields}&pageSize=1000`;
  const res     = await fetch(url);
  if (!res.ok) throw new Error(`Drive API error: ${res.status}`);
  const data    = await res.json();
  return data.files || [];
}

/**
 * Recorre recursivamente las subcarpetas de ROOT_FOLDER_ID.
 * Archivos en la raíz → categoría "raiz".
 * Archivos en subcarpetas → categoría = ID limpio del nombre de carpeta.
 */
async function loadDriveFiles() {
  const children = await driveListChildren(ROOT_FOLDER_ID);

  const catMap   = {};   // catId → label
  const files    = [];

  for (const item of children) {
    if (item.mimeType === "application/vnd.google-apps.folder") {
      /* --- subcarpeta: explorar su contenido --- */
      const catId    = slugify(item.name);
      const catLabel = item.name;
      catMap[catId]  = catLabel;

      const subItems = await driveListChildren(item.id);
      for (const sub of subItems) {
        if (sub.mimeType !== "application/vnd.google-apps.folder") {
          files.push(buildFileEntry(sub, catId));
        }
      }
    } else {
      /* --- archivo en raíz --- */
      if (!catMap["raiz"]) catMap["raiz"] = "Otros Documentos";
      files.push(buildFileEntry(item, "raiz"));
    }
  }

  /* Ordena categorías: primero las subcarpetas (por nombre), luego raíz al final */
  const catIds = Object.keys(catMap).filter(id => id !== "raiz").sort();
  if (catMap["raiz"]) catIds.push("raiz");

  CATEGORIES = catIds.map(id => ({ id, label: catMap[id] }));
  NORMAS_DATA = files;
}

/** Convierte un item de Drive en el formato que usa la UI */
function buildFileEntry(item, catId) {
  const ext = item.name.split(".").pop().toLowerCase();

  // Drive devuelve miniaturas pequeñas (=s220). Sustituimos el parámetro de
  // tamaño por =s360 para obtener alta resolución desde el mismo CDN.
  let thumb = item.thumbnailLink || null;
  if (thumb) {
    thumb = thumb.replace(/=s\d+$/, "=s360");
    // Fallback: si no tiene el patrón =sNNN, añadirlo directamente
    if (!thumb.includes("=s360")) thumb += "=s360";
  }

  return {
    title    : item.name,
    cat      : catId,
    type     : ext,
    driveId  : item.id,
    mimeType : item.mimeType,
    thumbnail: thumb,
    size     : item.size ? formatMb(parseInt(item.size, 10)) : null,
  };
}

/** Formatea bytes a MB con 1 decimal */
function formatMb(bytes) {
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}

/** Genera un slug simple para usar como ID de categoría */
function slugify(str) {
  return str
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")  // quita tildes
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/* ────────────────────────────────────────────────────────
   URLs para Drive
   ──────────────────────────────────────────────────────── */
function driveViewUrl(id) {
  return `https://drive.google.com/file/d/${id}/view`;
}
function driveDownloadUrl(id) {
  return `https://drive.google.com/uc?export=download&id=${id}`;
}

/* ════════════════════════════════════════════════════════
   STATE & RENDER
   ════════════════════════════════════════════════════════ */

let state = { query: "", cat: "all", view: "grid" };

function escapeHtml(text) {
  if (!text) return "";
  const d = document.createElement("div");
  d.textContent = String(text);
  return d.innerHTML;
}

function render() {
  const root = document.getElementById("normas-root");
  const q    = state.query.toLowerCase().trim();

  const filtered = NORMAS_DATA.filter(n => {
    const matchCat = state.cat === "all" || n.cat === state.cat;
    const matchQ   = !q || n.title.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  document.getElementById("results-meta").textContent =
    `${filtered.length} archivo${filtered.length !== 1 ? "s" : ""} encontrado${filtered.length !== 1 ? "s" : ""}`;

  if (filtered.length === 0) {
    root.innerHTML = `<div class="empty-state">
      <i class="bx bx-info-circle"></i>
      <p>No se encontraron resultados${q ? ` para "<strong>${escapeHtml(q)}</strong>"` : "."}</p>
    </div>`;
    return;
  }

  /* Agrupa por categoría */
  const groups = {};
  filtered.forEach(n => {
    if (!groups[n.cat]) groups[n.cat] = [];
    groups[n.cat].push(n);
  });

  const activeCats = state.cat === "all"
    ? CATEGORIES.filter(c => groups[c.id])
    : CATEGORIES.filter(c => c.id === state.cat && groups[c.id]);

  let html = "";
  activeCats.forEach(cat => {
    const items = groups[cat.id] || [];
    html += `
      <div class="section-title">
        <h2>${escapeHtml(cat.label)}</h2>
        <span class="count">${items.length}</span>
      </div>
      <div class="${state.view === "grid" ? "books-grid" : "books-list"}">
        ${items.map(n => state.view === "grid" ? cardGrid(n) : cardList(n)).join("")}
      </div>`;
  });

  root.innerHTML = html;
}

/* ── Tarjeta cuadrícula ── */
function cardGrid(n) {
  const isPdf = n.mimeType === "application/pdf" ||
                n.mimeType.startsWith("application/vnd.google-apps");
  const iconClass = isPdf ? "bxs-file-pdf" : "bxs-file";

  const coverHtml = n.thumbnail
    ? `<img src="${n.thumbnail}" alt="${escapeHtml(n.title)}" class="cover-thumb" onerror="this.style.display='none'">`
    : `<i class="bx ${iconClass} no-cover"></i>`;

  return `
    <article class="book-card">
      <div class="book-cover">${coverHtml}</div>
      <div class="book-info">
        <p class="book-title">${escapeHtml(n.title)}</p>
      </div>
      <div class="book-actions">
        <a class="btn-view" href="${driveViewUrl(n.driveId)}" target="_blank" rel="noopener" title="Ver en Google Drive">
          <i class="bx bx-show"></i> Ver
        </a>
        <a class="btn-download" href="${driveDownloadUrl(n.driveId)}" target="_blank" rel="noopener" title="Descargar archivo">
          <i class="bx bx-cloud-download"></i>${n.size ? `<span class="file-size">${n.size}</span>` : ""}
        </a>
      </div>
    </article>`;
}

/* ── Fila de lista ── */
function cardList(n) {
  return `
    <div class="list-item">
      <i class="bx bxs-file-pdf list-icon pdf"></i>
      <span class="list-title">${escapeHtml(n.title)}</span>
      <div class="list-actions">
        <a class="btn-view list-view-btn" href="${driveViewUrl(n.driveId)}" target="_blank" rel="noopener" title="Ver">
          <i class="bx bx-show"></i> Ver
        </a>
        <a class="list-dl" href="${driveDownloadUrl(n.driveId)}" target="_blank" rel="noopener" title="Descargar">
          <i class="bx bx-cloud-download"></i>${n.size ? `<span class="file-size">${n.size}</span>` : ""}
        </a>
      </div>
    </div>`;
}

/* ── Sidebar ── */
function buildSidebar() {
  const sidebarList = document.getElementById("sidebar-list");

  /* Limpia items dinámicos anteriores */
  sidebarList
    .querySelectorAll('.sidebar-item:not([data-cat="all"])')
    .forEach(el => el.remove());

  CATEGORIES.forEach(cat => {
    const count = NORMAS_DATA.filter(n => n.cat === cat.id).length;
    const li    = document.createElement("li");
    li.className    = "sidebar-item";
    li.dataset.cat  = cat.id;
    li.innerHTML    = `<span>${escapeHtml(cat.label)}</span><span class="cat-count">${count}</span>`;
    sidebarList.appendChild(li);
  });

  document.getElementById("count-all").textContent = NORMAS_DATA.length;
}

/* ════════════════════════════════════════════════════════
   INIT
   ════════════════════════════════════════════════════════ */

async function init() {
  const root        = document.getElementById("normas-root");
  const badge       = document.getElementById("refresh-badge");
  const sidebarList = document.getElementById("sidebar-list");

  /* Muestra estado de carga */
  root.innerHTML = `<div class="loading-state">
    <i class="bx bx-loader-alt bx-spin"></i>
    Cargando normas desde Google Drive…
  </div>`;

  try {
    await loadDriveFiles();
  } catch (err) {
    root.innerHTML = `<div class="empty-state">
      <i class="bx bx-error-circle"></i>
      <p>Error al cargar los archivos: ${escapeHtml(err.message)}</p>
    </div>`;
    console.error(err);
    return;
  }

  /* ── Eventos de sidebar ── */
  sidebarList.addEventListener("click", e => {
    const item = e.target.closest(".sidebar-item");
    if (!item) return;
    sidebarList.querySelectorAll(".sidebar-item").forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    state.cat = item.dataset.cat;
    render();
  });

  document.getElementById("cat-search").addEventListener("input", e => {
    const q = e.target.value.trim().toLowerCase();
    sidebarList.querySelectorAll(".sidebar-item").forEach(item => {
      const label = item.querySelector("span").textContent.toLowerCase();
      item.style.display = label.includes(q) ? "" : "none";
    });
  });

  /* ── Búsqueda principal ── */
  document.getElementById("search").addEventListener("input", e => {
    state.query = e.target.value;
    render();
  });

  /* ── Vistas ── */
  document.getElementById("btn-grid").addEventListener("click", () => {
    state.view = "grid";
    document.getElementById("btn-grid").classList.add("active");
    document.getElementById("btn-list").classList.remove("active");
    render();
  });
  document.getElementById("btn-list").addEventListener("click", () => {
    state.view = "list";
    document.getElementById("btn-list").classList.add("active");
    document.getElementById("btn-grid").classList.remove("active");
    render();
  });

  /* ── Toggle sidebar ── */
  document.getElementById("btn-sidebar").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("open");
  });

  buildSidebar();
  render();

  /* Badge con total de archivos */
  if (NORMAS_DATA.length > 0) {
    badge.textContent = `${NORMAS_DATA.length} archivos`;
    badge.style.display = "";
  } else {
    badge.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", init);
