import React, { useState } from "react";
import TasksList from "../TasksList";

import styles from "./Tasks.module.scss";

const Tasks = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <section className={styles.tasks}>
      <div className={styles.container}>
        <div className={styles.tasks_inner}>
          <div className={styles.tasks_title}>
            <span>Users With Tasks</span>
          </div>
          <div className={styles.tasks_search_wrapper}>
            <input
              className={styles.tasks_search_input}
              value={searchInput}
              placeholder="Search..."
              onChange={({ target: { value } }) => setSearchInput(value)}
            />
          </div>
          <TasksList searchInput={searchInput} />
        </div>
      </div>
    </section>
  );
};

export default Tasks;
