/**
 * Catálogo de proyectos del portfolio.
 * Para añadir un nuevo proyecto en el futuro, simplemente añade un nuevo objeto a este array.
 */
const projectsData = [
  {
    id: "transcriptvault",
    title: "TranscriptVault",
    badge: "Destacado",
    category: "ai-desktop",
    categoryLabel: "IA Local & Desktop",
    shortDescription: "Aplicación de escritorio de alta privacidad para archivar actas de reuniones en Markdown, con asistente conversacional transversal impulsado por Qwen 2.5 7B y motor RAG local mediante ONNX.",
    fullDescription: `
TranscriptVault es una solución de escritorio desarrollada con Electron diseñada para resolver la fragmentación y falta de contexto en el seguimiento de reuniones. Opera bajo un principio estricto de **cero fuga de datos**: toda la indexación, búsqueda semántica e inferencia de lenguaje natural se ejecuta de forma 100% local en la máquina del usuario.

A diferencia de buscadores convencionales que devuelven tarjetas aisladas, su asistente con **Qwen 2.5 7B Instruct** analiza simultáneamente múltiples actas para responder sobre decisiones acumuladas, evolución de presupuestos y compromisos asumidos a lo largo del tiempo.
    `,
    highlights: [
      {
        icon: "cpu",
        title: "Inferencia & RAG 100% Local",
        text: "Integración con motores locales (Ollama / LM Studio) y fallback autónomo con embeddings ONNX multilingües (@xenova/transformers)."
      },
      {
        icon: "layers",
        title: "Normalización Multi-Acta",
        text: "Consultas transversales que sintetizan acuerdos históricos con citas interactivas clicables hacia el documento fuente."
      },
      {
        icon: "check-square",
        title: "Tablero de Tareas Bidireccional",
        text: "Detección de participantes y extracción de action items sincronizados en tiempo real directamente sobre los ficheros .md."
      },
      {
        icon: "file-text",
        title: "Gestión Inteligente de Markdown",
        text: "Importación drag & drop, nombrado automático cronológico por metadatos (YAML frontmatter) y monitorización con Chokidar."
      }
    ],
    techStack: [
      { name: "Electron", category: "Desktop Framework" },
      { name: "Node.js (v20+)", category: "Runtime & IPC" },
      { name: "Qwen 2.5 7B Instruct", category: "LLM Local" },
      { name: "Transformers.js (ONNX)", category: "Embeddings / RAG" },
      { name: "Markdown / YAML", category: "Formato de Datos" },
      { name: "Chokidar & IPC seguro", category: "FileSystem & ContextBridge" }
    ],
    links: {
      github: "https://github.com/smosquera-m/transcript-vault",
      demo: null // Proyecto de escritorio local
    },
    status: "Activo / En producción personal",
    role: "Arquitectura, Desarrollo Full-Stack & Optimización RAG"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = projectsData;
}
