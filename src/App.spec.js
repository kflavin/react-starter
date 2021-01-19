import React from 'react'
// import { render } from 'react-testing-library'
import { render } from '@testing-library/react'
// import 'jest-dom/extend-expect' // add extra matchers
import '@testing-library/jest-dom' // replaces library above
// import 'react-testing-library/cleanup-after-each' // run code after each tests to cleanup virtual dom
// import '@testing-library/react/cleanup-after-each' // run code after each tests to cleanup virtual dom
import App from './App'

describe('App', () => {
  it('Runs and passes', () => {
    expect(true).toBe(true)
  })

  it('Renders without error', () => {
    render(<App />)
  })
})
