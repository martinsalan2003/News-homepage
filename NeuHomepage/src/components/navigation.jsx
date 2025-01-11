import { useState } from "react";
import Logo from '../assets/images/logo.svg';

import '../styles/components-styles/navigation.sass';

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header id='nav'>
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div 
                className={`menu-icon ${menuOpen ? 'open' : ''}`} 
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`navigation-option ${menuOpen ? 'show' : ''}`}>
                <ul>
                    <li>Home</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Categories</li>
                </ul>
            </div>
        </header>
    );
}