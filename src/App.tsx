import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Menu, Moon, Sun, Instagram, Twitter, Facebook, Youtube, 
  ArrowRight, Github, Figma, PenTool, Code2, Layout, 
  Download, User, Mail, Linkedin, ExternalLink,
  Database, Coffee, Briefcase, GraduationCap, Award, ChevronRight
} from 'lucide-react';
import { link } from 'fs';

// --- Components ---

const FloatingCubes = () => {
  const cubes = Array.from({ length: 6 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {cubes.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-12 h-12 bg-brand-orange/20 dark:bg-brand-orange/40 backdrop-blur-sm rounded-lg border border-brand-orange/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            rotate: Math.random() * 360,
          }}
          animate={{
            y: [0, -40, 0],
            rotate: [null, Math.random() * 360 + 180],
            x: [0, Math.random() * 40 - 20, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const Navbar = ({ isDark, toggleTheme }: { isDark: boolean, toggleTheme: () => void }) => (
  <nav className="flex justify-between items-center py-6 relative z-20">
    <div className="text-2xl font-bold tracking-tight">
      Shail <span className="text-brand-orange">Kumari</span>
    </div>
    
    {/* Desktop Nav Links */}
    <div className="hidden md:flex items-center gap-8 text-sm font-medium">
      <a href="#about" className="hover:text-brand-orange transition-colors">About</a>
      <a href="#experience" className="hover:text-brand-orange transition-colors">Experience</a>
      <a href="#projects" className="hover:text-brand-orange transition-colors">Projects</a>
      <a href="#skills" className="hover:text-brand-orange transition-colors">Skills</a>
      <a href="#contact" className="hover:text-brand-orange transition-colors">Contact</a>
    </div>

    <div className="flex items-center gap-4">
      <button 
        onClick={toggleTheme}
        className="p-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-all shadow-sm"
        aria-label="Toggle Dark Mode"
      >
        {isDark ? <Sun className="w-5 h-5 text-brand-orange" /> : <Moon className="w-5 h-5 text-gray-700" />}
      </button>
      <button className="md:hidden p-2 hover:bg-gray-200 dark:bg-gray-800 rounded-full transition-colors">
        <Menu className="w-6 h-6" />
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="min-h-[60vh] flex flex-col md:flex-row items-center justify-between py-12 relative z-10 gap-8">
    {/* Social Links (Left side on desktop) */}
    <div className="hidden lg:flex flex-col gap-6 absolute left-0 top-1/2 -translate-y-1/2">
      {[
        { Icon: Github, href: "https://github.com/Shailkumari1" },
        { Icon: Linkedin, href: "https://www.linkedin.com/in/shail-kumari-127a40225/" },
        { Icon: Twitter, href: "#" },
        { Icon: Instagram, href: "https://www.instagram.com/shaily_vrmaa/" }
      ].map((social, i) => (
        <a key={i} href={social.href} target={social.href !== "#" ? "_blank" : undefined} rel={social.href !== "#" ? "noopener noreferrer" : undefined} className="text-gray-400 hover:text-brand-orange hover:-translate-y-1 transition-all">
          <social.Icon className="w-5 h-5" />
        </a>
      ))}
      <div className="mt-12 -rotate-90 origin-left text-xs tracking-widest text-gray-400 uppercase flex items-center gap-4 whitespace-nowrap">
        <span className="w-8 h-[1px] bg-gray-400"></span>
        Scroll down
      </div>
    </div>

    {/* Main Content */}
    <div className="lg:pl-24 flex-1 w-full order-2 md:order-1">
      <div className="flex items-center gap-4 mb-6">
        <span className="w-8 h-[2px] bg-gray-400 dark:bg-gray-600"></span>
        <span className="text-gray-500 dark:text-gray-400 font-medium tracking-wider uppercase text-sm">Hello, Welcome</span>
      </div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight"
      >
        I'm <span className="text-brand-orange">Shail Kumari</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-lg leading-relaxed"
      >
        A Full Stack Web Developer certified in MERN stack and Java with DSA, crafting responsive and user-centric digital experiences.
      </motion.p>
      
      {/* Improved CTA Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-4"
      >
        <button className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-3 md:px-8 md:py-3.5 rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40 hover:-translate-y-1 text-sm md:text-base">
          <Download className="w-5 h-5" /> Download CV
        </button>
        <a href="#about" className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 md:px-8 md:py-3.5 rounded-full font-semibold transition-all flex items-center gap-2 hover:-translate-y-1 text-sm md:text-base">
          <User className="w-5 h-5" /> About Me
        </a>
      </motion.div>
    </div>

    {/* 3D Illustration / Image - Made Smaller */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="flex-1 w-full flex justify-center md:justify-end relative order-1 md:order-2"
    >
      <div className="relative w-full max-w-[260px] md:max-w-[320px] aspect-square">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/30 to-transparent rounded-full opacity-60 blur-2xl"></div>
        <img 
          src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=800&auto=format&fit=crop" 
          alt="3D Abstract" 
          className="w-full h-full object-cover rounded-[2rem] mix-blend-luminosity opacity-90 dark:opacity-80 shadow-2xl border-4 border-white dark:border-[#1A1A1A]"
          referrerPolicy="no-referrer"
        />
        {/* Floating elements */}
        <motion.div 
          animate={{ y: [0, -15, 0] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -right-4 w-14 h-14 bg-brand-orange rounded-xl rotate-12 shadow-xl flex items-center justify-center text-white"
        >
          <Code2 className="w-6 h-6" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 15, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-4 -left-4 w-12 h-12 bg-gray-900 dark:bg-white rounded-full shadow-xl flex items-center justify-center text-white dark:text-gray-900"
        >
          <Layout className="w-5 h-5" />
        </motion.div>
      </div>
    </motion.div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 relative z-10">
    <div className="flex flex-col md:flex-row gap-16 items-center">
      <div className="w-full md:w-2/5">
        <div className="relative aspect-[4/5] w-full max-w-sm mx-auto group">
          {/* Decorative background elements */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-brand-orange/40 to-transparent rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
          <div className="absolute inset-0 border-2 border-brand-orange translate-x-4 translate-y-4 rounded-3xl transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
          <img 
            src="src/images/shail.jpg" 
            alt="Shail Kumari" 
            className="relative z-10 w-full h-full object-cover rounded-3xl grayscale group-hover:grayscale-0 transition-all duration-500 shadow-xl"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <div className="w-full md:w-3/5">
        <div className="flex items-center gap-4 mb-4">
          <span className="w-12 h-[2px] bg-brand-orange"></span>
          <h2 className="text-brand-orange font-bold tracking-wider uppercase text-sm">About Me</h2>
        </div>
        <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
          I <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">Design & Develop</span> user-centric websites
        </h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg mb-10">
          I am a Full Stack Web Developer with expertise in building responsive, user-centric websites and applications. I am skilled in frontend development using HTML5, CSS3, JavaScript (ES6+), and React, and proficient in backend programming with a strong foundation in Java, Data Structures & Algorithms (DSA), and Object-Oriented Principles.
        </p>
        
        {/* Attractive Stats Cards */}
        <div className="grid grid-cols-2 gap-6">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-brand-card p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mb-4 text-brand-orange">
              <User className="w-6 h-6" />
            </div>
            <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">100+</h4>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">Students Mentored</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-brand-card p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mb-4 text-brand-orange">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">3+</h4>
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">Certifications</p>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-24 relative z-10">
    <div className="flex items-center gap-4 mb-4">
      <span className="w-12 h-[2px] bg-brand-orange"></span>
      <h2 className="text-brand-orange font-bold tracking-wider uppercase text-sm">Resume</h2>
    </div>
    <h3 className="text-4xl font-bold mb-16">Experience & Education</h3>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Experience Timeline */}
      <div>
        <h4 className="text-2xl font-bold mb-10 flex items-center gap-3">
          <div className="p-2 bg-brand-orange/10 rounded-lg text-brand-orange"><Briefcase className="w-6 h-6" /></div> 
          Work Experience
        </h4>
        <div className="space-y-8 border-l-2 border-brand-orange/30 pl-8 relative ml-4">
          
          <motion.div whileHover={{ x: 5 }} className="relative bg-white dark:bg-brand-card p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all group">
            <div className="absolute w-5 h-5 bg-brand-orange rounded-full -left-[43px] top-6 ring-4 ring-white dark:ring-[#151515] group-hover:scale-125 transition-transform"></div>
            <span className="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange text-xs font-bold rounded-full mb-3">Jan 2025 - July 2025</span>
            <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-1">WordPress Developer</h5>
            <p className="text-gray-500 text-sm mb-4">Freelancing</p>
            <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" /> Designed and developed a fully responsive website with custom layouts.</li>
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" /> Improved mobile loading speed by 40% using image compression and caching.</li>
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" /> Integrated contact forms and SEO plugins for better visibility.</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ x: 5 }} className="relative bg-white dark:bg-brand-card p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all group">
            <div className="absolute w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full -left-[43px] top-6 ring-4 ring-white dark:ring-[#151515] group-hover:bg-brand-orange transition-colors"></div>
            <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-bold rounded-full mb-3">May 2022 - Oct 2022</span>
            <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Teaching Assistant in Java</h5>
            <p className="text-gray-500 text-sm mb-4">Coding Ninjas</p>
            <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" /> Taught 100+ students Java programming and Data Structures.</li>
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" /> Helped students fix coding errors and improve their projects.</li>
              <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" /> Answered student questions and explained difficult concepts.</li>
            </ul>
          </motion.div>

        </div>
      </div>

      {/* Education & Certs Timeline */}
      <div>
        <h4 className="text-2xl font-bold mb-10 flex items-center gap-3">
          <div className="p-2 bg-brand-orange/10 rounded-lg text-brand-orange"><GraduationCap className="w-6 h-6" /></div> 
          Education & Certifications
        </h4>
        <div className="space-y-8 border-l-2 border-brand-orange/30 pl-8 relative ml-4">
          
          <motion.div whileHover={{ x: 5 }} className="relative bg-white dark:bg-brand-card p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all group">
            <div className="absolute w-5 h-5 bg-brand-orange rounded-full -left-[43px] top-6 ring-4 ring-white dark:ring-[#151515] group-hover:scale-125 transition-transform"></div>
            <span className="inline-block px-3 py-1 bg-brand-orange/10 text-brand-orange text-xs font-bold rounded-full mb-3">2019 - 2023</span>
            <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Graduation</h5>
            <p className="text-gray-500 text-sm">Indira Gandhi National Open University</p>
          </motion.div>

          <motion.div whileHover={{ x: 5 }} className="relative bg-white dark:bg-brand-card p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all group">
            <div className="absolute w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full -left-[43px] top-6 ring-4 ring-white dark:ring-[#151515] group-hover:bg-brand-orange transition-colors"></div>
            <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h5>
            <ul className="text-gray-600 dark:text-gray-400 space-y-4 text-sm">
              <li className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                <Award className="w-5 h-5 text-brand-orange shrink-0" /> 
                <span className="font-medium">MERN Stack Developer (AIMREZ.AI Certified)</span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                <Award className="w-5 h-5 text-brand-orange shrink-0" /> 
                <span className="font-medium">Java Core and Data Structure Algorithm (Coding Ninjas)</span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                <Award className="w-5 h-5 text-brand-orange shrink-0" /> 
                <span className="font-medium">Teaching Assistant in Java (Coding Ninjas)</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </div>
  </section>
);

const Works = () => {
  const projects = [
    { 
      title: "Full Stack E-Commerce", 
      desc: "A complete shopping platform with payment integration, user authentication, and an admin dashboard.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      color: "from-blue-500 to-cyan-400",
      link : "https://shopify-eccomerce.netlify.app/",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
    },
    { 
      title: "Weather App", 
      desc: "Real-time weather forecasting using geolocation, interactive maps, and beautiful dynamic backgrounds.",
      tags: ["API", "JavaScript", "HTML/CSS"],
      color: "from-amber-400 to-orange-500",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80"
    },
    { 
      title: "Todo App", 
      desc: "A productivity task manager featuring drag-and-drop functionality, dark mode, and local storage sync.",
      tags: ["React", "JavaScript", "Tailwind"],
      color: "from-emerald-400 to-teal-500",
      link: "https://todo-webapplication-shail-kumaris-projects.vercel.app/",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
    },
    { 
      title: "DIGITAL PRODUCT HUB", 
      desc: "using Google AI Studio, a dynamic platform for digital products with AI-driven recommendations and seamless user experience.",
      tags: ["Google AI Studio", "JavaScript", "HTML/CSS"],
      color: "from-purple-500 to-pink-500",
      link : "https://digitalone.vasupati.shop/",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="flex items-center gap-4 mb-4">
        <span className="w-12 h-[2px] bg-brand-orange"></span>
        <h2 className="text-brand-orange font-bold tracking-wider uppercase text-sm">Portfolio</h2>
      </div>
      <h3 className="text-4xl font-bold mb-12">Featured Projects</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -8 }}
            className="group relative rounded-[2rem] bg-white dark:bg-brand-card border border-gray-100 dark:border-gray-800 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
          >
            {/* Project Thumbnail / Header Gradient */}
            <div className={`h-48 w-full bg-gradient-to-br ${project.color} relative overflow-hidden`}>
              {project.image ? (
                <>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  {/* Decorative circles */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute top-4 left-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                </>
              )}
              
              {/* Floating Icon */}
              <div className="absolute bottom-4 left-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 flex items-center justify-center text-white shadow-lg group-hover:-translate-y-2 transition-transform duration-500">
                <Layout className="w-6 h-6" />
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-orange transition-colors">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-1">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, j) => (
                  <span key={j} className="text-xs font-semibold px-3 py-1.5 bg-gray-50 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
              
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white hover:bg-brand-orange hover:text-white dark:hover:bg-brand-orange dark:hover:text-white py-3.5 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 group/btn border border-gray-200 dark:border-gray-700 hover:border-brand-orange dark:hover:border-brand-orange">
                  View Project <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              ) : (
                <button className="w-full bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white hover:bg-brand-orange hover:text-white dark:hover:bg-brand-orange dark:hover:text-white py-3.5 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 group/btn border border-gray-200 dark:border-gray-700 hover:border-brand-orange dark:hover:border-brand-orange">
                  View Project <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { name: "React", icon: <span className="font-bold text-3xl">⚛</span>, color: "text-blue-500", bg: "bg-blue-500/10", border: "hover:border-blue-500/50" },
    { name: "Node.js", icon: <span className="font-bold text-xl">Node</span>, color: "text-green-500", bg: "bg-green-500/10", border: "hover:border-green-500/50" },
    { name: "Express.js", icon: <span className="font-bold text-xl">EX</span>, color: "text-gray-500 dark:text-gray-300", bg: "bg-gray-500/10 dark:bg-gray-300/10", border: "hover:border-gray-500/50 dark:hover:border-gray-400/50" },
    { name: "MongoDB", icon: <Database className="w-8 h-8" />, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "hover:border-emerald-500/50" },
    { name: "Java (DSA)", icon: <Coffee className="w-8 h-8" />, color: "text-red-500", bg: "bg-red-500/10", border: "hover:border-red-500/50" },
    { name: "JavaScript", icon: <span className="font-bold text-2xl">JS</span>, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "hover:border-yellow-500/50" },
    { name: "WordPress", icon: <span className="font-bold text-xl">WP</span>, color: "text-blue-400", bg: "bg-blue-400/10", border: "hover:border-blue-400/50" },
    { name: "HTML/CSS", icon: <Layout className="w-8 h-8" />, color: "text-orange-500", bg: "bg-orange-500/10", border: "hover:border-orange-500/50" },
  ];

  return (
    <section id="skills" className="py-24 relative z-10">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-4">Expertise</h2>
        <h3 className="text-4xl font-bold">My Skills & Tools</h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.05 }}
            className={`relative overflow-hidden p-8 rounded-3xl bg-white/80 dark:bg-brand-card/80 backdrop-blur-sm border border-gray-100 dark:border-gray-800 ${skill.border} transition-all duration-300 shadow-sm hover:shadow-2xl group flex flex-col items-center justify-center gap-5`}
          >
            {/* Background Glow */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${skill.bg} blur-xl`}></div>
            
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${skill.bg} ${skill.color} group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-inner relative z-10`}>
              {skill.icon}
            </div>
            <span className="text-lg font-bold text-gray-800 dark:text-gray-200 relative z-10">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 relative z-10">
    {/* Background decoration */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl bg-gradient-to-b from-brand-orange/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

    <div className="max-w-5xl mx-auto text-center">
      <motion.div 
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="text-7xl mb-4 inline-block drop-shadow-2xl"
      >
        📬
      </motion.div>
      <h2 className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-4">Contact Us</h2>
      <h3 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">HIRE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">ME !</span></h3>
      <p className="text-gray-600 dark:text-gray-400 mb-16 text-lg max-w-2xl mx-auto leading-relaxed">
        I'm currently available for  work or full-time opportunities. I'd love to hear about it.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Email Card */}
        <motion.a 
          href="mailto:SHAILKUMARI0555@GMAIL.COM"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="bg-white dark:bg-brand-card p-8 rounded-[2rem] shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-800 hover:border-brand-orange/50 transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="w-20 h-20 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shadow-inner mb-6 group-hover:scale-110">
            <Mail className="w-8 h-8" />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium uppercase tracking-wider">Email me at</p>
          <p className="font-bold text-xl group-hover:text-brand-orange transition-colors">SHAILKUMARI0555@GMAIL.COM</p>
        </motion.a>
        
        {/* LinkedIn Card */}
        <motion.a 
          href="https://www.linkedin.com/in/shail-kumari-127a40225/" 
          target="_blank" 
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="bg-white dark:bg-brand-card p-8 rounded-[2rem] shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-800 hover:border-brand-orange/50 transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="w-20 h-20 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shadow-inner mb-6 group-hover:scale-110">
            <Linkedin className="w-8 h-8" />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium uppercase tracking-wider">Connect on</p>
          <p className="font-bold text-xl group-hover:text-brand-orange transition-colors">LinkedIn Profile</p>
        </motion.a>
      </div>
      
      <motion.button 
        whileHover={{ y: -5, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-16 bg-gradient-to-r from-brand-orange to-orange-500 hover:from-orange-500 hover:to-brand-orange text-white px-12 py-5 rounded-full font-bold text-xl transition-all shadow-xl shadow-brand-orange/30 hover:shadow-brand-orange/50 inline-flex items-center gap-4 relative overflow-hidden group"
      >
        <span className="relative z-10 flex items-center gap-3">
          Say Hello <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
        </span>
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
      </motion.button>
    </div>
  </section>
);

const Footer = () => (
  <footer className="pt-16 pb-8 border-t border-gray-200 dark:border-gray-800 mt-12 relative z-10">
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-2xl font-bold tracking-tight">
        Shail <span className="text-brand-orange">Kumari</span>
      </div>
      
      <div className="flex gap-6">
        {[
          { icon: <Github className="w-5 h-5" />, label: "Github", href: "https://github.com/Shailkumari1" },
          { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/shail-kumari-127a40225/" },
          { icon: <Twitter className="w-5 h-5" />, label: "Twitter", href: "#" },
          { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "https://www.instagram.com/shaily_vrmaa/" }
        ].map((social, i) => (
          <a 
            key={i} 
            href={social.href} 
            target={social.href !== "#" ? "_blank" : undefined}
            rel={social.href !== "#" ? "noopener noreferrer" : undefined}
            aria-label={social.label}
            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-brand-orange hover:text-white dark:hover:bg-brand-orange dark:hover:text-white transition-all hover:-translate-y-1"
          >
            {social.icon}
          </a>
        ))}
      </div>
      
      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
        &copy; {new Date().getFullYear()} Shail Kumari. All rights reserved.
      </p>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-brand-dark text-gray-900 dark:text-gray-100 transition-colors duration-500 relative overflow-hidden selection:bg-brand-orange selection:text-white">
      
      <div className="max-w-[1400px] mx-auto p-4 sm:p-6 lg:p-8 relative z-10 min-h-screen flex flex-col">
        
        <div className="flex-1 border border-gray-200 dark:border-brand-orange/20 rounded-[2.5rem] p-6 sm:p-10 lg:p-16 relative bg-white dark:bg-[#151515] shadow-2xl transition-colors duration-500 overflow-hidden">
          
          <FloatingCubes />
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />
          
          <main>
            <Hero />
            <About />
            <Experience />
            <Works />
            <Skills />
            <Contact />
          </main>
          
          <Footer />
          
        </div>
      </div>
    </div>
  );
}
