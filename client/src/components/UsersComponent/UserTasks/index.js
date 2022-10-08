import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { format } from "date-fns";

import * as ActionUserCreator from "../../../actions/userCreators";

import styles from "./UserTasks.module.scss";

const UserTasks = () => {
  const { user, user_tasks } = useSelector(({ users }) => users);
  const { userId } = useParams();
  const navigate = useNavigate();

  const { getUserRequest, getUserTasksRequest } = bindActionCreators(
    ActionUserCreator,
    useDispatch()
  );

  useEffect(() => {
    getUserTasksRequest(userId);
    getUserRequest(userId);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <section className={styles.user_tasks}>
        <div className={styles.container}>
          <div className={styles.user_tasks_inner}>
            <h1 className={styles.user_tasks_title}>
              <span>{`${user.login}'s tasks`}</span>
            </h1>
            <ul className={styles.user_tasks_list}>
              {user_tasks.map((ut) => (
                <li className={styles.user_tasks_list_item} key={ut.id}>
                  <div className={styles.task_container}>
                    <p className={styles.task_content}>{ut.content}</p>
                    <div className={styles.task_box_control}>
                      <div className={styles.task_btn_wrapper}>
                        <button className={styles.task_btn_edit}></button>
                      </div>
                      <div className={styles.task_btn_wrapper}>
                        <button className={styles.task_btn_delete}></button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.task_box_date}>
                    <p className={styles.task_date_title}>execute before:</p>
                    <p className={styles.task_date_text}>
                      {format(new Date(`${ut.deadLine}`), "P")}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <button
              className={styles.user_tasks_btn_back}
              onClick={() => navigate(`/users/${userId}`)}
            >
              Back
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserTasks;
