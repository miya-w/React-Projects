// import { useState } from "react";
import { useEffect, useState } from 'react'

// const APIKey = "3917f3a764d0394f234b9a09d3463ef4";
// https://api.openweathermap.org/data/2.5/weather?q=melbourne&units=metric&appid=3917f3a764d0394f234b9a09d3463ef4

console.log(process.env)
const API = {
    base:"https://api.openweathermap.org/data/2.5/weather?",
    Key:"3917f3a764d0394f234b9a09d3463ef4"
    // APIKey : process.env.REACT_APP_OPEN_WEATHER_API_KEY
}  



function App() {
  const [description, setDescription] = useState();
  const [temp, setTemp] = useState();
  const [location, setLocation] = useState();
  const [message, setMessage] = useState();

  const fetchWeather = () => {
    const url = `${API.base}q=${location}&units=metric&appid=${API.Key}`;
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${APIKey}`;
    // useEffect(() => {
    //   async function fetchData() {
    //     const response = await fetch(url);
    //     const json = await response.json();
    //     setData(json);
    //   }
  
    //   fetchData();
    // }, []);
  
  
      fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTemp(data.main.temp);
        setDescription(data.weather[0].description);
        setMessage("");
      })
      .catch((error) => setMessage("Invalid information"));
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


//
   
// import { useEffect, useState } from 'react'

// const DateFacts = ({ month, day }) => {
//   const [apiData, setApiData] = useState({})

//   useEffect(() => {
//     console.log('mounted')
//   }, [])

//   useEffect(() => {
//     fetch(`http://numbersapi.com/${month}/${day}?json`)
//       .then((res) => res.json())
//       .then((data) => setApiData(data))
//       .catch((error) => console.log(error))
//   }, [month, day])
//   return <h1>{apiData.text}</h1>
// }

// export default DateFacts
