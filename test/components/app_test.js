import { renderComponent, expect } from '../test_helper'
import App from '../../src/components/app'

describe('App component', () => {
  let component

  beforeEach(() => {
    component = renderComponent(App)
  })

  it('shows comment box', () => {
    // create an instance of app component
    const component = renderComponent(App)
    expect(component.find('.comment-box')).to.exist
  
  })
})
