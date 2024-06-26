// @ts-nocheck

import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  RadialBar,
  RadialBarChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import LimitedKnob from "./Knob";
import { Typography } from "@material-tailwind/react";
import fanImg from "../../assets/fans/fan.png"
const data = [
  { name: "Sun", uv: 400, pv: 2400, amt: 2400 },
  { name: "Mon", uv: 300, pv: 1398, amt: 2210 },
  { name: "Tue", uv: 200, pv: 9800, amt: 2290 },
  { name: "Wed", uv: 278, pv: 3908, amt: 2000 },
  { name: "Thur", uv: 189, pv: 4800, amt: 2181 },
  { name: "Fri", uv: 239, pv: 3800, amt: 2500 },
  { name: "Sat", uv: 349, pv: 4300, amt: 2100 },
];

const Fans = () => {
  return (
    <>
      <div className="flex flex-col justify-between gap-16">
        <div className="flex justify-between">
          <LimitedKnob
            min={0}
            max={10}
            unlockDistance={0}
            preciseMode={false}
            width={1600}
            height={1600}
          />
          <img src={fanImg} className="w-32 h-32" alt="" />
        </div>

        <Typography variant="h6" color="blue-gray">
          Recent Power consumption history
        </Typography>

        <AreaChart
          width={600}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </div>
    </>
  );
};

export default Fans;
