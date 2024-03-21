import React from "react";
import { AboutItem } from './About.Item';
import { getImageHref } from "../../tools/utils";

import styles from './About.module.css'

export const About: React.FC = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.content}>
                <img
                    src={getImageHref("about/aboutImage.png")}
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <AboutItem
                        title="Automation Tester"
                        description=
                            "I specialize in software automation testing, with expertise in key technologies like Cypress, TypeScript, Postman, and Git. My skills encompass designing and implementing efficient automated testing solutions. Additionally, my proficiency in English enables effective communication across diverse teams."
                    />
                </ul>
            </div>
        </section>
    )
};