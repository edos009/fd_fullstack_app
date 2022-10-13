import React, { useState, useEffect } from "react";
import cx from "classnames";

import styles from "./Header.module.scss";
import Logo from "../Logo";
import Navigation from "../Navigation";

const Header = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const burgerStyle = cx(styles.header_burger, {
    [styles.active]: isBurgerActive,
  });

  useEffect(() => {
    if (isBurgerActive) {
      document.querySelector("body").classList.add("lock");
    } else {
      document.querySelector("body").classList.remove("lock");
    }
  }, [isBurgerActive]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header_inner}>
          <Logo />
          <div
            className={burgerStyle}
            onClick={() => setIsBurgerActive(!isBurgerActive)}
          >
            <span></span>
          </div>
          <Navigation isBurgerActive={isBurgerActive} setIsBurgerActive={setIsBurgerActive}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
