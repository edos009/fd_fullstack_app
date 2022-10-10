import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import CreateTaskForm from "../../Forms/CreateTaskForm";
import * as ActionUserCreator from "../../../actions/userCreators";

import createTaskImg from "../../../assets/images/create-task.png";
import styles from "./UserInfo.module.scss";

const UserInfo = () => {
  const { user } = useSelector(({ users }) => users);
  const { userId } = useParams();
  const navigate = useNavigate();

  const { getUserRequest } = bindActionCreators(
    ActionUserCreator,
    useDispatch()
  );

  useEffect(() => {
    getUserRequest(userId);
    // eslint-disable-next-line
  }, []);

  return (
    <section className={styles.user_info}>
      <div className={styles.container}>
        <div className={styles.user_info_inner}>
          <div className={styles.user_info_wrapper}>
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
            <div className={styles.user_info_wrapper_form}>
              <div className={styles.user_info_title}>
                <span>Create Task</span>
              </div>
              <img
                className={styles.user_info_img}
                src={createTaskImg}
                alt=""
              />
              <CreateTaskForm userId={userId} />
            </div>
          </div>
          <div className={styles.user_info_box_control}>
            <button
              className={styles.user_info_btn_back}
              onClick={() => navigate("/users")}
            >
              Back
            </button>
            <button
              className={styles.user_info_btn_show}
              onClick={() => navigate(`/users/${userId}/tasks`)}
            >
              Show Tasks
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
