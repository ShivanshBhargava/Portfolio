import "./Navbar.css"
import { animate } from "https://cdn.jsdelivr.net/npm/motion@12.6.0/+esm"
import { useEffect, useState } from "react"

export default function NavBar() {
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { id: 'home', icon: 'home', label: 'Home', colors: ['#ff2972', '#2196f3'] },
        { id: 'about', icon: 'person', label: 'About', colors: ['#1e9600', '#fff200'] },
        { id: 'work', icon: 'work', label: 'Work', colors: ['#ff0f7b', '#f89b29'] },
        { id: 'contact', icon: 'mail', label: 'Contact', colors: ['#00c3ff', '#4e54c8'] }
    ];

    useEffect(() => {
        animate("[data-nav-item]", { scale: 1.2 }, { duration: 0.2 })
        return () => animate("[data-nav-item]", { scale: 1 }, { duration: 0.2 })
    }, []);

    return (
        <nav className="container" aria-label="Main navigation">
            <ul className="nav-list">
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                        onClick={() => setActiveSection(item.id)}
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