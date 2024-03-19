import React, { useState } from "react";
import { getImageHref } from "../../tools/utils";

import styles from './Navbar.module.css'

export const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuItems = ['about', 'experience', 'projects', 'contact'];

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                Portfolio
            </a>
            <div className={styles.menu}>
                <img
                    className={styles.menuBtn}
                    src={
                        menuOpen
                        ? getImageHref("navbar/closeIcon.png")
                        : getImageHref("navbar/menuIcon.png")
                }
                alt="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul 
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    {menuItems.map(item => (
                        <li key={item}>
                            <a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

