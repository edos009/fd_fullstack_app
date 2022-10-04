import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import * as ActionUserCreator from "../../../actions/userCreators";
import CONSTANTS from "../../../constants";

const {
  PAGES: { LIMIT },
} = CONSTANTS;

const UserList = () => {
  const { users, totalUsersCount, offset, isFetching, error } = useSelector(
    ({ users }) => users
  );
  const { getUsersRequest, setOffset } = bindActionCreators(
    ActionUserCreator,
    useDispatch()
  );

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
    <section>
      {users.map((u) => (
        <article key={u.id}>
          <h3>{u.login}</h3>
          {/* {u.avatar && <img src={`http://localhost:5000/images/${u.avatar}`} alt={u.login}/>} */}
        </article>
      ))}
      <div>
        {getPages().map((elem, i) => (
          <span
            key={i}
            onClick={() => {
              setOffset(elem * LIMIT);
            }}
          >
            {elem + 1}
          </span>
        ))}
      </div>
    </section>
  );
};

export default UserList;
