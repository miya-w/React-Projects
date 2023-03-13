import { useState } from 'react'

// import MotivationalPoster from '/MotivationalPoster'
import MotivationalPoster from './MotivationalPoster/MotivationalPoster'

const PostGenerator = () => {
  const [title, setTitle] = useState('Type Your title')
  const [message, setMessage] = useState('some text')
  const [imgUrl, setImgUrl] = useState('')

  const handleInputChangeTitle = (e) => {
    console.log(e)
    setTitle(e.target.value)
  }
  // const handleInputChangeMessage = (e) => {
  //   setMessage(e.target.value)
  // }

  const handleInputField = (e, func) => {
    func(e.target.value)
  }

  return (
    <>
      <form action="">
        <input type="text" value={title} onChange={handleInputChangeTitle} />
        <input
          type="text"
          value={message}
          onChange={(e) => handleInputField(e, setMessage)}
        />
        <select value={imgUrl} onChange={(e) => handleInputField(e, setImgUrl)}>
          <option value=" /images/climbing.jpg">Climbing</option>
          <option value="/images/seeding.jpg">Seedling</option>
          <option value="/images/skyscrapers.jpg">Skyscrapers</option>
        </select>
      </form>
      <MotivationalPoster
        imageURL={imgUrl}
        altText="some alt text"
        title={title}
        message={message}
      />
    </>
  )
}

export default PostGenerator