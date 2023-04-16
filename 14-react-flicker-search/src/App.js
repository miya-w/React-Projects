import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchPage from './components/searchPage';
import SearchResault from './components/searchResault';

// 0e5234ed5db5e277c792a98a2a504102

const API = {
  base:"https://www.flickr.com/photos/",
  key : process.env.REACT_APP_Flicker_Key
}  


function App() {


  // const fetchFlicker = () => {
  //   const url = `${API.base}{API.Key}{queryText}`;

  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
        
      
  //     })
  //     .catch((error) => setMessage(""));
  // };

  return(
   <BrowserRouter>
   <h2>Flicker search test</h2>
    <Routes>
      <Route path= '/'/>
        {/* <Route index element={<p>Enter Search to Begin</p>}/> */}
        <Route index element={< SearchPage/>}/>
        <Route path = '/search/:queryText'element={ < SearchResault/>}/>
        {/* <Route path = '/search/:queryText'element={<p>Search Resaults</p>}/> */}


    </Routes>
   </BrowserRouter>
  )
}


export default App;
