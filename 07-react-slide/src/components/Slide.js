import { Component } from 'react'
export default class Slide extends Component {
 
 
    componentDidMount() {
    console.log('componentDidMount')
    console.log('Initial page title: ', document.title)
    this.intialTitle = document.title
    document.title = this.props.title
  }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate')
  //   document.title = this.props.title
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
    console.log(prevProps)
    console.log(prevState)
    if (prevProps.title !== this.props.title) {
      document.title = this.props.title
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    document.title = this.intialTitle
  }

  render() {
    console.log('render')

    return (
      <>
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </>
    )
  }
}