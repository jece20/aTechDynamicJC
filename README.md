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

## 📁 Estructura del Proyecto (Limpia)

aTechDynamicJC-main/
├── public/                      # Recursos estáticos (Imágenes Webp/Videos)
│   ├── images/
│   │   ├── trabajoswebs/        # Imágenes de proyectos recientes
│   │   └── ...                  # Activos de secciones
│   ├── videos/
│   └── favicon.webp
├── src/
│   ├── components/              # Componentes React modulares
│   │   ├── Background.jsx       # Partículas interactivas
│   │   ├── Gallery.jsx          # Sección de trabajos recientes
│   │   └── ...
│   ├── App.jsx                  # Layout y orquestación
│   ├── index.css                # Estilos globales y variables
│   └── main.jsx                 # Punto de entrada
├── index.html                   # HTML raíz (SEO & Scripts)
├── package.json                 # Dependencias y scripts
├── vite.config.js               # Configuración del Bundler
└── eslint.config.js             # Linter

---

## ✨ Características

- **Estructura Unificada** — Despliegue optimizado para Vercel eliminando subcarpetas innecesarias.
- **Imágenes WebP** — Optimización de rendimiento para una carga ultrarrápida.
- **Diseño Premium Oscuro** — Glassmorphism y gradientes elegantes.
- **Fondo Interactivo** — Partículas animadas con Canvas.
- **Responsive Design** — Experiencia fluida en móvil, tablet y escritorio.

---

## 🛠️ Instalación y Uso

### Requisitos
- **Node.js v20+**

### Configuración inicial
```bash
# Clonar el repositorio
git clone [https://github.com/jece20/aTechDynamicJC.git](https://github.com/jece20/aTechDynamicJC.git)

# Instalar dependencias
npm install

Desarrollo local

npm run dev

Disponible en http://localhost:5173

Despliegue
Cada git push origin main activa automáticamente una nueva versión en Vercel.

📞 Contacto
WhatsApp: 3115216983

Email: jhoan6370@gmail.com

Ubicación: Bucaramanga, Santander — Colombia

Desarrollado por TechDynamic · Jhoan Tech

---

### 💡 Recordatorio Final para Vercel:
Dado que ahora tu `package.json` está en la raíz (como se ve en `image_294870.png`), recuerda entrar a **Settings > General** en Vercel y dejar el campo **"Root Directory"** totalmente vacío. Esto asegurará que tu web cargue siempre a la primera.