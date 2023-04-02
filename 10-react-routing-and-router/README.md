## React- route

### 1.How to Install React Router
 - npm install react-router-dom@6
### 2. Set Up React Router
- import { BrowserRouter } from "react-router-dom";
- < BrowserRouter>

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```
### 3.Route to Other Components
```javascript
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </div>
  )
}



export default App
```

### Step 4 - Use Link to navigate to routes

```javascript
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="about">Click to view our about page</Link>
      <Link to="contact">Click to view our contact page</Link>
    </div>
  );
}

export default Home;
```

```javascript

// import { useState, useEffect } from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

import About from '../About'
import Contact from '../Contact'
import HomePage from '../HomePage'

// const App = () => {
//   // /  -> Home
//   // /contact  -> contact
//   // /about  => about

//   const [page, setPage] = useState(window.location.pathname)

//   const goToPage = (urlPath) => {
//     window.history.pushState('', '', urlPath)
//     setPage(urlPath)
//   }

//   useEffect(() => {
//     const handleHistoryChange = (event) => {
//       // Update the page state to match
//       setPage(window.location.pathname)
//     }
//     window.addEventListener('popstate', handleHistoryChange)

//     const cleanUp = () => {
//       window.removeEventListener('popstate', handleHistoryChange)
//     }

//     return cleanUp
//   }, []) // Empty dependecy list - do once only.

//   let pageContent = <p>Page not found</p>

//   if (page === '/') {
//     pageContent = <HomePage />
//   } else if (page === '/contact') {
//     pageContent = <Contact />
//   } else if (page === '/about') {
//     pageContent = <About />
//   }

//   return (
//     <>
//       <nav>
//         <span onClick={() => goToPage('/')}>Home</span>
//         {' | '}
//         <span onClick={() => goToPage('/about')}>About</span>
//         {' | '}
//         <span onClick={() => goToPage('/contact')}>Contact</span>
//       </nav>
//       <p>You are on page: {page}</p>
//       {pageContent}
//     </>
//   )
// }

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/about">About</Link>
        {' | '}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="*" element={<p>page not exist</p>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```



```javascript
// product

import { useParams, Link } from 'react-router-dom'

import { products } from '../Products'

const Product = () => {
  let params = useParams()

  const product = products.find((product) => product.id === params.productID)

  // console.log(product)

  return (
    <>
      <div style={{ marginBottom: 20 }}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <span>$ {product.price}</span>
      </div>
      <Link to="/products">Back to products</Link>
    </>
  )
}

export default Product

```

```javascript
// Products
// import { Link,Outlet} from 'react-router-dom'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <>
      <h1>Flowers Shop</h1>
      {/* <ul>
        {products.map(({ id, name }) => {
          return (
            <li key={id}>
              <Link to={`/products/${id}`}>{name}</Link>
            </li>
          )
        })}
      </ul>
      <Outlet /> */}
      <ul>
        {products.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/product/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Products

export const products = [
  {
    id: '573489278',
    name: 'Congratulations Bouquet',
    price: 70,
    description:
      'The perfect bouquet for a celebration such as a birthday or graduation.',
  },
  {
    id: '167489003',
    name: 'Apology Bouquet',
    price: 150,
    description: 'You need something extra when you know you messed up.',
  },
  {
    id: '234359850',
    name: 'Wedding Bouquet',
    price: 200,
    description:
      'Beautiful collection of flowers to turn heads on your special day!',
  },
]
```
---
### Resources 
- [React Router Version 6 Tutorial – How to Set Up Router and Route to Other Components](https://www.freecodecamp.org/news/how-to-use-react-router-version-6/)
- [React Router documentation](https://reactrouter.com/en/6.10.0)
- [React Router-`<Link>`](https://reactrouter.com/en/main/components/link)
