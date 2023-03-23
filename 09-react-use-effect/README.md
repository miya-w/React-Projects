
# React useEffect()

- “We use useEffect when a render needs to cause side effects. Think of a side effect as something that a function does that isn’t part of the return. The function is the Checkbox. The Checkbox function renders UI. But we might want the component to do more than that. Those things we want the component to do other than return UI are called effects.” (“Chapter 7. Enhancing Components with Hooks”. Learning React, 2nd Edition.”)

-  “To ensure that we see the alert as expected, we can use useEffect. Placing the alert inside of the useEffect function means that the function will be called after the render, as a side effect:”

Excerpt From: Eve Porcello. “Learning React, 2nd Edition.”

[The Source of code: practice of useEffect](https://codesandbox.io/s/useeffect-practice-0zq330?file=/src/App.js:0-565)
```javascript
import React, { useEffect, useState } from "react";

function App() {
  const [checked, setChecked] = useState(false);

  // alert(`checked: ${checked.toString()}`);

  // useEffect(() => {
  //   alert(`checked: ${checked.toString()}`);
  // });

  useEffect(() => {
    console.log(checked ? "Yes, checked" : "No, not checked");
  });

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked((checked) => !checked)}
      />
      {checked ? "checked" : "not checked"}
    </>
  );
}

export default App;


```
## useEffect()：副作用钩子
useEffect()用来引入具有副作用的操作，最常见的就是向服务器请求数据。以前，放在componentDidMount里面的代码，现在可以放在useEffect()。

useEffect()的用法如下。
```javascript
useEffect(()  =>  {
  // Async Action
}, [dependencies])
```
上面用法中，useEffect()接受两个参数。第一个参数是一个函数，异步操作的代码放在里面。第二个参数是一个数组，用于给出 Effect 的依赖项，只要这个数组发生变化，useEffect()就会执行。第二个参数可以省略，这时每次组件渲染时，就会执行useEffect()。
代码中，每当组件参数personId发生变化，useEffect()就会执行。组件第一次渲染时，useEffect()也会执行。

[The souurce of the code](https://codesandbox.io/s/react-useeffect-redux-forked-ys8e2p?file=/src/index.js:0-1248)
```javascript

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Person = ({ personId }) => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState({});

  useEffect(() => {
    setLoading(true);
    fetch(`https://swapi.dev/api/people/${personId}/?format=json`)
      .then((response) => response.json())
      .then((data) => {
        setPerson(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [personId]);

  return (
    <div>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div>
          <p>You're viewing: {person.name}</p>
          <p>Height: {person.height}</p>
          <p>Mass: {person.mass}</p>
        </div>
      )}
    </div>
  );
};

function App() {
  const [show, setShow] = useState("1");

  return (
    <div className="App">
      <Person key={show} personId={show} />
      <div>
        Show:
        <button onClick={() => setShow("1")}>Luke</button>
        <button onClick={() => setShow("2")}>C-3PO</button>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

```


- ** useEffect **
- [七、useEffect()：副作用钩子](https://www.ruanyifeng.com/blog/2019/09/react-hooks.html)
- [一份完整的useEffect指南](https://xiaohesong.gitbook.io/today-i-learn/front-end/react-1/overreact/yi-fen-wan-zheng-de-useeffect-zhi-nan)