## Use API in REact

- Fetch the data
```javascript

  const fetchWeather = () => {
    const url = `${API.base}q=${location}&units=metric&appid=${API.Key}`;

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
```


- useEffect() method
```javascript

   
import { useEffect, useState } from 'react'

const DateFacts = ({ month, day }) => {
  const [apiData, setApiData] = useState({})

  useEffect(() => {
    console.log('mounted')
  }, [])

  useEffect(() => {
    fetch(`http://numbersapi.com/${month}/${day}?json`)
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((error) => console.log(error))
  }, [month, day])
  return <h1>{apiData.text}</h1>
}

export default DateFacts
```
useEffect is a built-in hook in React, which allows you to perform side effects in function components. Side effects refer to any changes that occur outside the component, such as fetching data from a server, modifying the DOM, or subscribing to an event.

The useEffect hook takes two arguments: a callback function and an optional array of dependencies. The callback function is executed after every render of the component, and it can include any side effects you want to perform. The dependencies array is used to tell React when to re-run the callback function. If the dependencies array is empty, the callback function will only run once after the initial render. If any value in the dependencies array changes, the callback function will run again.

Here is an example of how to use useEffect to fetch data from an API and update the state of a component:

```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.example.com/data');
      const json = await response.json();
      setData(json);
    }

    fetchData();
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}


```
In this example, the useEffect hook is used to fetch data from an API using the fetch function. The setData function is called to update the data state variable with the JSON data returned from the API. The empty dependencies array tells React to run the callback function only once after the initial render.

### Fetch Api & env
- [Open weather API](https://api.openweathermap.org/data/2.5/weather?q=melbourne&units=metric&appid=3917f3a764d0394f234b9a09d3463ef4)
- [ReactJS Tutorial - Live Weather App (OpenWeather Free API)](https://www.youtube.com/watch?v=_Hhg7NmmN-c&t=306s)
- [GitHub - ReactJS_Weather_App/src/App.js ](https://github.com/davidrazmadzeExtra/ReactJS_Weather_App/blob/main/src/App.js)

- [Using DOTENV to hide Api Key in React JS ](https://www.youtube.com/watch?v=3RgpuNR9JI8)

- [How could I hide api key in my React app and host the working version in Github](https://stackoverflow.com/questions/65651313/how-could-i-hide-api-key-in-my-react-app-and-host-the-working-version-in-github)

- [How to Hide Your API Keys](https://betterprogramming.pub/how-to-hide-your-api-keys-c2b952bc07e6)

- [【React.js 入門 - 15】 使用 Http request - Fetch Api](https://ithelp.ithome.com.tw/articles/10221020?sc=rss.iron)
