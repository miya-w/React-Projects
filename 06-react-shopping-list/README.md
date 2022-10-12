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
`{items.map(todoItem =>{return<li>{todoItem}</li>})}`
map() method
arrow function
[Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## 3.Delete function
```
 {items.map((todoItem, index)=> (            
          < ToDoItem key = {index} id={index} text={todoItem} onChecked={deleteItem()}/>)
          )}
```

---
## Getting Started with Create React App
```
npm start -  Starts the development server.

npm run - build Bundles the app into static files for production.

npm test - Starts the test runner.
```