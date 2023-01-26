import React, { useState } from "react";
import Box from "./components/box/box";
import { BoxData } from "./components/box/boxItem";

function App() {
  const [boxList, setBoxList] = useState(BoxData);
  const toggleOnOff = (id: Number) => {
    setBoxList((prevBoxList) => {
      return prevBoxList.map((box) => {
        return box.id === id ? { ...box, on: !box.on } : box;
      });
    });
  };
  const boxes =
    boxList.length > 0 &&
    boxList.map((eachData) => (
      <Box
        on={eachData.on}
        toggleOnOff={() => {
          toggleOnOff(eachData.id);
        }}
      />
    ));
  return <div className="App">{boxes}</div>;
}

export default App;
