import './Projects.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import Chapter463 from'../assets/Chapter463.png'
import AITrends from'../assets/AITrends.png'

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and Framer Motion. Features smooth animations, custom cursor, and interactive UI elements.",
    image: "https://via.placeholder.com/600x400",
    tags: ["React", "Framer Motion", "GSAP", "CSS3", "HTML"],
    github: "https://github.com/ShivanshBhargava/Portfolio/tree/main",
    demo: "https://yourportfolio.com",
    accentColor: "#FF5F6D"
  },
  {
    title: "Chapter 463",
    description: "a choice-based interactive game where you select your own path, made using React. As a young adventurer with mysterious powers, your decisions guide the story, leading to different outcomes.",
    image: Chapter463,
    tags: ["React", "CSS3", "HTML"],
    github: "https://github.com/ShivanshBhargava/Chapter-463",
    demo: "https://chapter-463.vercel.app/",
    accentColor: "#4ECDC4"
  },
  {
    title: "AI Trends Blog",
    description: "A collaborative Blog Project on AI Trends",
    image: AITrends,
    tags: ["CSS3", "HTML"],
    github: "https://github.com/NssGourav/Sem1-Project",
    demo: "https://nssgourav.github.io/Sem1-Project/",
    accentColor: "#FFD166"
  }
];

export default function Projects() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="projects-container">
        <motion.div 
          className="projects-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            style={{
              y: useTransform(scrollYProgress, [0, 1], [0, -50])
            }}
          >
            Featured Work
          </motion.h2>
          <motion.div 
            className="title-divider"
            style={{
              scaleX: useTransform(scrollYProgress, [0, 0.2], [0, 1])
            }}
          />
        </motion.div>

        <div className="projects-content">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              style={{ '--accent-color': project.accentColor }}
              initial={{ 
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
                rotateY: index % 2 === 0 ? -15 : 15
              }}
              whileInView={{ 
                opacity: 1,
                x: 0,
                rotateY: 0
              }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ 
                duration: 0.8,
                ease: "easeOut"
              }}
            >
              <motion.div 
                className="project-number"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 }}
              >
                0{index + 1}
              </motion.div>
              <div className="project-content">
                <motion.div 
                  className="project-image"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={project.image} alt={project.title} />
                </motion.div>
                <motion.div 
                  className="project-info"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.h3
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.4 }}
                  >
                    {project.description}
                  </motion.p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <motion.span 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0 + i * 0 }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: project.accentColor,
                          color: '#000'
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <div className="project-links">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0 }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: project.accentColor
                      }}
                    >
                      <FaGithub /> Source Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0 }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: project.accentColor
                      }}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 