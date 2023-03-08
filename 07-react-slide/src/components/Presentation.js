import React, { Component } from 'react'

import Slide from './Slide'

const slides = [
  {
    title: 'First slide!',
    content: 'Welcome to my presentation',
  },
  {
    title: 'Agenda',
    content: "I'm going to talk about some stuff.",
  },
  {
    title: 'Content',
    content: 'blah blah blah',
  },
  {
    title: 'Content 2',
    content: 'blah blah blah blah blah blah blah blah blah',
  },
  {
    title: 'Conclusion',
    content: 'Thanks for watching my TED talk',
  },
]

export default class Presentation extends Component {
  state = {
    showSlides: false,
    currentSlide: 0,
  }

  startPresentation = () => {
    this.setState({ showSlides: true })
  }

  nextSlide = () => {
    const nextSlide = this.state.currentSlide + 1
    if (nextSlide >= slides.length) {
      this.setState({
        showSlides: false,
        currentSlide: 0,
      })
    } else {
      this.setState({ currentSlide: nextSlide })
    }
  }

  render() {
    const slide = slides[this.state.currentSlide]

    if (this.state.showSlides) {
      return (
        // <div>
        //   <Slide title={slide.title} content={slide.content} />
        //   <button onClick={this.nextSlide}>Next</button>
        // </div>

        <div>
          <Slide
            key={slide.title}
            title={slide.title}
            content={slide.content}
          />
          <button onClick={this.nextSlide}>Next</button>
        </div>
      )
    }
    return <button onClick={this.startPresentation}>Start Presentation</button>
  }
}