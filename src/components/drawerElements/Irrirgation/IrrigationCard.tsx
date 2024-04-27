// @ts-nocheck

import {
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
    Typography,
  } from "@material-tailwind/react";
  import React from "react";
  import Lights from "../Lights";
  import Fans from "../Fans";
  import { ClipboardDocumentIcon } from "@heroicons/react/24/solid";
  import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";
  import { ClipboardIcon } from "@heroicons/react/24/outline";
  import Smoke from "../Smoke";
  
  const IrrigationCard = () => {
    const data = [
      {
        label: "Irrigation",
        value: "Irrigation",
        desc: <Lights isIrrirgation={true} />,
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
              Garden
            </Typography>
  
            <div className="flex items-center gap-2">
              <Typography variant="h6" color="blue-gray">
                Room Id : 561187
              </Typography>
              <ClipboardIcon className="h-4 w-4" />
            </div>
          </div>
  
          <Tabs value="Irrigation">
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
  
  export default IrrigationCard;
  