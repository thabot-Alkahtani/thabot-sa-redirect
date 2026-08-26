/* ---------------- Data ---------------- */
const SERVICES = [
  {
    id: "erp", index: "01", title: "ERP Solutions", mood: "services-erp",
    teaser: "Run your whole operation from one system.",
    description: "Full implementation and management of enterprise resource planning systems. We deploy, customize, and support ERP platforms — covering inventory, manufacturing, accounting, HR, and multi-branch operations — so your business runs from one unified system.",
    chips: ["Odoo", "Multi-branch", "ZATCA", "Integrations"]
  },
  {
    id: "ai", index: "02", title: "Custom AI Agents", mood: "services-ai",
    teaser: "Automation that understands your workflow.",
    description: "Intelligent automation built around your specific workflows. We design and deploy AI agents that handle customer inquiries, process data, automate repetitive tasks, and surface insights — giving your team the ability to focus on what matters most.",
    chips: ["Workflow automation", "Chatbots", "Data agents"]
  },
  {
    id: "app", index: "03", title: "Product Selling App", mood: "services-app",
    teaser: "Your own branded app, live on iOS and Android.",
    description: "A fully branded mobile application for selling your products directly to customers. We build, publish, and maintain your app on iOS and Android — complete with ordering, payments, loyalty features, and push notifications to keep customers coming back.",
    chips: ["iOS &amp; Android", "Payments", "Push notifications"]
  },
  {
    id: "web", index: "04", title: "Smart Business Website", mood: "services-web",
    teaser: "A site that sells while you sleep.",
    description: "A professional web presence that does more than look good. We design and develop websites that showcase your brand, attract customers, and integrate smart features — SEO, analytics, contact flows, and live data — so your business is visible and working around the clock.",
    chips: ["Arabic &amp; English", "SEO", "Analytics"]
  },
  {
    id: "ecom", index: "05", title: "Full E-Commerce Setup", mood: "services-ecom",
    teaser: "You make the product. We handle the rest.",
    description: "<strong>Your only job: make your product.</strong> We handle everything else — the storefront, orders, payments, and delivery, end to end, across your app and website.",
    chips: ["Online store", "Order management", "Payments", "Delivery logistics", "Customer support"]
  }
];

const MOOD_COLORS = {
  home: 0x2fc7c0,
  about: 0xd9a441,
  services: 0x2fc7c0,
  "services-erp": 0x2f7ec7,
  "services-ai": 0x7a5fd9,
  "services-app": 0x2fc7c0,
  "services-web": 0x3f9ad9,
  "services-ecom": 0xd9772e,
  contact: 0xd9a441
};

const svgWhatsapp = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 4.99L2 22l5.2-1.36a9.94 9.94 0 0 0 4.84 1.23h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2zm0 18.2h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.09.81.82-3.01-.2-.31a8.23 8.23 0 0 1-1.26-4.4c0-4.55 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.55-3.7 8.23-8.27 8.23z"/></svg>';
const svgEmail = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2 .3V18h16V6.3l-8 5.7-8-5.7ZM4.6 5l7.4 5.3L19.4 5H4.6Z"/></svg>';
const svgPhone = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"/></svg>';

/* ---------------- Slide renderers ---------------- */
function renderHome() {
  return `
    <p class="slide-eyebrow">AI &amp; IT Services Company</p>
    <h1 class="slide-title">Systems that think.</h1>
    <p class="slide-text">Thabot builds the ERP, AI agents, mobile apps, and e-commerce systems that run your business — from the back office to the checkout — so your technology works for you, not the other way around.</p>
    <div class="slide-cta">
      <button class="btn btn-primary" data-view="contact">Start a Project</button>
      <button class="btn btn-ghost" data-view="services">View Services</button>
    </div>`;
}

function renderAbout() {
  return `
    <p class="slide-eyebrow">Who We Are</p>
    <h1 class="slide-title">Practical intelligence.</h1>
    <p class="slide-text">Thabot is an AI and IT services company. We partner with businesses to design practical artificial intelligence, build reliable software, and run the infrastructure that keeps it all online — turning complex technology into systems your team can actually depend on.</p>
    <div class="about-pillars">
      <div class="pillar"><span class="pillar-tag">AI</span><h3>Practical AI</h3><p>Solutions built around real workflows, not hype.</p></div>
      <div class="pillar"><span class="pillar-tag">ENG</span><h3>Reliable Engineering</h3><p>Software and infrastructure built to run without drama.</p></div>
      <div class="pillar"><span class="pillar-tag">OPS</span><h3>Long-Term Partnership</h3><p>We stay on to support, maintain, and improve what we build.</p></div>
    </div>`;
}

function renderServiceSlide() {
  const items = SERVICES.map((s, i) => `
    <button class="service-item" data-service-index="${i}">
      <span class="item-index">${s.index}</span>${s.title}
    </button>`).join("");
  return `
    <p class="slide-eyebrow">What We Do</p>
    <h1 class="slide-title">Our Services</h1>
    <p class="slide-text">Click a service to see the full picture.</p>
    <div class="service-list">${items}</div>`;
}

