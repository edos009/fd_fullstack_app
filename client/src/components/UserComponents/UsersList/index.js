import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { useNavigate } from "react-router-dom";
import cx from "classnames";

import UsersEditWindow from "../UsersEditWindow";
import * as ActionUserCreator from "../../../actions/userCreators";
import CONSTANTS from "../../../constants";

import defaultAvatar from "../../../assets/images/users-ava-default.png";
import styles from "./UserList.module.scss";

const {
  PAGES: { LIMIT },
} = CONSTANTS;

const UserInfo = ({ isShowUsers }) => {
  const { users, totalUsersCount, offset } = useSelector(({ users }) => users);
  const [isEditWindowActive, setIsEditWindowActive] = useState(false);
  const [userEditable, setUserEditable] = useState({});

  const { getUsersRequest, setOffset, deleteUserRequest } = bindActionCreators(
    ActionUserCreator,
    useDispatch()
  );
  const navigate = useNavigate();

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
    deleteUserRequest(id);

    const condOffset = users.length - 1 === 0 && totalUsersCount - 1 !== 0;
    if (condOffset) {
      setOffset(offset - LIMIT);
    }

    setTimeout(() => {
      getUsersRequest({
        limit: LIMIT,
        offset: condOffset ? offset - LIMIT : offset,
      });
    }, 100);
  };

  return (
    <div className={stylesUsersWrapper}>
      <ul className={styles.users_list}>
        {users.map((u) => (
          <li
            className={styles.users_list_item}
            key={u.id}
            onClick={() => navigate(`/users/${u.id}`)}
          >
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
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsEditWindowActive(true);
                    setUserEditable(u);
                  }}
                ></button>
              </div>
              <div className={styles.users_btn_wrapper}>
                <button
                  className={styles.users_btn_delete}
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteUser(u.id);
                  }}
                ></button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.users_pages}>
        {getPages().map((elem, i) => (
          <span
            className={cx({
              [styles.users_active_page]: offset / LIMIT === elem,
            })}
            key={i}
            onClick={() => {
              setOffset(elem * LIMIT);
            }}
          >
            {elem + 1}
          </span>
        ))}
      </div>
      <UsersEditWindow
        user={userEditable}
        isEditWindowActive={isEditWindowActive}
        setIsEditWindowActive={setIsEditWindowActive}
      />
    </div>
  );
};

export default UserInfo;
