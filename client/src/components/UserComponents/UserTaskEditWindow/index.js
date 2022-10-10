import React, { useEffect } from "react";
import cx from "classnames";

import editTask from "../../../assets/images/edit-task.png";
import styles from "./UserTaskEditWindow.module.scss";
import TaskEditForm from "../../Forms/TaskEditForm";

const UserTaskEditWindow = ({
  userId,
  task,
  isUserTaskEditWindowActive,
  setIsUserTaskEditWindowActive,
}) => {
  const stylesWindowBack = cx(styles.window_back, {
    [styles.window_back_visible]: isUserTaskEditWindowActive,
  });

  const stylesUserTaskEditWindow = cx(styles.task, {
    [styles.task_edit_window_visible]: isUserTaskEditWindowActive,
  });

  useEffect(() => {
    const body = document.querySelector("body");
    if (isUserTaskEditWindowActive) {
      body.classList.add("body_scroll");
      body.style.overflowY = "hidden";
    } else {
      body.style.overflowY = "visible";
    }
  }, [isUserTaskEditWindowActive]);

  return (
    <>
      <div className={stylesWindowBack}></div>
      <div className={stylesUserTaskEditWindow}>
        <div className={styles.btn_wrapper}>
          <button
            onClick={() => setIsUserTaskEditWindowActive(false)}
            className={styles.btn_close}
          ></button>
        </div>
        <h2 className={styles.title}>
          <span>Edit Task</span>
        </h2>
        <TaskEditForm
          userId={userId}
          task={task}
          setIsUserTaskEditWindowActive={setIsUserTaskEditWindowActive}
        />
        <img className={styles.edit_img} src={editTask} alt="" />
      </div>
    </>
  );
};

export default UserTaskEditWindow;
