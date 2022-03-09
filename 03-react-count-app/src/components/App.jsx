import React, { useState } from "react";

function App() {
  // var count = 0;
  // const state = useState(0);
  // console.log(state);
  const [count, setCount] = useState(0);

  // array
  // const [red, green, blue] = [9, 132, 227];
  // console.log(blue);

  function increase() {
    setCount(count + 1);
    //   // count++;
    //   // console.log(count);
    //   // ReactDOM.render(
    //   //   <div className="container">
    //   //     <h1>{count}</h1>
    //   //     <button onClick={increase}> + </button>
    //   //   </div>,
    //   //   document.getElementById("root")
    // );
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}> + </button>
      <button onClick={decrease}> - </button>
    </div>
  );
}

export default App;
