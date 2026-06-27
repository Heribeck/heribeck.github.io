# Página Web Personal - Heribeck X.

Página web personal profesional con diseño oscuro (negro/blanco/verde), animaciones y efectos visuales, optimizada para GitHub Pages y Vercel.

## 🚀 Características

- **Diseño oscuro moderno**: Fondo negro con acentos en verde neón y blanco
- **Animaciones suaves**: Efectos de scroll reveal, hover effects y transiciones
- **Responsive**: Mobile-first approach, compatible con todos los dispositivos
- **SEO optimizado**: Meta tags y estructura semántica
- **Accesible**: Contraste de colores y etiquetas ARIA
- **Performante**: Código optimizado y carga rápida

## 📁 Estructura del Proyecto

```
miWeb/
├── index.html          # Página principal con todas las secciones
├── css/
│   └── styles.css      # Estilos con tema oscuro y animaciones
├── js/
│   └── main.js         # Interactividad y efectos visuales
├── assets/
│   └── images/         # Imágenes y logos (opcional)
└── README.md           # Este archivo
```

## 🎨 Secciones de la Página

1. **Hero/Header**: Presentación principal con animación de entrada
2. **Sobre Mí**: Biografía del desarrollador
3. **Tecnologías**: Stack técnico (JavaScript, HTML, CSS, Web-to-Native)
4. **Servicios**: Ofertas profesionales (apps móviles, juegos, optimización)
5. **Portafolio**: Proyectos (Poketype y espacio para futuros proyectos)
6. **Contacto**: Formulario de contacto y redes sociales

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Flexbox, Grid, animaciones, variables CSS
- **JavaScript (ES6+)**: DOM manipulation, Intersection Observer
- **Google Fonts**: Inter para tipografía moderna
- **FontAwesome**: Iconos vectoriales

## 📦 Instalación y Uso Local

1. **Clonar o descargar el proyecto**
   ```bash
   git clone <tu-repositorio>
   cd miWeb
   ```

2. **Abrir el archivo index.html**
   - Simplemente abre `index.html` en tu navegador
   - O usa un servidor local:
     ```bash
     # Con Python 3
     python -m http.server 8000
     
     # Con Node.js (instala http-server primero)
     npx http-server
     ```

3. **Abrir en el navegador**
   - Si usaste Python: `http://localhost:8000`
   - Si usaste http-server: `http://localhost:8080`

## 🌐 Despliegue en GitHub Pages

### Opción 1: Desde una rama (recomendado)

1. **Crear un repositorio en GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/miWeb.git
   git push -u origin main
   ```

2. **Activar GitHub Pages**
   - Ve a tu repositorio en GitHub
   - Click en **Settings** > **Pages**
   - En **Source**, selecciona **Deploy from a branch**
   - Selecciona la rama **main**
   - Selecciona la carpeta **/ (root)**
   - Click en **Save**

3. **Tu sitio estará disponible en**
   - `https://tu-usuario.github.io/miWeb/`

### Opción 2: Desde una carpeta docs/

1. **Mover los archivos a la carpeta docs/**
   ```bash
   mkdir docs
   mv index.html css js assets docs/
   ```

2. **Actualizar los enlaces en index.html**
   - Cambia `href="css/styles.css"` por `href="docs/css/styles.css"`
   - Cambia `src="js/main.js"` por `src="docs/js/main.js"`

3. **Activar GitHub Pages**
   - Ve a **Settings** > **Pages**
   - En **Source**, selecciona **Deploy from a branch**
   - Selecciona la rama **main**
   - Selecciona la carpeta **/docs**
   - Click en **Save**

## 🌐 Despliegue en Vercel

### Opción 1: Desde GitHub (recomendado)

1. **Subir tu código a GitHub** (como se muestra en la sección de GitHub Pages)

2. **Importar en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Click en **Add New Project**
   - Importa tu repositorio de GitHub
   - Configura el proyecto (la configuración por defecto funciona para sitios estáticos)
   - Click en **Deploy**

3. **Tu sitio estará disponible en**
   - `https://tu-proyecto.vercel.app`

### Opción 2: Desde CLI

1. **Instalar Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Desplegar**
   ```bash
   vercel
   ```

3. **Seguir las instrucciones en la terminal**

## 🎯 Personalización

### Cambiar colores

Edita las variables CSS en `css/styles.css`:

```css
:root {
    --color-bg-primary: #000000;      /* Fondo principal */
    --color-accent: #00ff88;          /* Color de acento (verde) */
    --color-text-primary: #ffffff;    /* Texto principal */
    /* ... más variables */
}
```

### Agregar nuevos proyectos al portafolio

En `index.html`, busca la sección `portfolio` y duplica la estructura de la card:

```html
<div class="portfolio-card">
    <div class="portfolio-image">
        <div class="portfolio-placeholder">
            <i class="fas fa-icono"></i>
        </div>
    </div>
    <div class="portfolio-content">
        <h3 class="portfolio-name">Nombre del Proyecto</h3>
        <p class="portfolio-description">Descripción del proyecto</p>
        <div class="portfolio-tags">
            <span class="tag">Tecnología</span>
        </div>
        <div class="portfolio-link">
            <a href="#" class="btn btn-outline">Ver Proyecto</a>
        </div>
    </div>
</div>
```

### Agregar enlace real a Play Store

En `index.html`, busca la sección del proyecto Poketype y reemplaza el placeholder:

```html
<a href="https://play.google.com/store/apps/details?id=tu.package.id" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
    <i class="fab fa-google-play"></i>
    Disponible en Play Store
</a>
```

### Configurar formulario de contacto

Actualmente el formulario es visual (sin backend). Para hacerlo funcional:

1. **Usar Formspree** (gratis y simple):
   - Regístrate en [formspree.io](https://formspree.io)
   - Crea un nuevo formulario
   - Reemplaza el atributo `action` en el formulario:
     ```html
     <form class="contact-form" id="contact-form" action="https://formspree.io/f/tu-form-id" method="POST">
     ```

2. **O usar EmailJS**:
   - Regístrate en [emailjs.com](https://www.emailjs.com)
   - Sigue su documentación para integrar el servicio

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1024px
- **Large Desktop**: > 1024px

## 🔧 Optimizaciones

- **Imágenes**: Usa formatos WebP para mejor rendimiento
- **CSS crítico**: Considera inline el CSS crítico para faster first paint
- **Lazy loading**: Agrega `loading="lazy"` a imágenes pesadas
- **Minificación**: Minifica CSS y JS para producción

## 📝 Licencia

Este proyecto es de uso personal para Heribeck X.

## 👤 Autor

**Heribeck X.** - Desarrollador de Software Independiente

---

¿Necesitas ayuda? Contacta a contacto@heribeck.com
