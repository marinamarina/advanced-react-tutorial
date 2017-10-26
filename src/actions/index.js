import { SAVE_COMMENT } from './actionTypes'

export function saveComment(comment='') {
  return {
   type: SAVE_COMMENT,
   payload: comment
  }
}
