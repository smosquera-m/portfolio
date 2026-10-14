# 🚀 Portfolio Personal — Sergi Mosquera

Portfolio web estático, moderno y ligero, diseñado con arquitectura **Zero-Backend / Local-First** para desplegarse instantáneamente en **GitHub Pages**, **Vercel** o **Netlify**.

El catálogo de proyectos es dinámico y modular: actualmente presenta de forma exclusiva **TranscriptVault**, con su arquitectura técnica, stack y enlaces correspondientes.

---

## 📁 Estructura del Proyecto

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD automático para GitHub Pages
├── data/
│   └── projects.js         # Fuente de datos de proyectos (añadir más aquí)
├── css/
│   └── style.css           # Sistema de diseño Obsidian & Dark Tech
├── js/
│   └── main.js             # Lógica de renderizado, modal y navegación
├── .gitignore              # Exclusiones de Git
├── index.html              # Estructura semántica HTML5
└── README.md               # Esta documentación
```

---

## ⚡ Cómo Probarlo en Local

Dado que no requiere ningún backend ni compilador, puedes abrirlo directamente:

1. **Opción directa:** Haz doble clic sobre el archivo `index.html` en tu explorador de archivos para abrirlo en cualquier navegador.
2. **Con un servidor local rápido (opcional):**
   - Si usas VS Code: clic derecho en `index.html` → *Open with Live Server*.
   - O desde la terminal con Node.js / npx:
     ```bash
     npx serve .
     ```

---

## 🚢 Cómo Subirlo a GitHub y Activar GitHub Pages

### 1. Inicializar el repositorio Git local
Abre una terminal en la carpeta `portfolio`:

```bash
git init
git add .
git commit -m "feat: portfolio inicial estático con TranscriptVault"
```

### 2. Crear el repositorio en GitHub y subir los cambios
Crea un nuevo repositorio en GitHub (por ejemplo, `portfolio` o `<tu-usuario>.github.io`):

```bash
git branch -M main
git remote add origin https://github.com/smosquera-m/portfolio.git
git push -u origin main
```

*(Si usas el nombre `<tu-usuario>.github.io`, la URL pública será directamente `https://<tu-usuario>.github.io/`)*.

### 3. Activar GitHub Pages en el repositorio
1. En GitHub, ve a la pestaña **Settings** (Configuración) de tu repositorio.
2. En el menú lateral izquierdo, selecciona **Pages**.
3. En la sección **Build and deployment** > **Source**:
   - Selecciona **GitHub Actions** (utilizará automáticamente el archivo `.github/workflows/deploy.yml` ya incluido).
   - O selecciona **Deploy from a branch** eligiendo la rama `main` y la carpeta `/ (root)`.
4. ¡Listo! En menos de un minuto tu portfolio estará online y con certificado HTTPS gratuito.

---

## ➕ Cómo Añadir Nuevos Proyectos en el Futuro

Para añadir futuros proyectos (como *WhisperDesk* o cualquier otra aplicación), solo necesitas abrir [data/projects.js](file:///c:/Users/sergi/Documents/portfolio/data/projects.js) y añadir un nuevo objeto al array `projectsData`:

```javascript
{
  id: "mi-nuevo-proyecto",
  title: "Nombre del Proyecto",
  badge: "Nuevo",
  category: "desktop",
  categoryLabel: "Desktop App",
  shortDescription: "Breve descripción para la tarjeta principal...",
  fullDescription: "Descripción completa y detallada para el modal técnico...",
  highlights: [
    { icon: "cpu", title: "Característica 1", text: "Detalle técnico..." },
    { icon: "layers", title: "Característica 2", text: "Detalle técnico..." }
  ],
  techStack: [
    { name: "C#", category: "Lenguaje" },
    { name: ".NET 8", category: "Framework" }
  ],
  links: {
    github: "https://github.com/smosquera-m/mi-nuevo-proyecto",
    demo: null
  },
  status: "En desarrollo",
  role: "Arquitectura y Desarrollo"
}
```

El catálogo, las tarjetas, los tags y el modal técnico se actualizarán automáticamente sin necesidad de tocar el HTML.
