import React from "react";

import styles from "./Header.module.scss";
import Logo from "../Logo";
import Navigation from "../Navigation";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header_inner}>
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
