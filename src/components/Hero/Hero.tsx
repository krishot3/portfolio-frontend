import React from "react";
import { getImageHref } from "../../tools/utils";

import styles from './Hero.module.css'

export const Hero: React.FC = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Krishot</h1>
                <p className={styles.description}>
                    I'm a proficient software automation tester specializing in Cypress. Let's collaborate further. Get in touch!
                </p>
                <a href="mailto:test@testemail.com" className={styles.contactBtn}>Contact me</a>
            </div>
            <img
                src={getImageHref("hero/heroImage.png")}
                alt="Hero image of me"
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
};

