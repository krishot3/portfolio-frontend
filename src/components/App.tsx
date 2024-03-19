import React from 'react';
import { Navbar } from './Navbar/Navbar';
import styles from './App.module.css'

export const App: React.FC = () => {
  return <div className={styles.App}>
    <Navbar />
  </div>
}
