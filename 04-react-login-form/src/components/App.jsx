import React from "react";
import Login from "./logIn";

var isLoggedIn = false;

const currentTime = new Date().getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {/*Ternary Operator*/}
      {isLoggedIn ? <h1>Hello! Thanks Logged in</h1> : <Login />}
      {/*AND Operator*/}
      {currentTime < 12 &&  <h1>GoodMorning!</h1>}

      {/* {currentTime > 12 &&  <h1>GoodAfternoon!</h1>} */}
      
    </div>
  );
}

export default App;
  


