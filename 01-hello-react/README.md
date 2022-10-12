# Hello React Project!
![Test Image 4](https://github.com/miya-w/React-Projects/blob/main/01-hello-react/imgs/helloReact.png)
![rendering](https://github.com/miya-w/React-Projects/blob/main/01-hello-react/imgs/react-rendering.png)
---
### What will you learn in the first React project?

## 1. What is React 
- React is a JavaScript library created by Facebook
- React is a User Interface UI library
- React is a tool for building UI components

## 2. What is Babel?
- Babel is a JavaScript compiler that can translate markup or programming languages into JavaScript. React uses Babel to convert JSX into JavaScript.

- Try the [`Babel`](https://babeljs.io/)

## 3. JSX
- JSX stands for JavaScript XML.
- JSX is an XML/HTML like extension to JavaScript.
- Expressions can be used in JSX by wrapping them in curly {} braces.

## 4. Element
- React applications are usually built around a single HTML element. Also know as root node or root element.

## 5. Components
 - React components are JavaScript functions.
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
- npm start
    Starts the development server.

- npm run build
    Bundles the app into static files for production.

- npm test
    Starts the test runner.
```