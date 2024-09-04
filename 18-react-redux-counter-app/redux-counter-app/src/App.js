// App.js

import React from 'react';
import Counter from './components/Counter'; // Corrected path
import './App.css'; // Import the CSS file

const App = () => (
  <div  className="container">
   <div className="box">
    <h1>Simple Redux Counter</h1>
    <Counter />
    </div>
  </div>
  
);

export default App;
