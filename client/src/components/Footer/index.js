import React from 'react';

import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_inner}>
          <p className={styles.footer_text}>
            userstodo@gmail.com | @2022
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
