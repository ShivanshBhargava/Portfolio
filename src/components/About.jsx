import './About.css';
import { useRef, useEffect } from 'react';
import gsap from 'https://cdn.skypack.dev/gsap@3.12.2'
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap@3.12.2/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const aboutRef = useRef(null);
    const titleRef = useRef(null);
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const about = aboutRef.current;
        const title = titleRef.current;
        const container = containerRef.current;
        const content = contentRef.current;

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
                start: 'top 100%',
                end: 'top 0%',
                scrub: 3,
                toggleActions: 'play none none reverse'
            }
        });

        gsap.from(title, {
            y: 100,
            opacity: 1,
            duration: 5,
            scrollTrigger: {
                trigger: about,
                start: 'top 100%',
                end: 'top 0%',
                scrub: 3
            }
        });

        // gsap.from(container, {
        //     y: 50,
        //     opacity: 0,
        //     duration: 3,
        //     scrollTrigger: {
        //         trigger: about,
        //         start: 'top 0%',
        //         end: 'top 20%',
        //         scrub: 1
        //     }
        // });

        // gsap.from(content, {
        //     y: 30,
        //     opacity: 0,
        //     duration: 2,
        //     delay: 0.5,
        //     scrollTrigger: {
        //         trigger: content,
        //         start: 'top 80%',
        //         end: 'top 50%',
        //         scrub: 1
        //     }
        // });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="about-section" id="about" ref={aboutRef}>
            <div className="about-container" ref={containerRef}>
                <h2 className="about-title" ref={titleRef}>About Me</h2>
                <div className="about-content" ref={contentRef}>
                    <div className="about-text">
                        <p>
                            I'm a passionate developer with a keen interest in creating beautiful and functional web applications.
                            My journey in web development started with a curiosity about how things work on the internet,
                            and it has grown into a full-fledged passion for building digital experiences.
                        </p>
                        <p>
                            I specialize in modern web technologies and frameworks, focusing on creating responsive,
                            accessible, and performant applications. When I'm not coding, you can find me exploring
                            new technologies, contributing to open-source projects, or working on personal projects
                            that challenge my skills.
                        </p>
                    </div>
                    <div className="about-stats">
                        <div className="stat-item">
                            <h3>2+</h3>
                            <p>Years Experience</p>
                        </div>
                        <div className="stat-item">
                            <h3>10+</h3>
                            <p>Projects Completed</p>
                        </div>
                        <div className="stat-item">
                            <h3>5+</h3>
                            <p>Technologies Mastered</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
