import { useContext } from "react";
import React from "react";
import { Context } from "../ContextProvider";

const UserApiTest = () => {
  const context = useContext(Context);
  const {users, setUsers} = context;

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
