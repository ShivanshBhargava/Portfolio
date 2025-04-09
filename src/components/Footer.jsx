import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com/yourusername', label: 'Twitter' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>© {currentYear} Shivansh Bhargava. All rights reserved.</p>
          <p>Built with React and lots of ☕</p>
        </div>
      </div>
    </footer>
  );
} 