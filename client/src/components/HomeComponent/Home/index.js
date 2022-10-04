import React from "react";
import CONSTANTS from "../../../constants";

import homeBg from "../../../assets/images/home-bg.svg";
import styles from "./Home.module.scss";

const { HOME } = CONSTANTS;

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.home_inner}>
          <h1 className={styles.home_title}>
            <span>Planning</span> - the optimal allocation of resources to
            achieve the goals.
          </h1>
          <div className={styles.home_content}>
            <ol className={styles.home_list}>
              {HOME.PLAN_LIST.map((item, i) => (
                <li className={styles.home_list_item} key={i}>
                  {item.text}
                </li>
              ))}
            </ol>
            <div className={styles.home_box_img}>
              <img className={styles.home_img} src={homeBg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
