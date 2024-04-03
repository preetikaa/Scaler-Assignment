import React from 'react';
import "./Node.scss";

const Notes = () => {
  return (
    <div className="note">
      <div className="note-image">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/356808279.jpg?k=28d4685805058a78673144329a04abafeda332b906f23edfc44ffa46b5cd027b&o=&hp=1" alt="A Room"/>
      </div>
      <div className="note-content">
        <h1 style={{color:"black"}}><big>Luxury Room</big></h1>
        <p>Room type A</p>
        
        <br></br>

        <div className="room-info">
          <h2>Price : 100/- per hour</h2>
          <h2>Total Room Count : 2</h2>
          </div>
      </div>
    </div>
  );
}

export default Notes;