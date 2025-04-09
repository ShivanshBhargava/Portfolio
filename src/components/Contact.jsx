import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/ShivanshBhargava', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/shivansh-bhargava-0a5280330/', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://x.com/ShivanshBh73566', label: 'Twitter' },
    { icon: <FaEnvelope />, url: 'mailto:shivanshbhargava@gmail.com', label: 'Email' }
  ];

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="contact-container">
        <motion.div 
          className="contact-title"
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
            Let's Connect
          </motion.h2>
          <motion.div 
            className="title-divider"
            style={{
              scaleX: useTransform(scrollYProgress, [0, 0.2], [0, 1])
            }}
          />
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
                <motion.div 
                  className="input-highlight"
                  initial={{ scaleX: 0 }}
                  whileFocus={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
                <motion.div 
                  className="input-highlight"
                  initial={{ scaleX: 0 }}
                  whileFocus={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                />
                <motion.div 
                  className="input-highlight"
                  initial={{ scaleX: 0 }}
                  whileFocus={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="submit-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    ⚡
                  </motion.span>
                ) : (
                  'Send Message'
                )}
              </motion.button>

              {submitStatus && (
                <motion.div
                  className="submit-status"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  Message sent successfully! 🎉
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div 
            className="social-links-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <h3>Or reach me through</h3>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    backgroundColor: 'rgba(147, 51, 234, 0.2)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 