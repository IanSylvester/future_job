import { useState, useEffect } from "react";
import React from "react";
import UserAPI from "../apiCalls/classes/UserAPI";

const UserApiTest = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    UserAPI.getAll().then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users &&
        users.map((user) => {
          return <h3 key={user._id}>{user.username}</h3>;
        })}
    </div>
  );
};

export default UserApiTest;
