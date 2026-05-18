/* ════════════════════════════════════════════════════════
   CONFIGURACIÓN — Google Sheets API
   ════════════════════════════════════════════════════════ */
const SPREADSHEET_ID = "1CRCyHWTi9uQSXdyjk1YL0G24Ffl92TOPhL6bz7_v9A0";
const API_KEY = "AIzaSyBauTLbfwaLdjOgLPHDPbD3GI1QpDXTeN8";
const SHEET_NAME = "Sheet1";
const SHEET_RANGE = "A:H"; // columnas que usa la hoja
const REFRESH_INTERVAL = 5 * 60 * 1000; // 5 minutos

/* ════════════════════════════════════════════════════════
   MAPEO de columnas de la hoja → campos internos
   Ajusta los nombres exactos de los encabezados de tu hoja.
   La función normalize() los convierte a minúsculas y
   compara con y sin guiones bajos, así que son tolerantes.
   ════════════════════════════════════════════════════════ */
function getField(row, ...keys) {
  for (const k of keys) {
    if (row[k] !== undefined && row[k] !== "") return row[k];
  }
  return "";
}

/* Convierte una fila cruda (objeto con encabezados como claves) en
   el objeto Book que usa el render.
   Los encabezados de la hoja son (ya en minúsculas tras el .toLowerCase()):
   "ruta de la carpeta" | "id categoría" | "nombre del archivo" |
   "id del archivo"     | "tipo de archivo" | "url del archivo"  |
   "tamaño en mb"       | "descarga directa"
*/
function rowToBook(row) {
  const title = getField(row, "nombre del archivo") || "Sin nombre";
  const cat = getField(row, "id categoría") || "sin-categoria";
  const size = getField(row, "tamaño en mb") || "";
  const fileId = getField(row, "id del archivo");
  const dlUrl = getField(row, "descarga directa");
  const viewUrl = getField(row, "url del archivo");
  const imgUrl = getField(row, "imagen", "img", "portada");
  const folder = getField(row, "ruta de la carpeta") || "Raíz";
  const tipo = getField(row, "tipo de archivo") || "pdf";

  // Construir URLs de Drive a partir del ID si no vienen completas
  const driveView = viewUrl || (fileId ? `https://drive.google.com/file/d/${fileId}/view?usp=drivesdk` : "#");
  const driveDl = dlUrl || (fileId ? `https://drive.google.com/uc?export=download&id=${fileId}` : "#");
  const img = imgUrl || (fileId ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w400` : "");

  return { title, cat, size: size ? `${size}` : "", type: tipo.toLowerCase().includes("zip") ? "zip" : "pdf", view: driveView, dl: driveDl, img };
}

/* ════════════════════════════════════════════════════════
   STATE
   ════════════════════════════════════════════════════════ */
const CATEGORIES = [
  { id: "algebra1", label: "Álgebra 1" },
  { id: "calculo1", label: "Cálculo 1" },
  { id: "fisca1", label: "Física 1" },
  { id: "lab-fisica1", label: "Laboratorio de Física 1" },
  { id: "dibujo-tecnico", label: "Dibujo Técnico" },
  { id: "quimica", label: "Química" },
  { id: "lab-quimica", label: "Laboratorio de Química Básica" },
  { id: "calculo2", label: "Cálculo 2" },
  { id: "algebra2", label: "Álgebra 2" },
  { id: "fisica2", label: "Física 2" },
  { id: "lab-fisica2", label: "Laboratorio de Física 2" },
  { id: "estructuras-isostaticas1", label: "Estructuras Isostáticas I" },
  { id: "diseno-asistido", label: "Diseño Asistido por Computadora" },
  { id: "ecuaciones-diferenciales", label: "Ecuaciones Diferenciales" },
  { id: "estructuras-isostaticas2", label: "Estructuras Isostáticas II" },
  { id: "analisis-vectorial", label: "Análisis Vectorial y Tensional" },
  { id: "topografia1", label: "Topografía I" },
  { id: "informatica1", label: "Informática I" },
  { id: "geologia", label: "Geología" },
  { id: "metodologia-investigacion", label: "Metodología de la Investigación" },
  { id: "hidraulica1", label: "Hidráulica I" },
  { id: "topografia2", label: "Topografía II" },
  { id: "mecanica-suelos1", label: "Mecánica de Suelos I" },
  { id: "lab-mecanica-suelos1", label: "Laboratorio de Mecánica de Suelos I" },
  { id: "resistencia-materiales1", label: "Resistencia de Materiales I" },
  { id: "estadistica", label: "Estadística" },
  { id: "materiales-construccion", label: "Materiales de Construcción" },
  { id: "mecanica-suelos2", label: "Mecánica de Suelos II" },
  { id: "lab-mecanica-suelos2", label: "Laboratorio de Mecánica de Suelos II" },
  { id: "resistencia-materiales2", label: "Resistencia de Materiales II" },
  { id: "hidraulica2", label: "Hidráulica II" },
  { id: "geodesia-sig", label: "Geodesia y SIG" },
  { id: "metodos-numericos", label: "Métodos Numéricos" },
  { id: "tecnologia-hormigon", label: "Tecnología del Hormigón" },
  { id: "carreteras1", label: "Carreteras I" },
  { id: "estructuras-hiperestaticas", label: "Estructuras Hiperestáticas" },
  { id: "sanitaria1", label: "Sanitaria I" },
  { id: "hidrologia", label: "Hidrología" },
  { id: "hormigon-armado1", label: "Hormigón Armado I" },
  { id: "arquitectura-urbana", label: "Arquitectura y Planificación Urbana" },
  { id: "preparacion-proyectos", label: "Preparación y Evaluación de Proyectos" },
  { id: "fundaciones", label: "Fundaciones" },
  { id: "hormigon-armado2", label: "Hormigón Armado II" },
  { id: "estructuras-metalicas", label: "Estructuras Metálicas" },
  { id: "estructuras-madera", label: "Estructuras de Madera" },
  { id: "sanitaria2", label: "Sanitaria II" },
  { id: "maquinaria-construccion", label: "Maquinaria y Equipo de Construcción" },
  { id: "ingenieria-trafico", label: "Ingeniería de Tráfico" },
  { id: "carreteras2", label: "Carreteras II" },
  { id: "sistemas-ingenieria-civil", label: "Sistemas de Ingeniería Civil" },
  { id: "instalaciones-edificios", label: "Instalaciones de Edificios" },
  { id: "impacto-ambiental", label: "Impacto Ambiental en Obras Civiles" },
  { id: "hormigon-presforzado", label: "Hormigón Presforzado" },
  { id: "geotecnia-obras-viales", label: "Geotecnia en Obras Viales" },
  { id: "carreteras3", label: "Carreteras III" },
  { id: "lab-asfaltos", label: "Laboratorio de Asfaltos" },
  { id: "grado1", label: "Grado I" },
  { id: "ingenieria-legal", label: "Ingeniería Legal" },
  { id: "direccion-obras", label: "Dirección de Obras" },
  { id: "puentes", label: "Puentes" },
  { id: "aeropuertos", label: "Aeropuertos" },
  { id: "ferrocarriles", label: "Ferrocarriles" },
  { id: "modelacion-ingenieria-vial", label: "Modelación en Ingeniería Vial" },
  { id: "grado2", label: "Grado II" },
];

// Lookup rápido id → label (para títulos de sección)
const CAT_LABEL = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.label]));

let BOOKS = []; // array cargado desde Sheets
let lastUpdate = null;

let state = {
  query: "",
  cat: "all",
  view: "grid", // 'grid' | 'list'
  sort: "default",
  page: 1,
  pageSize: 40,
};

/* ════════════════════════════════════════════════════════
   FETCH — Google Sheets API v4
   ════════════════════════════════════════════════════════ */
async function fetchBooks() {
  try {
    const range = encodeURIComponent(`${SHEET_NAME}!${SHEET_RANGE}`);
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}?key=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error?.message || `HTTP ${response.status}`);
    }

    const data = await response.json();

    if (!data.values || data.values.length < 2) {
      throw new Error("La hoja está vacía o no tiene datos.");
    }

    // Primera fila = encabezados; normalizar a minúsculas
    const headers = data.values[0].map((h) => h.trim().toLowerCase());

    const books = [];
    for (let i = 1; i < data.values.length; i++) {
      const rawRow = {};
      headers.forEach((h, idx) => {
        rawRow[h] = (data.values[i][idx] || "").trim();
      });

      // Saltar filas sin nombre de archivo
      if (!rawRow["nombre del archivo"]) continue;

      books.push(rowToBook(rawRow));
    }

    BOOKS = books;
    lastUpdate = new Date();

    // Reconstruir sidebar con las categorías reales
    buildSidebar();
    render();

    // Actualizar badge de última carga
    document.getElementById("refresh-badge").textContent = `Actualizado: ${lastUpdate.toLocaleString("es-ES")}`;
  } catch (error) {
    console.error("Error fetching Google Sheets:", error);
    showError(error.message);
  }
}

/* ════════════════════════════════════════════════════════
   SIDEBAR — construido dinámicamente desde los datos
   ════════════════════════════════════════════════════════ */
function buildSidebar() {
  const sidebarList = document.getElementById("sidebar-list");

  // Limpiar ítems dinámicos previos (conservar el "Todo")
  sidebarList.querySelectorAll('.sidebar-item:not([data-cat="all"])').forEach((el) => el.remove());

  CATEGORIES.forEach((cat) => {
    const count = BOOKS.filter((bk) => bk.cat === cat.id).length;
    const li = document.createElement("li");
    li.className = "sidebar-item";
    li.dataset.cat = cat.id;
    li.innerHTML = `<span>📂 ${escapeHtml(cat.label)}</span><span class="cat-count">${count}</span>`;
    sidebarList.appendChild(li);
  });

  // Actualizar conteo total
  document.getElementById("count-all").textContent = BOOKS.length;
}

/* ════════════════════════════════════════════════════════
   RENDER
   ════════════════════════════════════════════════════════ */
function render() {
  const root = document.getElementById("library-root");
  const q = state.query.toLowerCase().trim();

  // Filtrar
  const filtered = BOOKS.filter((bk) => {
    const matchCat = state.cat === "all" || bk.cat === state.cat;
    const matchQ = !q || bk.title.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  // Ordenar
  if (state.sort === "title") filtered.sort((a, b) => a.title.localeCompare(b.title, "es"));
  if (state.sort === "size") filtered.sort((a, b) => parseFloat(a.size) - parseFloat(b.size));

  // Meta
  document.getElementById("results-meta").textContent =
    `${filtered.length} archivo${filtered.length !== 1 ? "s" : ""} encontrado${filtered.length !== 1 ? "s" : ""}`;

  if (filtered.length === 0) {
    root.innerHTML = `<div class="empty-state">
      <i class="bx bx-book-open"></i>
      <p>No se encontraron archivos${q ? ` para "<strong>${escapeHtml(q)}</strong>"` : "."}</p>
    </div>`;
    return;
  }

  // ── Paginación solo para "Todos" ──────────────────
  const usePagination = state.cat === "all" && !q;

  // Ordenar por orden de CATEGORIES (y alfabéticamente dentro de cada una) antes de paginar
  if (usePagination) {
    const catOrder = Object.fromEntries(CATEGORIES.map((c, i) => [c.id, i]));
    filtered.sort((a, b) => {
      const orderDiff = (catOrder[a.cat] ?? 999) - (catOrder[b.cat] ?? 999);
      if (orderDiff !== 0) return orderDiff;
      return a.title.localeCompare(b.title, "es");
    });
  }

  const totalPages = usePagination ? Math.ceil(filtered.length / state.pageSize) : 1;

  // Clamp page
  if (state.page < 1) state.page = 1;
  if (state.page > totalPages) state.page = totalPages;

  // Items to render on this page (flat slice when paginating)
  const pageItems = usePagination
    ? filtered.slice((state.page - 1) * state.pageSize, state.page * state.pageSize)
    : filtered;

  // Agrupar por categoría
  const groups = {};
  pageItems.forEach((bk) => {
    if (!groups[bk.cat]) groups[bk.cat] = [];
    groups[bk.cat].push(bk);
  });

  // Ordenar libros dentro de cada categoría alfabéticamente
  Object.keys(groups).forEach((cat) => {
    groups[cat].sort((a, b) => a.title.localeCompare(b.title, "es"));
  });

  const activeCats = state.cat === "all" ? CATEGORIES.filter((c) => groups[c.id]) : CATEGORIES.filter((c) => c.id === state.cat && groups[c.id]);

  let html = "";
  activeCats.forEach((cat) => {
    const books = groups[cat.id] || [];
    if (!books.length) return;
    html += `
      <div class="section-title">
        <h2>${escapeHtml(cat.label)}</h2>
        <span class="count">${books.length}</span>
      </div>
      <div class="${state.view === "grid" ? "books-grid" : "books-list"}">
        ${books.map((bk) => (state.view === "grid" ? cardGrid(bk) : cardList(bk))).join("")}
      </div>`;
  });

  // ── Pagination controls ───────────────────────────
  if (usePagination && totalPages > 1) {
    html += buildPaginationHtml(totalPages);
  }

  root.innerHTML = html;

  // Wire up pagination buttons
  if (usePagination && totalPages > 1) {
    bindPaginationEvents();
  }
}

/* ════════════════════════════════════════════════════════
   PAGINATION HELPERS
   ════════════════════════════════════════════════════════ */
function buildPaginationHtml(totalPages) {
  const page = state.page;
  const start = (page - 1) * state.pageSize + 1;
  const end = Math.min(page * state.pageSize, BOOKS.length);

  // Generate page numbers with ellipsis
  const pageNumbers = generatePageNumbers(page, totalPages);

  return `
    <div class="pagination" role="navigation" aria-label="Paginación de biblioteca">
      <button class="page-btn page-prev" data-page="prev" ${page <= 1 ? 'disabled' : ''}>
        <i class="bx bx-chevron-left"></i> Anterior
      </button>
      <div class="page-numbers">
        ${pageNumbers.map(p =>
          p === '...'
            ? `<span class="page-ellipsis">…</span>`
            : `<button class="page-num ${p === page ? 'active' : ''}" data-page="${p}">${p}</button>`
        ).join('')}
      </div>
      <button class="page-btn page-next" data-page="next" ${page >= totalPages ? 'disabled' : ''}>
        Siguiente <i class="bx bx-chevron-right"></i>
      </button>
    </div>
    <div class="page-info">
      Mostrando ${start}–${end} de ${BOOKS.length} archivos · Página ${page} de ${totalPages}
    </div>`;
}

function generatePageNumbers(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages = [];
  pages.push(1);

  if (current > 3) pages.push('...');

  const rangeStart = Math.max(2, current - 1);
  const rangeEnd = Math.min(total - 1, current + 1);
  for (let i = rangeStart; i <= rangeEnd; i++) pages.push(i);

  if (current < total - 2) pages.push('...');

  pages.push(total);
  return pages;
}

function bindPaginationEvents() {
  document.querySelectorAll('.pagination [data-page]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const val = btn.dataset.page;
      if (val === 'prev') state.page--;
      else if (val === 'next') state.page++;
      else state.page = parseInt(val, 10);
      render();
      // Scroll to top of content
      document.getElementById('library-root').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function cardGrid(bk) {
  const icon = bk.type === "zip" ? "bxs-file-archive" : "bxs-file-pdf";
  return `
    <article class="book-card">
      <div class="book-viewer" title="${escapeHtml(bk.title)}">
        <div class="book-spine">${escapeHtml(bk.title)}</div>
        <div class="book-cover">
          <img loading="lazy" src="${escapeHtml(bk.img)}" alt="${escapeHtml(bk.title)}"
                onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
          <span class="no-cover" style="display:none"><i class="bx ${icon}"></i></span>
          <div class="edge-reflection"></div> 
        </div>
        <div class="book-shadow"></div>
      </div>

      <div class="book-footer">
        <div class="book-info">
          <a class="book-title" href="${escapeHtml(bk.view)}" target="_blank" rel="noopener" title="${escapeHtml(bk.title)}">${escapeHtml(bk.title)}</a>
        </div>
        <div class="book-actions">
          <a class="btn-view" href="${escapeHtml(bk.view)}" target="_blank" rel="noopener" title="Ver libro">
            <i class="bx bx-expand-alt"></i> Ver
          </a>
          <a class="btn-download" href="${escapeHtml(bk.dl)}" download title="Descargar libro">
            <i class="bx bx-cloud-download"></i>
            ${bk.size ? `<span class="size">${escapeHtml(bk.size)} Mb</span>` : ""}
          </a>
        </div>
      </div>
    </article>`;
}

function cardList(bk) {
  const isPdf = bk.type === "pdf";
  return `
    <div class="list-item">
      <i class="bx ${isPdf ? "bxs-file-pdf" : "bxs-file-archive"} list-icon ${bk.type}"></i>
      <a class="list-title" href="${escapeHtml(bk.view)}" target="_blank" rel="noopener">${escapeHtml(bk.title)}</a>
      <span class="list-size">${escapeHtml(bk.size)}${bk.size ? " Mb" : ""}</span>
      <a class="list-dl" href="${escapeHtml(bk.dl)}" download title="Descargar libro">
        <i class="bx bx-cloud-download"></i> Descargar
      </a>
    </div>`;
}

/* ════════════════════════════════════════════════════════
   ERROR STATE
   ════════════════════════════════════════════════════════ */
function showError(msg) {
  const root = document.getElementById("library-root");
  root.innerHTML = `
    <div class="error-state">
      <i class="bx bx-error-circle"></i>
      <p><strong>Error al cargar los datos</strong><br><small>${escapeHtml(msg)}</small></p>
      <button onclick="fetchBooks()"><i class="bx bx-refresh"></i> Reintentar</button>
    </div>`;
}

/* ════════════════════════════════════════════════════════
   UTIL
   ════════════════════════════════════════════════════════ */
function escapeHtml(text) {
  if (!text) return "";
  const d = document.createElement("div");
  d.textContent = String(text);
  return d.innerHTML;
}

/* ════════════════════════════════════════════════════════
   INIT
   ════════════════════════════════════════════════════════ */
function init() {
  const sidebarList = document.getElementById("sidebar-list");

  // Sidebar: delegación de eventos (funciona también para ítems añadidos dinámicamente)
  sidebarList.addEventListener("click", (e) => {
    const item = e.target.closest(".sidebar-item");
    if (!item) return;
    sidebarList.querySelectorAll(".sidebar-item").forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
    state.cat = item.dataset.cat;
    state.page = 1;
    render();
  });

  // Búsqueda en categorías del sidebar
  document.getElementById("cat-search").addEventListener("input", (e) => {
    const query = e.target.value.trim().toLowerCase();
    sidebarList.querySelectorAll(".sidebar-item").forEach((item) => {
      const label = item.querySelector("span").textContent.toLowerCase();
      item.style.display = label.includes(query) ? "" : "none";
    });
    const activeItem = sidebarList.querySelector(".sidebar-item.active");
    if (activeItem && activeItem.style.display === "none") {
      state.cat = "all";
      sidebarList.querySelectorAll(".sidebar-item").forEach((i) => i.classList.remove("active"));
      const allItem = sidebarList.querySelector('.sidebar-item[data-cat="all"]');
      if (allItem) allItem.classList.add("active");
      render();
    }
  });

  // Búsqueda principal — debounced
  let searchTimer;
  document.getElementById("search").addEventListener("input", (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.query = e.target.value;
      state.page = 1;
      render();
    }, 180);
  });

  // Toggles de vista
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

  // Carga inicial
  fetchBooks();

  // Refresco automático cada 5 minutos
  setInterval(fetchBooks, REFRESH_INTERVAL);

  // Refrescar al volver a la pestaña
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) fetchBooks();
  });
}

document.addEventListener("DOMContentLoaded", init);
