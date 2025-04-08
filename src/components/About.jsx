import './About.css';
import { useRef, useEffect } from 'react';
import gsap from 'https://cdn.skypack.dev/gsap@3.12.2'
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap@3.12.2/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const aboutRef = useRef(null);
    const titleRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const about = aboutRef.current;
        const title = titleRef.current;
        const container = containerRef.current;

        gsap.fromTo(about,
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
                    start: 'top 100%',
                    end: 'top 0%',
                    scrub: 3,
                    toggleActions: 'play none none reverse',
                },
            }
        );

        // Scroll animation for about section
        gsap.to(about, {
            y: -100,
            duration: 3,
            scrollTrigger: {
                trigger: about,
                start: 'top 20%',
                end: 'top 60%',
                scrub: 5,
                toggleActions: 'play none none reverse'
            }
        });

        gsap.from(title, {
            y: 100,
            opacity: 0,
            duration: 3,
            scrollTrigger: {
                trigger: about,
                start: 'top 100%',
                end: 'top 0%',
                scrub: 1
            }
        });

        gsap.from(container, {
            y: 50,
            opacity: 0,
            duration: 3,
            scrollTrigger: {
                trigger: about,
                start: 'top 0%',
                end: 'top 20%',
                scrub: 1
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="about-section" id="about" ref={aboutRef}>
            <div className="about-container" ref={containerRef}>
                <h2 className="about-title" ref={titleRef}>About Me</h2>
                <div className="skills-container">
                    <div className="skill-card">
                        <span className="material-icons-round">code</span>
                        <h3>Frontend Development</h3>
                        <p>Building beautiful, responsive websites with React, HTML, CSS, and JavaScript</p>
                    </div>
                    <div className="skill-card">
                        <span className="material-icons-round">design_services</span>
                        <h3>UI/UX Design</h3>
                        <p>Creating intuitive and engaging user experiences</p>
                    </div>
                    <div className="skill-card">
                        <span className="material-icons-round">psychology</span>
                        <h3>Problem Solving</h3>
                        <p>Analytical thinking and creative solution finding</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
