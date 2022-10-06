import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import cx from "classnames";

import * as ActionUserCreator from "../../../actions/userCreators";
import CONSTANTS from "../../../constants";

import defaultAvatar from "../../../assets/images/users-ava-default.png";
import styles from "./UserList.module.scss";
import UsersEditWindow from "../UsersEditWindow";

const {
  PAGES: { LIMIT },
} = CONSTANTS;

const UserList = ({ isShowUsers }) => {
  const { users, totalUsersCount, offset } = useSelector(({ users }) => users);
  const [isEditWindowActive, setIsEditWindowActive] = useState(false);
  const [userEditable, setUserEditable] = useState({});

  const { getUsersRequest, setOffset, deleteUserRequest } = bindActionCreators(
    ActionUserCreator,
    useDispatch()
  );

  const stylesUsersWrapper = cx(styles.users_wrapper, {
    [styles.users_wrapper_visible]: isShowUsers,
  });

  const getPages = useCallback(() => {
    const countPage = Math.ceil(totalUsersCount / LIMIT);
    const pages = [];
    for (let i = 0; i < countPage; i++) {
      pages.push(i);
    }

    return pages;
  }, [totalUsersCount]);

  useEffect(() => {
    getUsersRequest({ limit: LIMIT, offset });
    // eslint-disable-next-line
  }, [offset]);

  const deleteUser = (id) => {
    //Как вернуть из саги промис!!
    deleteUserRequest(id);
    if (users.length - 1 === 0 && totalUsersCount - 1 !== 0) {
      setOffset(offset - LIMIT);

      setTimeout(() => {
        getUsersRequest({
          limit: LIMIT,
          offset: offset - LIMIT,
        });
      }, 100);
    } else {
      setTimeout(() => {
        getUsersRequest({ limit: LIMIT, offset });
      }, 100);
    }
  };

  return (
    <div className={stylesUsersWrapper}>
      <ul className={styles.users_list}>
        {users.map((u) => (
          <li className={styles.users_list_item} key={u.id}>
            {u.avatar ? (
              <img
                className={styles.users_item_img}
                src={`http://localhost:5000/images/${u.avatar}`}
                alt={u.login}
              />
            ) : (
              <img
                className={styles.users_item_img}
                src={defaultAvatar}
                alt={u.login}
              />
            )}
            <h3 className={styles.users_item_login}>{u.login}</h3>
            <div className={styles.users_control}>
              <div className={styles.users_btn_wrapper}>
                <button
                  className={styles.users_btn_edit}
                  onClick={() => {
                    setIsEditWindowActive(true);
                    setUserEditable(u);
                  }}
                ></button>
              </div>
              <div className={styles.users_btn_wrapper}>
                <button
                  className={styles.users_btn_delete}
                  onClick={() => deleteUser(u.id)}
                ></button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.users_pages}>
        {getPages().map((elem, i) => (
          <span
            className={offset / LIMIT === elem ? styles.users_active_page : ""}
            key={i}
            onClick={() => {
              setOffset(elem * LIMIT);
            }}
          >
            {elem + 1}
          </span>
        ))}
      </div>
      {isEditWindowActive && (
        <UsersEditWindow
          user={userEditable}
          isEditWindowActive={isEditWindowActive}
          setIsEditWindowActive={setIsEditWindowActive}
        />
      )}
    </div>
  );
};

export default UserList;
