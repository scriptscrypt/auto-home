// @ts-nocheck

import CircularSlider from "@fseehawer/react-circular-slider";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import lightLamp from "../../assets/lights/lightLamp.png";
import { Typography } from "@material-tailwind/react";

const Lights = () => {
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
          <div className="">
            <CircularSlider
              label="Light Intensity"
              // labelBottom="Test %"
              labelFontSize={"20"}
              // trackColor=""
              progressColorFrom="#f44336"
              progressSize={16}
              knobColor="#f44336"
              // progressColorTo="#f44336"
              initialValue={"100"}
              onChange={(value) => {
                console.log(value);
              }}
            />
          </div>
          <img src={lightLamp} className="w-32 h-32" alt="" />
        </div>

        <Typography variant="h6" color="blue-gray">
          Recent Power consumption history
        </Typography>

        <BarChart width={480} height={320} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
          <Bar
            dataKey="uv"
            barSize={30}
            fill="#8884d8"
            // label={renderCustomBarLabel}
            onMouseEnter={renderCustomBarLabel}
          />
        </BarChart>
      </div>
    </>
  );
};

export default Lights;
