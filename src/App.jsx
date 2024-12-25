import React, { useEffect } from "react";
import Login from "./componenets/Login";
import { useDispatch, useSelector } from "react-redux";
import { tokenAdd } from "./utils/Slice/tokenSlice";
import Home from "./componenets/Home";
import Root from "./Root";
import store from "./utils/store";
import { Provider } from "react-redux";
import { Outlet, Route, useNavigate } from "react-router-dom";
import Header from "./componenets/Header";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((store) => store?.token?.tokenData);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const tokenData = hash.substring(1).split("&")[0].split("=")[1];
      // console.log(token);
      if (tokenData) {
        dispatch(tokenAdd(tokenData));
      }
    }
  }, [token, dispatch]);
  console.log(token);

  return (
    <div>
      {token ? (
        <Provider store={store}>
          <Header />
          <Outlet />
        </Provider>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
