# Javascript ES6

## Arrow Functions
```javascript

<p>This example shows the syntax of a function, without the use of arrow function syntax.</p>

<p id="demo"></p>


let hello = "";

hello = function() {
  return "Hello World!";
}

hello = () => {
  return "Hello World!";
}

hello = () => "Hello World!";
//It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
document.getElementById("demo").innerHTML = hello();


```
### Arrow Function With Parameters  & without Parameter
```javascript
<p>This example shows an Arrow Function with a parameter.</p>

<p id="demo"></p>

let hello = "";

hello = (val) => "Hello " + val;

document.getElementById("demo").innerHTML = hello("Universe!");

//OutPut: This example shows an Arrow Function with a parameter.
//OutPut: Hello Universe!
```
```javascript
// n fact, if you have only one parameter, you can skip the parentheses as well:
let hello = "";

hello = val => "Hello " + val;

document.getElementById("demo").innerHTML = hello("Universe!");

//OutPut: Hello Universe!
```
## The Spread (...) Operator
- The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
- The ... operator expands an iterable (like an array) into more elements.
```javascript
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

document.write(numbersCombined); // 1,2,3,4,5,6
```
```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;

document.write("<p>" + one + "</p>"); // 1
document.write("<p>" + two + "</p>"); // 2
document.write("<p>" + rest + "</p>"); // 3,4,5,6

```
- We can use the spread operator with objects too:

```javascript
const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}
const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
// OutPut:
// Object >
//brand: "Ford"
//color: "yellow"
//model: "Mustang"
//type: "car"
//year: 2021
//[[Prototype]]: Object
// Notice the properties that did not match were combined, but the property that did match, color, was overwritten by the last object that was passed, updateMyVehicle. The resulting color is now yellow.
```

```javascript
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
document.getElementById("demo").innerHTML = year; 
// Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,May
```


# Array & Object Destructuring 
- The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

### Dustructue Array
```javascript
const vehicles = ["mustang", "f-150", "expedition"];

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

// console.log(car); // mustang
// console.log(truck); // f-150
// console.log(suv); // expedition
```
```javascript
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;


console.log(vehicles)// ▶(3) ["mustang", "f-150", "expedition"]
console.log(car); // mustang

```
```javascript
// example 2: the array will match the value by order 
const animal = ["cat", "dog", "cow"];
const [meow, bark] = animal;
console.log(animal); //3) ["cat", "dog", "cow"]
console.log(meow); // cat
console.log(bark); //dog

```


```javascript
// If we only want the car and suv we can simply leave out the truck but keep the comma:
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car,, suv] = vehicles;

console.log(vehicles)// ▶(3) ["mustang", "f-150", "expedition"]
console.log(car); // mustang
```

```javascript
// data.js
const animals = [
  {
    name: "cat",
    sound: "meow",
    feedingRequirements: {
      food: 2,
      water: 3
    }
  },
  {
    name: "dog",
    sound: "woof",
    feedingRequirements: {
      food: 5,
      water: 9
    }
  }
];

function useAnimals(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    }
  ];
}

export default animals;
export { useAnimals };

// index.js
import animals, { useAnimals } from "./data";

// //**Destructuring Arrays**
console.log(animals);
//OutPut (2) [Object, Object] ▶0: Object ▶1: Object
const [cat, dog] = animals;
// which  equal to:var cat = animals[0]
//
console.log(cat);
//OutPut ▶{name: "cat", sound: "meow", feedingRequirements: Object}

//**Destructuring Objects**
const { name, sound } = cat;
console.log(cat.name); //Output: cat which equal to console.log(cat);  
console.log(sound); // Output: meow

// ** Change the value's name and give it a default value **
// const { name: catName, sound: catSound } = cat;
// const { name = "Fluffy", sound = "Purr" } = cat;

const{name, sound, feedingRequirements} = cat

console.log(feedingRequirements); // ▶{food: 2, water: 3}
console.log(feedingRequirements.food); // 2

// extensive destructure
const {feedingRequirements: { food, water }} = cat;
console.log(water) //3
//OutPut

// ** The use of State **
const [animal, makeSound] = useAnimals(cat);
console.log(useAnimals(cat)) // ▶(2) ["cat", ƒ ()]
console.log(animal); // cat 
makeSound(); //meow
```
**const [cat, dog] = animals;**
So in order to destructure this, I'm going to create a new constant and because I'm destructuring anarray, the variable names go inside an array literal like this,so two square brackets. Now the first item in that animal's array if we remember was a catand the second was a dog.

So I'm going to set these as the names of the first item and the second item from this animals array.So now what my code has done is it reached inside this array of animals pulled out the first item and assigned it a name of cat, pulled out a second item and assigned it a name of dog.

If I decide to log the value of cat, you can see it is just a single object with two properties.
So I've freed it from the array effectively. 

