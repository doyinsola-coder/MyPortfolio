"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  ChevronDown,
  Menu,
  X,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Code2,
  Zap,
} from "lucide-react"

export default function Portfolio() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Detect reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handler = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-green-600"
            >
              MDA
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-green-600"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="mailto:abdulateefdoyinsolaabdulmubeen@gmail.com"
                className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-gray-800 border-t border-gray-700"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left font-medium ${
                    activeSection === item.id ? "text-green-600" : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="mailto:abdulateefdoyinsolaabdulmubeen@gmail.com"
                className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium text-center"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <HeroSection scrollToSection={scrollToSection} prefersReducedMotion={prefersReducedMotion} />

      {/* About Section */}
      <AboutSection prefersReducedMotion={prefersReducedMotion} />

      {/* Projects Section */}
      <ProjectsSection prefersReducedMotion={prefersReducedMotion} />

      {/* Contact Section */}
      <ContactSection prefersReducedMotion={prefersReducedMotion} />
    </div>
  )
}

/* =================== HERO =================== */
function HeroSection({ scrollToSection, prefersReducedMotion }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 px-4 sm:px-6 lg:px-8 text-center"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0">
          <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-green-600/10 rounded-full blur-3xl -top-20 -left-20 animate-pulse" />
          <div
            className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-green-600/10 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <p className="text-green-600 font-medium mb-2 sm:mb-4 text-sm sm:text-base">Hi, I'm</p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6 px-2 sm:px-0">
            Abdulmubeen Doyinsola <br />
            <span className="text-green-600">Abdulateef</span>
          </h1>
        </motion.div>

        <motion.h2
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300 mb-4 sm:mb-6 px-2 sm:px-0"
        >
          Full Stack Developer & MERN Specialist
        </motion.h2>

        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0"
        >
          Building clean, modern, and production-ready web experiences with React, Tailwind CSS, and Node.js. Passionate
          about creating impactful projects with polished, interactive interfaces.
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors text-sm sm:text-base"
          >
            View My Work
          </button>
          <a
            href="mailto:abdulateefdoyinsolaabdulmubeen@gmail.com"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors border border-gray-700 text-sm sm:text-base text-center"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollToSection("about")}
        animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer group"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center group-hover:border-green-600 transition-colors">
          <motion.div className="w-1 h-2 bg-gray-400 rounded-full mt-2 group-hover:bg-green-600 transition-colors" />
        </div>
        <ChevronDown className="text-gray-400 mt-2 group-hover:text-green-600 transition-colors" size={24} />
      </motion.button>
    </section>
  )
}

/* =================== ABOUT =================== */
function AboutSection({ prefersReducedMotion }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const skills = [
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Tailwind CSS",
    "Framer Motion",
    "JavaScript",
    "Git & GitHub",
    "AOS",
    "Responsive Design",
  ]

  return (
    <section id="about" ref={ref} className="py-20 sm:py-32 bg-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative order-2 lg:order-1 w-full h-80 sm:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-green-600/20 to-gray-800 border border-gray-700 flex items-center justify-center"
        >
          <Code2 className="text-green-600" size={64} />
        </motion.div>

        {/* Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="order-1 lg:order-2"
        >
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">About Me</h2>
            <div className="w-16 h-1 bg-green-600 rounded" />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6 sm:mb-8 space-y-3 sm:space-y-4 text-gray-300">
            <p>
              I'm <span className="text-green-600 font-semibold">Abdulmubeen Doyinsola Abdulateef</span>, a full-stack
              JavaScript developer specializing in the MERN stack. I build clean, modern, production-ready web
              experiences with React, Tailwind CSS, and Node.js.
            </p>
            <p>
              With <span className="text-green-600 font-semibold">2 years of experience</span>, I'm passionate about
              creating projects that solve real-world problems while showcasing polished, interactive interfaces.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-200">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
                  className="px-3 sm:px-4 py-2 sm:py-3 bg-gray-900 rounded-lg text-center font-medium border border-gray-700 hover:border-green-600 transition-all cursor-default text-sm sm:text-base"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* =================== PROJECTS =================== */
function ProjectsSection({ prefersReducedMotion }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      id: 1,
      title: "SkillUp Nigeria",
      description:
        "A comprehensive web learning platform focused on helping Nigerian users upskill via curated courses and interactive lessons.",
      tags: ["React", "Tailwind CSS", "Responsive Design"],
      link: "https://skillup-nigeria-react.vercel.app/",
      image: "/favicon.io.png",
    },
    {
      id: 2,
      title: "SaveSpecies",
      description:
        "An awareness and advocacy site for wildlife conservation designed to engage visitors with compelling visuals and informative content.",
      tags: ["React", "Design", "Content Strategy"],
      link: "https://save-species.vercel.app/",
      image: "/SaveSpecies.jpg",
    },
    {
      id: 3,
      title: "Echoes of Madinah",
      description:
        "A digital platform centered around Islamic engagement, offering Seerah stories, daily reflections and quizzes for spiritual enrichment.",
      tags: ["React", "Content Management", "Interactive Quizzes"],
      link: "https://echoes-of-madinah.vercel.app/",
      image: "/pattern.jpg",
    },
    {
      id: 4,
      title: "DoyinSpace Online Academy",
      description:
        "A frontend only online academy platform showcasing courses, instructor profiles, testimonials and enrollment calls-to-action.",
      tags: ["React", "Course Management", "Modern UI"],
      link: "https://doyinspace-online-academy.vercel.app/",
      image: "/favicon.jpg",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const cardVariants = {
    hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" ref={ref} className="py-20 sm:py-32 bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Featured Projects
        </motion.h2>
        <div className="w-16 h-1 bg-green-600 mx-auto rounded mb-4" />
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A selection of projects demonstrating my skills in front-end, back-end, and full-stack development.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
            className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-green-600 transition-all shadow-lg flex flex-col"
          >
            <div className="h-56 sm:h-64 w-full bg-gray-700 flex items-center justify-center">
              {/* Placeholder Image */}
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 flex-grow">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm px-2 py-1 bg-gray-700 rounded text-gray-300 border border-gray-600 hover:border-green-600 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}

/* =================== CONTACT =================== */
function ContactSection({ prefersReducedMotion }) {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h2>
        <div className="w-16 h-1 bg-green-600 mx-auto rounded mb-4" />
        <p className="text-gray-400 text-lg">
          I'm open to freelance work, full-time opportunities, or just networking. Reach out via email or social
          platforms below.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
        <a
          href="mailto:abdulateefdoyinsolaabdulmubeen@gmail.com"
          className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors text-center w-full sm:w-auto"
        >
          Send Email
        </a>
      </div>

      <div className="flex justify-center gap-6 text-gray-400">
        <a href="https://github.com/doyinsola-coder" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
          <Github size={28} />
        </a>
        <a href="https://linkedin.com/in/doyinspace" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
          <Linkedin size={28} />
        </a>
        <a href="https://twitter.com/md_codes_" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
          <Twitter size={28} />
        </a>
      </div>

      <p className="text-gray-500 text-sm text-center mt-12">
        &copy; {new Date().getFullYear()} Abdulmubeen Doyinsola Abdulateef. All rights reserved.
      </p>
    </section>
  )
}
