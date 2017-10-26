import {renderComponent, expect, simulate} from '../test_helper'
import CommentList from '../../src/components/comment_list'

describe('Comment List', () => {
  let component = null

  beforeEach(() => {
    const data = {comments: ['New comment', 'Some other new comment']}
    component = renderComponent(CommentList, null, data)
  })

  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(2)
  })

  it('shows all provided comments', () => {
    expect(component).to.contain('New comment')
    expect(component).to.contain('Some other new commen')    
  })
})
