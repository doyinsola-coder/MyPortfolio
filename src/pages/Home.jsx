import { desc } from "framer-motion/client";
import { useState, useEffect, useRef } from "react";
import React from "react";
// ─── Brand Colors ────────────────────────────────────────────────────────────
// Navy: #002583  |  Light: #E5E8EF  |  Gold: #FFB800

// ─── SVG Logo (MD-CODES) ─────────────────────────────────────────────────────
const MDCodesLogo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="20,15 55,50 20,85 35,85 70,50 35,15" fill="#FFB800"/>
    <rect x="25" y="42" width="20" height="16" fill="#FFB800" transform="rotate(-5 35 50)"/>
  </svg>
);

// ─── SVG Illustrations ────────────────────────────────────────────────────────
const HeroIllustration = () => (
  <svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="240" cy="240" r="200" stroke="#FFB800" strokeWidth="1" strokeDasharray="8 6" opacity="0.2"/>
    <circle cx="240" cy="240" r="160" stroke="#FFB800" strokeWidth="1" strokeDasharray="4 8" opacity="0.15"/>
    <rect x="100" y="120" width="280" height="180" rx="12" fill="#001a6e" stroke="#FFB800" strokeWidth="2"/>
    <rect x="112" y="132" width="256" height="156" rx="6" fill="#000d3d"/>
    <rect x="126" y="148" width="80" height="8" rx="4" fill="#FFB800" opacity="0.9"/>
    <rect x="126" y="164" width="140" height="6" rx="3" fill="#E5E8EF" opacity="0.4"/>
    <rect x="138" y="178" width="100" height="6" rx="3" fill="#4a9eff" opacity="0.6"/>
    <rect x="138" y="192" width="120" height="6" rx="3" fill="#FFB800" opacity="0.5"/>
    <rect x="126" y="206" width="90" height="6" rx="3" fill="#E5E8EF" opacity="0.4"/>
    <rect x="138" y="220" width="70" height="6" rx="3" fill="#4aff9e" opacity="0.5"/>
    <rect x="138" y="234" width="110" height="6" rx="3" fill="#E5E8EF" opacity="0.3"/>
    <rect x="126" y="250" width="60" height="6" rx="3" fill="#FFB800" opacity="0.7"/>
    <rect x="194" y="250" width="2" height="12" rx="1" fill="#FFB800" opacity="0.9"/>
    <rect x="218" y="300" width="44" height="16" rx="4" fill="#001a6e" stroke="#FFB800" strokeWidth="1.5"/>
    <rect x="195" y="316" width="90" height="10" rx="5" fill="#001a6e" stroke="#FFB800" strokeWidth="1.5"/>
    <g opacity="0.85">
      <rect x="30" y="160" width="54" height="28" rx="14" fill="#001a6e" stroke="#FFB800" strokeWidth="1.5"/>
      <text x="57" y="179" textAnchor="middle" fill="#FFB800" fontSize="11" fontFamily="monospace" fontWeight="bold">React</text>
    </g>
    <g opacity="0.85">
      <rect x="396" y="170" width="54" height="28" rx="14" fill="#001a6e" stroke="#FFB800" strokeWidth="1.5"/>
      <text x="423" y="189" textAnchor="middle" fill="#FFB800" fontSize="10" fontFamily="monospace" fontWeight="bold">Node</text>
    </g>
    <g opacity="0.85">
      <rect x="22" y="260" width="60" height="28" rx="14" fill="#001a6e" stroke="#4aff9e" strokeWidth="1.5"/>
      <text x="52" y="279" textAnchor="middle" fill="#4aff9e" fontSize="10" fontFamily="monospace" fontWeight="bold">Mongo</text>
    </g>
    <g opacity="0.85">
      <rect x="398" y="260" width="60" height="28" rx="14" fill="#001a6e" stroke="#4a9eff" strokeWidth="1.5"/>
      <text x="428" y="279" textAnchor="middle" fill="#4a9eff" fontSize="11" fontFamily="monospace" fontWeight="bold">Next</text>
    </g>
    <circle cx="240" cy="72" r="8" fill="#FFB800" opacity="0.9"/>
    <circle cx="390" cy="140" r="6" fill="#FFB800" opacity="0.6"/>
    <circle cx="80" cy="330" r="6" fill="#FFB800" opacity="0.6"/>
    <circle cx="420" cy="350" r="5" fill="#E5E8EF" opacity="0.4"/>
    <circle cx="240" cy="390" r="38" fill="#001a6e" stroke="#FFB800" strokeWidth="2"/>
    <circle cx="240" cy="378" r="16" fill="#FFB800" opacity="0.8"/>
    <path d="M204 420 Q215 398 240 396 Q265 398 276 420" fill="#FFB800" opacity="0.6"/>
  </svg>
);

