import { React, useContext } from "react";
import { Link } from "react-router-dom";
import {UserContext} from "./Context.jsx"

const User = () => {

  const x = useContext(UserContext);
  console.log(x);
  return (

    <>
      <div>
        <h1 className="text-3xl">User List</h1>
        <div className="mt-10 bg-blue-300 w-1/2">
          <Link className ="p-3">User name</Link>
        </div>
      </div>
    </>
  );
};

export default User;