```javascript
const { name, sound } = cat;
console.log(sound);//meow
```
**When you destructure an object**, **these names that are going inside here have to match** with the property names of that object.

```javascript
// replace the name in the object
const { name: catName, sound: catSound } = cat;
```
This is a way of providing an alternative name for the properties that come from an object. And this is really useful especially when your getting hold of data from public APIs where you didn't
really get the chance to name the properties inside those JSONs.

```javascript
const cars = [
  {
    model: "Honda Civic",
    //The top colour refers to the first item in the array below:
    //i.e. hondaTopColour = "black"
    coloursByPopularity: ["black", "silver"],
    speedStats: {
      topSpeed: 140,
      zeroToSixty: 8.5
    }
  },
  {
    model: "Tesla Model 3",
    coloursByPopularity: ["red", "white"],
    speedStats: {
      topSpeed: 150,
      zeroToSixty: 3.2
    }
  }
];


console.log(cars);
const [honda, tesla] = cars;
const {speedStats: { topSpeed: hondaTopSpeed }} = honda;
const {speedStats: { topSpeed: teslaTopSpeed }} = tesla;
const {coloursByPopularity: [hondaTopColour, hondaTopColour2]} = honda;
const {coloursByPopularity: [teslaTopColour]} = tesla;
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
      <td>{hondaTopColour2}</td>
    </tr>
  </table>,
  document.getElementById("root")
);


```



## Javascript Map/Filter/Reduce
```javascript
// Map -Create a new array by doing something with each item in an array.
var numbers = [3, 56, 2, 48, 5];

function double(x) {
  return x * 2;
}
const newNumbers = numbers.map(double);
console.log(newNumbers) // ▶(5) [6, 112, 4, 96, 10]

// Or you can use Foreach
var numbers = [3, 56, 2, 48, 5];
var newNumbers = [];
numbers.forEach(function (x) {
  newNumbers.push(x * 2);
});

// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

console.log(newNumbers); // (5) [6, 112, 4, 96, 10]

// **Filter - Create a new array by keeping the items that return true.**

const newNumbers = numbers.filter(function(num) {
  return num < 10;
});

var newNumbers = [];
numbers.forEach(function(num) {
  if (num < 10) {
    newNumbers.push(num);
  }
})

//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   console.log("accumulator = " + accumulator);
//   console.log("currentNumber = " + currentNumber);
//     return accumulator + currentNumber;
// })

// var newNumber = 0;
// numbers.forEach(function (currentNumber) {
//   newNumber += currentNumber
// })
```

## JavaScript Class

Class Syntax
- Use the keyword class to create a class.
- Always add a method named **constructor()**:
- A JavaScript class is not an object. It is a template for JavaScript objects.
```javascript
class ClassName {
  constructor() { ... }
}
```
```javascript
//The example above uses the Car class to create two Car objects.
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
myCar.name + " " + myCar.year;
// Ford 2014
```
### Class Methods
- Method definition is a shorter syntax for defining a **function property** in an object initializer. It can also be used in classes.
```javascript
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}
```
### Create a Class method named "age", that returns the Car age:
```javascript
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;

  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old.";
// My car is 9 years old.
```

You can send parameters to Class methods:

```javascript
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML=
"My car is " + myCar.age(year) + " years old.";

```
## Class Cpomponents & function components

- create a class. And the only difference is the keyword, instead of function becomes class.
Classes are not called, so they don't have these parentheses.And this class must extend something that comes from the React module something called component. This turns your app class into a React component class. And in order to render what you want to see inside this component, you have to add your code inside a render method like so. That wasn't a big deal and it was just a few extra lines of code and we end up with exactly the same result.

```javascript
// Class component
Class App extentds React.com{
  render(
    return <h1>Hello,World!</h1>
  )
}
  export default App

// function component

function App() {
    return <h1>Hello,World!</h1>
}
  export default App

```

```javascript
import React, { useState } from "react";

function FunctionalComponent() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default FunctionalComponent;

```
in class component, you can see that I'm using it in the same way as I would with my functional Component, just adding it in as a self closing tag. Now using this class component, I'm able to render a and a button. And when this button gets clicked, it calls a function called increase. And increase will then in turn call a pre-built function called setState which allows us to pass over some new values to the object that is stored inside this property, state.
```javascript
import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.increase = this.increase.bind(this);
  }

  increase() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increase}>+</button>
      </div>
    );
  }
}

export default ClassComponent;

```
```javascript
import React, { useState } from "react";

function FunctionalComponent() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default FunctionalComponent;

```



## Resources
- [W3C- JavaScript ES6](https://www.w3schools.com/js/js_es6.asp)
- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Method definitions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)
- [Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
- [ES6 Tutorials : SPREAD Operator with Fun](https://www.codingame.com/playgrounds/7998/es6-tutorials-spread-operator-with-fun)



