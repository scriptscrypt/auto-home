// @ts-nocheck

import { Button, Drawer, Typography } from "@material-tailwind/react";
import LeftSidebar from "./components/sidebar/LeftSidebar";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const pathname = window.location.pathname;
  const navigate = useNavigate();
  useEffect(() => {
    if(pathname === "/")
    navigate("/floor/1");
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
