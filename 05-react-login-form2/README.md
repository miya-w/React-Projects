# React LogIn Form Project
![login-form](https://github.com/miya-w/React-Projects/blob/main/05-react-login-form2/imgs/logIn-form.png)
---
**What will you learn in this React project?**
### 1.Controlled & uncontrolled components in React form
 from [Controlled & uncontrolled components](https://blog.logrocket.com/controlled-vs-uncontrolled-components-in-react/)

In React, there are two ways to handle form data in our components.  

>The first way is by using the **state** within the component to handle  the form data. This is called a **controlled component**.

>The second way is to let the **DOM** handle the form data by itself in the component. This is known as an **uncontrolled component**.

ControllForms are used to store information in a document section. The information from this form is typically sent to a server to perform an action. This data is held by form input elements and control elements, such as **input, select, textarea, etc., which maintain and control their states or values**.

What do I mean by that? Each form element contains a value. The value may be typed ( input, textarea ) or selected ( checkbox, select, radiobutton, etc) by the user or browser. When the element’s value is changed (triggered by the act of typing or selecting), it is updated accordingly.ed Components


---
**What are controlled components and uncontrolled components in ReactJS? How do they differ from each other?** 
from : [stakeoverflow](https://stackoverflow.com/questions/42522515/what-are-react-controlled-components-and-uncontrolled-components)

- A [Controlled Component](https://facebook.github.io/react/docs/forms.html#controlled-components) is one that takes its current value through `props` and notifies changes through callbacks like `onChange`. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".
- A [Uncontrolled Component](https://facebook.github.io/react/docs/uncontrolled-components.html) is one that stores its own state internally, and you query the DOM using a `ref` to find its current value when you need it. This is a bit more like traditional HTML.

## 2.event.target.value.
We can get the value of an element using the .value property in its HTMLElement instance. You can also use the .value property to set values in the form elements.

**event.target** gives you the element that triggered the event.

So, **event.target.value** retrieves the value of that element (an input field, in your example).

In React, events are SynthenticEvent, a wrapper around the browser’s native event. It has the same interface as the browser’s native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers.
[stakeoverflow](https://stackoverflow.com/questions/67014481/what-is-event-target-value-in-react-exactly)


## 3. SyntheticEvent 
( React documents )[https://reactjs.org/docs/events.html]
- SyntheticEvent is a wrapper that forms part of React’s Event System.

### Getting Started with Create React App
```
npm start -  Starts the development server.

npm run - build Bundles the app into static files for production.

npm test - Starts the test runner.
```
----
``` {
// Controlled:
<input type="text" value={value} onChange={handleChange} />

// Uncontrolled:
<input type="text" defaultValue="foo" ref={inputRef} />
// Use `inputRef.current.value` to read the current value of <input>
} ```

