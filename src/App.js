import React from 'react'
import { hot } from 'react-hot-loader'

const Warning = React.lazy(() => import('./Warning'))

class App extends React.Component {
  // property initializer syntax, sits at root of class, not yet in javascript spec.
  // Need babel syntax support
  state = {
    count: 0,
  }

  increment() {
    this.setState((state) => ({ count: state.count + 1 }))
  }

  decrement() {
    this.setState((state) => ({ count: state.count - 1 }))
  }

  render() {
    // throw new Error('Boom!') // test error boundary
    const { count } = this.state

    return (
      <div>
        <h1>Hello World!</h1>
        <h2 className={count > 10 ? 'warning' : null}>Count: {count}</h2>
        <button onClick={this.increment.bind(this)}>+</button>
        <button onClick={this.decrement.bind(this)}>-</button>
        {count > 10 ? (
          <React.Suspense fallback="null">
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    )
  }
}

export default hot(module)(App)
