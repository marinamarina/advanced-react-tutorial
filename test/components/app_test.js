import { renderComponent, expect } from '../test_helper'
import App from '../../src/components/app'

describe('App component', () => {
  it('should show the correct text', () => {
    // create an instance of app component
    const component = renderComponent(App)

    expect(component).to.contain('React simple starte')
  })
})
