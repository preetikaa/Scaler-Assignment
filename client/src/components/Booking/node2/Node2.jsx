import React from 'react';
import "./Node2.scss";

const Notes2 = () =>{
  return (
    <div className="note">
      <div className="note-image">
        <img src="https://www.hotel-west-end.com/img/photos/t/a86066ec9c74dbbfb05f5b516480bfcb.jpg" alt="C Room"/>
      </div>
      <div className="note-content">
      <h1 style={{color:"black"}}><big>Normal Room</big></h1>
        <p>Room type C</p>
        <br></br>
        <div className="room-info">
          <h2>Price : 50/- per hour</h2>
          <h2>Total Room Count : 5</h2>
          </div> 
      </div>
    </div>
  );
}

export default Notes2;