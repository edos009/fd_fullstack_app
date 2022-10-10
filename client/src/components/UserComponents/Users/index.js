import React, { useState } from "react";
import UserForm from "../../Forms/UserForm";

import createUser from "../../../assets/images/create-user-1.webp";
import styles from "./Users.module.scss";
import UserList from "../UsersList";

const Users = () => {
  const [isShowUsers, setIsShowUsers] = useState(false);

  return (
    <>
      <section className={styles.users}>
        <div className={styles.container}>
          <div className={styles.users_inner}>
            <div className={styles.users_create_box}>
              <div className={styles.users_box_img}>
                <img className={styles.users_img} src={createUser} alt="" />
              </div>
              <div className={styles.users_wrapper_form}>
                <div className={styles.users_title}>
                  <span>Create User</span>
                </div>
                <UserForm />
              </div>
            </div>
            <UserList isShowUsers={isShowUsers} />
            <button
              className={styles.users_bth_show}
              onClick={() => setIsShowUsers(!isShowUsers)}
            >
              {isShowUsers ? "Hide Users" : "Show Users"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Users;
