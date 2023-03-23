## React- route

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
