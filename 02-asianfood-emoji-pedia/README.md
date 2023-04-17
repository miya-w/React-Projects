# AsianFood EmojiPedia Project

## ![Test Image 4](https://github.com/miya-w/React-Projects/blob/main/02-asianfood-emoji-pedia/imgs/image01.png)

### What will you learn in the first React project?

### 1. Waht is **props** ?

> Props stand for "Properties." They are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes.  
> According to [ReactJS Props - javatpoint] (https://www.javatpoint.com/react-props)

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
const numbers = [1, 2, 3, 4, 5];
`
const numberMap = numbers.map((number) => number );
console.log(numberMap);`;

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

##Example:  The Process of using Props

```javascript
// 1. -----------------------------
//Create the Contacts Without Props
function App() {
  return (
    <div>
      <h2>Peter Parker</h2>
      <p>1234567</p>
      <p>PeterParker@example.com</p>

      <h2>Tony Stark</h2>
      <p>2345678</p>
      <p>TonyStark@example.com</p>

      <h2>Steve Rogers</h2>
      <p>7890101</p>
      <p>SteveRogers@example.com</p>
    </div>
  );
}

//2.---------------------------
//  Pack all the information into Card Function
function Card() {
  return (
    <div>
      <h2>Peter Parker</h2>
      <p>1234567</p>
      <p>PeterParker@example.com</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Card />
    </div>
  );
}

// 3.------------------------------
// Using Props, so the props can be brought as the attributes to the Card function

function Card(Props) {
  console.log(Props);
  return (
    <div>
      {Props.name}
      {Props.phone}
      {Props.email}
    </div>
  );
}

// console.log(Props) Output:
// ▶{name: "Bruce Wayne", Phone: "098765", email: "BruceWayne@example.com"}

function App() {
  return (
    <div>
      <Card name="Bruce Wayne" Phone="098765" email="BruceWayne@example.com" />
      <Card
        name="Peter Parker"
        Phone="1234567"
        email="PeterParker@example.com"
      />
    </div>
  );
}

// 4. ------------------------------
// Pack all the contacts into a array

function Card(Props) {
  console.log(Props);
  return (
    <div>
      {Props.name}
      {Props.phone}
      {Props.email}
    </div>
  );
}

function App() {
  return (
    <div>
      <Card
        name={contacts[0].name}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        phone={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

const contacts = [
  {
    name: "Bruce Wayne",
    imgURL:
      "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
    phone: "098765",
    email: "BruceWayne@example.com",
  },
  {
    name: "Peter Parker",
    imgURL:
      "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg",
    phone: "+123 456 789",
    email: "PeterParker@example.com",
  },
  {
    name: "Tony Stark",
    imgURL:
      "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    phone: "2345678",
    email: "PeterParker@example.com",
  },
  {
    name: "Steve Rogers",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    phone: "7890101",
    email: "SteveRogers@example.com",
  },
];

// 5.-------------------------------------
// Map(), create the CreateCard function to run each item in a array

function Card(Props) {
  console.log(Props);
  return (
    <div>
      {Props.id}
      {Props.name}
      {Props.phone}
      {Props.email}
    </div>
  );
}

function CreateCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return <div>{contacts.map(CreateCard)}</div>;
}

// 6.---------------------------------------
// Simplfy the code inside  the map() method by using the arrow function

function Card(Props) {
  console.log(Props);
  return (
    <div>
      {Props.id}
      {Props.name}
      {Props.phone}
      {Props.email}
    </div>
  );
}
function App() {
  return (
    <div>
    
      
    {contacts.map(contact =>
       <Card
       name={contact.name} 
       phone={contact.phone} 
       email={contact.email} 
       />
    )}
    </div>
  );
}

// 7.------------------------------- 
// Destructuring Props in React
const Card = ({ name, phone, email }) => {
  return (
    <div>
      {name}
      {phone}
      {email}
    </div>
  );
};

function App() {
  return (
    <div>
      {contacts.map(({id, name, phone, email}) => (
        <Card
          key={id}
          // id={contact.id}
          name={name}
          phone={phone}
          email={email}
        />
      ))}
    </div>
  );
}



```
### Resources
- [Play this code- CodeSandBox Props and Destructuring Props in React](https://codesandbox.io/s/props-and-destructure-lzw2xc?file=/src/App.js:873-1115)
### Destructuring Props
- [Destructuring Props in React](https://medium.com/@lcriswell/destructuring-props-in-react-b1c295005ce0)
- [React: How To Destructure Props (Quick Tutorial)](https://www.youtube.com/watch?v=7mlNBuIAtFY)
- [Is it Good to Destructure Props in React?](https://wonderdevelop.com/destructure-props-react/)
