import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import * as ActionUserCreator from "../../actions/userCreators";

const UserList = () => {
  const { users, isFetching, error } = useSelector(({ users }) => users);
  const { getUsersRequest } = bindActionCreators(
    ActionUserCreator,
    useDispatch()
  );

  useEffect(() => {
    getUsersRequest({limit: 5, offset: 0});
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      {users.map((u) => (
        <article key={u.id}>
          <h3>{u.login}</h3>
        </article>
      ))}
    </section>
  );
};

export default UserList;
