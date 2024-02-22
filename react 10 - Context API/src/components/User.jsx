import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../components/Context";

const User = () => {
  const {users, setusers} = useContext(UserContext);
  console.log(x);
  return (
    <>
      <div>
        <h1 className="text-3xl">User List</h1>
        <div className="mt-10 bg-blue-300 w-1/2">
          {users.map((u) => {
            <Link key={u.id} to={`/users/${u.id}`} className="p-3">{u.name}</Link>;
          })}
        </div>
      </div>
    </>
  );
};

export default User;
