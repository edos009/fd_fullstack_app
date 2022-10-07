import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import CreateTaskForm from "../../Forms/CreateTaskForm";
import * as ActionUserCreator from "../../../actions/userCreators";

import createTaskImg from "../../../assets/images/create-task.png";
import styles from "./UserTasks.module.scss";

const UserTasks = () => {
  const { userId } = useParams();
  const { user } = useSelector(({ users }) => users);

  const { getUserRequest } = bindActionCreators(
    ActionUserCreator,
    useDispatch()
  );

  useEffect(() => {
    getUserRequest(userId);
    // eslint-disable-next-line
  }, []);

  return (
    <section className={styles.user_tasks}>
      <div className={styles.container}>
        <div className={styles.user_tasks_inner}>
          <div className={styles.user_tasks_wrapper}>
            <div className={styles.user_box_info}>
              <img
                className={styles.user_avatar}
                src={
                  user.avatar && `http://localhost:5000/images/${user.avatar}`
                }
                alt=""
              />
              <p className={styles.user_login}>{user.login}</p>
            </div>
            <div className={styles.user_tasks_wrapper_form}>
              <div className={styles.user_tasks_title}>
                <span>Create Task</span>
              </div>
              <img
                className={styles.user_tasks_img}
                src={createTaskImg}
                alt=""
              />
              <CreateTaskForm userId={userId}/>
            </div>
          </div>
          <button className={styles.user_tasks_btn_show}>Show Tasks</button>
          <h2 className={styles.user_tasks_title}>{}</h2>
          <ul className={styles.user_tasks_list}>
            <li className={styles.user_tasks_list_item}></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UserTasks;
