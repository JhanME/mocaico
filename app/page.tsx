"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Cpu, 
  Terminal, 
  Layers, 
  ArrowRight, 
  Download,
  ExternalLink
} from 'lucide-react';

// --- ICONO PERSONALIZADO DE GOOGLE ---
const GoogleIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

// --- DATOS DEL USUARIO ---
const DATA = {
  name: "Jhan Jhover Mocaico Espíritu",
  role: "Ingeniero Informático",
  role2: "Desarrollador web y Iot",
  about: {
    title: "Acerca de Mí",
    intro: "Estudiante apasionado por la intersección entre el software y el hardware. Me enfoco en construir soluciones escalables que conectan el mundo físico con el digital.",
    description: "Soy estudiante de cuarto año de Ingeniería Informática con sólida experiencia práctica en sistemas embebidos y soluciones IoT. He liderado proyectos bajo metodologías ágiles, enfocándome en la resolución de problemas técnicos complejos.",
    education: {
      university: "Universidad Peruana Cayetano Heredia",
      degree: "Ingeniería Informática",
      status: "Actualmente estudiando"
    },
    skills: ["Python", "Docker", "Next.js", "C/C++", "Git", "Linux"]
  },
  services: [
    {
      title: "Desarrollo IoT & Embebidos",
      desc: "Integración de sensores, diseño de PCB y programación de microcontroladores (ESP32, Arduino).",
      icon: <Cpu className="w-8 h-8 mb-4 text-black" />
    },
    {
      title: "Desarrollo de Software",
      desc: "Creación de intérpretes, automatización con Python y aplicaciones web modernas.",
      icon: <Terminal className="w-8 h-8 mb-4 text-black" />
    },
    {
      title: "Infraestructura & Datos",
      desc: "Gestión de pipelines de datos con Node-RED, Docker y visualización en tiempo real.",
      icon: <Layers className="w-8 h-8 mb-4 text-black" />
    }
  ],
  projects: [
    {
      title: "Algoritmia",
      subtitle: "Intérprete de música a código",
      desc: "Sistema que transforma pseudocódigo en partituras PDF, MIDI y audio WAV. Conecta lógica computacional con expresión artística.",
      tags: ["Python", "ANTLR4", "Docker", "LilyPond"],
      image: "/algoritmia.png"
    },
    {
      title: "Fonekids",
      subtitle: "Plataforma educativa",
      desc: "Plataforma interactiva y adaptativa para niños. Perfiles personalizados y experiencias educativas visuales.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      image:"/fonekids.png"
    },
    {
      title: "AirGuardian",
      subtitle: "Monitoreo IoT",
      desc: "Sistema de calidad del aire en interiores. Integra sensores físicos, diseño PCB y visualización de datos en tiempo real.",
      tags: ["C/C++", "Node-RED", "PCB Design", "IoT"],
      image:"/airguardian.png"
    }
  ],
  contact: {
    email: "jhan.mocaico@upch.pe",
    phone: "+51 963242281",
    github: "https://github.com/JhanME",
    linkedin: "https://www.linkedin.com/in/jhanmocaico",
    google: "mailto:jhan.mocaico@upch.pe" // Enlace para el icono de Google (usando mailto o perfil dev)
  }
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio"); 
  
  // Estados para la máquina de escribir
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0); 
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const phrases = ["Ingeniero Informático",  "Desarrollador web y IoT"];

  // Lógica de Scroll y ScrollSpy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['inicio', 'acerca', 'proyectos', 'servicios'];
      const scrollPosition = window.scrollY + 150; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
           if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
             setActiveSection('servicios');
           } else {
             setActiveSection(section);
           }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efecto de Máquina de Escribir (CORREGIDO)
  useEffect(() => {
    const i = loopNum % phrases.length;
    const fullText = phrases[i];

    const handleTyping = () => {
      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      // Velocidad de tipeo
      setTypingSpeed(isDeleting ? 50 : 200);

      // Cuando termina de escribir la frase
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 4000); // Espera 2 segundos antes de borrar
      } 
      // Cuando termina de borrar
      else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, phrases, typingSpeed]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'acerca', label: 'Acerca' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'servicios', label: 'Servicios' },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900  font-sans selection:bg-gray-300">
      
      {/* NAVBAR FLOTANTE */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full border border-gray-200 p-1.5 flex items-center transition-all duration-300 border ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-xl border-gray-200' 
          : 'bg-white/50 backdrop-blur-sm border-transparent'
      }`}>
        <div className="flex bg-transparent rounded-full relative">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 z-10 ${
                activeSection === item.id 
                  ? 'text-white' 
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              {activeSection === item.id && (
                <span className="absolute inset-0 bg-black rounded-full -z-10 animate-fade-in" />
              )}
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="inicio" className="pt-40 pb-20 px-4 md:px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-block px-3 py-1 bg-gray-100 text-black border border-gray-200 rounded-full hover:scale-105 transition animation-300 text-sm font-semibold tracking-wide">
            Disponible para trabajar
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">
            Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-400">Jhan</span>
          </h1>
          
          <div className="h-8 md:h-10 flex items-center">
             <span className="text-xl md:text-2xl text-gray-600 font-mono bg-gray-100 px-2 py-1 rounded">
               {text}
               <span className="animate-pulse ml-1 text-black">|</span>
             </span>
          </div>

          <p className="text-gray-500 max-w-lg text-lg pt-2">
            Transformo conceptos técnicos en experiencias reales. Especializado en IoT, Sistemas Embebidos y Desarrollo Web moderno.
          </p>
          
          <div className="flex gap-4 pt-4">
            <a href={`mailto:${DATA.contact.email}`} className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all flex items-center gap-2 hover:scale-105 active:scale-95 shadow-lg shadow-gray-400/20">
              Contratar <ArrowRight size={18} />
            </a>
            
            <a
              href="/Jhan_Mocaico_CVv.pdf" 
              download="CV_Jhan_Mocaico.pdf"
              className="px-6 py-3 text-gray-900 font-medium bg-white border border-gray-200 rounded-full hover:text-white hover:bg-gray-900  transition hover:scale-105 flex items-center gap-2 cursor-pointer"
            >
             Descargar CV <Download size={18} /> 
            </a>
            
          </div>

          {/* ICONOS SOCIALES (Incluyendo Google) */}
          <div className="flex gap-6 pt-4 items-center">
            <a href={DATA.contact.github} target="_blank" className="text-gray-600 hover:text-black transition hover:scale-110">
                <Github size={24} />
            </a>
            <a href={DATA.contact.linkedin} target="_blank" className="text-gray-600 hover:text-[#0077b5] transition hover:scale-110">
                <Linkedin size={24} />
            </a>
            <a href={`mailto:${DATA.contact.email}`} className="transition hover:scale-110 filter grayscale hover:grayscale-0 opacity-70 hover:opacity-100">
                <GoogleIcon className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="flex-1 relative flex justify-center">
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition duration-500 border-4 border-white bg-gray-100">
            <Image 
              src="/mocaico.jpeg" 
              alt="Jhan Mocaico" 
              width={500} 
              height={500}
              className="object-cover w-full h-full"
              priority
            /> 
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="acerca" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* IMAGEN IZQUIERDA */}
          <div className="flex-1 w-full relative">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gray-200 group">
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
               <Image 
                src="/jhan2.jpeg" 
                alt="Sobre mí" 
                width={600} 
                height={800}
                className="object-cover w-full h-full hover:scale-105 transition duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <p className="font-bold text-lg">Jhan Mocaico</p>
                <p className="text-gray-300 text-sm">Developer & Maker</p>
              </div>
            </div>
          </div>

          {/* INFORMACIÓN DERECHA */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Acerca de <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-400">Mí</span>
              </h2>
             
              <div className="mb-6 transition-all duration-300 hover:scale-105 cursor-default">
                <p className="text-gray-600 leading-relaxed mb-4 ">
                  {DATA.about.description}
                </p>
              </div>

              {/* BLOQUE EDUCACIÓN */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-6 bg-black rounded-full"></div>
                  <h3 className="text-xl font-bold text-gray-800">Educación</h3>
                </div>
                
                <div className="ml-4 border-l-2 border-gray-100 pl-6 pb-2 space-y-1 relative transition-all duration-300 hover:scale-105">
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-gray-300 rounded-full border-2 border-white hover:scale-300 trasiton-all duration-300"></div>
                  <h4 className="font-bold text-lg text-gray-500 hover:text-lg trasiton-all duration-300">{DATA.about.education.university}</h4>
                  <p className="text-gray-700 font-medium ">{DATA.about.education.degree}</p>
                  <p className="text-gray-400 text-sm italic hover:text-lg transition-all duration-300">{DATA.about.education.status}</p>
                </div>
              </div>

              {/* BLOQUE HABILIDADES (Skills) */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-6 bg-black rounded-full"></div>
                  <h3 className="text-xl font-bold text-gray-800">Habilidades Técnicas</h3>
                </div>

                <div className="flex flex-wrap gap-2 ml-1">
                  {DATA.about.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:text-white hover:bg-gray-900 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="proyectos" className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Proyectos Destacados</h2>
            <p className="text-gray-500">Algunos de los proyectos en los que he trabajado</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DATA.projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
                
                <div className="h-48 relative overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-black transition">{project.title}</h3>
                  <p className="text-xs font-semibold text-gray-400 mb-4 uppercase tracking-wide">{project.subtitle}</p>
                  
                  <p className="text-gray-600 text-sm mb-6 flex-grow">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2 py-1 bg-white border border-gray-200 text-gray-600 text-xs rounded-md font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a href={DATA.contact.github} target="_blank" className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-black transition mt-auto">
                    Ver Proyecto <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="servicios" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Mis Servicios</h2>
            <p className="text-gray-500">Lo que puedo hacer por ti y tu empresa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DATA.services.map((service, index) => (
              <div key={index} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition duration-300 hover:-translate-y-2 cursor-default group">
                <div className="group-hover:scale-110 transition duration-300 origin-left">
                    {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Jhan Mocaico</h3>
            <p className="text-gray-400 text-sm">Creando soluciones innovadoras con código y hardware.</p>
          </div>

          <div className="flex gap-8 text-sm text-gray-400">
            <button onClick={() => scrollToSection('inicio')} className="hover:text-white transition">Inicio</button>
            <button onClick={() => scrollToSection('acerca')} className="hover:text-white transition">Acerca</button>
            <button onClick={() => scrollToSection('proyectos')} className="hover:text-white transition">Proyectos</button>
            <button onClick={() => scrollToSection('servicios')} className="hover:text-white transition">Servicios</button>
          </div>

          <div className="flex gap-4 items-center">
            <a href={DATA.contact.github} className="hover:text-gray-300 transition"><Github /></a>
            <a href={DATA.contact.linkedin} className="hover:text-gray-300 transition"><Linkedin /></a>
            <a href={`mailto:${DATA.contact.email}`} className="hover:text-gray-300 transition opacity-70 hover:opacity-100">
                <GoogleIcon className="w-6 h-6 text-white fill-white" />
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Jhan Mocaico. Todos los derechos reservados.
        </div>
      </footer>

    </main>
  );
}