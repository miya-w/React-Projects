# AsianFood EmojiPedia Project
![Test Image 4](https://github.com/miya-w/React-Projects/blob/main/02-asianfood-emoji-pedia/imgs/image01.png)
---
### What will you learn in the first React project?

1. Waht is **props** ?
> Props stand for "Properties." They are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes.  
According to [ReactJS Props - javatpoint] (https://www.javatpoint.com/react-props)

- Props are arguments passed into React components.
- Props are passed to components via HTML attributes.
- React Props are like function arguments in JavaScript and attributes in HTML.

### [example] (https://www.w3schools.com/react/react_props.asp)

>function Car(props) {
  return < h2>I am a { props.brand }!< /h2>;
}

> const myelement = <Car brand="Ford" />;

> ReactDOM.render(myelement, document.getElementById('root'));

> // `Print: I am a Ford!` 
---
2. Mapping Data to Components
**javascript ⇒ Array.prototype.map()**

- The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.
>//map
const numbers = [1, 2, 3, 4, 5];
const numberMap = numbers.map((number) => number );
console.log(numberMap);
`//print : 2.a30c0c16.chunk.js:1 (5) [1, 2, 3, 4, 5]`

---
# Getting Started with React App
- npm start
    Starts the development server.

- npm run build
    Bundles the app into static files for production.

- npm test
    Starts the test runner.

