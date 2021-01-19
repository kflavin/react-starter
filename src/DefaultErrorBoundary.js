import React from 'react'
import PropTypes from 'prop-types'

export default class DefaultErrorBoundary extends React.Component {
  state = {
    isError: false,
  }

  // fixes linting issue, defines prop types for this component
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  // called if there is an error
  static getDerivedStateFromError() {
    return { isError: true }
  }

  render() {
    const { isError } = this.state
    const { children } = this.props
    return isError ? <div>Somethign went wrong</div> : children
  }
}
