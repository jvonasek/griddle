import React, { Component } from 'react'

import './SeedInput.css'

export default class SeedInput extends Component {
  constructor(props) {
    super(props)
    this.state = { value: props.seed }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.newGame(this.state.value)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({value: nextProps.seed})
  }

  render() {
    return (
      <div className="SeedInput">
        <input
          className="SeedInput-input input"
          value={this.state.value}
          onChange={this.handleChange}
          type="text"
          name="seed-input"
          id="seed-input"
          />
        <button className="SeedInput-button button" onClick={this.handleSubmit}>new game</button>
      </div>
      );
  }
}

SeedInput.propTypes = {
  seed: React.PropTypes.string,
  newGame: React.PropTypes.func
}
