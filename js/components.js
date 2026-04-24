/* ════════════════════════════════════════════════════════
   SCEIC-USFX — Componentes compartidos: NAV y FOOTER
   Funciona en index.html (links relativos #section) y en
   cualquier sub-página (links con prefijo index.html#section)
   ════════════════════════════════════════════════════════ */

(function () {
  /* ── Detecta si estamos en la raíz (index.html) ──────── */
  const isIndex = (() => {
    const p = window.location.pathname;
    return (
      p === "/" ||
      p.endsWith("/index.html") ||
      // Soporte para apertura local como file:///…/
      p.endsWith("/")
    );
  })();

  /* Prefijo de href: vacío en index, "index.html" en sub-páginas */
  const base = isIndex ? "" : "index.html";

  /** Construye un href: base#anchor */
  function h(anchor) {
    return `${base}#${anchor}`;
  }

  /* ── Construye el elemento <nav> ─────────────────────── */
  function buildNav() {
    const nav = document.createElement("nav");
    nav.id = "navbar";
    nav.innerHTML = `
      <a href="${h("hero")}" class="nav-logo">
        <img src="img/logo-sceic.png" alt="SCEIC Logo" id="navImg"
             onerror="this.style.display='none';document.getElementById('navFallback').style.display='flex'" />
        <div class="logo-fallback" id="navFallback" style="display:none"></div>
        SCEIC · USFX
      </a>
      <ul class="nav-links" id="navLinks">
        <li><a href="${h("quienes-somos")}">Nosotros</a></li>
        <li><a href="${h("mision-vision")}">Misión</a></li>
        <li><a href="${h("objetivos")}">Objetivos</a></li>
        <li><a href="${h("miembros")}">Miembros</a></li>
        <li><a href="${h("actividades")}">Actividades</a></li>
        <li><a href="${h("publicaciones")}">Publicaciones</a></li>
        <li><a href="${h("recursos")}"${isIndex ? "" : ' class="nav-link-active"'}>Recursos</a></li>
        <li><a href="${h("contacto")}">Contacto</a></li>
      </ul>
      <button class="hamburger" id="hamburger" aria-label="Menú">
        <span></span><span></span><span></span>
      </button>`;
    return nav;
  }

  /* ── Construye el elemento <footer> ─────────────────── */
  function buildFooter() {
    const footer = document.createElement("footer");
    footer.innerHTML = `
      <a href="${h("hero")}" class="footer-logo">
        <img src="img/logo-sceic.png" alt="SCEIC Logo"
             onerror="this.style.display='none'" />
        SCEIC · USFX
      </a>
      <div class="footer-links">
        <a href="${h("quienes-somos")}">Nosotros</a>
        <a href="${h("mision-vision")}">Misión &amp; Visión</a>
        <a href="${h("actividades")}">Actividades</a>
        <a href="${h("publicaciones")}">Publicaciones</a>
        <a href="cursos.html">Videos &amp; Seminarios</a>
        <a href="${h("recursos")}">Recursos</a>
        <a href="${h("contacto")}">Contacto</a>
      </div>
      <div class="footer-copy">
        © 2026 SCEIC · USFX — Sucre, Bolivia &mdash; Desarrollado por: Univ. Mario Cesgo Soliz
      </div>`;
    return footer;
  }

  /* ── Inyecta el NAV al inicio del <body> ─────────────── */
  function injectNav() {
    if (document.getElementById("navbar")) return; // ya existe en el HTML
    document.body.insertAdjacentElement("afterbegin", buildNav());
  }

  /* ── Inyecta el FOOTER al final del <body> ───────────── */
  function injectFooter() {
    if (document.querySelector("footer")) return; // ya existe en el HTML
    document.body.appendChild(buildFooter());
  }

  /* ── Menú hamburger (móvil) ──────────────────────────── */
  function initHamburger() {
    const hamburger = document.getElementById("hamburger");
    const navLinks  = document.getElementById("navLinks");
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      hamburger.classList.toggle("active");
    });

    // Cierra el menú al hacer clic en un enlace
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        hamburger.classList.remove("active");
      });
    });
  }

  /* ── Navbar scroll effect ────────────────────────────── */
  function initNavScroll() {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    if (!isIndex) {
      // Sub-páginas: siempre con fondo (no hay hero que lo cubra)
      navbar.classList.add("scrolled");
    }
    // En index.html el scroll spy lo gestiona script.js
  }

  /* ── Init ────────────────────────────────────────────── */
  document.addEventListener("DOMContentLoaded", () => {
    injectNav();
    injectFooter();
    initHamburger();
    initNavScroll();
  });
})();
