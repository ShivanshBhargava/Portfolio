import './About.css';
import { useRef, useEffect } from 'react';
import gsap from 'https://cdn.skypack.dev/gsap@3.12.2';
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap@3.12.2/ScrollTrigger';
//for socials
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaTwitter,
  FaEnvelope
} from 'react-icons/fa';
//for techStack
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPython,
  FaDocker
} from 'react-icons/fa';

import { SiTypescript, SiMongodb, SiExpress, SiTailwindcss, SiLeetcode, SiCodeforces } from 'react-icons/si';

import { useScroll, animated, useSpring } from '@react-spring/web';
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const introRef = useRef(null);
  const expertiseRef = useRef(null);
  const philosophyRef = useRef(null);
  const socialsRef = useRef(null);
  const skillsRef = useRef(null);
  const circleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: aboutRef,
    onChange: ({ value: { scrollYProgress } }) => {
      if (scrollYProgress > 0.7) {
        circleRef.current.style.transform = `translateX(-50%) scale(${scrollYProgress})`;
      }
    },
    default: {
      immediate: true,
    },
  });

  useEffect(() => {
    const about = aboutRef.current;
    const title = titleRef.current;
    const container = containerRef.current;
    const content = contentRef.current;

    gsap.fromTo(
      about,
      {
        clipPath: 'ellipse(0% 0% at 50% 50%)',
        opacity: 0
      },
      {
        clipPath: 'ellipse(100% 100% at 50% 50%)',
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: about,
          start: 'top 80%',
          end: 'top 0%',
          scrub: 3,
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.to(about, {
      y: 18,
      duration: 3,
      scrollTrigger: {
        trigger: about,
        start: 'top 80%',
        end: 'top 0%',
        scrub: 3
      }
    });

    gsap.from(titleRef.current, {
      y: 100,
      duration: 5,
      scrollTrigger: {
        trigger: about,
        start: 'top 100%',
        end: 'top 0%',
        scrub: 3
      }
    });

    gsap.from(containerRef.current, {
      y: 50,
      duration: 3,
      scrollTrigger: {
        trigger: about,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 3
      }
    });

    gsap.from(contentRef.current, {
      y: 30,
      duration: 2,
      delay: 3.5,
      scrollTrigger: {
        trigger: contentRef.current,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 3
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        } else {
          entry.target.classList.remove('animate-in');
        }
      });
    }, observerOptions);

    const elementsToObserve = [
      introRef.current,
      expertiseRef.current,
      philosophyRef.current,
      socialsRef.current,
      skillsRef.current
    ];

    elementsToObserve.forEach(el => {
      if (el) {
        observer.observe(el);
      }
    });

    // Observe each skill item
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    color: '#F1FAEF',
    textDecoration: 'none',
    backgroundColor: 'rgba(248, 155, 41, 0.1)',
    padding: '0.8rem 1.2rem',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    fontSize: '1rem',
    border: '1px solid rgba(248, 155, 41, 0.2)',
    ':hover': {
      backgroundColor: 'rgba(248, 155, 41, 0.2)',
      transform: 'translateY(-2px)'
    }
  };

  const skills = [
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'C++', icon: <SiCodeforces /> }
  ];

  return (
    <section className="about-section" id="about" ref={aboutRef}>
      <div className="about-container" ref={containerRef}>
        <div className="about-title" ref={titleRef}>
          <h2>About Me</h2>
          <div className="title-divider"></div>
        </div>

        <div className="about-content" ref={contentRef}>
          <div className="about-text">
            <p className="intro" ref={introRef}>
            Hi! I’m a frontend developer who enjoys building clean, responsive, and interactive web interfaces. I 
            love turning ideas into smooth user experiences using HTML, CSS, JavaScript, and modern tools. 
            Always eager to learn and grow.
            </p>
            <p className="expertise" ref={expertiseRef}>
            I specialize in creating responsive, user-friendly web interfaces using modern frontend technologies 
            like HTML, CSS, JavaScript, and React. I focus on writing clean, efficient code and applying 
            thoughtful design principles to build websites that are both functional and visually appealing.
            </p>
            <p className="philosophy" ref={philosophyRef}>
              I believe in the power of continuous learning and collaboration. 
              Whether it's contributing to open-source projects, exploring new 
              technologies, or mentoring others, I'm always excited to push 
              boundaries and make a difference in the tech community.
            </p>
          </div>

          <div className="contacts" ref={socialsRef}>
            <h3>Socials</h3>
            <div className="social-links">
              <a
                href="https://github.com/ShivanshBhargava"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/shivansh-bhargava-0a5280330/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://codeforces.com/profile/LoneLight"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <SiCodeforces /> CodeForces
              </a>
              <a
                href="https://leetcode.com/u/LoneLight/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <SiLeetcode /> Leetcode
              </a>
            </div>
          </div>
        </div>

        <div className="skills-section" ref={skillsRef}>
          <h3>Technical Skills</h3>
          <div className="title-divider"></div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-item"
              >
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
