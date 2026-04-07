/* ════════════════════════════════════════════════════════
   SOFTWARE DE INGENIERÍA — Google Drive API v3
   ════════════════════════════════════════════════════════ */

const API_KEY = "AIzaSyAfDZfDU0o_geHnvartz3OkVqb42lCd1DE";
const ROOT_FOLDER_ID = "1iVc002qxxEPm5u-5M7sjC_O80ZHrvPIx";

/* Datos dinámicos cargados desde Drive */
let NORMAS_DATA = []; // { title, cat, type, driveId, mimeType, thumbnail, url, description, usage, license }
let CATEGORIES = []; // { id, label }  — una por subcarpeta

/* --- Software de Ingeniería (Estático) --- */
const STATIC_SOFTWARE = [
  {
    title: "FreeCAD",
    cat: "software",
    type: "web",
    url: "https://www.freecad.org/",
    usage: "CAD 3D paramétrico",
    license: "Open-source",
    description:
      "Modelador 3D paramétrico de código abierto para diseñar objetos reales de cualquier tamaño.",
    thumbnail: null,
  },
  {
    title: "LibreCAD",
    cat: "software",
    type: "web",
    url: "https://librecad.org/",
    usage: "Planos 2D",
    license: "Open-source",
    description:
      "Aplicación CAD 2D completa y de código abierto para dibujo técnico y diseño industrial.",
    thumbnail: null,
  },
  {
    title: "BIM Vision",
    cat: "software",
    type: "web",
    url: "https://bimvision.eu/",
    usage: "Visualización BIM",
    license: "Gratuito",
    description:
      "Visor de modelos IFC gratuito que permite visualizar modelos BIM creados en diversos sistemas.",
    thumbnail: null,
  },
  {
    title: "Blender",
    cat: "software",
    type: "web",
    url: "https://www.blender.org/",
    usage: "Renderizado y visualización",
    license: "Open-source",
    description:
      "Suite de creación 3D gratuita y de código abierto. Soporta la totalidad del flujo de trabajo 3D.",
    thumbnail: null,
  },
  {
    title: "Ftool",
    cat: "software",
    type: "web",
    url: "https://portal.ftool.com.br/download/",
    usage: "Análisis estructural",
    license: "Gratuito",
    description:
      "Programa simple para el análisis estructural educativo de pórticos planos bajo diversas cargas.",
    thumbnail: null,
  },
  {
    title: "OpenSees",
    cat: "software",
    type: "web",
    url: "https://opensees.berkeley.edu/",
    usage: "Análisis sísmico avanzado",
    license: "Open-source",
    description:
      "Framework interactivo para simulación por elementos finitos en ingeniería sísmica.",
    thumbnail: null,
  },
  {
    title: "HEC-RAS",
    cat: "software",
    type: "web",
    url: "https://www.hec.usace.army.mil/software/hec-ras/",
    usage: "Hidráulica fluvial",
    license: "Gratuito",
    description:
      "Software para realizar modelaciones hidráulicas unidimensionales y bidimensionales de cauces naturales.",
    thumbnail: null,
  },
  {
    title: "QGIS",
    cat: "software",
    type: "web",
    url: "https://www.qgis.org/",
    usage: "GIS y cartografía",
    license: "Open-source",
    description:
      "Sistema de Información Geográfica libre y de código abierto para manejar datos geoespaciales.",
    thumbnail: null,
  },
  {
    title: "ProjectLibre",
    cat: "software",
    type: "web",
    url: "https://www.projectlibre.com/",
    usage: "Gestión de proyectos",
    license: "Open-source",
    description:
      "Herramienta de código abierto para la gestión de proyectos, alternativa a Microsoft Project.",
    thumbnail: null,
  },
  {
    title: "MatrixPRO 3D",
    cat: "software",
    type: "web",
    url: "https://marcelopardo.com/matrixpro3d/",
    usage: "Análisis estructural 3D",
    license: "Gratuito",
    description:
      "Software para el análisis matricial de estructuras 3D, con soporte para diversas secciones y casos de carga.",
    thumbnail: null,
  },
  {
    title: "Frame3DD",
    cat: "software",
    type: "web",
    url: "https://frame3dd.sourceforge.net/",
    usage: "Análisis estructural 3D",
    license: "Open-source",
    description:
      "Análisis estático y dinámico de pórticos y cerchas en 3D con rigidez elástica y geométrica.",
    thumbnail: null,
  },
  {
    title: "CALFEM",
    cat: "software",
    type: "web",
    url: "https://github.com/CALFEM/calfem-matlab",
    usage: "Análisis FEM (MATLAB)",
    license: "Open-source",
    description:
      "Toolbox educativo para el aprendizaje y aplicación del Método de los Elementos Finitos en MATLAB/GNU Octave.",
    thumbnail: null,
  },
  {
    title: "EPANET",
    cat: "software",
    type: "web",
    url: "https://www.epa.gov/water-research/epanet",
    usage: "Redes de agua potable",
    license: "Gratuito",
    description:
      "Simulación del comportamiento hidráulico y de la calidad del agua en redes de tuberías a presión.",
    thumbnail: null,
  },
  {
    title: "SWMM",
    cat: "software",
    type: "web",
    url: "https://www.epa.gov/water-research/storm-water-management-model-swmm",
    usage: "Drenaje urbano y pluvial",
    license: "Gratuito",
    description:
      "Modelo dinámico de simulación de escorrentía pluvial y calidad del agua en sistemas de alcantarillado.",
    thumbnail: null,
  },
  {
    title: "Iber",
    cat: "software",
    type: "web",
    url: "https://www.iberaula.es/",
    usage: "Hidráulica bidimensional",
    license: "Gratuito",
    description:
      "Modelo numérico bidimensional para la simulación del flujo en lámina libre en ríos y estuarios.",
    thumbnail: null,
  },
  {
    title: "Optum G2",
    cat: "software",
    type: "web",
    url: "https://optumce.com/optum-g2/",
    usage: "Geotecnia y FEM",
    license: "Gratuito",
    description:
      "Software de última generación para el análisis de estabilidad y deformación en geotecnia mediante elementos finitos.",
    thumbnail: null,
  },
  {
    title: "SAGA GIS",
    cat: "software",
    type: "web",
    url: "https://sagagis.com/",
    usage: "GIS y análisis geocientífico",
    license: "Open-source",
    description:
      "Sistema para análisis geocientíficos automatizados con herramientas avanzadas de procesamiento de datos espaciales.",
    thumbnail: null,
  },
  {
    title: "GanttProject",
    cat: "software",
    type: "web",
    url: "https://www.ganttproject.biz/",
    usage: "Gestión de proyectos",
    license: "Open-source",
    description:
      "Herramienta gratuita de gestión de proyectos que permite crear diagramas de Gantt, asignar recursos y generar diagramas PERT.",
    thumbnail: null,
  },
];

