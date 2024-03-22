// @ts-nocheck
import { Button, Drawer, Typography } from "@material-tailwind/react";
import floor1 from "../../assets/floors/1.jpg";
import floor2 from "../../assets/floors/2.jpg";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const FloorsLayout = () => {
  const location = useLocation(); //To get the URL location
  const queryParams = new URLSearchParams(location.search); //to Check A URL search string, beginning with a ?floorNo

  const [floorNo, setFloorNo] = useState(queryParams.get("floorNo"));

  console.log(queryParams.get("floorNo"));
  const [openBottom, setOpenBottom] = useState(false);
  const openDrawerBottom = () => setOpenBottom(true);
  const closeDrawerBottom = () => setOpenBottom(false);

  return (
    <>
      {floorNo == "1" ? (
        <>
          <img
            src={floor1}
            className="w-full h-[calc(100vh-4rem)] object-cover"
            alt="floor 1"
            onClick={openDrawerBottom}
          />
        </>
      ) : (
        <>
          <img
            src={floor2}
            className="w-full h-[calc(100vh-4rem)] object-cover"
            alt="floor 1"
            onClick={openDrawerBottom}
          />
        </>
      )}
      <Drawer
        placement="right"
        size={800}
        open={openBottom}
        onClose={closeDrawerBottom}
        className="p-4"
      >
        
      </Drawer>
    </>
  );
};

export default FloorsLayout;
