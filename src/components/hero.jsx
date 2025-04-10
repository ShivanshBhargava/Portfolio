import { useEffect, useRef } from 'react';
import './hero.css';
import RotatingText from './RotatingText';
import gsap from 'https://cdn.skypack.dev/gsap@3.12.2'
import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap@3.12.2/ScrollTrigger';
import Photo from '../assets/Photo.png/';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create a spacer to prevent content jump
    const spacer = document.createElement('div');
    spacer.style.height = '100vh';
    spacer.style.width = '100%';
    heroRef.current.parentNode.insertBefore(spacer, heroRef.current.nextSibling);

    // Set up the hero section
    gsap.set(heroRef.current, {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      zIndex: 2,
      opacity: 1
    });

    // Add scroll animations
    gsap.to(heroRef.current, {
      scale: 0.8,
      yPercent: -20,
      opacity: 0.7,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        toggleActions: 'play none none reverse'
      }
    });

    // Set initial state of content elements
    const elements = heroRef.current.querySelectorAll('h1, p, button');
    gsap.set(elements, {
      opacity: 1,
      y: 0
    });

    // Animate the content elements on scroll
    gsap.to(elements, {
      y: -50,
      opacity: 0.7,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      }
    });
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="main" ref={heroRef} id="home">
      <h1>
        Helloˏ Iˊm<br />
        <span id="name">Shivansh Bhargavaˏ</span>
        <br/>
        <div className="roller">
          <RotatingText
            texts={[
              'Frontend Developer',
              'Problem Solver',
              'UI/UX Enthusiast',
              'A Midnight Coder'
            ]}
            mainClassName="text-rotate-main"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="text-rotate-word"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
      </h1>

      <p className="Text">
        A Curious mind fueled by problem-solving through code. From building
        smart logic and debugging tough bugs to exploring how things work
        under the hood — diving deep into tech is the real fun. Always
        learning, experimenting, and chasing the next challenge.
      </p>
      <button 
        className="ContactMe liquid"
        onClick={handleContactClick}
        aria-label="Contact Me"
      >
        <span>Contact Me</span>
      </button>

      <div className='box'>
        <div className='wave -one'></div>
        <div className='wave -two'></div>
        <div className='wave -three'></div>
      </div>

      <div className="diamond-wrapper">
        <div className="diamond-frame fancy-frame">
          <img src={Photo} alt="Framed" className="diamond-img" />
        </div>
      </div>
    </section>
  );
}
