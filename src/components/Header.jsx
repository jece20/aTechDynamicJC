import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Servicios", href: "#services" },
    { name: "Portafolio", href: "#portfolio" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        background: isScrolled ? "rgba(10, 10, 10, 0.8)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled
          ? "1px solid var(--color-border)"
          : "1px solid transparent",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "80px",
        }}
      >
        {/* Logo + Brand Name */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            fontFamily: "var(--font-heading)",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            cursor: "pointer",
          }}
        >
          <img
            src="/logo1.webp"
            alt="TechDynamic Logo"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              objectFit: "cover",
              border: "1px solid var(--color-border)",
            }}
          />
          <span>
            <span className="text-gradient">Tech</span>
            <span className="text-accent-gradient">Dynamic</span>
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav style={{ display: "none" }} className="nav-desktop">
          <ul style={{ display: "flex", gap: "2rem", listStyle: "none" }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  style={{
                    color: "var(--color-text-primary)",
                    textDecoration: "none",
                    fontWeight: 500,
                    transition: "color 0.2s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.color = "var(--color-accent)")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.color = "var(--color-text-primary)")
                  }
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button */}
        <div style={{ display: "none" }} className="action-btn-desktop">
          <button
            className="btn-primary"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Hablemos
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="mobile-toggle"
          style={{
            background: "transparent",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            display: "block",
            zIndex: 60,
          }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Inline styles for media queries */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @media (min-width: 768px) {
            .nav-desktop { display: block !important; }
            .action-btn-desktop { display: block !important; }
            .mobile-toggle { display: none !important; }
          }
        `,
          }}
        />
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "absolute",
              top: "80px",
              left: 0,
              right: 0,
              background: "var(--color-surface)",
              backdropFilter: "blur(16px)",
              borderBottom: "1px solid var(--color-border)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: "#fff",
                  fontSize: "1.2rem",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                {link.name}
              </a>
            ))}
            <button
              className="btn-primary"
              style={{ width: "100%", marginTop: "1rem" }}
              onClick={() => {
                setMobileMenuOpen(false);
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contactar
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}