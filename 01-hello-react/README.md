# Hello React Project!
![Test Image 4](https://github.com/miya-w/React-Projects/blob/main/01-hello-react/imgs/helloReact.png)
![rendering](https://github.com/miya-w/React-Projects/blob/main/01-hello-react/imgs/react-rendering.png)
---
### What will you learn in the first React project?

## 1. What is React 
- React is a JavaScript library created by Facebook
- React is a User Interface UI library (view layers of MVC framework)
- React is a tool for building UI components

### Create a New React App

```
npx create-react-app my-app
cd my-app
npm start
```

- [Create a New React App](https://reactjs.org/docs/create-a-new-react-app.html)

## 2. What is Babel?
- Babel is a JavaScript compiler that can translate markup or programming languages into JavaScript. React uses Babel to convert JSX into JavaScript.

- Try the [`Babel`](https://babeljs.io/)

## 3. JSX
- JSX stands for JavaScript XML.
- JSX is an XML/HTML like extension to JavaScript.
- Expressions can be used in JSX by wrapping them in curly { } braces.
- Whenever you use a self-closing tag in JSX, you **must** end it with a `/`, like `<Hello />`
- ES6 template literals:
```javascript
const fName = Mia;
const lName = Will
ReactDOM.render(
<div>
<h1>Hello {`${fName} ${lName}`}</h1>
<h1>Hello {fName + " "+lName}</h1>
<p>Your Lucky number is {3+4}</p>
</div>,
document.getElementById("root")
)
```
## 4. Element
- React applications are usually built around a single HTML element. Also know as root node or root element.

## 5. Components
 - React components are JavaScript functions.
 - Components encapsulating code and modularizing data
```
function Welcome() {
    return < h1>Hello React!< /h1>;
}
(<Welcome />, document.getElementById('root'));

```
## 6. React DOM Render
- ReactDOM.render(What to show,Where to show it);
- ReactDOM module's render method in order to display a h1 inside that root div.
* remember that the render method can only accept one element.
- wrap them inside a div. <div></div>
- We wanted to insert JavaScript code inside the HTML inside the 
- JavaScript file then what we have to do is simply wrap the JavaScript inside a set of curly braces. { }
```
 ReactDOM.render(< h1 >Hello World!< /h1 >, document.getElementById("root")
);
```
---
### Getting Started with React App

```
# Create the React App
- npx create-react-app my-app

# Create the React App in current directory
- npx create-react-app .

# Starts the development server.
- npm start

# Bundles the app into static files for production.
- npm run build

# Starts the test runner.
- npm test
   
  cd my-app
  npm start
```

## the React Directory

```
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    └── logo.svg
```

Most of the important files are in the `src` directory. Specifically, we’ll be using `src/App.js` and `src/index.js`.


### When to use js or jsx file in React?
In React, JavaScript (JS) files are used to write the logic and functionality of components, while JSX files are used to define the structure and appearance of components.

JSX is a syntax extension of JavaScript that allows you to write HTML-like code in your JavaScript files. It is used to create and render components in React. JSX code is transformed into regular JavaScript code using a transpiler such as Babel, which allows it to be executed in the browser.

JS files, on the other hand, contain the logic and functionality of your React components. This includes functions and methods for handling user input, fetching data from APIs, and updating component state.