// @ts-nocheck

import CircularSlider from "@fseehawer/react-circular-slider";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

import { Avatar, Switch, Typography } from "@material-tailwind/react";
import smokeDet from "../../assets/smoke/smokeDetector.png";
import { BellAlertIcon } from "@heroicons/react/24/outline";

const Smoke = () => {
  const data = [
    { name: "Sun", uv: 400, pv: 2400, amt: 2400 },
    { name: "Mon", uv: 300, pv: 1398, amt: 2210 },
    { name: "Tue", uv: 200, pv: 9800, amt: 2290 },
    { name: "Wed", uv: 278, pv: 3908, amt: 2000 },
    { name: "Thur", uv: 189, pv: 4800, amt: 2181 },
    { name: "Fri", uv: 239, pv: 3800, amt: 2500 },
    { name: "Sat", uv: 349, pv: 4300, amt: 2100 },
  ];

  const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    return (
      <text
        x={x + width / 2}
        y={y}
        fill="#666"
        textAnchor="middle"
        dy={-6}
      >{`value: ${value}`}</text>
    );
  };
  return (
    <>
      <div className="flex flex-col justify-start gap-16 h-[calc(100vh-2rem)]">
        <div className="flex justify-between">
          <img src={smokeDet} className="w-32 h-32" alt="" />

          <Switch checked label="Controls" />
        </div>

        <div className="flex  gap-2 items-center justify-start">
          <BellAlertIcon className="w-4 h-4" />
          <Typography variant="h6" color="blue-gray">
            Emergency contacts that will be called in case of smoke
          </Typography>
        </div>

        <div className="flex items-center -space-x-4">
          <Avatar
            variant="circular"
            alt="user 4"
            className="border-2 border-white hover:z-10 focus:z-10"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
          />
          <Avatar
            variant="circular"
            alt="user 5"
            className="border-2 border-white hover:z-10 focus:z-10"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
          />
          <Avatar
            variant="circular"
            alt="user 3"
            className="border-2 border-white hover:z-10 focus:z-10"
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
          />
        </div>
      </div>
    </>
  );
};

export default Smoke;
