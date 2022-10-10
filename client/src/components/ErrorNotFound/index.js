import React from "react";

import ErrorImage from '../../assets/images/error-404.png'
import styles from "./ErrorNotFound.module.scss";

const ErrorNotFound = () => {
  return (
    <section className={styles.error}>
      <div className={styles.container}>
        <div className={styles.error_inner}>
          <img className={styles.error_img} src={ErrorImage} alt="" />
          <p className={styles.error_text}>page not found!</p>
        </div>
      </div>
    </section>
  );
};

export default ErrorNotFound;
