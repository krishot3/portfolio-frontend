import React from "react";

import styles from './About.module.css';

export const AboutItem: React.FC<{ title: string; description: string }> = ({ title, description }) => {
    return (
        <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </li>
    );
};

