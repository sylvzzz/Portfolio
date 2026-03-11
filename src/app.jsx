import React, { useState } from 'react';
import { Github, Linkedin, Download, ExternalLink, Sparkles, Code, Layers, Mail, Instagram } from 'lucide-react';

// ─── DATA ────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    id: 1,
    name: "PAP 2025",
    description: "My PAP(Professional Final Project for professional courses in Portugal). This project was developed with 2 other peers of my 24-25 class. This web platform consists in a social media web app for our school as a way to connect the community. Our project includes features such as News of our school, forums similar to reddit, and verification to only allow accounts with student email",
    tech: [
      { name: "PHP", icon: "devicon-php-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "HTML", icon: "devicon-html5-plain colored" },
      { name: "Apache", icon: "devicon-apache-plain colored" },
    ],
    downloadUrl: "https://github.com/sylvzzz/PAP_2025",
    demoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7419835227658936320/?originTrackingId=yc7dzwh%2F41pFciTsk2pnJw%3D%3D"
  },
  {
    id: 2,
    name: "FrienDebt",
    description: "Full-stack web application designed to help groups of friends manage shared expenses. Users can add eachother as friends , record who paid, who owes, and how much, with automatic balance calculations. The platform ensures transparency and simplifies settling debts so no one forgets to pay.",
    tech: [
          { name: "React", icon: "devicon-react-original colored" },
          { name: "TailwindCSS", icon: "devicon-tailwindcss-plain colored" },
          { name: "Node.js", icon: "devicon-nodejs-plain colored" },
          { name: "MySQL", icon: "devicon-mysql-plain colored" },
          { name: "Docker", icon: "devicon-docker-plain colored" },
          { name: "Google Cloud", icon: "devicon-googlecloud-plain colored" },
          { name: "Vercel", icon: "devicon-vercel-plain" }
    ],
    downloadUrl: "https://github.com/sylvzzz/FrienDebt",
    demoUrl: "#"
  },
  {
    id: 3,
    name: "Quizzes Platform",
    description: "Web Platform made for teachers and students to take quizzes as a way to dynamize learning and teaching. Main functionalities include Top 10 student leaderboard with most points scored, account settings and Subjects Hubs.",
    tech: [
      { name: "PHP", icon: "devicon-php-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "HTML", icon: "devicon-html5-plain colored" },
      { name: "Apache", icon: "devicon-apache-plain colored" },
      { name: "Windows Server 2012", icon: "devicon-windows8-plain colored" },
    ],
    downloadUrl: "https://github.com/sylvzzz/Quizzes",
    demoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7419830162613178368/?originTrackingId=jRpTMNSelH7ADEnDLdKmMA%3D%3D"
  },
  {
    id: 4,
    name: "Calendar Platform",
    description: "CRUD Web App for scheduling meetings developed for a school to manage internal meetings, similar to google calendar, Guest mode feature avaliable for view only of the schedule, asks for login to Schedule or to edit. Simple Authorization implemented so only the user that scheduled the meeting can edit or delete meeting.",
    tech: [
      { name: "PHP", icon: "devicon-php-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "HTML", icon: "devicon-html5-plain colored" },
      { name: "Apache", icon: "devicon-apache-plain colored" },
      { name: "Windows Server 2012", icon: "devicon-windows8-plain colored" },
    ],
    downloadUrl: "https://github.com/sylvzzz/Plataforma-de-Agenda",
    demoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7420907171279970305/?originTrackingId=6eySVukcMELvKWB3fdglwA%3D%3D"
  },
  {
    id: 5,
    name: "Push_Swap",
    description: "This project consists in an optimized Sorting algorithm project from the 42 curriculum. The goal is to sort a stack of integers in ascending order using two stacks (`a` and `b`) and a restricted set of operations, while producing the smallest possible number of instructions",
    tech: [
      { name: "C", icon: "devicon-c-plain colored" },
      { name: "Linux", icon: "devicon-linux-plain" },
    ],
    downloadUrl: "https://github.com/sylvzzz/push_swap",
    demoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7432215798431105024/?originTrackingId=1V%2B7qxevwwJ2tsffoflyoQ%3D%3D"
  },
  {
    id: 6,
    name: "Photography JR",
    description: "Full Stack WebSite developed for a photographer friend to help her show her work.",
    tech: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "HTML", icon: "devicon-html5-plain colored" },
      { name: "Vercel", icon: "devicon-vercel-plain" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "GitHub", icon: "devicon-github-original" },
    ],
    downloadUrl: "#",
    demoUrl: "https://photography-jr.vercel.app/"
  },
  {
    id: 7,
    name: "MyPortfolio",
    description: "Current page, that acts as MyPortfolio, built using React and Tailwindcss",
    tech: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
      { name: "Vercel", icon: "devicon-vercel-plain" },
    ],
    downloadUrl: "https://github.com/sylvzzz/Portfolio",
    demoUrl: "#"
  },
  {
    id: 8,
    name: "Piscine Python",
    description: "This project consists in a 42 mini piscine, to learn more about Python and Object Oriented Programming, having 11 Modules with different topics about Python.",
    tech: [
      { name: "Python", icon: "devicon-python-plain colored" },
    ],
    downloadUrl: "https://github.com/sylvzzz/42_Piscine_Python",
    demoUrl: "#"
  },
  {
    id: 9,
    name: "born2beroot",
    description: "Server created using a debian Virtual Machine, with services configured such as SSH, Firewall, WordPress and MariaDB",
    tech: [
      { name: "Linux", icon: "devicon-linux-plain" },
      { name: "WordPress", icon: "devicon-wordpress-plain colored" },
      { name: "MariaDB", icon: "devicon-mariadb-plain colored" },
      { name: "Bash", icon: "devicon-bash-plain" },
      { name: "SSH", icon: null },
    ],
    downloadUrl: "#",
    demoUrl: "#"
  },
  {
    id: 10,
    name: "Libft (Library in C)",
    description: "First project of 42 common core, its goal is to consolidate rigorous programming copying already existing C functions, memory management, linked lists and among others.",
    tech: [
      { name: "C", icon: "devicon-c-plain colored" },
      { name: "Linux", icon: "devicon-linux-plain" },
      { name: "Bash", icon: "devicon-bash-plain" },
    ],
    downloadUrl: "https://github.com/sylvzzz/42-libft",
    demoUrl: "#"
  }
];

