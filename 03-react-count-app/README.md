# React Count App Project
![count-app](https://github.com/miya-w/React-Projects/blob/main/03-react-count-app/imgs/count-app.png)
---
**What will you learn in the first React project?**
1. What is React Hooks - **useState**?
- The state comes from this useState hook and this function comes from the React module.
- One of the rules for using hooks is that you must use a hook inside a functional component.
>import React, { useState } from "react";
>const [count, setCount] = useState(0);

So, what is exactly the **state**? Let's wrap the "useState()" in a const then "console.log(state)" 

> const state = useState();
> consoe.log(state) 

And if I log it you can see it's comprised of an array with two items. 
The first item seems to be undefined and the second item is some sort of function.
>  *(2) [undefined, ƒ bound dispatchAction()]*
    1. 0: undefined
    2. ▶  1: *ƒ bound dispatchAction() {}*

So given that we know that this useState function outputs an array with a value:**AKA:initialState** and a function,

if we choose not to use the React HookStste, instead, we use the trational JS way:

> import React from "react";
  import ReactDOM from "react-dom";

>var count = 0;

>function increase() {
>  count ++;
>  console.log(count);
>  ReactDOM.render(
>    < div className="container">
      < h1>{count}< /h1>
      <button onClick={increase}> + </button>
    < /div>,
>    document.getElementById("root")
>  );
> }

> ReactDOM.render(
>  < div className="container">
>    < h1>{count}< /h1>
>    <button onClick={increase}> + </button>
>  < /div>,
  document.getElementById("root")
);

Well this is where hooks come in. And there's a hook code useState that is perfect for this situation.

---
### Getting Started with Create React App

npm start -  Starts the development server.

npm run - build Bundles the app into static files for production.

npm test - Starts the test runner.