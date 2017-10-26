import { expect } from '../../test/test_helper'
import commentsReducer from '../../src/reducers/comments'
import { SAVE_COMMENT } from '../../src/actions/actionTypes'

describe('Comments Reducer', () => {
  describe('saveComment', () => {
    it('handles action with an unknown type', () => {
      expect(commentsReducer(undefined, {})).to.eql([])
    })

    it('SAVE_COMMENT', () => {
      const action = { type: SAVE_COMMENT, payload: 'new comment'}
      expect(commentsReducer([], action)).to.eql(['new comment'])
    })
  })
})
