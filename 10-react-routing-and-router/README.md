## React- route

### 1.How to Install React Router
 - npm install react-router-dom@6
### 2. Set Up React Router 
A < BrowserRouter > stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack.
- import { BrowserRouter } from "react-router-dom";
- < BrowserRouter> [`<BrowserRouter>`](https://reactrouter.com/en/main/router-components/browser-router)

### 3.Route to Other Components
`< Routes >`
Rendered anywhere in the app, < Route > will match a set of child routes from the current location.[`< Routes >`](https://reactrouter.com/en/main/components/routes)
```javascript
interface RoutesProps {
  children?: React.ReactNode;
  location?: Partial<Location> | string;
}

<Routes location>
  <Route />
</Routes>;
```
### Step 4 - Use Link to navigate to routes
A < Link > is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom, a <Link> renders an accessible < a > element with a real href that points to the resource it's linking to. [`<link>`](https://reactrouter.com/en/main/components/link)

```javascript
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import About from '../About'
import Contact from '../Contact'
import HomePage from '../HomePage'
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




### Nesting routes with <Outlet/>
< Outlet /> behaves a bit like props.children in standard React. <Outlet /> is the placeholder location for where the nested children routes will be rendered.


---
### Resources
-[How to Use Nested Routes in React Router 6](https://dev.to/tywenk/how-to-use-nested-routes-in-react-router-6-4jhd)