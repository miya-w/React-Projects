## Nesting routes
### < NavLink > 
A < NavLink > is a special kind of < Link > that knows whether or not it is "active" or "pending". This is useful when building a navigation menu, such as a breadcrumb or a set of tabs where you'd like to show which of them is currently selected. It also provides useful context for assistive technology like screen readers.[`<NavLink>`](https://reactrouter.com/en/main/components/nav-link)
- Default active class
By default, an active class is added to a <NavLink> component when it is active so you can use CSS to style it.

 < navLink >So that's what naturally does for us. It adds a class active to the current element.

```javascript
<nav id="sidebar">
  <NavLink to="/messages" />
</nav>
// style.css
#sidebar a.active {
  color: red;
}

```
### let params = useParams()
```javascript
import { useParams } from "react-router-dom"

function Post() {
    let params = useParams()

    return <h1>{params.postId}</h1>
}
```

 using dynamic routing in order to achieve this here by grabbing, passing and grabbing our URL Parameter
### Nesting routes with <Outlet/>
. So an outlet on
react router we'll serve as a place holder on nested routing, where I can't display a component or an element inside the other router element.
< Outlet /> behaves a bit like props.children in standard React. <Outlet /> is the placeholder location for where the nested children routes will be rendered.

 that's how nested routing works. Yeah. So react, Router. We'll know that if you have a nested routing as we do here when you place an outlet inside that parent components. That's pretty much where
that's child routing will be displayed.

---
### Resources
- [How to Use Nested Routes in React Router 6](https://dev.to/tywenk/how-to-use-nested-routes-in-react-router-6-4jhd)
- [YouTube - React Router in Depth #4 - Nested Routes & Layouts](https://www.youtube.com/watch?v=l8CS9AMBSIQ)