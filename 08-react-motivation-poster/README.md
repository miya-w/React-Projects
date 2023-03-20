# Positive Poster - React State

```javascript
// ** different ways to write the function component
// 1.  function App() {
//   return <h1>Hello</h1>
// }

// 2. const App = () => <h1>Hello</h1>

const App = () => {
  return <PostGenerator />
}
```

```javascript
//function component using object destructuring to parse props and explicit return
const MotivationalPoster = ({ imageURL, altText, title, message }) => {
  return (
    <div className="MotivationalPoster">
      <img src={imageURL} alt={altText} />
      <h1>{title.toUpperCase()}</h1>
      <p>{message}</p>
    </div>
  )
}
export default MotivationalPoster
```
This code defines a React component called "MotivationalPoster" using arrow function syntax. This component takes in four props: "imageURL", "altText", "title", and "message".

Inside the component, it returns a JSX expression that contains a div element with a class name of "MotivationalPoster". The div contains an img element with the src attribute set to the value of the "imageURL" prop and the alt attribute set to the value of the "altText" prop.

```javascript
  <input
          type="text"
          value={message}
          onChange={(e) => handleInputField(e, setMessage)}
        />
```
In this code, the onChange event is being used to trigger a function called "handleInputField" whenever the value of an input field changes.

The event object "e" is passed as the first parameter to the "handleInputField" function. This event object contains information about the event that occurred, such as the value of the input field that triggered the event.

The second parameter "setMessage" is a function that is being passed as an argument to the handleInputField function. This function is used to update a state variable called "message" whenever the value of the input field changes.

It's likely that the "handleInputField" function is designed to handle input changes for multiple input fields, and the second parameter "setMessage" is used to update the state variable associated with the specific input field that triggered the event.


## Resources
- [How to click on an image to display more information in React](https://medium.com/@nsteadman/how-to-click-on-an-image-to-display-more-information-in-react-e1ac73113d95)
- [How to Get the Value of an Input At the Click of a Button in React](https://javascript.plainenglish.io/react-get-input-value-on-button-click-aceb59fb6217)
- [JavaScript Object Destructuring, Spread Syntax, and the Rest Parameter – A Practical Guide](https://www.freecodecamp.org/news/javascript-object-destructuring-spread-operator-rest-parameter/)