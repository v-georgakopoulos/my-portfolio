import { useState } from "react";
import "./navigation.scss";
import { section } from "framer-motion/client";

const tabs = [
    { id: 1, name: "home", href: "#home" },
    { id: 2, name: "about", href: "#about" },
    { id: 3, name: "projects", href: "#projects" },
    { id: 4, name: "contact", href: "#contact" },
]

const Navigation = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(prev => !prev)
    }

    return (
        <section id="home">
            <nav>
                <div className="logo"></div>
                <div className="mobile-nav">
                    <div
                        className={`menu-icon ${menuOpen ? "open" : ""}`}
                        onClick={toggleMenu}
                    >
                        <div className="bar-1"></div>
                        <div className="bar-2"></div>
                        <div className="bar-3"></div>
                    </div>
                </div>
                <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                    {
                        tabs.map(tab => (
                            <li key={tab.id}>
                                <a
                                    className="nav-link"
                                    href={tab.href}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {tab.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </section>
    )
}

export default Navigation
