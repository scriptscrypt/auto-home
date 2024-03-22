// @ts-nocheck

import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import { ClipboardIcon } from "@heroicons/react/24/outline";
import DoorLock from "../DoorLock";
import Smoke from "../Smoke";

const MainDoorCard = () => {
  const data = [
    {
      label: "Door Lock",
      value: "Door",
      desc: <DoorLock />,
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
            Main Door
          </Typography>

          <div className="flex items-center gap-2">
            <Typography variant="h6" color="blue-gray">
              Room Id : 09045
            </Typography>
            <ClipboardIcon className="h-4 w-4" />
          </div>
        </div>

        <Tabs value="Door">
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

export default MainDoorCard;
