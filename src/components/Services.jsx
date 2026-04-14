import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/images/servicios-ofrecidos.webp",
    alt: "¿Qué Ofrezco? — Servicios de desarrollo web, diseño, APIs y más",
  },
  {
    src: "/images/desafio-estrategia.webp",
    alt: "El Desafío y Estrategia — ¿Tu negocio existe en internet?",
  },
  {
    src: "/images/proceso-trabajo.webp",
    alt: "Cómo Trabajo — Proceso en 4 pasos: Escucho, Propongo, Construyo, Entrego",
  },
  {
    src: "/images/publico-objetivo.webp",
    alt: "¿Para Quién Es Esto? — Restaurantes, Salones, Tiendas y más",
  },
];

const AUTO_PLAY_INTERVAL = 5050;

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    zIndex: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
    zIndex: 0,
  }),
};

export default function Services() {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback((newDirection) => {
    setCurrent(([prev]) => {
      const next = (prev + newDirection + slides.length) % slides.length;
      return [next, newDirection];
    });
  }, []);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => paginate(1), AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, paginate]);

  return (
    <section
      id="services"
      className="section"
      style={{
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Mis <span className="text-gradient">Servicios</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            Soluciones integrales de desarrollo orientadas a escalar tu negocio
            en el entorno digital.
          </motion.p>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ position: "relative", maxWidth: "900px", margin: "0 auto" }}
        >
          {/* Slide container */}
          <div
            className="glass"
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <AnimatePresence
              initial={false}
              custom={direction}
              mode="popLayout"
            >
              <motion.img
                key={current}
                src={slides[current].src}
                alt={slides[current].alt}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 35 },
                  opacity: { duration: 0.35 },
                  scale: { duration: 0.35 },
                }}
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  pointerEvents: "none",
                }}
                draggable={false}
              />
            </AnimatePresence>

            {/* Gradient overlays for arrows visibility */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0.25) 0%, transparent 15%, transparent 85%, rgba(0,0,0,0.25) 100%)",
                pointerEvents: "none",
                zIndex: 2,
              }}
            />
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            aria-label="Anterior"
            style={{
              position: "absolute",
              left: "-24px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "rgba(10, 10, 10, 0.85)",
              backdropFilter: "blur(8px)",
              border: "1px solid var(--color-border)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
              transition: "all 0.25s ease",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "var(--color-accent)";
              e.currentTarget.style.borderColor = "var(--color-accent)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "rgba(10, 10, 10, 0.85)";
              e.currentTarget.style.borderColor = "var(--color-border)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={() => paginate(1)}
            aria-label="Siguiente"
            style={{
              position: "absolute",
              right: "-24px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "rgba(10, 10, 10, 0.85)",
              backdropFilter: "blur(8px)",
              border: "1px solid var(--color-border)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
              transition: "all 0.25s ease",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "var(--color-accent)";
              e.currentTarget.style.borderColor = "var(--color-accent)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "rgba(10, 10, 10, 0.85)";
              e.currentTarget.style.borderColor = "var(--color-border)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            <ChevronRight size={22} />
          </button>

          {/* Dot indicators */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.75rem",
              marginTop: "1.5rem",
            }}
          >
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent([idx, idx > current ? 1 : -1])}
                aria-label={`Ir a slide ${idx + 1}`}
                style={{
                  width: current === idx ? "32px" : "10px",
                  height: "10px",
                  borderRadius: "999px",
                  border: "none",
                  background:
                    current === idx
                      ? "var(--color-accent)"
                      : "rgba(255,255,255,0.2)",
                  cursor: "pointer",
                  transition: "all 0.35s ease",
                  boxShadow:
                    current === idx
                      ? "0 0 12px var(--color-accent-glow)"
                      : "none",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Responsive arrow positioning */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media (max-width: 991px) {
          #services button[aria-label="Anterior"] {
            left: 8px !important;
          }
          #services button[aria-label="Siguiente"] {
            right: 8px !important;
          }
        }
      `,
        }}
      />
    </section>
  );
}
