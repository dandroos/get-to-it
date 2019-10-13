import React, { useState } from "react";

export default function Clock() {
  const [time, setTime] = useState("");
  setInterval(() => {
    const time = new Date();
    const minutes = () => {
      if (time.getMinutes() < 10) {
        return `0${time.getMinutes()}`;
      } else {
        return time.getMinutes();
      }
    };
    setTime(`${time.getHours()}:${minutes()}`);
  }, 250);

  return (
    <div
      style={{
        fontSize: ".85rem",
        position: "absolute",
        right: 10,
        top: 10
      }}
    >
      {time}
    </div>
  );
}
