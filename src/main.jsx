import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./componenets/Home.jsx";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import Login from "./componenets/Login.jsx";
import Header from "./componenets/Header.jsx";
import Playlist from "./componenets/Playlist.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
{/* 
      <Route path="/" element={<Header />} /> */}
      <Route path="login" element={<Login />} />
      <Route path="playlist" element={<Playlist />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </StrictMode>
);
