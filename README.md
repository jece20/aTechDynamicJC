# TechDynamic — Portfolio Web

> Portafolio profesional de **TechDynamic** (Jhoan Tech). Soluciones digitales a tu medida desde Bucaramanga, Colombia.

---

## 🚀 Stack Tecnológico

![React 19](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite 5](https://img.shields.io/badge/Vite_5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Lucide React](https://img.shields.io/badge/Lucide_React-F59E0B?style=for-the-badge&logo=lucide&logoColor=white)
![Vanilla CSS](https://img.shields.io/badge/Vanilla_CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### Herramientas & Despliegue
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## 📁 Estructura del Proyecto

```text
aTechDynamicJC/
├── public/                      # Recursos estáticos
│   ├── images/
│   │   ├── trabajoswebs/        # Imágenes optimizadas de proyectos (WebP)
│   │   └── ...                  # Assets de secciones (servicios, etc.)
│   ├── videos/                  # Logo en video animado .mp4
│   └── favicon.webp             # Ícono del sitio
├── src/
│   ├── components/              # Componentes React
│   │   ├── Background.jsx       # Fondo de partículas interactivo (Canvas)
│   │   ├── Contact.jsx          # Sección de contacto (Grid 2x2: Correo, Ubicación, WA, IG)
│   │   ├── Gallery.jsx          # Galería de proyectos con slider tipo carrusel
│   │   ├── Header.jsx           # Navegación y navbar responsive
│   │   ├── Hero.jsx             # Sección de inicio principal
│   │   └── Services.jsx         # Carrusel interactivo de servicios
│   ├── App.jsx                  # Layout y orquestación
│   ├── index.css                # Sistema de diseño, variables y media queries
│   └── main.jsx                 # Punto de entrada de React
├── index.html                   # HTML raíz con meta-tags SEO
├── package.json                 # Dependencias
├── vite.config.js               # Configuración de Vite
└── eslint.config.js             # Reglas de Linter
```

---

## ✨ Características Principales

- **Diseño Premium Oscuro** — Glassmorphism, bordes sutiles iluminados y tipografía tipográfica elegante.
- **Interactividad Dinámica** — Carrusel de servicios automático, efectos hover en galería y navbar glass.
- **Fondo Interactivo** — Partículas animadas con canvas que reaccionan sutilmente.
- **Responsive Design Completo** — Totalmente optimizado desde móviles pequeños hasta pantallas ultrapanorámicas mediante Media Queries dedicadas.
- **Formatos Modernos (WebP & MP4)** — Carga súper rápida de imágenes e integraciones de video optimizado.
- **Despliegue Unificado** — Estructura en la raíz lista para compilar de inmediato en gestores como Vercel o Netlify.

---

## 🛠️ Instalación y Uso

### Requisitos Previos
- **Node.js** v20.0 o superior

### Entorno de Desarrollo Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/jece20/aTechDynamicJC.git

# 2. Entrar al directorio
cd aTechDynamicJC

# 3. Instalar las dependencias
npm install

# 4. Iniciar el servidor local
npm run dev
```

> **Nota:** La aplicación estará disponible localmente en `http://localhost:5173`.

### Construcción para Producción

Para compilar el proyecto y previsualizar la versión final optimizada:

```bash
npm run build
npm run preview
```

---

## 🚀 Guía de Despliegue (Vercel)

El proyecto está configurado para un despliegue sin fricciones en Vercel. 
1. Conecta tu repositorio de GitHub a Vercel.
2. Al estar el `package.json` en la raíz, asegúrate de que el campo **"Root Directory"** en Vercel esté **totalmente vacío**.
3. El comando de build (`npm run build`) y de salida (`dist`) se detectan automáticamente. 
4. Cada `git push origin main` actualizará automáticamente el sitio.

---

## 📞 Contacto

- **WhatsApp:** [+57 311 521 6983](https://wa.me/573115216983)
- **Email:** jhoan6370@gmail.com
- **Ubicación:** Bucaramanga, Santander — Colombia
- **Instagram:** [Próximamente]

*Diseño y desarrollo por **TechDynamic · Jhoan Tech***