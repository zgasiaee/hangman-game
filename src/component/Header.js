import React from 'react';

//style
import styles from '../styles/Style.module.css'

const Header = () => {
    return (
      <div className={styles.titleContainer}>
        <h1>Hangman</h1>
        <p>Guss The Programing Languages</p>
      </div>
    );
};

export default Header;