/* ════════════════════════════════════════════════════════
   DATOS GEOGRÁFICOS — Renderizado de links estáticos
   ════════════════════════════════════════════════════════ */

/* Datos estáticos en lugar de la API de Drive */
const NORMAS_DATA = [
  {
    title: "GeoBolivia (IDE-EPB)",
    description: "Infraestructura de Datos Espaciales del Estado Plurinacional de Bolivia. Mapas base, límites y datos oficiales.",
    cat: "nacional",
    link: "https://geo.gob.bo/",
    icon: "bx-map-alt"
  },
  {
    title: "INE Bolivia",
    description: "Instituto Nacional de Estadística. Datos demográficos, censos y cartografía estadística de Bolivia.",
    cat: "nacional",
    link: "https://www.ine.gob.bo/",
    icon: "bx-bar-chart-alt-2"
  },
  {
    title: "USGS Earth Explorer",
    description: "Modelos de Elevación Digital (DEM), imágenes satelitales Landsat y datos del Servicio Geológico de EE.UU.",
    cat: "global",
    link: "https://earthexplorer.usgs.gov/",
    icon: "bx-globe"
  },
  {
    title: "Copernicus Open Access Hub",
    description: "Imágenes satelitales Sentinel (ESA) gratuitas de alta resolución para monitoreo ambiental y topográfico.",
    cat: "global",
    link: "https://scihub.copernicus.eu/",
    icon: "bx-satellite"
  },
  {
    title: "Geofabrik - OpenStreetMap Bolivia",
    description: "Descargas diarias de datos OpenStreetMap de Bolivia en formato shapefile (.shp) y osm.pbf.",
    cat: "nacional",
    link: "https://download.geofabrik.de/south-america/bolivia.html",
    icon: "bx-map"
  },
  {
    title: "NASA EarthData",
    description: "Centro de datos de ciencias de la Tierra de la NASA, incluye modelos globales de elevación y datos climáticos.",
    cat: "global",
    link: "https://earthdata.nasa.gov/",
    icon: "bx-world"
  },
  {
    title: "SRTM 90m DEM Digital Elevation Database",
    description: "Modelos de elevación digital de 90m (CGIAR-CSI) en todo el mundo, ideales para modelamiento hidrológico y cuencas.",
    cat: "global",
    link: "https://srtm.csi.cgiar.org/",
    icon: "bx-landscape"
  },
  {
    title: "Alaska Satellite Facility (Vertex)",
    description: "Punto de acceso a datos de radar de apertura sintética (SAR), incluyendo ALOS PALSAR gratuitos para topografía.",
    cat: "global",
    link: "https://search.asf.alaska.edu/",
    icon: "bx-radar"
  },
  {
    title: "OpenTopography",
    description: "Portal que facilita el descubrimiento y acceso a datos topográficos de alta resolución (LiDAR) e imágenes espaciales terrestres relacionadas.",
    cat: "global",
    link: "https://opentopography.org/",
    icon: "bx-layer"
  },
  {
    title: "FAO GeoNetwork",
    description: "Base de datos interactiva del Sistema de Información Geográfica de la Organización de las Naciones Unidas para la Alimentación y la Agricultura.",
    cat: "global",
    link: "https://www.fao.org/geonetwork/srv/eng/catalog.search",
    icon: "bx-leaf"
  },
  {
    title: "UN-SPIDER",
    description: "Plataforma de información y gestión de información basada en recursos espaciales de la ONU para el manejo de desastres.",
    cat: "global",
    link: "https://un-spider.org/",
    icon: "bx-error-alt"
  },
  {
    title: "IDE SERGEOMIN",
    description: "Infraestructura de Datos Espaciales del Servicio Geológico Minero de Bolivia. Mapas geológicos y mineralógicos a nivel nacional.",
    cat: "nacional",
    link: "http://ide.sergeomin.gob.bo/",
    icon: "bx-diamond"
  },
  {
    title: "OpenStreetMap (Visor Web)",
    description: "Mapa mundial colaborativo de acceso libre. Vista centrada en el territorio de Bolivia.",
    cat: "global",
    link: "https://www.openstreetmap.org/#map=7/-17.437/-64.737",
    icon: "bx-map-pin"
  }
];

const CATEGORIES = [
  { id: "nacional", label: "Datos Nacionales (Bolivia)" },
  { id: "global", label: "Repositorios Globales" }
];

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
    const matchQ   = !q || n.title.toLowerCase().includes(q) || n.description.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  document.getElementById("results-meta").textContent =
    `${filtered.length} fuente${filtered.length !== 1 ? "s" : ""} encontrada${filtered.length !== 1 ? "s" : ""}`;

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
  return `
    <article class="book-card data-card" onclick="window.open('${n.link}', '_blank')" style="cursor: pointer;">
      <div class="book-cover"><i class="bx ${n.icon} no-cover" style="color:var(--cobalt); font-size:3rem;"></i></div>
      <div class="book-info">
        <p class="book-title">${escapeHtml(n.title)}</p>
        <p style="font-size: 0.85rem; color: var(--gray); margin-top: 0.5rem; line-height: 1.4;">${escapeHtml(n.description)}</p>
      </div>
      <div class="book-actions">
        <a class="btn-view" href="${n.link}" target="_blank" rel="noopener" style="width: 100%; text-align:center;">
          <i class="bx bx-link-external"></i> Visitar Portal
        </a>
      </div>
    </article>`;
}

/* ── Fila de lista ── */
function cardList(n) {
  return `
    <div class="list-item" onclick="window.open('${n.link}', '_blank')" style="cursor: pointer;">
      <i class="bx ${n.icon} list-icon"></i>
      <span class="list-title" style="flex:1;">
        ${escapeHtml(n.title)}
        <span style="display:block; font-size:0.8rem; color:var(--gray); font-weight:normal; margin-top:0.2rem;">
          ${escapeHtml(n.description)}
        </span>
      </span>
      <div class="list-actions">
        <a class="btn-view list-view-btn" href="${n.link}" target="_blank" rel="noopener">
          <i class="bx bx-link-external"></i> Visitar
        </a>
      </div>
    </div>`;
}

/* ── Sidebar ── */
function buildSidebar() {
  const sidebarList = document.getElementById("sidebar-list");

  sidebarList
    .querySelectorAll('.sidebar-item:not([data-cat="all"])')
    .forEach(el => el.remove());

  CATEGORIES.forEach(cat => {
    const count = NORMAS_DATA.filter(n => n.cat === cat.id).length;
    const li    = document.createElement("li");
    li.className   = "sidebar-item";
    li.dataset.cat = cat.id;
    li.innerHTML   = `<span>${escapeHtml(cat.label)}</span><span class="cat-count">${count}</span>`;
    sidebarList.appendChild(li);
  });

  document.getElementById("count-all").textContent = NORMAS_DATA.length;
}

/* ════════════════════════════════════════════════════════
   INIT
   ════════════════════════════════════════════════════════ */

function init() {
  const badge       = document.getElementById("refresh-badge");
  const sidebarList = document.getElementById("sidebar-list");

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
    badge.textContent  = `${NORMAS_DATA.length} fuentes`;
    badge.style.display = "";
  } else {
    badge.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", init);
