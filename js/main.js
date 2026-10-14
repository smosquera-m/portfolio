/**
 * Portfolio Interactivo - Lógica del Cliente
 * 100% Estático y preparado para GitHub Pages / Vercel / Netlify
 */

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initNavigation();
  initModal();
  initCopyButtons();
});

// Iconos SVG limpios y auto-contenidos (cero dependencias de fuentes de iconos externas)
const ICONS = {
  cpu: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`,
  layers: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.9a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 12.5-9.17 4.16a2 2 0 0 1-1.66 0L2 12.5"/><path d="m22 17.5-9.17 4.16a2 2 0 0 1-1.66 0L2 17.5"/></svg>`,
  "check-square": `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  "file-text": `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,
  github: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  external: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
  info: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`,
  close: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`
};

/**
 * Renderiza los proyectos en el contenedor del DOM
 */
function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container || !Array.isArray(projectsData)) return;

  container.innerHTML = "";

  projectsData.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.setAttribute("data-id", project.id);

    const highlightsHtml = (project.highlights || [])
      .map(
        (h) => `
        <div class="highlight-box">
          <div class="highlight-header">
            <span class="highlight-icon">${ICONS[h.icon] || ICONS.cpu}</span>
            <span class="highlight-title">${h.title}</span>
          </div>
          <p class="highlight-text">${h.text}</p>
        </div>
      `
      )
      .join("");

    const techTagsHtml = (project.techStack || [])
      .map((t) => `<span class="tech-tag">${t.name}</span>`)
      .join("");

    const linksHtml = `
      ${
        project.links.github
          ? `<a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="icon-btn" title="Ver código en GitHub" aria-label="Ver código de ${project.title} en GitHub">
              ${ICONS.github}
            </a>`
          : ""
      }
      <button type="button" class="btn btn-secondary open-modal-btn" data-project-id="${project.id}" style="padding: 8px 16px; font-size: 0.85rem;">
        ${ICONS.info} Ver Ficha Técnica
      </button>
    `;

    card.innerHTML = `
      <div class="project-card-header">
        <div>
          <div class="project-badges">
            ${project.badge ? `<span class="badge-featured">★ ${project.badge}</span>` : ""}
            <span class="badge-category">${project.categoryLabel || "Proyecto"}</span>
          </div>
          <h3 class="project-title">${project.title}</h3>
        </div>
        <div class="project-actions">
          ${linksHtml}
        </div>
      </div>

      <div class="project-body">
        <p class="project-desc">${project.shortDescription}</p>

        <div class="highlights-grid">
          ${highlightsHtml}
        </div>

        <div class="tech-tag-list">
          ${techTagsHtml}
        </div>

        <div class="project-footer">
          <div class="project-role">
            <strong>Rol:</strong> ${project.role}
          </div>
          <div class="project-role">
            <strong>Estado:</strong> ${project.status}
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

/**
 * Inicialización de navegación y menú móvil
 */
function initNavigation() {
  const toggle = document.querySelector(".mobile-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  // Actualizar enlace activo en scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute("id");
      const navItem = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add("active");
        } else {
          navItem.classList.remove("active");
        }
      }
    });
  });
}

/**
 * Control del modal de detalles técnicos del proyecto
 */
function initModal() {
  const overlay = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body-content");
  const closeBtn = document.getElementById("modal-close-btn");

  if (!overlay || !modalBody) return;

  // Apertura desde tarjetas
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".open-modal-btn");
    if (btn) {
      const id = btn.getAttribute("data-project-id");
      const project = projectsData.find((p) => p.id === id);
      if (project) {
        openModalWithProject(project);
      }
    }
  });

  function openModalWithProject(project) {
    document.getElementById("modal-title").innerText = project.title;

    const stackRows = (project.techStack || [])
      .map(
        (t) => `
        <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--border-subtle); font-size: 0.9rem;">
          <span style="color: var(--text-primary); font-family: var(--font-mono); font-weight: 600;">${t.name}</span>
          <span style="color: var(--text-muted);">${t.category}</span>
        </div>
      `
      )
      .join("");

    modalBody.innerHTML = `
      <p class="modal-description" style="margin-bottom: 20px; font-size: 1.05rem;">
        ${project.fullDescription.trim().replace(/\n\n/g, "<br><br>")}
      </p>

      <h4 class="modal-section-title">
        ${ICONS.cpu} Arquitectura Técnica & Puntos Clave
      </h4>
      <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px;">
        ${project.highlights
          .map(
            (h) => `
            <div style="background: rgba(10, 12, 16, 0.4); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 12px 16px;">
              <strong style="color: var(--accent-primary); font-size: 0.95rem;">${h.title}</strong>
              <p style="color: var(--text-secondary); font-size: 0.875rem; margin-top: 4px;">${h.text}</p>
            </div>
          `
          )
          .join("")}
      </div>

      <h4 class="modal-section-title">
        ${ICONS.layers} Stack de Tecnologías
      </h4>
      <div style="margin-bottom: 28px;">
        ${stackRows}
      </div>

      <div style="display: flex; gap: 12px; justify-content: flex-end; padding-top: 16px; border-top: 1px solid var(--border-subtle);">
        ${
          project.links.github
            ? `<a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding: 10px 20px;">
                ${ICONS.github} Ver Repositorio en GitHub
              </a>`
            : ""
        }
      </div>
    `;

    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active")) {
      closeModal();
    }
  });
}

/**
 * Toast flotante para copiar correo o enlaces
 */
function initCopyButtons() {
  const toast = document.getElementById("toast");

  function showToast(message) {
    if (!toast) return;
    toast.innerText = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  }

  document.querySelectorAll("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const text = btn.getAttribute("data-copy");
      navigator.clipboard.writeText(text).then(() => {
        showToast(`Copiado al portapapeles: ${text}`);
      });
    });
  });
}
