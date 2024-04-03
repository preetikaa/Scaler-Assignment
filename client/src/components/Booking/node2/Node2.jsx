import React from 'react';
import "./Node2.scss";

const Notes2 = () =>{
  return (
    <div className="note">
      <div className="note-image">
        <img src="https://www.hotel-west-end.com/img/photos/t/a86066ec9c74dbbfb05f5b516480bfcb.jpg" alt="C Room"/>
      </div>
      <div className="note-content">
      <h1 style={{color:"black"}}><big>ROOM TYPE C</big></h1>
        <p>Situated in the best rated area in Negombo, this hotel has an excellent location score of 8.9.</p>
        <ul>
          <li>A/C</li>
          <li>TV</li>
          <li>WIFI</li>
          <li>Attach Bath Room</li>
          <li>Cupboard</li>
          <li>Single Bed</li>
          <li>Good for a Single Person</li>
        </ul> 
        <br></br>
        <div className="room-info">
          <h2>Price : 10.000/= per Day</h2>
          <h2>Total Room Count : 5</h2>
          </div> 
      </div>
    </div>
  );
}

export default Notes2;