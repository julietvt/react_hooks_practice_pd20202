import React, { Component } from 'react';
class MouseCoords extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }
  handleMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };
  render() {
    const { render } = this.props;
    return <div onMouseMove={this.handleMove}>{render(this.state)}</div>;
  }
}
export default MouseCoords;
