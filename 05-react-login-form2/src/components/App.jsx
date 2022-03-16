import React, { useState } from "react";

function App() {
    const [fName, setFName] = useState(" ");
    const [lName, setLName] = useState(" ");
    const [isMousedOver, setMouseOver] = useState(false);
    const [headingText, setHeadingText] = useState("Hello");
    // const x = setFName;
    // console.log(x) 

    function updateFName(event){
        const firstName = event.target.value
        setFName(firstName); 
    }

    function updateLName(event){
        const LastName = event.target.value
        setLName(LastName);
    } 


  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleClick() {
    setHeadingText("Submitted");
  }

    
  return (
    <div className="container">
      <h1>{headingText} {fName} {lName}</h1>
      <form>
        <input name="fName" 
        onChange={updateFName} 
        value={fName} 
        placeholder="First Name"   />

        <input name="lName" 
        onChange={updateLName}
        placeholder="Last Name"
        value={lName}  />
        
        <button 
        style={{ backgroundColor: isMousedOver ? "rgb(238,174,202)" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
        >Submit</button>
      </form>
    </div>
  );
}

export default App;