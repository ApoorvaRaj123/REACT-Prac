import { React, useContext } from "react";
import { UserContext } from "./Context";
import {useNavigate, useParams } from "react-router-dom";

const Userdetail = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  const {users} = useContext(UserContext);

  return (
    <>
      <h1 className="text-4xl font-bold text-red-200">{users[id].name}</h1>
      <h3 className="text-red-400">{users[id].email}</h3>
      <button onClick={()=> navigate(-1)} className="rounded-md mt-5 bg-red-200 p-2">go back</button>

    </>
  );
};

export default Userdetail;
