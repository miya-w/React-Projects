# AsianFood EmojiPedia Project
![Test Image 4](https://github.com/miya-w/React-Projects/blob/main/02-asianfood-emoji-pedia/imgs/image01.png)
---
### What will you learn in the first React project?

### 1. Waht is **props** ?
> Props stand for "Properties." They are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes.  
According to [ReactJS Props - javatpoint] (https://www.javatpoint.com/react-props)

- Props are arguments passed into React components.
- Props are passed to components via HTML attributes.
- React Props are like function arguments in JavaScript and attributes in HTML.

### [example] (https://www.w3schools.com/react/react_props.asp)
- The component receives the argument as a props object:
```
function Car(props) {
  return < h2>I am a { props.brand }!< /h2>;
}
```
```
​const myelement = < Car brand="Ford" />;
ReactDOM.render(myelement, document.getElementById('root'));
// Print: I am a Ford!
```

---
### 2. Mapping Data to Components
**javascript ⇒ Array.prototype.map()**

- The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.
---
**map( ) method**

```javascript
const numbers = [1, 2, 3, 4, 5];`
const numberMap = numbers.map((number) => number );
console.log(numberMap);`

//print : 2.a30c0c16.chunk.js:1 (5) [1, 2, 3, 4, 5]
```


## The process - using props
- [React 元件 (Components) | Props](https://www.fooish.com/reactjs/components-and-props.html)
[Code source](https://codesandbox.io/s/the-process-of-props-1ydn4x)
```javascript
// --- final Version: using Props and map()method --- 

var names = ["Sara", "David", "William", "Olivia"];

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      {names.map((eachName) => (
        <Welcome name={eachName} />
      ))}
    </div>
  );
}

export default App;



// var names = ["Sara", "David", "Willian", "Olivia"];

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       {names.map((EachName) => {
//         <Welcome Name={EachName.Name} />;
//       })}
//     </div>
//   );
// }

// export default App;
// Code fix: Changed EachName.Name to eachName inside the map() function.
// This is because we're iterating through an array of strings, not objects with a "Name" property.


// --- version2: Using Props ---

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="David" />
      <Welcome name="Willan" />
      <Welcome name="Olivia" />
    </div>
  );
}

export default App;

// --- version 1: no Props no Map() ---
function App() {
  return (
    <div className="App">
      <h1>Hello, Sarah</h1>
      <h1>Hello, David</h1>
      <h1>Hello, Willan</h1>
      <h1>Hello, Olivia</h1>
    </div>
  );
}

export default App;

// ---Map() method ---

var items = ["vegi", "milk", "potato"];

var newItems = items.map((item) => {
  return item;
});
console.log(newItems);

//OutPut : ▶(3) ["vegi", "milk", "potato"]
```

---
# Getting Started with React App
```
- npm start
    Starts the development server.

- npm run build
    Bundles the app into static files for production.

- npm test
    Starts the test runner.
```
