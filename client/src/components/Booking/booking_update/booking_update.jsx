import React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./booking_update.scss";

const UppBookingForm = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [values, setValues] = useState({
    bookingid: "",
    nic: "",
    name: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    checkin: "",
    checkout: "",
    roomtype: "",
    roomCount: "",
    totRoom: "",
    noadults: "",
    nochildren: "",
  });

  useEffect(() => {
    //Fetiching data
    axios
      .get(`/rmhotel/get/${id}`)
      .then((res) => {
        setValues({
          ...values,
          bookingid: res.data.bookingid,
          nic: res.data.nic,
          name: res.data.name,
          phone: res.data.phone,
          address1: res.data.address1,
          address2: res.data.address2,
          city: res.data.city,
          state: res.data.state,
          zip: res.data.zip,
          email: res.data.email,
          checkin: res.data.checkin,
          checkout: res.data.checkout,
          roomtype: res.data.roomtype,
          roomCount: res.data.roomCount,
          totRoom: res.data.totRoom,
          noadults: res.data.noadults,
          nochildren: res.data.nochildren,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`/rmhotel/update/${id}`, values)
      .then((res) => {
        console.log(res);
        Swal.fire("Done!", "Booking Updated Successfully!", "success");
        navigate("/booking/BookingRecord"); //Where to navigate after updating
      })
      .catch((err) => console.log(err));
  };

 
  return (
    <div>
      <form className="updateB" onSubmit={handleUpdate}>
        <h3> UPDATE ROOM BOOKING </h3>


        <label> Customer Name </label>
        <input
          type="text"
          placeholder="Enter Name "
          required
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          value={values.name}
        />

        

        <label> Email </label>
        <input
          type="email"
          unique="true"
          placeholder=" Enter Email"
          required
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          value={values.email}
        />
        
        <label> Check In Date </label>
        <input
          type="date"
          min={new Date().toISOString().slice(0, 10)}
          required
          onChange={(e) => setValues({ ...values, checkin: e.target.value })}
          value={values.checkin}
        />

        <label> Check Out Date </label>
        <input
          type="date"
          // placeholder=' Check Out Date'
          required
          min={new Date().toISOString().slice(0, 10)}
          onChange={(e) => setValues({ ...values, checkout: e.target.value })}
          value={values.checkout}
        />

        <label>Room Type</label>
        <select
          value={values.roomtype}
          onChange={(e) => setValues({ ...values, roomtype: e.target.value })}
        >
          <option value="Luxary_Rooms">Luxary Rooms</option>
          <option value="Semi_Luxary_Rooms">Semi Luxary Rooms</option>
          <option value="Normal_Rooms">Normal Rooms</option>
        </select>

        <label>Room Number</label>

        <input
          type="number"
          required
          value={values.roomCount}
          //onChange={handleRoomCountChange}  event handler to handle room count target values in here
          onChange={(e) => setValues({ ...values, roomCount: e.target.value })}
        />

       
        <div className="btn">
          <button type="submit">Submit</button>
          <button onClick={() => window.location.reload()}>CANCEL</button>
        </div>

        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};
export default UppBookingForm;
