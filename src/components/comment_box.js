import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'

class CommentBox extends Component {
  constructor(props) {
    super(props)

    this.state = {comment: ''}
  }

  onHandleChange(event) {
    this.setState({ comment: event.target.value })
  }

  onHandleSubmit(event) {
    event.preventDefault()
    this.props.saveComment(this.state.comment)
    this.setState({ comment: ''})
  }

  render() {
    return (
      <form onSubmit={(e) => this.onHandleSubmit(e)} className='comment-box'>
        <h3>Add a comment</h3>
        <textarea 
          value={this.state.comment}
          onChange={e => this.onHandleChange(e)} 
        />
        <div>
          <button>Submit smth</button>
        </div>
      </form>
  )
  }
}

export default connect(null, actions)(CommentBox)
