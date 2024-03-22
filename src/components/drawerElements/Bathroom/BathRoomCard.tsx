// @ts-nocheck

import React from "react";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import Lights from "../Lights";
import Fans from "../Fans";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import Smoke from "../Smoke";
import Geyser from "../Geyser";

const BathRoomCard = () => {
  const data = [
    {
      label: "Geyser",
      value: "Geyser",
      desc: <Geyser />,
    },
    {
      label: "Lights",
      value: "Lights",
      desc: <Lights />,
    },
    {
      label: "Fire Detector",
      value: "Fire",
      desc: <Smoke />,
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex flex-row justify-between items-center">
          <Typography variant="h3" color="blue-gray">
            Bath room 
          </Typography>

          <div className="flex items-center gap-2">
            <Typography variant="h6" color="blue-gray">
              Room Id : 2232312
            </Typography>
            <ClipboardIcon className="h-4 w-4" />
          </div>
        </div>

        <Tabs value="Geyser">
          <TabsHeader>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
};

export default BathRoomCard;
