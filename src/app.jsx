import React, { useState } from 'react';
import { Github, Linkedin, Instagram, Download, ExternalLink, Sparkles, Code, Layers } from 'lucide-react';

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "PAP 2025",
      description: "Rede Social/Aplicação Web similar ao Reddit criada para conectar alunos da minha escola secundária",
      tech: ["PHP", "MySQL", "JavaScript", "HTML", "Apache"],
      downloadUrl: "https://github.com/sylvzzz/PAP_2025",
      demoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7419835227658936320/?originTrackingId=yc7dzwh%2F41pFciTsk2pnJw%3D%3D"
    },
    {
      id: 2,
      name: "Plataforma de Quizzes",
      description: "Aplicação Web desenvolvida para dinamizar o ensino de uma escola básica que estagiei fornecendo Quizzes aos alunos",
      tech: ["PHP", "MySQL", "JavaScript", "HTML", "Windows Server 2012"],
      downloadUrl: "https://github.com/sylvzzz/Quizzes",
      demoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7419830162613178368/?originTrackingId=jRpTMNSelH7ADEnDLdKmMA%3D%3D"
    },
    {
      id: 3,
      name: "Plataforma de Agenda",
      description: "Plataforma CRUD similar ao Calendário Google para gerir reuniões internas de uma Escola Básica",
      tech: ["PHP", "MySQL", "JavaScript", "HTML", "Windows Server 2012"],
      downloadUrl: "https://github.com/sylvzzz/Plataforma-de-Agenda",
      demoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7420907171279970305/?originTrackingId=6eySVukcMELvKWB3fdglwA%3D%3D"
    },
    {
      id: 4,
      name: "Photography JR",
      description: "Site desenvolvido para uma amiga minha fotógrafa para divulgar o seu trabalho",
      tech: ["Node.js", "MySQL", "JavaScript", "HTML", "Vercel", "Supabase/PostreSQL", "GitHub"],
      downloadUrl: "#",
      demoUrl: "https://photography-jr.vercel.app/"
    },
    {
      id: 5,
      name: "Libft (Library em C)",
      description: "Recriação de Funções em C populares como Printf",
      tech: ["C", "Linux"],
      downloadUrl: "https://github.com/sylvzzz/42-libft",
      demoUrl: "#"
    },
    {
      id: 6,
      name: "born2beroot",
      description: "Servidor criado em máquina virtual usando debian, contém serviços tais como SSH, Firewall, WordPress e MariaDBB",
      tech: [ "Linux", "Wordpress", "MariaDB", "Bash", "SSH"],
      downloadUrl: "#",
      demoUrl: "#"
    },
    {
      id: 7,
      name: "Portfolio",
      description: "Página atual, desenvolvida em React e Tailwindcss",
      tech: ["React", "Tailwindcss", "Vercel"],
      downloadUrl: "#",
      demoUrl: "#"
    },
    {
      id: 8,
      name: "Push_Swap",
      description: "Implementação de um algoritmo de ordenação usando 2 stacks e um conjunto limitado de instruções para minimizar operações, no meu caso, usei o Radix Sort",
      tech: ["C", "Linux"],
      downloadUrl: "https://github.com/sylvzzz/push_swap",
      demoUrl: "#"
    }
  ];

  const skills = [
    "PHP", "MySQL", "JavaScript", "HTML", "CSS", "React", "Git",
    "Tailwindcss", "Node.js", "Python", "C", "Python", "Linux", "Bash", "Vercel", "FileZilla",
    "Peer-to-Peer", "Computer Networks" , "Problem Solving" , "System Administration", "Windows Server" , "Email Automation"
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/sylvzzz" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/diogo-lb-silva" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/sylvz._" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Decorative gradient orbs */}
      <div className="fixed top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-200 via-purple-200 to-blue-200 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-transparent bg-clip-padding rounded-full"
                 style={{
                   borderImage: 'linear-gradient(90deg, rgb(147, 197, 253), rgb(216, 180, 254), rgb(251, 207, 232)) 1',
                 }}>
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Estudante @ 42 Lisboa
              </span>
            </div>

            {/* Name & Title */}
            <h1 className="text-7xl md:text-8xl font-black mb-4 tracking-tight text-gray-900">
              Diogo Silva
            </h1>
            <h2 className="text-3xl md:text-4xl font-light text-gray-600 mb-12">
              Full Stack Developer
            </h2>

            {/* Description */}
            <div className="relative mb-12">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-white p-8 rounded-2xl border-2 border-transparent bg-clip-padding"
                   style={{
                     borderImage: 'linear-gradient(135deg, rgb(147, 197, 253), rgb(216, 180, 254), rgb(251, 207, 232)) 1',
                   }}>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Olá, sou o Diogo. Tenho 19 anos e sou super apaixonado por tecnologia e desenvolvimento web, graças á minha paixão procuro sempre aprender mais sobre estas áreas, o que me permite progredir mais facilmente como desenvolvedor. 
                  Neste momento sou estudante da 42 Lisboa, onde estou a aprender Python e C principalmente e adquirindo skills importantes como peer-to-peer e alto rigor.
                  Fora da 42 procuro melhorar o meu desenvolvimento web, ultimamente tenho me focado em React, Node.js e Tailwindcss.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-6 py-3 bg-white rounded-xl border-2 border-gray-200 hover:border-transparent transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <social.icon className="relative z-10 w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
                  <span className="relative z-10 font-semibold text-gray-700 group-hover:text-white transition-colors">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </header>

        {/* Tech Stack */}
        <section className="container mx-auto px-6 py-20 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <Code className="w-8 h-8 text-purple-600" />
              <h2 className="text-4xl font-bold text-gray-900">Tech Stack</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="group px-6 py-3 bg-white rounded-xl border-2 border-gray-200 hover:border-transparent transition-all duration-300 cursor-default overflow-hidden relative"
                  style={{
                    animation: `fadeIn 0.5s ease-out ${index * 0.05}s backwards`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 font-mono text-sm font-semibold text-gray-700 group-hover:text-white transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <Layers className="w-8 h-8 text-purple-600" />
              <h2 className="text-4xl font-bold text-gray-900">Projetos</h2>
            </div>

            <div className="space-y-6">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative bg-white rounded-2xl border-2 border-gray-200 hover:border-transparent p-8 transition-all duration-500 overflow-hidden"
                  style={{
                    animation: `slideIn 0.6s ease-out ${index * 0.1}s backwards`
                  }}
                >
                  {/* Gradient border effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-0 transition-opacity duration-500 ${
                    hoveredProject === project.id ? 'opacity-100' : ''
                  }`}></div>
                  
                  {/* Content container */}
                  <div className={`relative bg-white rounded-xl transition-all duration-500 ${
                    hoveredProject === project.id ? 'm-0.5' : ''
                  }`}>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.name}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-1.5 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-full text-sm font-mono font-semibold text-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <a onClick={() => {
                          if (project.downloadUrl === '#') {
                          alert('O Download não está disponível para este projeto');
                          }
                          }}
                          href={project.downloadUrl}
                          target="_blank"
                          className="group/btn flex-1 relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
                        >
                          <Download className="w-5 h-5 relative z-10" />
                          <span className="relative z-10">Download</span>
                        </a>
                        <a
                        onClick={() => {
                          if (project.demoUrl === '#') {
                          alert('A Demonstração deste projeto não está disponível');
                          }
                          }}
                          href={project.demoUrl}
                          target="_blank"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 hover:border-purple-400 rounded-xl font-semibold text-gray-700 hover:text-purple-600 transition-all duration-300"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-12 mt-20">
          <div className="max-w-5xl mx-auto text-center space-y-2 border-t-2 border-gray-200 pt-12">
            <p className="text-gray-600 font-medium">
              © 2025 Diogo Silva
            </p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
