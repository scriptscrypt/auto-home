// @ts-nocheck
import {
  Button,
  Drawer,
  IconButton,
  Switch,
  Typography,
} from "@material-tailwind/react";

import floor1Dark from "../../assets/floors/1_Dark.png";
import floor1Normal from "../../assets/floors/1_Normal.png";

import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Fans from "../drawerElements/Fans";
import Lights from "../drawerElements/Lights";
import BedroomCard from "../drawerElements/Bedroom/BedroomCard";
import LivingRoomCard from "../drawerElements/Livingroom/LivingRoomCard";
import MainDoorCard from "../drawerElements/MainDoor/MainDoorCard";
import BathRoomCard from "../drawerElements/Bathroom/BathRoomCard";

const FloorsLayout = () => {
  // const location = useLocation(); //To get the URL location
  // const queryParams = new URLSearchParams(location.search); //to Check A URL search string, beginning with a ?floorNo

  const { floorNo } = useParams();
  const [floorNoSt, setFloorNoSt] = useState(floorNo);
  const [flooVar, setFlooVar] = useState("normal");
  const [stOpenElement, setStOpenElement] = useState(false);

  const [openBottom, setOpenBottom] = useState(false);
  const openDrawerBottom = () => setOpenBottom(true);
  const closeDrawerBottom = () => setOpenBottom(false);

  function handleClick(e) {
    // Get the coordinates relative to the image
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    // Do something with the coordinates
    console.log("Clicked at:", x, y);

    if ((x > 0 && x < 255 )&& (y > 0 && y < 230)) {
      setStOpenElement("bathroom");
    }

    if (x > 24 && x < 255 && y > 180 && y < 480) {
      setStOpenElement("bedroom");
    }

    if (x > 255 && x < 588 && y > 129 && y < 402) {
      setStOpenElement("livingroom");
    }

    if (x > 255 && x < 440 && y > 640 && y < 1000) {
      setStOpenElement("maindoor");
    }

    openDrawerBottom();
  }

  useEffect(() => {
    if (floorNo) {
      setFloorNoSt(floorNo);
    }
  }, [floorNo]);

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex  justify-between mt-2">
          <Typography variant="h3" color="blue-gray">
            {" "}
            Floor {floorNoSt}
          </Typography>

          <div className="flex gap-2 items-center">
            <Typography variant="h6" color="blue-gray">
              Toggle Daylight
            </Typography>

            <Switch
              onChange={() => {
                if (flooVar == "normal") {
                  setFlooVar("dark");
                } else setFlooVar("normal");
              }}
              id="custom-switch-component"
              ripple={false}
              className="h-full w-full checked:bg-[#8884d8]"
              containerProps={{
                className: "w-11 h-6",
              }}
              circleProps={{
                className: "before:hidden left-0.5 border-none",
              }}
            />
          </div>
        </div>
        <div className="">
          {floorNoSt == "1" && flooVar == "normal" && (
            <>
              <img
                src={floor1Normal}
                className="w-full h-[calc(96vh-0rem)] object-contain rounded-md"
                alt="floor 1"
                onClick={handleClick}
              />
            </>
          )}

          {floorNoSt == "1" && flooVar == "dark" && (
            <>
              <img
                src={floor1Dark}
                className="w-full h-[calc(96vh-0rem)] object-contain rounded-md"
                alt="floor 1"
                onClick={handleClick}
              />
            </>
          )}

          {/* {floorNoSt == "2" && (
        <>
          <img
            src={floor2Normal}
            className="w-full h-[calc(100vh-4rem)] object-cover"
            alt="floor 1"
            onClick={handleClick}
          />
        </>
      )} */}
          <Drawer
            placement="right"
            size={600}
            open={openBottom}
            onClose={closeDrawerBottom}
            className="p-4"
          >
            {stOpenElement == "fan" && <Fans />}
            {stOpenElement == "light" && <Lights />}

            {stOpenElement == "bedroom" && <BedroomCard />}
            {stOpenElement == "livingroom" && <LivingRoomCard />}
            {stOpenElement == "maindoor" && <MainDoorCard />}
            {stOpenElement == "bathroom" && <BathRoomCard />}
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default FloorsLayout;
