import React from 'react';
import "./Node1.scss";

const Notes1 = () =>{
  return (
    <div className="note">
      <div className="note-image">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/335149867.jpg?k=9d4be17d1013b2c77c0c0e93772fd95ea80db472e70a1ed1f0c5909c7aa7b1a2&o=&hp=1" alt="B Room"/>
      </div>
      <div className="note-content">
      <h1 style={{color:"black"}}><big>Semi-Luxury Room</big></h1>
        <p>Room Type B</p>
        <br></br>

        <div className="room-info">
          <h2>Price : 80/- per hour</h2>
          <h2>Total Room Count : 3</h2>
          </div>       
      </div>
    </div>
  );
}

export default Notes1;