import React, { useEffect } from "react";
import cx from "classnames";

import UserEditForm from "../../Forms/EditUserForm";

import editUser from "../../../assets/images/edit-user.png";
import styles from "./UsersEditWindow.module.scss";

const UsersEditWindow = ({
  isEditWindowActive,
  setIsEditWindowActive,
  user,
}) => {
  const stylesWindowBack = cx(styles.window_back, {
    [styles.window_back_visible]: isEditWindowActive,
  });

  const stylesUsersEditWindow = cx(styles.users_edit_window, {
    [styles.users_edit_window_visible]: isEditWindowActive,
  });

  useEffect(() => {
    const body = document.querySelector("body");
    if (isEditWindowActive) {
      body.classList.add("body_scroll");
    } else {
      body.classList.remove("body_scroll");
    }
  }, [isEditWindowActive]);

  return (
    <>
      <div className={stylesWindowBack}></div>
      <div className={stylesUsersEditWindow}>
        <div className={styles.btn_wrapper}>
          <button
            onClick={() => setIsEditWindowActive(false)}
            className={styles.btn_close}
          ></button>
        </div>
        <h2 className={styles.title}>
          <span>Edit User</span>
        </h2>
        <UserEditForm
          user={user}
          setIsEditWindowActive={setIsEditWindowActive}
        />
        <img className={styles.edit_img} src={editUser} alt="" />
      </div>
    </>
  );
};

export default UsersEditWindow;
