import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { format } from "date-fns";

import * as ActionUserCreator from "../../../actions/userCreators";
import UserTaskEditWindow from "../UserTaskEditWindow";

import styles from "./UserTasks.module.scss";

const UserTasks = () => {
  const { user, user_tasks } = useSelector(({ users }) => users);
  const [isUserTaskEditWindowActive, setIsUserTaskEditWindowActive] =
    useState(false);
  const [taskEditable, setTaskEditable] = useState({});
  const [sortUserTasks, setSortUserTasks] = useState(false);
  const { userId } = useParams();
  const navigate = useNavigate();

  const {
    getUserRequest,
    getUserTasksRequest,
    deleteUserTaskRequest,
    updateUserTaskRequest,
  } = bindActionCreators(ActionUserCreator, useDispatch());

  useEffect(() => {
    getUserTasksRequest(userId);
    getUserRequest(userId);
    // eslint-disable-next-line
  }, []);

  const userTasksFilterByIsDone = user_tasks.filter(
    (ut) => ut.isDone === sortUserTasks
  );

  return (
    <>
      <section className={styles.user_tasks}>
        <div className={styles.container}>
          <div className={styles.user_tasks_inner}>
            <h1 className={styles.user_tasks_title}>
              <span>{`${user.login}'s tasks`}</span>
            </h1>
            <button
              className={styles.user_tasks_sort}
              onClick={() => setSortUserTasks(!sortUserTasks)}
            >
              {sortUserTasks ? "Show pending tasks" : "Show completed tasks"}
            </button>
            {userTasksFilterByIsDone.length ? (
              <>
                <ul className={styles.user_tasks_list}>
                  {userTasksFilterByIsDone
                    .sort((prev, next) => prev.id - next.id)
                    .map((ut) => (
                      <li className={styles.user_tasks_list_item} key={ut.id}>
                        <div className={styles.task_container}>
                          <p className={styles.task_content}>{ut.content}</p>
                          <div className={styles.task_box_control}>
                            <div className={styles.task_checkbox_wrapper}>
                              <input
                                id={`isDone-${ut.id}`}
                                className={styles.task_checkbox}
                                type="checkbox"
                                value={ut.isDone}
                                checked={ut.isDone}
                                onChange={() => {
                                  updateUserTaskRequest({
                                    values: { isDone: !ut.isDone },
                                    userId,
                                    taskId: ut.id,
                                  });
                                }}
                              />
                              <label
                                htmlFor={`isDone-${ut.id}`}
                                className={styles.task_custom_checkbox}
                              ></label>
                            </div>
                            <div className={styles.task_btn_wrapper}>
                              <button
                                className={styles.task_btn_edit}
                                onClick={() => {
                                  setIsUserTaskEditWindowActive(true);
                                  setTaskEditable(ut);
                                }}
                              ></button>
                            </div>
                            <div className={styles.task_btn_wrapper}>
                              <button
                                className={styles.task_btn_delete}
                                onClick={() =>
                                  deleteUserTaskRequest({
                                    userId,
                                    taskId: ut.id,
                                  })
                                }
                              ></button>
                            </div>
                          </div>
                        </div>
                        <div className={styles.task_box_date}>
                          <p className={styles.task_date_title}>
                            execute before:
                          </p>
                          <p className={styles.task_date_text}>
                            {format(new Date(`${ut.deadLine}`), "P")}
                          </p>
                        </div>
                      </li>
                    ))}
                </ul>
                <UserTaskEditWindow
                  userId={userId}
                  task={taskEditable}
                  isUserTaskEditWindowActive={isUserTaskEditWindowActive}
                  setIsUserTaskEditWindowActive={setIsUserTaskEditWindowActive}
                />
              </>
            ) : (
              <ul className={styles.user_tasks_list}>
                <li className={styles.user_tasks_list_item}>
                  <div className={styles.task_container}>
                    <p className={styles.task_content}>You don't have tasks.</p>
                  </div>
                </li>
              </ul>
            )}

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
