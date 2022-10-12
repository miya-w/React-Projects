# React shopping-list Project
![shopping-list](https://github.com/miya-w/React-Projects/blob/main/06-react-shopping-list/imgs/shoppinglist02.png)
---
## What will you learn in this React project?
**CRUD -> Create, Read, Update, Delete**
## 1.reate & Read
- complex state & Javascript ES6 Spread Operator
```javascript
   function addItems(){
    setItems(prevItems => {
      // Javascript ES6 Spread Operator
      return [...prevItems, inputText];
    })
    // set the input text to an empty
    setInputText(" ")
  }
```
---
## 2.map() method & arrow function

```javascript
{items.map(todoItem =>{return<li>{todoItem}</li>})}
```
- map() method
- arrow function
[Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## 3.Delete function
```javascript
 {items.map((todoItem, index)=> (            
          < ToDoItem key = {index} id={index} text={todoItem} onChecked={deleteItem()}/>)
          )}
```
The React Code
```javascript
import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>shopping List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
```



---
## Getting Started with Create React App
```
npm start -  Starts the development server.

npm run - build Bundles the app into static files for production.

npm test - Starts the test runner.
```