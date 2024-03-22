// @ts-nocheck

import { Button, Drawer, Typography } from "@material-tailwind/react";
import LeftSidebar from "./components/sidebar/LeftSidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [openBottom, setOpenBottom] = useState(false);
  const openDrawerBottom = () => setOpenBottom(true);
  const closeDrawerBottom = () => setOpenBottom(false);

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