import './index.css'

// function component using object destructuring to parse props and explicit return

const MotivationalPoster = ({ imageURL, altText, title, message }) => {
  return (
    <div className="MotivationalPoster">
      <img src={imageURL} alt={altText} />
      <h1>{title.toUpperCase()}</h1>
      <p>{message}</p>
    </div>
  )
}
export default MotivationalPoster

// --function component using props keyword and explicit return--
// const MotivationalPoster = (props) => {
//   return (
//     <div className="MotivationalPoster">
//       <img src={props.imageURL} alt={props.altText} />
//       <h1>{props.title.toUpperCase()}</h1>
//       <p>{props.message}</p>
//     </div>
//   )
// }

// -- function component using props keyword and implicit return from arrow function --
// const MotivationalPoster = (props) => (
//   <div className="MotivationalPoster">
//     <img src={props.imageURL} alt={props.altText} />
//     <h1>{props.title.toUpperCase()}</h1>
//     <p>{props.message}</p>
//   </div>
// )