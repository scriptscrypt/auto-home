// @ts-nocheck

import { Button, Drawer, Typography } from "@material-tailwind/react";
import LeftSidebar from "./components/sidebar/LeftSidebar";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const pathname = window.location.pathname;
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === "/") {
      localStorage.getItem("auth") === "true"
        ? navigate("/floor/1")
        : navigate("/login");
    }
    else if(pathname) {
      localStorage.getItem("auth") === "true"
        ? navigate(pathname)
        : navigate("/login");
    }
  }, []);

  return (
    <>
      <div className="flex">
        <LeftSidebar />

        <Outlet />
      </div>
    </>
  );
}

export default App;
