import React, { useState } from "react";

function App() {
  const [volume, setVolume] = useState(50);
  //This is the new comit
  const increaseVol = () => {
    if (volume < 100) {
      setTimeout(() => {
        setVolume(volume + 10);
      }, 9000);
    }
  };

  const decreaseVol = () => {
    if (volume > 0) {
      setVolume(volume - 10);
    }
  };

  return (
    <>
      <h5>{volume}</h5>
      <button onClick={increaseVol}>+</button>
      <button onClick={decreaseVol}>-</button>
    </>
  );
}

export default App;
