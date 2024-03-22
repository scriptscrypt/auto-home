// @ts-nocheck
import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { render } from "react-dom";
import { Knob } from "react-rotary-knob";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  marginTop: "6rem",
};

const LimitedKnob = ({ min, max, unlockDistance, ...rest }) => {
  const [value, setValue] = useState(0);

  const handleOnChange = (val = 0) => {
    // Ignore change if distance is greater than defined
    // Here we use a distance of 200 because our max value is 1000
    // Change if needed
    const maxDistance = 200;
    const distance = Math.abs(val - value);
    if (distance <= maxDistance) {
      setValue(val);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center align-middle gap-4">
        <Knob
          value={value as any}
          min={min}
          max={max}
          step={1}
          onChange={handleOnChange}
          {...rest}
        />
        <Typography variant="h5">{value.toFixed(0)}</Typography>
      </div>
    </>
  );
};

export default LimitedKnob;
