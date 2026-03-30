# SCEIC - USFX | Sitio Web y Biblioteca Digital

Este repositorio contiene el código fuente del sitio web oficial y la biblioteca digital de la **Sociedad Científica de Estudiantes de Ingeniería Civil (SCEIC)** de la **Universidad Mayor, Real y Pontificia de San Francisco Xavier de Chuquisaca (USFX)**.

## 📌 Descripción

El proyecto es una aplicación web estática diseñada para presentar la información institucional de la sociedad científica y proporcionar una plataforma interactiva para acceder a recursos y material académico (libros, manuales, apuntes, solucionarios) dirigidos a estudiantes de Ingeniería Civil.

## ✨ Características Principales

1. **Página Principal (Landing Page):**
   - **Nosotros:** Información sobre la historia y propósito de la sociedad.
   - **Misión y Visión:** Dirección y objetivos a futuro.
   - **Actividades y Publicaciones:** Difusión de los eventos, seminarios y artículos realizados por los miembros.
   - **Contacto:** Formulario y enlaces de contacto directo.

2. **Biblioteca Digital Dinámica (`biblioteca.html`):**
   - Desarrollada para ser un repositorio de acceso libre.
   - **Base de Datos en Tiempo Real:** Los libros y materiales se cargan dinámicamente utilizando una base de datos gestionada desde **Google Sheets** (Google Sheets API v4), lo que permite a los administradores agregar contenido sin modificar el código fuente.
   - **Filtros avanzados:** Búsqueda en tiempo real por título, autor o por medio de un panel de categorías en la barra lateral (Cálculo, Física, Hidráulica, Suelos, Estructuras, etc.).
   - **Vistas personalizables:** Alternar entre vista de cuadrícula (Grid) y vista de lista (List).

## 🛠️ Tecnologías Usadas

El proyecto está construido completamente con tecnologías nativas de la web para mantener una carga rápida y eliminar la necesidad de herramientas de compilación complejas.

- **Estructura y Semántica:** HTML5
- **Estilos y Apariencia:** Vanilla CSS3 (Variables nativas, CSS Grid, Flexbox, y un diseño "Glassmorphism" moderno).
- **Lógica e Interactividad:** Vanilla JavaScript (ES6+).
- **Iconografía:** [Boxicons](https://boxicons.com/).
- **Fuentes:** Google Fonts (`Syne`, `DM Sans`, `Saira`).
- **Integración API:** Fetch API para consumir datos de Google Sheets de manera asíncrona.

## 🚀 Instalación y Uso

Dado que el sitio es estático (Client-side), no requiere un servidor backend para ejecutarse localmente.

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/sceic-usfx.git
   ```
2. Entra al directorio del proyecto:
   ```bash
   cd sceic-usfx
   ```
3. Ejecución Local:
   - Puedes abrir directamente el archivo `index.html` en cualquier navegador web.
   - Opcionalmente (y recomendado para probar llamadas API locales y evitar bloqueos por CORS), usa una extensión como **Live Server** (en VSCode) o sirve la carpeta con Node o Python:
     ```bash
     npx serve .
     # o
     python -m http.server
     ```

## 🏗️ Estructura del Proyecto

```text
/
├── index.html            # Página principal del sitio
├── biblioteca.html       # Interfaz de la biblioteca virtual
├── css/
│   ├── style.css         # Estilos globales y de la página principal
│   └── biblioteca.css    # Estilos específicos de la biblioteca virtual
├── js/
│   ├── script.js         # Lógica de la página principal (navbar, animaciones)
│   └── biblioteca.js     # Lógica de la biblioteca (fetching, renderizado, filtrado)
├── img/                  # Recursos gráficos (Logos, imágenes descriptivas, etc.)
└── README.md             # Documentación del proyecto
```

## 🤝 Créditos y Desarrollo

- Proyecto desarrollado para la **Sociedad Científica de Estudiantes de Ingeniería Civil (SCEIC - USFX)**.
- **Desarrollador:** Univ. Mario Cesgo Soliz.
