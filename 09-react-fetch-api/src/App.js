// import { useState } from "react";
import { useState } from 'react'

// const APIKey = "3917f3a764d0394f234b9a09d3463ef4";
// https://api.openweathermap.org/data/2.5/weather?q=melbourne&units=metric&appid=3917f3a764d0394f234b9a09d3463ef4

console.log(process.env)
const API = {
    base:"https://api.openweathermap.org/data/2.5/weather?",
    key : process.env.REACT_APP_OPEN_WEATHER_API_KEY
}  
function App() {
  const [description, setDescription] = useState();
  const [temp, setTemp] = useState();
  const [location, setLocation] = useState();
  const [message, setMessage] = useState();

    const fetchWeather = () => {
      const url = `${API.base}q=${location}&units=metric&appid=${API.key}`;
  
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setTemp(data.main.temp);
          setDescription(data.weather[0].description);
          setMessage("");
        })
        .catch((error) => setMessage("Invalid location"));
    };


  const handleChange = (e) => {
    setLocation(e.target.value);
  };
  
  return (
    <>
      <input type="text" onChange={handleChange} />
      <button onClick={fetchWeather}>Fetch temp</button>
      <p>{message ? message : temp} °C</p>
      <p>{message ? message : description}</p>
    </>
  );
}

export default App;




