import React from 'react';
import cx from "classnames";

import CONSTANTS from '../../constants';
import NavigationItem from '../NavigationItem';

import styles from "./Navigation.module.scss";

const {NAVIGATION} = CONSTANTS;

const Navigation = ({ isBurgerActive, setIsBurgerActive }) => {
  const navStyles = cx(styles.nav, {
    [styles.active]: isBurgerActive,
  });
  return (
    <nav className={navStyles}>
      <ul className={styles.nav_list}>
        {NAVIGATION.LINKS.map((item) => (
          <NavigationItem
            item={item}
            key={item.id}
            setIsBurgerActive={setIsBurgerActive}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
