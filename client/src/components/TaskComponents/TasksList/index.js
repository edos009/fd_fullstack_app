import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { useNavigate } from "react-router-dom";

import * as ActionUserCreator from "../../../actions/userCreators";
import * as ActionTaskCreator from "../../../actions/taskCreators";

import defaultAvatar from "../../../assets/images/users-ava-default.png";
import styles from "./TasksList.module.scss";

const TasksList = ({searchInput}) => {
  const {
    users: { users },
    tasks: { tasks },
  } = useSelector((state) => state);

  const { getUsersRequest } = bindActionCreators(
    ActionUserCreator,
    useDispatch()
  );
  const { getTasksRequest } = bindActionCreators(
    ActionTaskCreator,
    useDispatch()
  );

  const navigate = useNavigate();

  useEffect(() => {
    getUsersRequest({ limit: 0, offset: 0 });
    getTasksRequest();
    // eslint-disable-next-line
  }, []);

  const usersWithTasks = users.map((u) => ({
    ...u,
    tasks: tasks.filter((t) => t.userId === u.id),
  }));

  return (
    <ul className={styles.uwt_list}>
      {usersWithTasks.filter(utw => utw.login.toLowerCase().includes(searchInput.toLowerCase())).map((uwt) => (
        <li className={styles.uwt_item} key={uwt.id}>
          {uwt.avatar ? (
            <img
              className={styles.uwt_item_img}
              src={`http://localhost:5000/images/${uwt.avatar}`}
              alt={uwt.login}
            />
          ) : (
            <img
              className={styles.uwt_item_img}
              src={defaultAvatar}
              alt={uwt.login}
            />
          )}
          <h3 className={styles.uwt_item_login}>{uwt.login}</h3>
          <div className={styles.uwt_item_box_count_tasks}>
            <p className={styles.uwt_item_count_tasks_title}>Active tasks: </p>
            <p className={styles.uwt_item_count_tasks_text}>
              {uwt.tasks.length}
            </p>
          </div>
          <button
            className={styles.uwt_btn_back}
            onClick={() => navigate(`/users/${uwt.id}/tasks`)}
          >
            Show Tasks
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
