/* LOGO FALLBACK — se ejecuta tras DOMContentLoaded para que
   el nav ya esté inyectado por components.js */
document.addEventListener("DOMContentLoaded", () => {
  const navImg = document.getElementById("navImg");
  if (navImg) {
    navImg.onerror = function () {
      this.style.display = "none";
      const fb = document.getElementById("navFallback");
      if (fb) fb.style.display = "flex";
    };
  }
});

/* LOADER */
const hideLoader = () => {
  const loader = document.getElementById("loader");
  if (loader && !loader.classList.contains("hidden")) {
    loader.classList.add("hidden");
  }
};

window.addEventListener("load", () => {
  setTimeout(hideLoader, 500);
});

// Failsafe: hide loader after 3s anyway
setTimeout(hideLoader, 3000);

/* HAMBURGER — gestionado por components.js para todas las páginas */
/* script.js no duplica esta lógica */

/* NAV SCROLL */
window.addEventListener("scroll", () => {
  document
    .getElementById("navbar")
    .classList.toggle("scrolled", window.scrollY > 60);
});

/* SCROLL REVEAL */
const allReveal = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right",
);
const revObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("visible"), i * 75);
        revObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.07 },
);
allReveal.forEach((el) => revObs.observe(el));

/* COUNTER */
function counter(el, target, suffix) {
  let v = 0;
  const step = target / 60;
  const t = setInterval(() => {
    v += step;
    if (v >= target) {
      v = target;
      clearInterval(t);
    }
    el.textContent = Math.floor(v) + suffix;
  }, 28);
}
const statsEl = document.querySelector(".hero-stats");
let counted = false;
const cntObs = new IntersectionObserver(
  (en) => {
    if (en[0].isIntersecting && !counted) {
      counted = true;
      counter(document.getElementById("cnt1"), 40, "+");
      counter(document.getElementById("cnt2"), 12, "");
      counter(document.getElementById("cnt3"), 11, "");
      cntObs.disconnect();
    }
  },
  { threshold: 0.5 },
);
if (statsEl) cntObs.observe(statsEl);

/* PARTICLES */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let W, H;
function resize() {
  W = canvas.width = canvas.offsetWidth;
  H = canvas.height = canvas.offsetHeight;
}
resize();
window.addEventListener("resize", resize);
const cols = ["#1A56DB", "#0593A2", "#FF7A48", "#E3371E", "#103778"];
const pts = Array.from({ length: 60 }, () => ({
  x: Math.random() * 2000,
  y: Math.random() * 900,
  vx: (Math.random() - 0.5) * 0.28,
  vy: (Math.random() - 0.5) * 0.28,
  r: Math.random() * 15 + 0.8,
  a: Math.random() * 0.35 + 0.08,
  c: cols[Math.floor(Math.random() * cols.length)],
}));
function drawP() {
  ctx.clearRect(0, 0, W, H);
  pts.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0) p.x = W;
    if (p.x > W) p.x = 0;
    if (p.y < 0) p.y = H;
    if (p.y > H) p.y = 0;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.c;
    ctx.globalAlpha = p.a;
    ctx.fill();
  });
  ctx.globalAlpha = 1;
  for (let i = 0; i < pts.length; i++)
    for (let j = i + 1; j < pts.length; j++) {
      const dx = pts[i].x - pts[j].x,
        dy = pts[i].y - pts[j].y,
        d = Math.sqrt(dx * dx + dy * dy);
      if (d < 390) {
        ctx.beginPath();
        ctx.moveTo(pts[i].x, pts[i].y);
        ctx.lineTo(pts[j].x, pts[j].y);
        ctx.strokeStyle = `rgba(26,86,219,${0.1 * (1 - d / 390)})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    }
  requestAnimationFrame(drawP);
}
drawP();

/* TILT */
document
  .querySelectorAll(".member-card, .mv-card, .rec-card, .qs-item")
  .forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(700px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transition = "transform .5s cubic-bezier(.4,0,.2,1)";
      card.style.transform = "";
      setTimeout(() => (card.style.transition = ""), 500);
    });
  });

/* MAGNETIC BUTTONS */
document
  .querySelectorAll(".btn-primary, .btn-outline, .btn-submit, .btn-more-act")
  .forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.15;
      const y = (e.clientY - r.top - r.height / 2) * 0.15;
      btn.style.transform = `translate(${x}px,${y}px)`;
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });
  });

/* VER MÁS ACTIVIDADES */
document.addEventListener("DOMContentLoaded", () => {
  const btnVerMas = document.getElementById("btn-ver-mas");
  if (btnVerMas) {
    btnVerMas.addEventListener("click", () => {
      const hiddenActs = document.querySelectorAll(".hidden-activity");
      hiddenActs.forEach((act, i) => {
        act.classList.remove("hidden-activity");
        // Forzar recalcular reveal si es necesario
        setTimeout(() => {
          act.classList.add("visible");
        }, i * 100);
      });
      // Ocultar el botón después de mostrar todo
      btnVerMas.parentElement.style.display = "none";
    });
  }
});
