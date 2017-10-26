import { SAVE_COMMENT } from '../actions/actionTypes'
import initialState from './initialState'

export default function commentsReducer(state = initialState.comments, action) {
  switch(action.type) {
    case SAVE_COMMENT:
      const comment = action.payload
      return [...state, comment]
    default:
      return state
  }
}

