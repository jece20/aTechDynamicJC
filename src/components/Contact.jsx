import React from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section"
      style={{
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Hablemos del <span className="text-gradient">Proyecto</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            ¿Tienes una idea en mente? Envíame un mensaje y descubramos cómo
            podemos trabajar juntos para materializarla.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {/* Correo Electrónico */}
          <a
            href="mailto:jhoan7360@gmail.com"
            className="glass contact-card"
            style={{
              padding: "2rem",
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              textDecoration: "none",
              color: "inherit",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "var(--color-surface-hover)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-accent)",
                flexShrink: 0,
              }}
            >
              <Mail size={24} />
            </div>
            <div>
              <h4 style={{ margin: "0 0 0.25rem 0", fontSize: "1.25rem" }}>
                Correo Electrónico
              </h4>
              <p style={{ margin: 0 }}>jhoan7360@gmail.com</p>
            </div>
          </a>

          {/* Ubicación */}
          <div
            className="glass contact-card"
            style={{
              padding: "2rem",
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "var(--color-surface-hover)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-accent)",
                flexShrink: 0,
              }}
            >
              <MapPin size={24} />
            </div>
            <div>
              <h4 style={{ margin: "0 0 0.25rem 0", fontSize: "1.25rem" }}>
                Ubicación
              </h4>
              <p style={{ margin: 0 }}>Bucaramanga, Colombia / Remoto</p>
            </div>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/573115216983?text=Hola%2C%20me%20interesa%20un%20proyecto%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="glass contact-card"
            style={{
              padding: "2rem",
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              textDecoration: "none",
              color: "inherit",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "var(--color-surface-hover)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-accent)",
                flexShrink: 0,
              }}
            >
              <MessageCircle size={24} />
            </div>
            <div>
              <h4 style={{ margin: "0 0 0.25rem 0", fontSize: "1.25rem" }}>
                WhatsApp
              </h4>
              <p style={{ margin: 0 }}>+57 311 521 6983</p>
            </div>
          </a>

          {/* Instagram (4ta Tarjeta) */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass contact-card"
            style={{
              padding: "2rem",
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              textDecoration: "none",
              color: "inherit",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "var(--color-surface-hover)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-accent)",
                flexShrink: 0,
              }}
            >
              <Instagram size={24} />
            </div>
            <div>
              <h4 style={{ margin: "0 0 0.25rem 0", fontSize: "1.25rem" }}>
                Instagram
              </h4>
              <p style={{ margin: 0 }}>Sígueme en redes</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}