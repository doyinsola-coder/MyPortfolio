import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown, ExternalLink, Star, Circle } from 'lucide-react';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTypescript, SiNextdotjs, SiTailwindcss, SiSass, SiFramer, SiVercel, SiGit,  } from 'react-icons/si';

const PortfolioPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const technologies = [
    { name: 'MongoDB', Icon: SiMongodb },
    { name: 'Express', Icon: SiExpress },
    { name: 'React', Icon: SiReact },
    { name: 'Node.js', Icon: SiNodedotjs },
    { name: 'TypeScript', Icon: SiTypescript }
  ];

const projects = [
    {
      id: 1,
      title: "SkillUp Nigeria",
      description: "A comprehensive web learning platform focused on helping Nigerian users upskill via curated courses and interactive lessons.",
      tags: ["React", "Tailwind CSS", "Responsive Design"],
      link: "https://skillup-nigeria-react.vercel.app/",
      image: "/favicon.io.png",
    },
    {
      id: 2,
      title: "SaveSpecies",
      description: "An awareness and advocacy site for wildlife conservation designed to engage visitors with compelling visuals and informative content.",
      tags: ["React", "Design", "Content Strategy"],
      link: "https://save-species.vercel.app/",
      image: "/SaveSpecies.jpg",
    },
    {
      id: 3,
      title: "Echoes of Madinah",
      description: "A digital platform centered around Islamic engagement, offering Seerah stories, daily reflections and quizzes for spiritual enrichment.",
      tags: ["React", "Content Management", "Interactive Quizzes"],
      link: "https://echoes-of-madinah.vercel.app/",
      image: "/pattern.jpg",
    },
    {
      id: 4,
      title: "DoyinSpace Online Academy",
      description: "A frontend only online academy platform showcasing courses, instructor profiles, testimonials and enrollment calls-to-action.",
      tags: ["React", "Course Management", "Modern UI"],
      link: "https://doyinspace-online-academy.vercel.app/",
      image: "/favicon.jpg",
    },
  ];

  const techStack = {
    frontend: [
      { name: "React 19", Icon: SiReact },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "SASS", Icon: SiSass },
      { name: "Framer Motion", Icon: SiFramer },
      { name: "Vercel", Icon: SiVercel },
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express.js", Icon: SiExpress },
      { name: "MongoDB", Icon: SiMongodb },
    ],
   backend: [
      { name: "Git", Icon: SiGit }
    ]
  };

  // Easy to edit - Add your reviews here
  const reviews = [
    {
      id: 1,
      name: "Fatimah Ohunene",
      role: "Skincare Specialist",
      avatar: "AD",
      rating: 4,
      review: "Clean design, smooth navigation, and excellent work presentation...."
    },
    {
      id: 2,
      name: "Temitope",
      role: "Developer",
      avatar: "T",
      rating: 5,
      review: "Exceptional work with impressive animations and a polished..."
    },
    {
      id: 3,
      name: "Adam Ismail",
      role: "Developer",
      avatar: "CD",
      rating: 5,
      review: "A perfectly executed portfolio with no noticeable flaws. The articles..."
    },
    {
      id: 4,
      name: "Anonymous",
      role: "Developer",
      avatar: "A",
      rating: 3,
      review: "Cool design with vibrant color palette..."
    },
    {
      id: 5,
      name: "Posterity",
      role: "Developer",
      avatar: "K",
      rating: 4,
      review: "Well-executed portfolio with a distinctive homepage that creates..."
    },
    {
      id: 6,
      name: "omolola",
      role: "Student",
      avatar: "F",
      rating: 4,
      review: "Great typography and structure that enhance readability..."
    }
  ];

  // Easy to edit - Add your work experience here
  const journeyItems = [
    {
      id: 1,
      period: "Oct 2024 - Present",
      title: "Frontend Developer",
      company: "Malhub",
      description: "Mentoring and coaching young frontend developers with passion and consistency  ."
    },
    {
      id: 2,
      period: "Jan 2025 - Present",
      title: "Frontend Developer",
      company: "Freelance",
      description: "Building responsive and user-friendly web applications for diverse clients. Collaborating closely to deliver tailored solutions that meet business needs."
    },
    {
      id: 3,
      period: "Aug 2025 - present",
      title: "Full Stack Developer",
      company: "Freelance",
      description: " Built full-stack web apps including e-commerce platforms, admin dashboards, authentication systems, and content-driven apps with clean UI, smooth animations, and scalable backends."
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'fill-[#FFC800] text-[#FFC800]' : 'fill-none text-[#EBEBEB]/30'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen bg-black overflow-hidden flex items-center pt-20">
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-full"
              style={{
                left: `${i * 5}%`,
                width: '2px',
                background: `linear-gradient(to bottom, transparent, #10367D, transparent)`,
                animation: `wave ${2 + i * 0.1}s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`
              }}
            ></div>
          ))}
        </div>

        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                backgroundColor: i % 2 === 0 ? '#10367D' : '#FFC800',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.6
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-left space-y-4 sm:space-y-6">
              <div className="overflow-hidden">
                <h1
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#EBEBEB] mb-2 sm:mb-4"
                  style={{ animation: 'slideUp 1s ease-out' }}
                >
                  Hello
                </h1>
              </div>

              <div className="overflow-hidden">
                <p
                  className="text-lg sm:text-xl md:text-2xl text-[#EBEBEB]/80 mb-2"
                  style={{ animation: 'slideUp 1s ease-out 0.2s both' }}
                >
                  I'm <span className="text-[#FFC800] font-semibold">Abdullateef Doyinsola Abdulmubeen</span>
                </p>
              </div>

              <div className="overflow-hidden">
                <p
                  className="text-base sm:text-lg md:text-xl text-[#EBEBEB]/70 mb-4 sm:mb-6"
                  style={{ animation: 'slideUp 1s ease-out 0.3s both' }}
                >
                  A Full Stack Developer & MERN Stack Wizard...
                </p>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-6 sm:mb-8"
                style={{ animation: 'slideUp 1s ease-out 0.4s both' }}
              >
                <div>
                  <div className="text-4xl sm:text-5xl font-bold text-[#FFC800] mb-1">5+</div>
                  <div className="text-sm sm:text-base text-[#EBEBEB]/70">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl font-bold text-[#FFC800] mb-1">20+</div>
                  <div className="text-sm sm:text-base text-[#EBEBEB]/70">Repositories</div>
                </div>
              </div>

              <div
                className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8"
                style={{ animation: 'slideUp 1s ease-out 0.5s both' }}
              >
                {technologies.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="group relative"
                    style={{
                      animation: `bounce 2s ease-in-out infinite`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#10367D]/30 backdrop-blur-sm border-2 border-[#10367D] rounded-lg flex items-center justify-center text-[#EBEBEB] hover:border-[#FFC800] hover:bg-[#10367D]/50 hover:text-[#FFC800] transition-all duration-300 cursor-pointer">
                      <tech.Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-[#EBEBEB] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
                style={{ animation: 'slideUp 1s ease-out 0.6s both' }}
              >
                <a
                  href="#contact"
                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-[#FFC800] text-black font-semibold rounded-full hover:bg-[#10367D] hover:text-[#FFC800] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#FFC800]/50 hover:shadow-[#10367D]/50 text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  Get In Touch
                </a>
                <a
                  href="/Abdulateef Doyinsola Abdulmubeen - CV.pdf"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-[#10367D] text-[#EBEBEB] font-semibold rounded-full hover:bg-[#10367D] hover:border-[#FFC800] transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Download CV
                </a>
              </div>

              <div
                className="flex gap-3 sm:gap-4 pt-4"
                style={{ animation: 'slideUp 1s ease-out 0.7s both' }}
              >
                {[
                  { icon: Github, href: 'https://github.com/doyinsola-coder', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/mdcode', label: 'LinkedIn' },
                  { icon: Mail, href: '#contact', label: 'Email' }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-[#10367D]/30 backdrop-blur-sm border-2 border-[#10367D] rounded-full flex items-center justify-center text-[#EBEBEB] hover:border-[#FFC800] hover:text-[#FFC800] hover:bg-[#10367D]/50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div
              className="relative mt-8 lg:mt-0"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            >
              <div className="relative w-full max-w-sm sm:max-w-md mx-auto" style={{ animation: 'fadeIn 1.5s ease-out 0.5s both' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#10367D] via-[#FFC800] to-[#10367D] rounded-full blur-3xl opacity-30 animate-pulse"></div>
                
                <div className="relative rounded-full overflow-hidden border-4 border-[#10367D] shadow-2xl shadow-[#10367D]/50">
                  <div className="aspect-square bg-gradient-to-br from-[#10367D] to-black">
                    <img 
                      src="/hero1.jpg" 
                      alt="Abdullateef Doyinsola Abdulmubeen - Full Stack Developer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="absolute inset-0">
                  {[0, 120, 240].map((rotation, i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 w-full h-full"
                      style={{
                        animation: `orbit ${10 + i * 2}s linear infinite`,
                        transformOrigin: 'center'
                      }}
                    >
                      <div
                        className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-[#FFC800] rounded-full shadow-lg shadow-[#FFC800]/50"
                        style={{
                          top: '-8px',
                          left: '50%',
                          transform: 'translateX(-50%)'
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#projects"
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-[#EBEBEB] hover:text-[#FFC800] transition-colors"
          style={{ animation: 'bounce 2s ease-in-out infinite' }}
        >
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
        </a>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="relative min-h-screen bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute h-full"
              style={{
                left: `${i * 6.66}%`,
                width: '2px',
                background: `linear-gradient(to bottom, transparent, #10367D, transparent)`,
                animation: `wave ${3 + i * 0.15}s ease-in-out infinite`,
                animationDelay: `${i * 0.15}s`
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16" style={{ animation: 'fadeInUp 1s ease-out' }}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#EBEBEB] mb-4">
              My Top <span className="text-[#FFC800]">Projects</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#EBEBEB]/70 max-w-3xl mx-auto px-4">
              Highlighting expertise in frontend development and system design.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-gradient-to-br from-[#10367D]/20 to-black/40 backdrop-blur-sm border border-[#10367D]/50 rounded-3xl overflow-hidden hover:border-[#FFC800]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FFC800]/20"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
                }}
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gradient-to-br from-[#10367D] to-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 sm:w-10 sm:h-10 bg-[#FFC800] rounded-full flex items-center justify-center text-black hover:bg-[#10367D] hover:text-[#FFC800] transition-all duration-300 shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 sm:w-10 sm:h-10 bg-[#10367D] rounded-full flex items-center justify-center text-[#EBEBEB] hover:bg-[#FFC800] hover:text-black transition-all duration-300 shadow-lg"
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-black/60 backdrop-blur-sm border border-[#FFC800]/50 text-[#FFC800] text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-[#EBEBEB] mb-2 group-hover:text-[#FFC800] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#EBEBEB]/70 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 h-1 w-0 bg-gradient-to-r from-[#FFC800] to-[#10367D] group-hover:w-full transition-all duration-700"></div>
                </div>

                <div className="absolute -inset-1 bg-gradient-to-r from-[#FFC800] via-[#10367D] to-[#FFC800] rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16" style={{ animation: 'fadeInUp 1s ease-out 0.8s both' }}>
            <a
              href="#all-projects"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-[#FFC800] text-[#FFC800] font-semibold rounded-full hover:bg-[#FFC800] hover:text-black transition-all duration-300 shadow-lg shadow-[#FFC800]/20 hover:shadow-[#FFC800]/40 text-sm sm:text-base"
            >
              View All Projects
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="relative min-h-screen bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute h-full"
              style={{
                left: `${i * 6.66}%`,
                width: '2px',
                background: `linear-gradient(to bottom, transparent, #10367D, transparent)`,
                animation: `wave ${3 + i * 0.15}s ease-in-out infinite`,
                animationDelay: `${i * 0.15}s`
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="relative" style={{ animation: 'fadeInLeft 1s ease-out' }}>
              <div className="relative rounded-3xl overflow-hidden border-4 border-[#10367D] shadow-2xl shadow-[#10367D]/50">
                <img 
                  src="/img2.jpg" 
                  alt="Abdulmubeen"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#EBEBEB]">Abdullateef Doyinsola Abdulmubeen</h3>
                </div>
              </div>
            </div>

            <div className="space-y-8" style={{ animation: 'fadeInRight 1s ease-out' }}>
              <div>
                <p className="text-xs sm:text-sm text-[#FFC800] uppercase tracking-wider mb-3">OVERVIEW</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#EBEBEB] mb-4 sm:mb-6">What I Do</h2>
                <p className="text-sm sm:text-base md:text-lg text-[#EBEBEB]/70 leading-relaxed">
                  I bridge the gap between complex logic and seamless design. I don't just build interfaces; I build experiences that are high-performance, accessible, and architecturally sound.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#10367D]/20 to-black/40 backdrop-blur-sm border border-[#10367D]/50 rounded-2xl p-4 sm:p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-[#EBEBEB] mb-2">Certifications</h3>
                    <p className="text-sm sm:text-base text-[#FFC800] mb-1">Hard Skill • Simplilearn</p>
                    <p className="text-xs sm:text-sm text-[#EBEBEB]/60">(13 Hard • 20 Soft)</p>
                  </div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#10367D]/30 backdrop-blur-sm border-2 border-[#10367D] rounded-xl flex items-center justify-center">
                    <img src="/simplilearn-logo.jpg" alt="Simplilearn" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg font-semibold text-[#EBEBEB] mb-2">MERN</h4>
                  <p className="text-xs sm:text-sm text-[#EBEBEB]/70 mb-3">
                   Built a solid foundation in the MERN stack by learning and implementing MongoDB for databases, Express.js for backend APIs, React for dynamic frontends, and Node.js for server-side logic, while connecting them to create full-stack applications with authentication, CRUD operations, and responsive UIs
                  </p>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm text-[#EBEBEB]/60">7/33</span>
                  </div>
                  <div className="w-full h-2 bg-[#10367D]/30 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#FFC800] to-[#10367D] rounded-full" style={{ width: '21%' }}></div>
                  </div>
                </div>

                <a
                  href="https://res.cloudinary.com/decgjhtlb/image/upload/v1768944666/cert_p5i4cy.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm sm:text-base text-[#FFC800] hover:text-[#EBEBEB] transition-colors"
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div>
                    <p className="text-xs sm:text-sm text-[#FFC800] uppercase tracking-wider mb-2">TECHNICAL ARSENAL</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#EBEBEB]">The Stack</h2>
                  </div>
                  <button className="px-4 sm:px-6 py-2 bg-[#10367D]/30 border border-[#10367D] text-[#FFC800] rounded-full text-xs sm:text-sm font-semibold hover:bg-[#10367D]/50 transition-all">
                    Tools
                  </button>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm sm:text-base text-[#FFC800] uppercase tracking-wider mb-3 sm:mb-4">CORE FRONTEND</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {techStack.frontend.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#10367D]/20 border border-[#10367D]/50 rounded-full hover:border-[#FFC800]/50 hover:bg-[#10367D]/30 transition-all group"
                      >
                        <tech.Icon className="w-4 h-4 text-[#EBEBEB] group-hover:text-[#FFC800] transition-colors" />
                        <span className="text-xs sm:text-sm text-[#EBEBEB]/80 group-hover:text-[#EBEBEB] transition-colors">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm sm:text-base text-[#FFC800] uppercase tracking-wider mb-3 sm:mb-4">ENGINEERING & STATE</h3>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {techStack.backend.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#10367D]/20 border border-[#10367D]/50 rounded-full hover:border-[#FFC800]/50 hover:bg-[#10367D]/30 transition-all group"
                      >
                        <tech.Icon className="w-4 h-4 text-[#EBEBEB] group-hover:text-[#FFC800] transition-colors" />
                        <span className="text-xs sm:text-sm text-[#EBEBEB]/80 group-hover:text-[#EBEBEB] transition-colors">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT REVIEWS SECTION */}
      <section id="reviews" className="relative min-h-screen bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute h-full"
              style={{
                left: `${i * 6.66}%`,
                width: '2px',
                background: `linear-gradient(to bottom, transparent, #10367D, transparent)`,
                animation: `wave ${3 + i * 0.15}s ease-in-out infinite`,
                animationDelay: `${i * 0.15}s`
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12 sm:mb-16" style={{ animation: 'fadeInUp 1s ease-out' }}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#EBEBEB] mb-4">
              Client <span className="text-[#FFC800]">Reviews</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#EBEBEB]/70 max-w-2xl">
              Don't just take my word for it. Here is what people are saying about my work.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className="group relative bg-gradient-to-br from-[#10367D]/20 to-black/40 backdrop-blur-sm border border-[#10367D]/50 rounded-2xl p-5 sm:p-6 hover:border-[#FFC800]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#FFC800]/20"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`
                }}
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#10367D] to-[#FFC800] flex items-center justify-center text-[#EBEBEB] font-bold text-base sm:text-lg">
                    {review.avatar}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#EBEBEB] group-hover:text-[#FFC800] transition-colors">
                      {review.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#EBEBEB]/60">{review.role}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <StarRating rating={review.rating} />
                </div>

                <p className="text-sm sm:text-base text-[#EBEBEB]/80 leading-relaxed">
                  {review.review}
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFC800] to-[#10367D] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>

                <div className="absolute -inset-1 bg-gradient-to-r from-[#FFC800] via-[#10367D] to-[#FFC800] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MY JOURNEY SECTION */}
      <section id="journey" className="relative min-h-screen bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute h-full"
              style={{
                left: `${i * 6.66}%`,
                width: '2px',
                background: `linear-gradient(to bottom, transparent, #10367D, transparent)`,
                animation: `wave ${3 + i * 0.15}s ease-in-out infinite`,
                animationDelay: `${i * 0.15}s`
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16" style={{ animation: 'fadeInUp 1s ease-out' }}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#EBEBEB] mb-4">
              My <span className="text-[#FFC800]">Journey</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FFC800] via-[#10367D] to-[#FFC800] opacity-30"></div>

            <div className="space-y-8 sm:space-y-12">
              {journeyItems.map((item, index) => (
                <div
                  key={item.id}
                  className="relative pl-12 sm:pl-20"
                  style={{
                    animation: `fadeInLeft 0.8s ease-out ${index * 0.2}s both`
                  }}
                >
                  <div className="absolute left-3 sm:left-4 top-2 w-3 h-3 sm:w-4 sm:h-4">
                    <Circle className="w-full h-full fill-[#FFC800] text-[#FFC800] animate-pulse" />
                  </div>

                  <div className="group bg-gradient-to-br from-[#10367D]/20 to-black/40 backdrop-blur-sm border border-[#10367D]/50 rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-[#FFC800]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FFC800]/20">
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#10367D]/30 border border-[#10367D] rounded-full mb-3 sm:mb-4">
                      <Circle className="w-2 h-2 fill-[#FFC800] text-[#FFC800]" />
                      <span className="text-xs sm:text-sm text-[#FFC800] font-semibold">{item.period}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#EBEBEB] mb-2 group-hover:text-[#FFC800] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#EBEBEB]/60 mb-4">{item.company}</p>

                    <p className="text-sm sm:text-base text-[#EBEBEB]/80 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-6 h-1 w-0 bg-gradient-to-r from-[#FFC800] to-[#10367D] group-hover:w-full transition-all duration-700"></div>

                    <div className="absolute -inset-1 bg-gradient-to-r from-[#FFC800] via-[#10367D] to-[#FFC800] rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes wave {
          0%, 100% {
            transform: scaleY(1);
          }
          50% {
            transform: scaleY(1.5);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-15px) translateX(5px);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(250px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(250px) rotate(-360deg);
          }
        }

        @media (max-width: 640px) {
          @keyframes orbit {
            from {
              transform: rotate(0deg) translateX(150px) rotate(0deg);
            }
            to {
              transform: rotate(360deg) translateX(150px) rotate(-360deg);
            }
          }
        }
      `}</style>
    </>
  );
};

export default PortfolioPage;