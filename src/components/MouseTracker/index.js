import React from 'react';
import Mouse from '../Mouse';
import MouseCoords from '../MouseCoords';
class MouseTracker extends React.Component {
  render() {
    return (
      <>
        <h1>Переместите мышку</h1>
        <MouseCoords render={(mouse) => <Mouse mouse={mouse} />} />
      </>
    );
  }
}
export default MouseTracker;