function renderContact() {
  const cfg = window.THABOT_CONFIG || {};
  const waLink = `https://wa.me/${cfg.whatsappNumber}?text=${encodeURIComponent(cfg.whatsappMessage || "")}`;
  return `
    <p class="slide-eyebrow">Get In Touch</p>
    <h1 class="slide-title">Let's talk.</h1>
    <p class="slide-text">Tell us what you're working on — we usually reply within one business day.</p>
    <div class="contact-links">
      <a href="${waLink}" target="_blank" rel="noopener" class="contact-link highlight">${svgWhatsapp}${cfg.whatsappDisplay || "Chat on WhatsApp"}</a>
      <a href="mailto:${cfg.email || ""}" class="contact-link">${svgEmail}${cfg.email || ""}</a>
      <a href="tel:${cfg.phoneHref || ""}" class="contact-link">${svgPhone}${cfg.phone || ""}</a>
    </div>`;
}

/* ---------------- Slide + atmosphere transition ---------------- */
const slideEl = document.getElementById("slide");
const atmoA = document.getElementById("atmo-a");
const atmoB = document.getElementById("atmo-b");
let activeAtmo = atmoA, inactiveAtmo = atmoB;
let currentView = null;

function setView(view) {
  const isFirstRender = currentView === null;
  currentView = view;

  const mood = view;
  document.querySelectorAll(".nav-links a").forEach(a => a.classList.toggle("active", a.dataset.view === view));

  inactiveAtmo.dataset.mood = mood;
  inactiveAtmo.classList.add("visible");
  activeAtmo.classList.remove("visible");
  [activeAtmo, inactiveAtmo] = [inactiveAtmo, activeAtmo];

  function render() {
    if (view === "home") slideEl.innerHTML = renderHome();
    else if (view === "about") slideEl.innerHTML = renderAbout();
    else if (view === "services") slideEl.innerHTML = renderServiceSlide();
    else if (view === "contact") slideEl.innerHTML = renderContact();
  }

  if (isFirstRender) { render(); requestAnimationFrame(() => slideEl.classList.add("visible")); return; }

  slideEl.classList.remove("visible");
  setTimeout(() => {
    render();
    requestAnimationFrame(() => slideEl.classList.add("visible"));
  }, 350);
}

/* ---------------- The 3D frame — opens with a service's full details ---------------- */
const frameOverlay = document.getElementById("frame-overlay");
const frameBox = document.getElementById("frame-box");
let lastFocused = null;
let preFrameMood = "services";

function openServiceFrame(index) {
  const s = SERVICES[index];
  if (!s) return;

  preFrameMood = "services";
  inactiveAtmo.dataset.mood = s.mood;
  inactiveAtmo.classList.add("visible");
  activeAtmo.classList.remove("visible");
  [activeAtmo, inactiveAtmo] = [inactiveAtmo, activeAtmo];

  document.getElementById("frame-index").textContent = s.index;
  document.getElementById("frame-title").textContent = s.title;
  document.getElementById("frame-desc").innerHTML = s.description;
  document.getElementById("frame-chips").innerHTML = s.chips.map(c => `<span>${c}</span>`).join("");
  frameBox.style.setProperty("--frame-glow", `#${MOOD_COLORS[s.mood].toString(16).padStart(6, "0")}55`);

  lastFocused = document.activeElement;
  frameOverlay.classList.add("open");
  frameOverlay.setAttribute("aria-hidden", "false");
  frameBox.querySelector(".frame-close").focus();
}

function closeServiceFrame() {
  frameOverlay.classList.remove("open");
  frameOverlay.setAttribute("aria-hidden", "true");

  inactiveAtmo.dataset.mood = preFrameMood;
  inactiveAtmo.classList.add("visible");
  activeAtmo.classList.remove("visible");
  [activeAtmo, inactiveAtmo] = [inactiveAtmo, activeAtmo];

  if (lastFocused && lastFocused.focus) lastFocused.focus();
}

frameOverlay.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeServiceFrame));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && frameOverlay.classList.contains("open")) closeServiceFrame();
});

document.addEventListener("click", (e) => {
  const item = e.target.closest(".service-item");
  if (item) { openServiceFrame(Number(item.dataset.serviceIndex)); return; }

  const navEl = e.target.closest("[data-view]");
  if (navEl) {
    e.preventDefault();
    setView(navEl.dataset.view);
    navLinksEl.classList.remove("open");
  }
});

/* ---------------- Preloader ---------------- */
window.addEventListener("load", () => {
  const pre = document.getElementById("preloader");
  setTimeout(() => pre.classList.add("hidden"), 300);
});

/* ---------------- Mobile menu ---------------- */
const hamburger = document.getElementById("hamburger");
const navLinksEl = document.getElementById("nav-links");
hamburger.addEventListener("click", () => navLinksEl.classList.toggle("open"));

document.getElementById("year").textContent = new Date().getFullYear();

(function wireNavWhatsapp() {
  const cfg = window.THABOT_CONFIG || {};
  const link = document.getElementById("nav-whatsapp");
  link.href = `https://wa.me/${cfg.whatsappNumber}?text=${encodeURIComponent(cfg.whatsappMessage || "")}`;
})();

/* ---------------- Magnetic buttons ---------------- */
(function initMagnetic() {
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!canHover || reduced) return;

  window.addEventListener("mousemove", (e) => {
    const el = e.target.closest(".btn");
    document.querySelectorAll(".btn").forEach(b => { if (b !== el) b.style.transform = ""; });
    if (el) {
      const rect = el.getBoundingClientRect();
      const dx = (e.clientX - rect.left - rect.width / 2) * 0.3;
      const dy = (e.clientY - rect.top - rect.height / 2) * 0.3;
      el.style.transform = `translate(${dx}px, ${dy - 2}px)`;
    }
  });
})();

/* ---------------- Boot ---------------- */
setView("home");
