import "./Navbar.css"
import { useEffect, useState } from "react"

export default function NavBar() {
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { id: 'home', icon: 'home', label: 'Home', colors: ['#ff2972', '#2196f3'], target: 'top' },
        { id: 'about', icon: 'person', label: 'About', colors: ['#1e9600', '#fff200'], target: 'about' },
        { id: 'work', icon: 'work', label: 'Work', colors: ['#ff0f7b', '#f89b29'], target: 'projects' },
        { id: 'contact', icon: 'mail', label: 'Contact', colors: ['#00c3ff', '#4e54c8'], target: 'contact' }
    ];

    const handleNavClick = (sectionId, targetId) => {
        setActiveSection(sectionId);
        if (targetId === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className="container" aria-label="Main navigation">
            <ul className="nav-list">
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                        onClick={() => handleNavClick(item.id, item.target)}
                        style={{ '--i': item.colors[0], '--j': item.colors[1] }}
                    >
                        <span className="material-icons-round" aria-hidden="true">
                            {item.icon}
                        </span>
                        <span className="title">{item.label}</span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}