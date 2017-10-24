import React, {Component} from 'react'

export default class CommentBox extends Component {
  constructor(props) {
    super(props)

    this.state = {comment: ''}
  }

  onHandleChange(event) {
    this.setState({ comment: event.target.value })
  }

  onHandleSubmit(event) {
    event.preventDefault()
    this.setState({ comment: ''})
  }

  render() {
    console.log('Value: ' + this.state.comment)
    return (
      <form onSubmit={(e) => this.onHandleSubmit(e)} className='comment-box'>
        <textarea 
          value={this.state.comment}
          onChange={e => this.onHandleChange(e)} 
        />
        <button>Submit smth</button>
      </form>
  )
  }
}
