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
          < ToDoItem 
          key = {index} 
          id={index} 
          text={todoItem} 
          onChecked={deleteItem()}/>)
          )}
```
The React Code

```javascript
// ToDoItem.js 
function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
// App.js
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
### How to To add an index to an array in React
To add an index to an array in React JavaScript, you can use the map() function to loop through the array and return a new array with the desired index added to each element. You can use the index parameter provided by map() to add the index to each element.

Here is an example of how to add an index to an array in React JavaScript:
```javascript
const myArray = ["apple", "banana", "orange"];

const newArray = myArray.map((item, index) => {
  return {
    id: index,
    value: item
  }
});

console.log(newArray);
```
In this example, we use the map() function to loop through the myArray array and create a new array called newArray. For each element in the myArray array, we create a new object with the id set to the index and the value set to the current element. The newArray array will contain objects with the index and the value for each element in the myArray array.

You can then use this newArray array in your React component and access the index of each element using the id property. For example, if you wanted to render a list of items with the index displayed, you could do something like this:

```javascript
<ul>
  {newArray.map((item) => (
    <li key={item.id}>{item.id}: {item.value}</li>
  ))}
</ul>
```
### filter()method
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Filter even numbers with index greater than 3
const filteredNumbers = numbers.filter((number, index) => {
  return number % 2 === 0 && index > 3;
});

console.log(filteredNumbers); // Output: [6, 8]
```

- Note that we're using the key property to set a unique identifier for each list item. This is important for React to efficiently update the list when the array changes. In this case, we're using the id property as the key since it's unique for each item. However, it's generally recommended to use a stable identifier (e.g. a unique ID from your data) as the key if possible.


## Getting Started with Create React App
```
npm start -  Starts the development server.

npm run - build Bundles the app into static files for production.

npm test - Starts the test runner.
```