const ProjectIllustration = ({ type }) => {
  if (type === "education") return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="320" height="200" fill="#000d3d"/>
      <rect x="30" y="30" width="260" height="140" rx="8" fill="#001a6e" stroke="#FFB800" strokeWidth="1.5"/>
      <polygon points="160,50 200,80 160,110 120,80" fill="#FFB800" opacity="0.9"/>
      <rect x="80" y="125" width="160" height="8" rx="4" fill="#E5E8EF" opacity="0.5"/>
      <rect x="100" y="140" width="120" height="6" rx="3" fill="#E5E8EF" opacity="0.3"/>
      <circle cx="55" cy="55" r="12" fill="#FFB800" opacity="0.3"/>
      <circle cx="265" cy="55" r="8" fill="#FFB800" opacity="0.2"/>
    </svg>
  );
  if (type === "advocacy") return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="320" height="200" fill="#000d3d"/>
      <ellipse cx="160" cy="110" rx="80" ry="55" fill="#001a6e" stroke="#FFB800" strokeWidth="1.5"/>
      <path d="M100 110 Q160 60 220 110 Q160 160 100 110Z" fill="#4aff9e" opacity="0.2"/>
      <circle cx="160" cy="110" r="22" fill="#FFB800" opacity="0.8"/>
      <path d="M148 108 L158 118 L174 100" stroke="#000d3d" strokeWidth="3" strokeLinecap="round"/>
      <rect x="60" y="40" width="200" height="30" rx="6" fill="#001a6e" stroke="#FFB800" strokeWidth="1"/>
      <rect x="75" y="51" width="100" height="8" rx="4" fill="#E5E8EF" opacity="0.6"/>
    </svg>
  );
  if (type === "spiritual") return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="320" height="200" fill="#000d3d"/>
      {[...Array(8)].map((_, i) => (
        <polygon key={i} points={`${160 + 60*Math.cos(i*Math.PI/4)},${100 + 60*Math.sin(i*Math.PI/4)} ${160 + 30*Math.cos((i+0.5)*Math.PI/4)},${100 + 30*Math.sin((i+0.5)*Math.PI/4)} ${160 + 60*Math.cos((i+1)*Math.PI/4)},${100 + 60*Math.sin((i+1)*Math.PI/4)}`} fill="#FFB800" opacity="0.15"/>
      ))}
      <circle cx="160" cy="100" r="40" fill="#001a6e" stroke="#FFB800" strokeWidth="2"/>
      <circle cx="160" cy="100" r="25" fill="#FFB800" opacity="0.2"/>
      <text x="160" y="107" textAnchor="middle" fill="#FFB800" fontSize="22" fontFamily="serif">☽</text>
    </svg>
  );
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="320" height="200" fill="#000d3d"/>
      <rect x="40" y="30" width="240" height="140" rx="10" fill="#001a6e" stroke="#FFB800" strokeWidth="1.5"/>
      <rect x="40" y="30" width="240" height="40" rx="10" fill="#FFB800" opacity="0.15"/>
      <circle cx="62" cy="50" r="7" fill="#ff5f57"/>
      <circle cx="82" cy="50" r="7" fill="#febc2e"/>
      <circle cx="102" cy="50" r="7" fill="#28c840"/>
      <rect x="60" y="90" width="200" height="8" rx="4" fill="#E5E8EF" opacity="0.4"/>
      <rect x="60" y="108" width="150" height="6" rx="3" fill="#FFB800" opacity="0.5"/>
      <rect x="60" y="124" width="180" height="6" rx="3" fill="#E5E8EF" opacity="0.3"/>
      <rect x="60" y="140" width="120" height="6" rx="3" fill="#4a9eff" opacity="0.5"/>
    </svg>
  );
};

const AboutIllustration = () => (
  <svg viewBox="0 0 420 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="420" height="500" rx="20" fill="#001a6e"/>
    {[...Array(12)].map((_, i) => (
      <rect key={i} x={20 + (i%3)*130} y={20 + Math.floor(i/3)*110} width={80 + (i%5)*10} height="8" rx="4" fill="#E5E8EF" opacity="0.06"/>
    ))}
    <circle cx="210" cy="200" r="130" fill="#000d3d" stroke="#FFB800" strokeWidth="3"/>
    <circle cx="210" cy="170" r="55" fill="#FFB800" opacity="0.85"/>
    <path d="M130 300 Q175 255 210 252 Q245 255 290 300" fill="#FFB800" opacity="0.7"/>
    <rect x="60" y="360" width="300" height="110" rx="12" fill="#000d3d" stroke="#FFB800" strokeWidth="1.5"/>
    <rect x="75" y="375" width="160" height="12" rx="6" fill="#FFB800" opacity="0.9"/>
    <rect x="75" y="397" width="220" height="8" rx="4" fill="#E5E8EF" opacity="0.5"/>
    <rect x="75" y="415" width="180" height="8" rx="4" fill="#E5E8EF" opacity="0.35"/>
    <rect x="75" y="433" width="100" height="8" rx="4" fill="#FFB800" opacity="0.5"/>
    <circle cx="70" cy="180" r="18" fill="#000d3d" stroke="#FFB800" strokeWidth="1.5"/>
    <text x="70" y="186" textAnchor="middle" fill="#FFB800" fontSize="13" fontFamily="monospace">{'</>'}</text>
    <circle cx="350" cy="180" r="18" fill="#000d3d" stroke="#FFB800" strokeWidth="1.5"/>
    <text x="350" y="186" textAnchor="middle" fill="#FFB800" fontSize="11" fontFamily="monospace">DB</text>
    <circle cx="210" cy="55" r="14" fill="#FFB800" opacity="0.3"/>
  </svg>
);

