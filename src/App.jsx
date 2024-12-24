import React, { useEffect } from "react";
import Login from "./componenets/Login";
import { useDispatch, useSelector } from "react-redux";
import { tokenAdd } from "./utils/Slice/tokenSlice";
import Home from "./componenets/Home";
import store from "./utils/store.js";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
