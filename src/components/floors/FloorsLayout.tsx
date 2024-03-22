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
import { LightBulbIcon } from "@heroicons/react/24/solid";
import BedroomCard from "../drawerElements/Bedroom/BedroomCard";

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

  // const data = [
  //   { name: "Sun", uv: 400, pv: 2400, amt: 2400 },
  //   { name: "Mon", uv: 300, pv: 1398, amt: 2210 },
  //   { name: "Tue", uv: 200, pv: 9800, amt: 2290 },
  //   { name: "Wed", uv: 278, pv: 3908, amt: 2000 },
  //   { name: "Thur", uv: 189, pv: 4800, amt: 2181 },
  //   { name: "Fri", uv: 239, pv: 3800, amt: 2500 },
  //   { name: "Sat", uv: 349, pv: 4300, amt: 2100 },
  // ];
  // //   let path = "";

  // //   switch (payload.value) {
  // //     case "Page A":
  // //       path =
  // //         "M899.072 99.328q9.216 13.312 17.92 48.128t16.384 81.92 13.824 100.352 11.264 102.912 9.216 90.112 6.144 60.928q4.096 30.72 7.168 70.656t5.632 79.872 4.096 75.264 2.56 56.832q-13.312 16.384-30.208 25.6t-34.304 11.264-34.304-2.56-30.208-16.896q-1.024-10.24-3.584-33.28t-6.144-53.76-8.192-66.56-8.704-71.68q-11.264-83.968-23.552-184.32-7.168 37.888-11.264 74.752-4.096 31.744-6.656 66.56t-0.512 62.464q1.024 18.432 3.072 29.184t4.608 19.968 5.12 21.504 5.12 34.304 5.12 56.832 4.608 90.112q-11.264 24.576-50.688 42.496t-88.576 29.696-97.28 16.896-74.752 5.12q-18.432 0-46.08-2.56t-60.416-7.168-66.048-12.288-61.952-17.92-49.664-24.064-28.16-30.208q2.048-55.296 5.12-90.112t5.632-56.832 5.12-34.304 5.12-21.504 4.096-19.968 3.584-29.184q2.048-27.648-0.512-62.464t-6.656-66.56q-4.096-36.864-11.264-74.752-13.312 100.352-24.576 184.32-5.12 35.84-9.216 71.68t-8.192 66.56-6.656 53.76-2.56 33.28q-13.312 12.288-30.208 16.896t-34.304 2.56-33.792-11.264-29.696-25.6q0-21.504 2.048-56.832t4.096-75.264 5.632-79.872 6.656-70.656q2.048-20.48 6.144-60.928t9.728-90.112 11.776-102.912 13.824-100.352 16.384-81.92 17.92-48.128q20.48-12.288 56.32-25.6t73.216-26.624 71.168-25.088 50.176-22.016q10.24 13.312 16.896 61.44t13.312 115.712 15.36 146.432 23.04 153.6l38.912-334.848-29.696-25.6 43.008-54.272 15.36 2.048 15.36-2.048 43.008 54.272-29.696 25.6 38.912 334.848q14.336-74.752 23.04-153.6t15.36-146.432 13.312-115.712 16.896-61.44q16.384 10.24 50.176 22.016t71.168 25.088 73.216 26.624 56.32 25.6";
  // //       break;
  // //     case "Page B":
  // //       path =
  // //         "M662.528 451.584q10.24 5.12 30.208 16.384t46.08 31.744 57.856 52.736 65.024 80.896 67.072 115.2 64.512 154.624q-15.36 9.216-31.232 21.504t-31.232 22.016-31.744 15.36-32.768 2.56q-44.032-9.216-78.336-8.192t-62.976 7.68-53.248 16.896-47.616 19.968-46.08 16.384-49.664 6.656q-57.344-1.024-110.592-16.896t-101.376-32.256-89.6-25.088-75.264 4.608q-20.48 8.192-41.984 1.024t-38.912-18.432q-20.48-13.312-39.936-33.792 37.888-116.736 86.016-199.68t92.672-136.704 78.848-81.408 43.52-33.792q9.216-5.12 10.24-25.088t-1.024-40.448q-3.072-24.576-9.216-54.272l-150.528-302.08 180.224-29.696q27.648 52.224 53.76 79.36t50.176 36.864 45.568 5.12 39.936-17.92q43.008-30.72 80.896-103.424l181.248 29.696q-20.48 48.128-45.056 99.328-20.48 44.032-47.616 97.28t-57.856 105.472q-12.288 34.816-13.824 57.344t1.536 36.864q4.096 16.384 12.288 25.6z";
  // //       break;

  // //     default:
  // //       path = "";
  // //   }

  // //   return (
  // //     <svg
  // //       x={x - 12}
  // //       y={y + 4}
  // //       width={24}
  // //       height={24}
  // //       viewBox="0 0 1024 1024"
  // //       fill="#666"
  // //     >
  // //       <path d={path} />
  // //     </svg>
  // //   );
  // // };
  // const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
  //   return (
  //     <text
  //       x={x + width / 2}
  //       y={y}
  //       fill="#666"
  //       textAnchor="middle"
  //       dy={-6}
  //     >{`value: ${value}`}</text>
  //   );
  // };

  function handleClick(e) {
    // Get the coordinates relative to the image
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    // Do something with the coordinates
    console.log("Clicked at:", x, y);

    if (x > 24 && x < 255 && y > 180 && y < 480) {
      setStOpenElement("bedroom");
    }
    if (x > 300 && x < 600) {
      setStOpenElement("light");
    }
    if (x > 600) {
      setStOpenElement("ac");
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
                className="w-full h-[calc(96vh-0rem)] object-contain"
                alt="floor 1"
                onClick={handleClick}
              />
            </>
          )}

          {floorNoSt == "1" && flooVar == "dark" && (
            <>
              <img
                src={floor1Dark}
                className="w-full h-[calc(96vh-0rem)] object-contain"
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
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default FloorsLayout;
