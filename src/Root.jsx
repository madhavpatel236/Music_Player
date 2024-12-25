import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./componenets/Header";
import { useSelector } from "react-redux";
import Login from "./componenets/Login";

function Root() {

  const token = useSelector((store) => store?.token?.tokenData);
  return (
    <div>
      
    </div>
  );
}

export default Root;
