import React from 'react'
// import { render } from 'react-testing-library'
import { render } from '@testing-library/react'
// import 'jest-dom/extend-expect' // add extra matchers
import App from '../src/App'

describe('App', () => {
  it('Runs and passes', () => {
    expect(true).toBe(true)
  })

  it('Renders without error', () => {
    render(<App />)
  })
})
