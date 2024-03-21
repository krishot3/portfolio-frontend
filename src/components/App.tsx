import React from 'react';
import { Navbar } from './Navbar/Navbar';
import { Hero } from './Hero/Hero';

import styles from './App.module.css'
import { About } from './About/About';

export const App: React.FC = () => {
  return <div className={styles.App}>
    <Navbar />
    <Hero />
    <About />
  </div>
}