/* ────────────────────────────────────────────────────────
   GOOGLE DRIVE — carga recursiva
   ──────────────────────────────────────────────────────── */

/**
 * Lista los archivos/carpetas de un folder de Drive.
 * @param {string} folderId
 * @returns {Promise<Array>}  array de items de la API
 */
async function driveListChildren(folderId) {
  const fields = "files(id,name,mimeType,thumbnailLink,size)";
  const query = encodeURIComponent(
    `'${folderId}' in parents and trashed=false`,
  );
  const url = `https://www.googleapis.com/drive/v3/files?q=${query}&key=${API_KEY}&fields=${fields}&pageSize=1000`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Drive API error: ${res.status}`);
  const data = await res.json();
  return data.files || [];
}

/**
 * Recorre recursivamente las subcarpetas de ROOT_FOLDER_ID.
 * Archivos en la raíz → categoría "raiz".
 * Archivos en subcarpetas → categoría = slug del nombre de carpeta.
 */
async function loadDriveFiles() {
  const children = await driveListChildren(ROOT_FOLDER_ID);

  const catMap = { software: "Software" }; // catId → label (pre-filled with static software cat)
  const files = [...STATIC_SOFTWARE];

  for (const item of children) {
    if (item.mimeType === "application/vnd.google-apps.folder") {
      /* --- subcarpeta: explorar su contenido --- */
      const catId = slugify(item.name);
      const catLabel = item.name;
      catMap[catId] = catLabel;

      const subItems = await driveListChildren(item.id);
      for (const sub of subItems) {
        if (sub.mimeType !== "application/vnd.google-apps.folder") {
          files.push(buildFileEntry(sub, catId));
        }
      }
    } else {
      /* --- archivo en raíz --- */
      if (!catMap["raiz"]) catMap["raiz"] = "Manuales";
      files.push(buildFileEntry(item, "raiz"));
    }
  }

  /* Ordena categorías: primero "Software", luego las subcarpetas, luego raíz al final */
  const catIds = [
    "software",
    ...Object.keys(catMap)
      .filter((id) => id !== "raiz" && id !== "software")
      .sort(),
  ];
  if (catMap["raiz"]) catIds.push("raiz");

  CATEGORIES = catIds.map((id) => ({ id, label: catMap[id] }));
  NORMAS_DATA = files;
}

/** Convierte un item de Drive en el formato que usa la UI */
function buildFileEntry(item, catId) {
  const ext = item.name.split(".").pop().toLowerCase();

  let thumb = item.thumbnailLink || null;
  if (thumb) {
    thumb = thumb.replace(/=s\d+$/, "=s360");
    if (!thumb.includes("=s360")) thumb += "=s360";
  }

  return {
    title: item.name,
    cat: catId,
    type: ext,
    driveId: item.id,
    mimeType: item.mimeType,
    thumbnail: thumb,
    size: item.size ? formatMb(parseInt(item.size, 10)) : null,
  };
}

/** Formatea bytes a KB/MB legibles */
function formatMb(bytes) {
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}

/** Genera un slug simple para usar como ID de categoría */
function slugify(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
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
  const q = state.query.toLowerCase().trim();

  const filtered = NORMAS_DATA.filter((n) => {
    const matchCat = state.cat === "all" || n.cat === state.cat;
    const matchQ = !q || n.title.toLowerCase().includes(q);
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
  filtered.forEach((n) => {
    if (!groups[n.cat]) groups[n.cat] = [];
    groups[n.cat].push(n);
  });

  const activeCats =
    state.cat === "all"
      ? CATEGORIES.filter((c) => groups[c.id])
      : CATEGORIES.filter((c) => c.id === state.cat && groups[c.id]);

  let html = "";
  activeCats.forEach((cat) => {
    const items = groups[cat.id] || [];
    html += `
      <div class="section-title">
        <h2>${escapeHtml(cat.label)}</h2>
        <span class="count">${items.length}</span>
      </div>
      <div class="${state.view === "grid" ? "books-grid" : "books-list"}">
        ${items.map((n) => (state.view === "grid" ? cardGrid(n) : cardList(n))).join("")}
      </div>`;
  });

  root.innerHTML = html;
}

/* ── Tarjeta cuadrícula ── */
function cardGrid(n) {
  const isWeb = n.type === "web";
  const isApp =
    n.mimeType &&
    (n.mimeType.includes("zip") ||
      n.mimeType.includes("rar") ||
      n.mimeType.includes("exe") ||
      n.mimeType.includes("octet-stream"));

  const iconClass = isWeb ? "bx-world" : isApp ? "bxs-archive" : "bxs-file";

  const coverHtml = n.thumbnail
    ? `<img src="${n.thumbnail}" alt="${escapeHtml(n.title)}" class="cover-thumb" onerror="this.style.display='none'">`
    : `<i class="bx ${iconClass} no-cover"></i>`;

  const viewUrl = isWeb ? n.url : driveViewUrl(n.driveId);
  const dlUrl = isWeb ? n.url : driveDownloadUrl(n.driveId);

  const licClass =
    n.license && n.license.toLowerCase().includes("open")
      ? "sw-lic-open"
      : "sw-lic-free";

  return `
    <article class="book-card ${isWeb ? "software-card" : ""}">
      <div class="book-cover">${coverHtml}</div>
      <div class="book-info">
        <p class="book-title">${escapeHtml(n.title)}</p>
        ${n.usage ? `<p class="sw-usage">${escapeHtml(n.usage)}</p>` : ""}
        ${n.license ? `<p class="sw-license"><span class="${licClass}">${escapeHtml(n.license)}</span></p>` : ""}
        ${n.description ? `<p class="sw-desc">${escapeHtml(n.description)}</p>` : ""}
      </div>
      <div class="book-actions">
        <a class="btn-view" href="${viewUrl}" target="_blank" rel="noopener" title="${isWeb ? "Página oficial" : "Ver en Google Drive"}">
          <i class="bx ${isWeb ? "bx-link-external" : "bx-show"}"></i> ${isWeb ? "Sitio Oficial" : "Ver"}
        </a>
        ${
          !isWeb
            ? `
        <a class="btn-download" href="${dlUrl}" target="_blank" rel="noopener" title="Descargar archivo">
          <i class="bx bx-cloud-download"></i>${n.size ? `<span class="file-size">${n.size}</span>` : ""}
        </a>`
            : ""
        }
      </div>
    </article>`;
}

/* ── Fila de lista ── */
function cardList(n) {
  const isWeb = n.type === "web";
  const viewUrl = isWeb ? n.url : driveViewUrl(n.driveId);
  const dlUrl = isWeb ? n.url : driveDownloadUrl(n.driveId);

  return `
    <div class="list-item ${isWeb ? "software-list-item" : ""}">
      <i class="bx ${isWeb ? "bx-world" : "bxs-archive"} list-icon"></i>
      <div class="list-content" style="flex:1">
        <span class="list-title">${escapeHtml(n.title)}</span>
        ${n.usage ? `<span class="list-usage"> — ${escapeHtml(n.usage)}</span>` : ""}
      </div>
      <div class="list-actions">
        <a class="btn-view list-view-btn" href="${viewUrl}" target="_blank" rel="noopener" title="${isWeb ? "Visitar sitio" : "Ver"}">
          <i class="bx ${isWeb ? "bx-link-external" : "bx-show"}"></i> ${isWeb ? "Sitio" : "Ver"}
        </a>
        ${
          !isWeb
            ? `
        <a class="list-dl" href="${dlUrl}" target="_blank" rel="noopener" title="Descargar">
          <i class="bx bx-cloud-download"></i>${n.size ? `<span class="file-size">${n.size}</span>` : ""}
        </a>`
            : ""
        }
      </div>
    </div>`;
}

/* ── Sidebar ── */
function buildSidebar() {
  const sidebarList = document.getElementById("sidebar-list");

  sidebarList
    .querySelectorAll('.sidebar-item:not([data-cat="all"])')
    .forEach((el) => el.remove());

  CATEGORIES.forEach((cat) => {
    const count = NORMAS_DATA.filter((n) => n.cat === cat.id).length;
    const li = document.createElement("li");
    li.className = "sidebar-item";
    li.dataset.cat = cat.id;
    li.innerHTML = `<span>📂 ${escapeHtml(cat.label)}</span><span class="cat-count">${count}</span>`;
    sidebarList.appendChild(li);
  });

  document.getElementById("count-all").textContent = NORMAS_DATA.length;
}

/* ════════════════════════════════════════════════════════
   INIT
   ════════════════════════════════════════════════════════ */

async function init() {
  const root = document.getElementById("normas-root");
  const badge = document.getElementById("refresh-badge");
  const sidebarList = document.getElementById("sidebar-list");

  root.innerHTML = `<div class="loading-state">
    <i class="bx bx-loader-alt bx-spin"></i>
    Cargando software desde Google Drive…
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
  sidebarList.addEventListener("click", (e) => {
    const item = e.target.closest(".sidebar-item");
    if (!item) return;
    sidebarList
      .querySelectorAll(".sidebar-item")
      .forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
    state.cat = item.dataset.cat;
    render();
  });

  document.getElementById("cat-search").addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    sidebarList.querySelectorAll(".sidebar-item").forEach((item) => {
      const label = item.querySelector("span").textContent.toLowerCase();
      item.style.display = label.includes(q) ? "" : "none";
    });
  });

  /* ── Búsqueda principal ── */
  document.getElementById("search").addEventListener("input", (e) => {
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

  // Toggle sidebar móvil y overlay
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const closeBtn = document.getElementById("close-sidebar");

  const toggleSidebar = () => {
    sidebar.classList.toggle("open");
    overlay?.classList.toggle("active");
  };

  document.getElementById("btn-sidebar").addEventListener("click", toggleSidebar);
  overlay?.addEventListener("click", toggleSidebar);
  closeBtn?.addEventListener("click", toggleSidebar);

  // También cerrar al seleccionar categoría (en móvil)
  sidebarList.addEventListener("click", (e) => {
    if (window.innerWidth <= 992 && e.target.closest(".sidebar-item")) {
      sidebar.classList.remove("open");
      overlay?.classList.remove("active");
    }
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
