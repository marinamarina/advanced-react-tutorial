import {renderComponent, expect} from '../test_helper'
import CommentBox from '../../src/components/comment_box'

describe('Comment Box component', () => {
  let component = null

  beforeEach(() => {
    component = renderComponent(CommentBox)
  })

  it('has the correct class', () => {
    expect(component).to.exist;
    expect(component).to.have.class('comment-box')
    
  })

  it('has a text area', () =>{
    const component = renderComponent(CommentBox)
    const textArea = component.find('textarea')
    
    expect(textArea).to.exist;
  })

  it('has a button', () =>{
    const component = renderComponent(CommentBox)
    const button = component.find('button')

    expect(button).to.exist
  })
})