const SKILLS = [
  { name: "PHP", icon: "devicon-php-plain colored" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "HTML", icon: "devicon-html5-plain colored" },
  { name: "CSS", icon: "devicon-css3-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "C", icon: "devicon-c-plain colored" },
  { name: "Linux", icon: "devicon-linux-plain" },
  { name: "Bash", icon: "devicon-bash-plain" },
  { name: "Vercel", icon: "devicon-vercel-plain" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "Google Cloud", icon: "devicon-googlecloud-plain colored" },
  { name: "FileZilla", icon: "devicon-filezilla-plain colored" },
  { name: "Windows Server", icon: "devicon-windows8-plain colored" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "Apache", icon: "devicon-apache-plain colored" },
  { name: "WordPress", icon: "devicon-wordpress-plain colored" },
  { name: "Peer-to-Peer", icon: null },
  { name: "Computer Networks", icon: null },
  { name: "Computer Hardware", icon: null },
  { name: "Technical Support", icon: null },
  { name: "System Design", icon: null },
  { name: "Problem Solving", icon: null },
  { name: "System Administration", icon: null },
  { name: "SSH", icon: null },
  { name: "Email Automation", icon: null }
];

const SOCIAL_LINKS = [
  { name: "GitHub", icon: Github, url: "https://github.com/sylvzzz" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/diogo-lb-silva" },
  { name: "Email", icon: Mail, url: "mailto:diogolbsilva2006@gmail.com" },
  //{ name: "Instagram", icon: Instagram, url: "https://instagram.com/sylvz._" }
];

// ─── ANIMATIONS (CSS) ─────────────────────────────────────────────────────────

const GlobalStyles = () => (
  <style jsx>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(-20px); }
      to   { opacity: 1; transform: translateX(0); }
    }
  `}</style>
);

// ─── BACKGROUND ORBS ─────────────────────────────────────────────────────────

const BackgroundOrbs = () => (
  <>
    <div className="fixed top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
    <div className="fixed bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-200 via-purple-200 to-blue-200 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />
  </>
);

// ─── HEADER ──────────────────────────────────────────────────────────────────

const Header = () => (
  <header className="container mx-auto px-6 py-20">
    <div className="max-w-5xl mx-auto">

      <div
        className="inline-flex items-center gap-2 px-5 py-2 mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-transparent bg-clip-padding rounded-full"
        style={{ borderImage: 'linear-gradient(90deg, rgb(147, 197, 253), rgb(216, 180, 254), rgb(251, 207, 232)) 1' }}
      >
        <Sparkles className="w-4 h-4 text-purple-500" />
        <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Student @ 42 Lisboa
        </span>
      </div>

      <h1 className="text-7xl md:text-8xl font-black mb-4 tracking-tight text-gray-900">
        Diogo Silva
      </h1>
      <h2 className="text-3xl md:text-4xl font-light text-gray-600 mb-12">
        Junior Full Stack Developer
      </h2>

      <div className="relative mb-12">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 rounded-2xl blur opacity-20" />
        <div
          className="relative bg-white p-8 rounded-2xl border-2 border-transparent bg-clip-padding"
          style={{ borderImage: 'linear-gradient(135deg, rgb(147, 197, 253), rgb(216, 180, 254), rgb(251, 207, 232)) 1' }}
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            Hello, I'm Diogo. I'm 19 years old and I'm really passionate about technology and web development.
            At the moment, I'm a student at 42 Lisbon, where I'm learning mainly Python and C, and acquiring
            important skills like peer-to-peer learning and high rigor. Outside of 42, I try to improve my web
            development, lately, I've been focusing on React, Node.js, and Tailwind CSS.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-6 py-3 bg-white rounded-xl border-2 border-gray-200 hover:border-transparent transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <social.icon className="relative z-10 w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
            <span className="relative z-10 font-semibold text-gray-700 group-hover:text-white transition-colors">
              {social.name}
            </span>
          </a>
        ))}
      </div>

    </div>
  </header>
);

// ─── SKILL BADGE ─────────────────────────────────────────────────────────────

const SkillBadge = ({ skill, index }) => (
  <div
    className="group px-6 py-3 bg-white rounded-xl border-2 border-gray-200 hover:border-transparent transition-all duration-300 cursor-default overflow-hidden relative"
    style={{ animation: `fadeIn 0.5s ease-out ${index * 0.05}s backwards` }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative z-10 flex items-center gap-2">
      {skill.icon && (
        <i className={`${skill.icon} text-xl group-hover:grayscale group-hover:brightness-200 transition-all duration-300`} />
      )}
      <span className="font-mono text-sm font-semibold text-gray-700 group-hover:text-white transition-colors">
        {skill.name}
      </span>
    </div>
  </div>
);

// ─── TECH STACK SECTION ───────────────────────────────────────────────────────

const TechStack = () => (
  <section className="container mx-auto px-6 py-20 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50">
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-10">
        <Code className="w-8 h-8 text-purple-600" />
        <h2 className="text-4xl font-bold text-gray-900">Tech Stack</h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {SKILLS.map((skill, index) => (
          <SkillBadge key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  </section>
);

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────

const ProjectCard = ({ project, index, isHovered, onMouseEnter, onMouseLeave }) => (
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className="group relative bg-white rounded-2xl border-2 border-gray-200 hover:border-transparent p-8 transition-all duration-500 overflow-hidden"
    style={{ animation: `slideIn 0.6s ease-out ${index * 0.1}s backwards` }}
  >
    <div className={`absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`} />

    <div className={`relative bg-white rounded-xl transition-all duration-500 ${isHovered ? 'm-0.5' : ''}`}>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.name}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech.name}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-full text-sm font-mono font-semibold text-gray-700"
            >
              {tech.icon && <i className={`${tech.icon} text-base`} />}
              {tech.name}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={project.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (project.downloadUrl === '#') {
                e.preventDefault();
                alert('The download is not available for this project');
              }
            }}
            className="flex-1 w-full sm:w-auto relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <Download className="w-5 h-5" />
            <span>Download</span>
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (project.demoUrl === '#') {
                e.preventDefault();
                alert("There isn't a showcase available for this project yet.");
              }
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 hover:border-purple-400 rounded-xl font-semibold text-gray-700 hover:text-purple-600 transition-all duration-300"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Demo</span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

// ─── PROJECTS SECTION ─────────────────────────────────────────────────────────

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Layers className="w-8 h-8 text-purple-600" />
          <h2 className="text-4xl font-bold text-gray-900">Projects</h2>
        </div>
        <div className="space-y-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isHovered={hoveredProject === project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── FOOTER ───────────────────────────────────────────────────────────────────

const Footer = () => (
  <footer className="container mx-auto px-6 py-12 mt-20">
    <div className="max-w-5xl mx-auto text-center border-t-2 border-gray-200 pt-12">
      <p className="text-gray-600 font-medium">© 2025 Diogo Silva</p>
    </div>
  </footer>
);

// ─── ROOT COMPONENT ───────────────────────────────────────────────────────────

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      <GlobalStyles />
      <BackgroundOrbs />
      <div className="relative z-10">
        <Header />
        <TechStack />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}