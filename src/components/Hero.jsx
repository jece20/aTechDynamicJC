import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "80px",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              display: "inline-block",
              padding: "0.5rem 1rem",
              borderRadius: "999px",
              border: "1px solid var(--color-border)",
              background: "var(--color-surface)",
              width: "fit-content",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "var(--color-text-secondary)",
            }}
          >
            Disponible para proyectos freelance
          </motion.div>

          <h1 style={{ margin: 0 }}>
            Transformando Ideas en <br />
            <span className="text-accent-gradient">Experiencias Digitales</span>
          </h1>

          <p style={{ maxWidth: "500px", margin: 0 }}>
            Diseño y desarrollo web moderno, enfocado en rendimiento, estética
            premium y resultados excepcionales para tu negocio.
          </p>

          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <button
              className="btn-primary"
              onClick={() =>
                document
                  .getElementById("portfolio")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Ver Portafolio
            </button>
            <button
              className="btn-secondary"
              onClick={() =>
                document
                  .getElementById("services")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Mis Servicios
            </button>
          </div>
        </motion.div>

        {/* Video Animated Logo Placeholder Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
          className="hero-video-container"
        >
          {/* Glowing backdrop */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              height: "80%",
              background:
                "radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%)",
              filter: "blur(60px)",
              zIndex: 0,
            }}
          />

          {/* Video element */}
          <div
            className="glass"
            style={{
              width: "100%",
              maxWidth: "500px",
              aspectRatio: "1/1",
              borderRadius: "24px",
              overflow: "hidden",
              position: "relative",
              zIndex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="/videos/LogoJC.mp4"
            ></video>
          </div>
        </motion.div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
          @media (max-width: 991px) {
            #home .container {
              grid-template-columns: 1fr;
              text-align: center;
              padding-top: 4rem;
            }
            #home .container > div:first-child {
              align-items: center;
            }
          }
        `,
          }}
        />
      </div>
    </section>
  );
}