import React from "react";
import CountButton from "./counter";

function App() {
  return (
    <div>
      <CountButton changeBy={1}/>
      <CountButton changeBy={5}/>
      <CountButton changeBy={8}/>
    </div>
  );
}

export default App;
