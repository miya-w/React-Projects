# React Count App Project
![count-app](https://github.com/miya-w/React-Projects/blob/main/04-react-login-form/imgs/count-app.png)
---
**What will you learn in the first React project?**
- React **Conditional Rendering** with the Ternary Operator & AND Operator
- example:
```javascript
{isLoggedIn === true ? < h1>Hello< /h1> : < Login />}
```
** The Tradional JS way:
```javascript
// var isLoggedIn = false;
var isLoggedIn = true;

function renderConditionally(){
  if (isLoggedIn === true){
   return  < h1>Hello< /h1>
  }else {
    return(
    < form className="form">
      < input type="text" placeholder="Username" />
      < input type="password" placeholder="Password" />
      < button type="submit">Login< /button>
    < /form>
    )
  }
}

function App() {
  return (
    < div className="container">{renderConditionally()}< /div>
  )
}
export default App;
``` 

```javascript
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
```

# Getting Started with Create React App
```
npm start -  Starts the development server.

npm run - build Bundles the app into static files for production.

npm test - Starts the test runner.
```