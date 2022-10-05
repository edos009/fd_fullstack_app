import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import cx from "classnames";

import * as ActionUserCreator from "../../../actions/userCreators";
import CONSTANTS from "../../../constants";

import defaultAvatar from "../../../assets/images/users-ava-default.png";
import styles from "./UserList.module.scss";

const {
  PAGES: { LIMIT },
} = CONSTANTS;

const UserList = ({ isShowUsers }) => {
  const { users, totalUsersCount, offset } = useSelector(({ users }) => users);
  const { getUsersRequest, setOffset } = bindActionCreators(
    ActionUserCreator,
    useDispatch()
  );

  const stylesUsersWrapper = cx(styles.users_wrapper, {
    [styles.users_wrapper_visible]: isShowUsers,
  });

  const getPages = () => {
    const countPage = Math.ceil(totalUsersCount / LIMIT);
    const pages = [];
    for (let i = 0; i < countPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  useEffect(() => {
    getUsersRequest({ limit: LIMIT, offset });
    // eslint-disable-next-line
  }, [offset]);

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
          </li>
        ))}
      </ul>
      <div className={styles.users_pages}>
        {getPages().map((elem, i) => (
          <span
            className={offset / LIMIT === elem ? styles.users_active_page : ''}
            key={i}
            onClick={() => {
              setOffset(elem * LIMIT);
            }}
          >
            {elem + 1}
          </span>
        ))}
      </div>
    </div>
  );
};

export default UserList;
