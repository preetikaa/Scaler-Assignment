import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const onRegister = async (e) => {
    e.preventDefault();
    const newUser = {
      userName,
      password,
    };

    await axios
      .post("/login/register", newUser)
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registration Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login"); // Navigate to login page or dashboard as per your flow
      })
      .catch((error) => {
        Swal.fire("Error!", "Registration Failed!", "error");
      });
  };

  return (
    <form className="registration-form">
      <h2>REGISTER</h2>
      <div>
        <label htmlFor="userName">Username:</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" onClick={onRegister}>
        Register
      </button>
    </form>
  );
}

export default Registration;