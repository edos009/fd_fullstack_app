import React from "react";
import UserForm from "../../Forms/UserForm";

import createUser from "../../../assets/images/create-user.webp";
import styles from "./Users.module.scss";
import UserList from "../UserList";

const Users = () => {
  return (
    <>
      <section className={styles.users}>
        <div className={styles.container}>
          <div className={styles.users_inner}>
            <div className={styles.users_create_box}>
              <div className={styles.users_box_img}>
                <img src={createUser} alt="" />
              </div>
              <UserForm />
              <UserList/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Users;