// ─── Navbar ────────────────────────────────────────────────────────────────────
const Navbar = ({ active }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["home","projects","about","reviews","journey","contact"];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(0,37,131,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,184,0,0.2)" : "none",
      transition: "all 0.3s ease",
      padding: "0 1.5rem"
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <button onClick={() => scrollTo("home")} style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer" }}>
          <MDCodesLogo size={36} />
          <span style={{ color: "#FFB800", fontWeight: 700, fontSize: 18, fontFamily: "monospace", letterSpacing: 1 }}>MD-CODES</span>
        </button>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }} className="nav-desktop">
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              background: "none", border: "none", cursor: "pointer",
              color: active === l ? "#FFB800" : "rgba(229,232,239,0.7)",
              fontWeight: active === l ? 600 : 400,
              fontSize: 13, textTransform: "capitalize", letterSpacing: 0.5,
              padding: "6px 12px", borderRadius: 20,
              borderBottom: active === l ? "2px solid #FFB800" : "2px solid transparent",
              transition: "all 0.2s"
            }}>{l}</button>
          ))}
          <button onClick={() => scrollTo("contact")} style={{
            background: "#FFB800", color: "#002583", fontWeight: 700,
            fontSize: 13, border: "none", borderRadius: 20,
            padding: "8px 20px", cursor: "pointer", marginLeft: 8,
            transition: "opacity 0.2s"
          }}>Hire Me</button>
        </div>

        <button onClick={() => setMenuOpen(m => !m)} style={{
          background: "none", border: "1px solid rgba(255,184,0,0.4)",
          borderRadius: 8, padding: "6px 10px", cursor: "pointer",
          color: "#FFB800", fontSize: 18, display: "none"
        }} className="nav-hamburger">☰</button>
      </div>

      {menuOpen && (
        <div style={{
          background: "#002583", borderTop: "1px solid rgba(255,184,0,0.2)",
          padding: "1rem 1.5rem"
        }}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)} style={{
              display: "block", width: "100%", textAlign: "left",
              background: "none", border: "none", cursor: "pointer",
              color: "#E5E8EF", fontSize: 15, padding: "10px 0",
              borderBottom: "1px solid rgba(229,232,239,0.08)",
              textTransform: "capitalize"
            }}>{l}</button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

