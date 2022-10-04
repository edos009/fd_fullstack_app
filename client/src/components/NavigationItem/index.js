import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./NavigationItem.module.scss";

const NavigationItem = ({ item: { title, to } }) => {
  return (
    <li className={styles.nav_item}>
      <Link className={styles.nav_link} to={to}>
        {title}
      </Link>
    </li>
  );
};

export default NavigationItem;
