import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import { useEffect } from "react";
import "./bookingform.scss";

const AddBookingForm = () => {
  const [bookingid, setBookingid] = useState("");
  const [nic, setNic] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [roomtype, setRoomtype] = useState("");
  const [roomCount, setroomCount] = useState("");
  const [totRoom, settotRoom] = useState("");
  const [noadults, setNoadults] = useState("");
  const [nochildren, setNochildren] = useState("");
  // const [emptyFields, setEmptyFields] = useState([]);
  const [error, setError] = useState(null);

  // const handleSubmitUP = (e) => {
  //   e.preventDefault();
  //   const updatedBooking = {
  //     nic,
  //     name,
  //     phone,
  //     address1,
  //     address2,
  //     city,
  //     state,
  //     zip,
  //     email,
  //     checkin,
  //     checkout,
  //     roomtype,
  //     roomCount,
  //     totRoom,
  //     noadults,
  //     nochildren
  //   };
  //----------------1st function for discount-----------

  function calculateTotal(roomtype, roomCount) {
    let rate;
    switch (roomtype) {
      case "Luxary_Rooms":
        rate = 15000;
        break;
      case "Semi_Luxary_Rooms":
        rate = 12000;
        break;
      case "Normal_Rooms":
        rate = 10000;
        break;
      default:
        rate = 0;
    }
    return rate * roomCount;
  }

  function handleRoomTypeChange(event) {
    setRoomtype(event.target.value);
    settotRoom(calculateTotal(event.target.value, roomCount));
  }

  function handleRoomCountChange(event) {
    setroomCount(event.target.value);
    settotRoom(calculateTotal(roomtype, event.target.value));
  }

  //----------------2nd function for discount-----------

  function calculateDicount(nochildren, totRoom) {
    let dis;
    if (nochildren > 5) {
      dis = nochildren * 0.2;
    } else {
      dis = totRoom;
    }

    return totRoom - dis;
  }

  //   function handleToT(event) {
  //     setNochildren(event.targe.valute);
  //     settotRoom(calculateDicount(event.target.value,totRoom));
  //   }

  function handleToT(event) {
    setNochildren(event.target.value);
    const discountedTotal = calculateDicount(event.target.value, totRoom);
    settotRoom(discountedTotal);
  }

  useEffect(() => {
    const prefix = "BID";
    let lastID = localStorage.getItem("lastID");
    let nextCount = 0;
    if (lastID) {
      nextCount = parseInt(lastID.substring(5), 10) + 1;
    }
    const nextID = `${prefix}${nextCount.toString().padStart(4, "0")}`;
    localStorage.setItem("lastID", nextID);
    setBookingid(nextID);
  }, [setBookingid]);

  // localStorage.clear();

  const handleSubmit = async (e) => {
    console.log('submit');
    console.log(e);
    e.preventDefault();

    const booking = {
      bookingid,
      nic,
      name,
      phone,
      address1,
      address2,
      city,
      state,
      zip,
      email,
      checkin,
      checkout,
      roomtype,
      roomCount,
      totRoom,
      noadults,
      nochildren,
    };

    const response = await fetch("/rmhotel/add", {
      method: "POST",
      body: JSON.stringify(booking),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response.toString);


    const json = await response.json();
    if (!response.ok) {
      console.log('error');
      setError(json.error);
    }

    if (response.ok) {
      console.log('pass');
      setBookingid("");
      setNic("");
      setName("");
      setPhone("");
      setAddress1("");
      setAddress2("");
      setCity("");
      setState("");
      setZip("");
      setEmail("");
      setCheckin("");
      setCheckout("");
      setRoomtype("");
      setroomCount("");
      settotRoom("");
      setNoadults("");
      setNochildren("");
      setError(null);

      console.log("New Booking Added", json);
    }
    Swal.fire("Done!", "Payment Successfull!", "success");
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <h3> ADD NEW ROOM BOOKING </h3>

        <label> Customer Name </label>
        <input
          type="text"
          placeholder="Enter Name "
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <label> Email </label>
        <input
          type="email"
          unique="true"
          placeholder=" Enter Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        

        <label>Room Type</label>
        <select value={roomtype} onChange={handleRoomTypeChange}>
          <option value="Luxary_Rooms">Luxary Rooms</option>
          <option value="Semi_Luxary_Rooms">Semi Luxary Rooms</option>
          <option value="Normal_Rooms">Normal Rooms</option>
        </select>

        <label>Room Number</label>

        <input
          type="string"
          required
          value={roomCount}
          onChange={handleRoomCountChange} 
        />

<label> Check In Date </label>
        <input
          type="date"
          min={new Date().toISOString().slice(0, 10)}
          onChange={(e) => setCheckin(e.target.value)}
          value={checkin}
        />

        <label> Check Out Date </label>
        <input
          type="date"
          placeholder=" Check Out Date"
          required
          min={new Date().toISOString().slice(0, 10)}
          onChange={(e) => setCheckout(e.target.value)}
          value={checkout}
        />


        <div>
          <button type="submit">Submit</button>
          <button onClick={() => window.location.reload()}>CANCEL</button>
        </div>

        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};
export default AddBookingForm;