// ─── Main Portfolio ────────────────────────────────────────────────────────────
export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState(null);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setActiveSection(e.target.id);
            setVisibleSections(prev => new Set([...prev, e.target.id]));
          }
        });
      },
      { threshold: 0.3 }
    );
    ["home","projects","about","reviews","journey","contact"].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // ─── WhatsApp Contact Handler ─────────────────────────────────────────────
  const handleSubmit = (e) => {
    e.preventDefault();
    const text =
      `Hello Abdullateef! 👋%0A%0A` +
      `My name is ${encodeURIComponent(formData.name)}%0A` +
      `Email: ${encodeURIComponent(formData.email)}%0A%0A` +
      `${encodeURIComponent(formData.message)}`;
    const whatsappUrl = `https://wa.me/2349035667678?text=${text}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setFormStatus("sent");
    setFormData({ name: "", email: "", message: "" });
  };

  const projects = [
    { id: 1, title: "SkillUp Nigeria", desc: "A comprehensive web learning platform helping Nigerian users upskill via curated courses and interactive lessons.", tags: ["React", "Tailwind CSS", "Responsive"], link: "https://skillup-nigeria-react.vercel.app/", category: "Education", type: "education" },
    { id: 2, title: "SaveSpecies", desc: "An awareness and advocacy site for wildlife conservation with compelling visuals and informative content.", tags: ["React", "Design", "Content"], link: "https://save-species.vercel.app/", category: "Advocacy", type: "advocacy" },
    { id: 3, title: "Echoes of Madinah", desc: "A digital platform for Islamic engagement — Seerah stories, daily reflections, and quizzes for spiritual enrichment.", tags: ["React", "CMS", "Quizzes"], link: "https://echoes-of-madinah.vercel.app/", category: "Spiritual", type: "spiritual" },
    { id: 4, title: "DoyinSpace Academy", desc: "A frontend online academy platform showcasing courses, instructor profiles, testimonials and enrollment CTAs.", tags: ["React", "Modern UI", "Course"], link: "https://doyinspace-online-academy.vercel.app/", category: "Education", type: "academy" },
    {id: 5, title: "TeeNaturals", desc: "A vibrant e-commerce site for a natural skincare brand, featuring product showcases, customer reviews, and a seamless shopping experience.", tags: ["React", "E-commerce", "UI/UX"], link: "https://tee-naturals.vercel.app/", category: "E-commerce", type: "ecommerce"},
  ];

  const reviews = [
    { name: "Fatimah Ohunene", role: "Skincare Specialist", initials: "FO", rating: 4, review: "Clean design, smooth navigation, and excellent work presentation. Truly impressive portfolio." },
    { name: "Temitope", role: "Developer", initials: "TM", rating: 5, review: "Exceptional work with impressive animations and a polished finish. Every detail is considered." },
    { name: "Adam Ismail", role: "Developer", initials: "AI", rating: 5, review: "A perfectly executed portfolio with no noticeable flaws. The articles are insightful too." },
    { name: "Anonymous", role: "Developer", initials: "AN", rating: 3, review: "Cool design with vibrant color palette. The animations add great character to the experience." },
    { name: "Posterity", role: "Developer", initials: "PO", rating: 4, review: "Well-executed portfolio with a distinctive homepage that creates a strong first impression." },
    { name: "Omolola", role: "Student", initials: "OL", rating: 4, review: "Great typography and structure that enhance readability. Very professional and engaging." },
  ];

  const journey = [
    { period: "Oct 2024 – Present", title: "Frontend Developer", company: "Malhub", desc: "Mentoring and coaching young frontend developers with passion and consistency." },
    { period: "Jan 2025 – Present", title: "Frontend Developer", company: "Freelance", desc: "Building responsive and user-friendly web applications for diverse clients. Collaborating closely to deliver tailored solutions that meet business needs." },
    { period: "Aug 2025 – Present", title: "Full Stack Developer", company: "Freelance", desc: "Built full-stack web apps including e-commerce platforms, admin dashboards, authentication systems, and content-driven apps with clean UI, smooth animations, and scalable backends." },
  ];

  const techStack = ["React 19","Tailwind CSS","SASS","Framer Motion","Vercel","Node.js","Express.js","MongoDB","TypeScript","Next.js","Git"];

  const Stars = ({ n }) => (
    <div style={{ display: "flex", gap: 3 }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i <= n ? "#FFB800" : "none"} stroke="#FFB800" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );

  const fadeIn = (id) => visibleSections.has(id) ? { opacity: 1, transform: "translateY(0)" } : { opacity: 0, transform: "translateY(30px)" };
  const transition = { transition: "opacity 0.6s ease, transform 0.6s ease" };

  return (
    <div style={{ background: "#00112e", minHeight: "100vh", fontFamily: "'Segoe UI', system-ui, sans-serif", color: "#E5E8EF" }}>
      <Navbar active={activeSection} />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: 80 }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,184,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,184,0,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px" }}/>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(0,37,131,0.6) 0%, transparent 70%)" }}/>

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center", position: "relative", zIndex: 2, width: "100%" }} className="hero-grid">
          <div style={{ ...fadeIn("home"), ...transition }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,184,0,0.1)", border: "1px solid rgba(255,184,0,0.3)", borderRadius: 20, padding: "6px 16px", marginBottom: "1.5rem" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4aff9e", boxShadow: "0 0 6px #4aff9e", display: "inline-block" }}/>
              <span style={{ fontSize: 13, color: "#FFB800", fontWeight: 500 }}>Available for work</span>
            </div>

            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "1rem", color: "#E5E8EF" }}>
              Hello,<br/>
              <span style={{ color: "#FFB800" }}>I'm Abdullateef</span>
            </h1>

            <p style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", color: "rgba(229,232,239,0.7)", marginBottom: "1.5rem", lineHeight: 1.7 }}>
              Full Stack Developer & MERN Stack Wizard. Building digital web solutions that are performant, accessible, and beautifully crafted.
            </p>

            <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
              {[["5+","Projects"], ["20+","Repositories"], ["1+","Years Exp"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontSize: "2rem", fontWeight: 800, color: "#FFB800" }}>{n}</div>
                  <div style={{ fontSize: 13, color: "rgba(229,232,239,0.6)" }}>{l}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: "2rem" }}>
              <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                style={{ background: "#FFB800", color: "#002583", fontWeight: 700, padding: "12px 28px", borderRadius: 30, textDecoration: "none", fontSize: 14, display: "inline-flex", alignItems: "center", gap: 8, transition: "opacity 0.2s" }}
                onMouseOver={e => e.currentTarget.style.opacity = "0.85"}
                onMouseOut={e => e.currentTarget.style.opacity = "1"}>
                ✉ Get In Touch
              </a>
              <a href="/Abdulateef Doyinsola Abdulmubeen - CV.pdf" download
                style={{ background: "transparent", color: "#E5E8EF", fontWeight: 600, padding: "12px 28px", borderRadius: 30, textDecoration: "none", fontSize: 14, border: "1.5px solid rgba(229,232,239,0.3)", display: "inline-flex", alignItems: "center", gap: 8, transition: "border-color 0.2s" }}
                onMouseOver={e => e.currentTarget.style.borderColor = "#FFB800"}
                onMouseOut={e => e.currentTarget.style.borderColor = "rgba(229,232,239,0.3)"}>
                ↓ Download CV
              </a>
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              {[
                { label: "GitHub", href: "https://github.com/doyinsola-coder", icon: "⌨" },
                { label: "LinkedIn", href: "https://linkedin.com/in/mdcodes", icon: "in" },
                { label: "WhatsApp", href: "https://wa.me/2349035667678", icon: "✉" },
              ].map(s => (
                <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  title={s.label}
                  style={{ width: 44, height: 44, borderRadius: "50%", border: "1.5px solid rgba(255,184,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFB800", textDecoration: "none", fontSize: 14, fontWeight: 700, fontFamily: "monospace", transition: "background 0.2s" }}
                  onMouseOver={e => e.currentTarget.style.background = "rgba(255,184,0,0.15)"}
                  onMouseOut={e => e.currentTarget.style.background = "transparent"}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className="hero-illus">
            <div style={{ width: "min(420px, 90vw)", animation: "float 6s ease-in-out infinite" }}>
              <HeroIllustration />
            </div>
          </div>
        </div>

        <a href="#projects" onClick={e => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
          style={{ position: "absolute", bottom: 30, left: "50%", transform: "translateX(-50%)", color: "#FFB800", textDecoration: "none", animation: "bounce 2s ease-in-out infinite", fontSize: 22 }}>↓</a>
      </section>

      {/* ── PROJECTS ───────────────────────────────────────────────────────────── */}
      <section id="projects" style={{ padding: "6rem 1.5rem", position: "relative" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem", ...fadeIn("projects"), ...transition }}>
            <p style={{ color: "#FFB800", fontSize: 13, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>Portfolio</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#E5E8EF" }}>
              My Top <span style={{ color: "#FFB800" }}>Projects</span>
            </h2>
            <p style={{ color: "rgba(229,232,239,0.6)", maxWidth: 540, margin: "1rem auto 0" }}>
              Highlighting expertise in frontend development and full-stack system design.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {projects.map((p, i) => (
              <div key={p.id} style={{
                background: "rgba(0,37,131,0.4)", border: "1px solid rgba(255,184,0,0.15)",
                borderRadius: 16, overflow: "hidden", transition: "transform 0.3s, border-color 0.3s, box-shadow 0.3s",
                animationDelay: `${i * 0.1}s`, ...fadeIn("projects"), ...transition
              }}
                onMouseOver={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = "rgba(255,184,0,0.5)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(255,184,0,0.12)"; }}
                onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(255,184,0,0.15)"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ height: 180, overflow: "hidden", position: "relative" }}>
                  <ProjectIllustration type={p.type} />
                  <div style={{ position: "absolute", top: 12, left: 12, background: "rgba(0,17,46,0.85)", border: "1px solid rgba(255,184,0,0.5)", borderRadius: 20, padding: "4px 12px", fontSize: 11, color: "#FFB800", fontWeight: 600 }}>
                    {p.category}
                  </div>
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#E5E8EF", marginBottom: 8 }}>{p.title}</h3>
                  <p style={{ fontSize: 13, color: "rgba(229,232,239,0.65)", lineHeight: 1.6, marginBottom: 12 }}>{p.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                    {p.tags.map(t => (
                      <span key={t} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 10, background: "rgba(0,37,131,0.6)", border: "1px solid rgba(255,184,0,0.2)", color: "rgba(229,232,239,0.7)" }}>{t}</span>
                    ))}
                  </div>
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#FFB800", textDecoration: "none" }}
                    onMouseOver={e => e.currentTarget.style.opacity = "0.8"}
                    onMouseOut={e => e.currentTarget.style.opacity = "1"}>
                    View Live ↗
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a href="https://github.com/doyinsola-coder" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", borderRadius: 30, border: "1.5px solid #FFB800", color: "#FFB800", textDecoration: "none", fontSize: 14, fontWeight: 600, transition: "background 0.2s" }}
              onMouseOver={e => e.currentTarget.style.background = "rgba(255,184,0,0.1)"}
              onMouseOut={e => e.currentTarget.style.background = "transparent"}>
              View All on GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────────────────────────── */}
      <section id="about" style={{ padding: "6rem 1.5rem", background: "rgba(0,37,131,0.15)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="about-grid">
          <div style={{ ...fadeIn("about"), ...transition }}>
            <div style={{ maxWidth: 400, margin: "0 auto" }}>
              <AboutIllustration />
            </div>
          </div>

          <div style={{ ...fadeIn("about"), ...transition }}>
            <p style={{ color: "#FFB800", fontSize: 13, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>Overview</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 800, color: "#E5E8EF", marginBottom: "1.25rem" }}>What I Do</h2>
            <p style={{ color: "rgba(229,232,239,0.7)", lineHeight: 1.8, marginBottom: "2rem", fontSize: 15 }}>
              I bridge the gap between complex logic and seamless design. I don't just build interfaces — I build experiences that are high-performance, accessible, and architecturally sound. From pixel-perfect UIs to robust backends, I cover the full spectrum.
            </p>

            <div style={{ background: "rgba(0,37,131,0.5)", border: "1px solid rgba(255,184,0,0.2)", borderRadius: 14, padding: "1.25rem", marginBottom: "2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#E5E8EF", marginBottom: 4 }}>Certifications</h4>
                  <p style={{ fontSize: 13, color: "#FFB800" }}>Simplilearn Platform</p>
                  <p style={{ fontSize: 12, color: "rgba(229,232,239,0.5)" }}>13 Hard · 20 Soft Skills</p>
                </div>
                <div style={{ background: "#FFB800", borderRadius: 10, padding: "6px 14px", fontSize: 12, fontWeight: 700, color: "#002583" }}>MERN</div>
              </div>
              <p style={{ fontSize: 13, color: "rgba(229,232,239,0.6)", marginBottom: 12, lineHeight: 1.6 }}>
                Built a solid foundation in MongoDB, Express.js, React, and Node.js — creating full-stack apps with authentication, CRUD, and responsive UIs.
              </p>
              <div style={{ background: "rgba(0,17,46,0.6)", borderRadius: 8, height: 6, overflow: "hidden", marginBottom: 10 }}>
                <div style={{ height: "100%", width: "21%", background: "linear-gradient(90deg, #FFB800, #002583)", borderRadius: 8 }}/>
              </div>
              <a href="https://res.cloudinary.com/decgjhtlb/image/upload/v1768944666/cert_p5i4cy.jpg" target="_blank" rel="noopener noreferrer"
                style={{ fontSize: 13, color: "#FFB800", textDecoration: "none" }}>View Certificate ↗</a>
            </div>

            <div>
              <p style={{ fontSize: 12, color: "#FFB800", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Technical Arsenal</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {techStack.map(t => (
                  <span key={t} style={{
                    fontSize: 12, padding: "5px 14px", borderRadius: 20,
                    background: "rgba(0,37,131,0.6)", border: "1px solid rgba(255,184,0,0.25)",
                    color: "rgba(229,232,239,0.8)", transition: "border-color 0.2s, color 0.2s", cursor: "default"
                  }}
                    onMouseOver={e => { e.currentTarget.style.borderColor = "#FFB800"; e.currentTarget.style.color = "#FFB800"; }}
                    onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,184,0,0.25)"; e.currentTarget.style.color = "rgba(229,232,239,0.8)"; }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ────────────────────────────────────────────────────────────── */}
      <section id="reviews" style={{ padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: "3.5rem", ...fadeIn("reviews"), ...transition }}>
            <p style={{ color: "#FFB800", fontSize: 13, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>Testimonials</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#E5E8EF" }}>
              Client <span style={{ color: "#FFB800" }}>Reviews</span>
            </h2>
            <p style={{ color: "rgba(229,232,239,0.6)", maxWidth: 500, marginTop: "0.75rem" }}>
              Don't take my word for it — here's what people say about my work.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {reviews.map((r, i) => (
              <div key={i} style={{
                background: "rgba(0,37,131,0.4)", border: "1px solid rgba(255,184,0,0.12)",
                borderRadius: 16, padding: "1.5rem", transition: "transform 0.3s, border-color 0.3s",
                ...fadeIn("reviews"), ...transition
              }}
                onMouseOver={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "rgba(255,184,0,0.4)"; }}
                onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(255,184,0,0.12)"; }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 46, height: 46, borderRadius: "50%", background: "linear-gradient(135deg, #002583, #FFB800)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, color: "#E5E8EF", flexShrink: 0 }}>
                    {r.initials}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#E5E8EF" }}>{r.name}</div>
                    <div style={{ fontSize: 12, color: "rgba(229,232,239,0.5)" }}>{r.role}</div>
                  </div>
                </div>
                <Stars n={r.rating} />
                <p style={{ fontSize: 13, color: "rgba(229,232,239,0.75)", lineHeight: 1.7, marginTop: 12 }}>{r.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY ────────────────────────────────────────────────────────────── */}
      <section id="journey" style={{ padding: "6rem 1.5rem", background: "rgba(0,37,131,0.15)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem", ...fadeIn("journey"), ...transition }}>
            <p style={{ color: "#FFB800", fontSize: 13, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>Experience</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#E5E8EF" }}>
              My <span style={{ color: "#FFB800" }}>Journey</span>
            </h2>
          </div>

          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, #FFB800, rgba(0,37,131,0.3))", borderRadius: 2 }}/>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {journey.map((j, i) => (
                <div key={i} style={{ paddingLeft: 60, position: "relative", ...fadeIn("journey"), ...transition }}>
                  <div style={{ position: "absolute", left: 13, top: 18, width: 16, height: 16, borderRadius: "50%", background: "#FFB800", border: "3px solid #00112e", boxShadow: "0 0 12px rgba(255,184,0,0.5)" }}/>

                  <div style={{
                    background: "rgba(0,37,131,0.45)", border: "1px solid rgba(255,184,0,0.15)",
                    borderRadius: 14, padding: "1.5rem", transition: "border-color 0.3s"
                  }}
                    onMouseOver={e => e.currentTarget.style.borderColor = "rgba(255,184,0,0.4)"}
                    onMouseOut={e => e.currentTarget.style.borderColor = "rgba(255,184,0,0.15)"}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,184,0,0.1)", border: "1px solid rgba(255,184,0,0.3)", borderRadius: 20, padding: "4px 12px", marginBottom: 12 }}>
                      <span style={{ fontSize: 12, color: "#FFB800", fontWeight: 600 }}>◉ {j.period}</span>
                    </div>
                    <h3 style={{ fontSize: 20, fontWeight: 800, color: "#E5E8EF", marginBottom: 4 }}>{j.title}</h3>
                    <p style={{ fontSize: 13, color: "#FFB800", marginBottom: 10 }}>{j.company}</p>
                    <p style={{ fontSize: 14, color: "rgba(229,232,239,0.7)", lineHeight: 1.7 }}>{j.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────────────────────── */}
      <section id="contact" style={{ padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", ...fadeIn("contact"), ...transition }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#FFB800", fontSize: 13, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>Contact</p>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#E5E8EF" }}>
              Get In <span style={{ color: "#FFB800" }}>Touch</span>
            </h2>
            <p style={{ color: "rgba(229,232,239,0.6)", marginTop: "0.75rem" }}>
              Have a project in mind? Fill in the form and I'll reply on WhatsApp.
            </p>
          </div>

          {/* WhatsApp direct badge */}
          <a
            href="https://wa.me/2349035667678"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: 12,
              background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.35)",
              borderRadius: 14, padding: "14px 20px", marginBottom: "2rem",
              textDecoration: "none", transition: "background 0.2s"
            }}
            onMouseOver={e => e.currentTarget.style.background = "rgba(37,211,102,0.18)"}
            onMouseOut={e => e.currentTarget.style.background = "rgba(37,211,102,0.1)"}>
            {/* WhatsApp SVG icon */}
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#25D366"/>
              <path d="M22.5 9.5A8.9 8.9 0 0 0 16 7a8.96 8.96 0 0 0-7.74 13.44L7 25l4.7-1.23A8.95 8.95 0 0 0 16 25a8.96 8.96 0 0 0 6.5-15.5zm-6.5 13.76a7.44 7.44 0 0 1-3.79-1.04l-.27-.16-2.79.73.75-2.72-.18-.28A7.46 7.46 0 1 1 16 23.26zm4.09-5.59c-.22-.11-1.32-.65-1.52-.73s-.35-.11-.5.11-.57.73-.7.88-.26.17-.48.06a6.08 6.08 0 0 1-1.79-1.1 6.73 6.73 0 0 1-1.24-1.54c-.13-.22 0-.34.1-.45s.22-.26.33-.39a1.5 1.5 0 0 0 .22-.37.41.41 0 0 0-.02-.39c-.06-.11-.5-1.2-.68-1.64s-.36-.37-.5-.38h-.42a.81.81 0 0 0-.59.28 2.47 2.47 0 0 0-.77 1.84 4.29 4.29 0 0 0 .9 2.27 9.84 9.84 0 0 0 3.77 3.33c.53.23.94.37 1.26.47a3.03 3.03 0 0 0 1.39.09 2.27 2.27 0 0 0 1.49-1.05 1.84 1.84 0 0 0 .13-1.05c-.06-.09-.2-.15-.42-.26z" fill="white"/>
            </svg>
            <div>
              <p style={{ fontSize: 13, color: "#25D366", fontWeight: 700, margin: 0 }}>Chat directly on WhatsApp</p>
              <p style={{ fontSize: 12, color: "rgba(229,232,239,0.5)", margin: 0 }}>+234 903 566 7678 · Usually replies fast</p>
            </div>
            <span style={{ marginLeft: "auto", color: "#25D366", fontSize: 18 }}>↗</span>
          </a>

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { name: "name", label: "Your Name", type: "text", placeholder: "Abdullateef..." },
              { name: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
            ].map(f => (
              <div key={f.name}>
                <label style={{ display: "block", fontSize: 12, color: "rgba(229,232,239,0.6)", marginBottom: 6, letterSpacing: 1, textTransform: "uppercase" }}>{f.label}</label>
                <input
                  type={f.type}
                  value={formData[f.name]}
                  onChange={e => setFormData(d => ({ ...d, [f.name]: e.target.value }))}
                  placeholder={f.placeholder}
                  required
                  style={{
                    width: "100%", padding: "12px 16px", borderRadius: 10,
                    background: "rgba(0,37,131,0.4)", border: "1px solid rgba(255,184,0,0.2)",
                    color: "#E5E8EF", fontSize: 14, outline: "none", boxSizing: "border-box",
                    transition: "border-color 0.2s"
                  }}
                  onFocus={e => e.target.style.borderColor = "#FFB800"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,184,0,0.2)"}
                />
              </div>
            ))}
            <div>
              <label style={{ display: "block", fontSize: 12, color: "rgba(229,232,239,0.6)", marginBottom: 6, letterSpacing: 1, textTransform: "uppercase" }}>Message</label>
              <textarea
                value={formData.message}
                onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                placeholder="Tell me about your project..."
                rows={5}
                required
                style={{
                  width: "100%", padding: "12px 16px", borderRadius: 10,
                  background: "rgba(0,37,131,0.4)", border: "1px solid rgba(255,184,0,0.2)",
                  color: "#E5E8EF", fontSize: 14, outline: "none", resize: "vertical", boxSizing: "border-box",
                  fontFamily: "inherit", transition: "border-color 0.2s"
                }}
                onFocus={e => e.target.style.borderColor = "#FFB800"}
                onBlur={e => e.target.style.borderColor = "rgba(255,184,0,0.2)"}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start" }}>
              <button
                type="submit"
                disabled={formStatus === "sending"}
                style={{
                  background: formStatus === "sent" ? "#25D366" : "#FFB800",
                  color: formStatus === "sent" ? "#fff" : "#002583",
                  fontWeight: 700, fontSize: 15,
                  border: "none", borderRadius: 30, padding: "14px 32px",
                  cursor: formStatus === "sending" ? "not-allowed" : "pointer",
                  transition: "opacity 0.2s, background 0.3s",
                  display: "inline-flex", alignItems: "center", gap: 10
                }}
                onMouseOver={e => { if (formStatus !== "sending") e.currentTarget.style.opacity = "0.85"; }}
                onMouseOut={e => e.currentTarget.style.opacity = "1"}>
                {/* WhatsApp icon inside button */}
                <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill={formStatus === "sent" ? "rgba(255,255,255,0.25)" : "#002583"} opacity="0.3"/>
                  <path d="M22.5 9.5A8.9 8.9 0 0 0 16 7a8.96 8.96 0 0 0-7.74 13.44L7 25l4.7-1.23A8.95 8.95 0 0 0 16 25a8.96 8.96 0 0 0 6.5-15.5zm-6.5 13.76a7.44 7.44 0 0 1-3.79-1.04l-.27-.16-2.79.73.75-2.72-.18-.28A7.46 7.46 0 1 1 16 23.26zm4.09-5.59c-.22-.11-1.32-.65-1.52-.73s-.35-.11-.5.11-.57.73-.7.88-.26.17-.48.06a6.08 6.08 0 0 1-1.79-1.1 6.73 6.73 0 0 1-1.24-1.54c-.13-.22 0-.34.1-.45s.22-.26.33-.39a1.5 1.5 0 0 0 .22-.37.41.41 0 0 0-.02-.39c-.06-.11-.5-1.2-.68-1.64s-.36-.37-.5-.38h-.42a.81.81 0 0 0-.59.28 2.47 2.47 0 0 0-.77 1.84 4.29 4.29 0 0 0 .9 2.27 9.84 9.84 0 0 0 3.77 3.33c.53.23.94.37 1.26.47a3.03 3.03 0 0 0 1.39.09 2.27 2.27 0 0 0 1.49-1.05 1.84 1.84 0 0 0 .13-1.05c-.06-.09-.2-.15-.42-.26z" fill={formStatus === "sent" ? "white" : "#002583"}/>
                </svg>
                {formStatus === "sending" ? "Opening WhatsApp..." : formStatus === "sent" ? "✓ WhatsApp Opened!" : "Send via WhatsApp →"}
              </button>
              <p style={{ fontSize: 12, color: "rgba(229,232,239,0.4)", margin: 0 }}>
                Your message will open pre-filled in WhatsApp for you to send.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid rgba(255,184,0,0.15)", padding: "2.5rem 1.5rem", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 16 }}>
          <MDCodesLogo size={30} />
          <span style={{ color: "#FFB800", fontWeight: 700, fontFamily: "monospace", fontSize: 16 }}>MD-CODES</span>
        </div>
        <p style={{ fontSize: 13, color: "rgba(229,232,239,0.4)", marginBottom: 16 }}>Building Digital Web Solutions</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
          {["home","projects","about","reviews","journey","contact"].map(l => (
            <button key={l} onClick={() => document.getElementById(l)?.scrollIntoView({ behavior: "smooth" })}
              style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(229,232,239,0.5)", fontSize: 12, textTransform: "capitalize", transition: "color 0.2s" }}
              onMouseOver={e => e.currentTarget.style.color = "#FFB800"}
              onMouseOut={e => e.currentTarget.style.color = "rgba(229,232,239,0.5)"}>
              {l}
            </button>
          ))}
        </div>
        <p style={{ fontSize: 12, color: "rgba(229,232,239,0.25)", marginTop: 20 }}>
          © 2025 Abdullateef Doyinsola Abdulmubeen · All rights reserved
        </p>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-8px); }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-illus { display: none !important; }
          .about-grid { grid-template-columns: 1fr !important; }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::placeholder { color: rgba(229,232,239,0.3); }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}