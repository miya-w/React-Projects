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

// import React, {useState} from  "react";
// import ToDoItem from "./ToDoItem";

// function App() {

//   const [inputText, setInputText] = useState(" ");
//   const [items, setItems] = useState([]);
    
//   function handleChange(event){
//       const newValue = event.target.value; 
//       setInputText(newValue);
//     }
  
//     function addItems(){
//       setItems(prevItems => {
//         // Javascript ES6 Spread Operator
//         return [...prevItems, inputText];
//       })
//       // set the input text to an empty
//       setInputText(" ")
//     }

//     function deleteItem(id){
//       setItems((prevItems)=>{
//         // filter array
//           return prevItems.filter(
//             (item, index)=>{
//               return index !== id;
//             }
//           );

//       });
//     }
  
//   return (
//     <div className="container">
//       <div className="heading">
//         <h1>My Shopping List</h1>
       
//       </div>
//       <div className="form">
//         <input 
//           type="text"
//           value={inputText}
//           onChange={handleChange}
//            />
//         <button onClick={addItems}>
//           <span>Add</span>
//         </button>
//       </div>
//       <div>
//         <ul>
//           <li>A Item </li>
//           {/* arrow function */}
//           {/* {items.map(todoItem =>{return<li>{todoItem}</li>})} */}
//           {items.map((todoItem, index)=> (            
//           < ToDoItem key = {index} id={index} text={todoItem} onChecked={deleteItem()}/>)
//           )}
//           <div>         
//           </div>                 
//         </ul>
//       </div>
//     </div>
//   );
// }


// export default App;