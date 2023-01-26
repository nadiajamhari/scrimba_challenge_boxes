import React from "react";

interface IBox {
  on: boolean;
  toggleOnOff: () => void;
}

const Box: React.FC<IBox> = ({ on, toggleOnOff }) => {
  return (
    <div
      className="box"
      style={{ backgroundColor: on ? "#222222" : "transparent" }}
      onClick={() => {
        toggleOnOff();
      }}
    ></div>
  );
};

export default Box;
