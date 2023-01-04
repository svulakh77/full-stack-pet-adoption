import React, { useState, useContext } from "react";
import SomeContext from "../Context";

function Profile() {
  const {
    email,
    password,
    setPassword,
    phoneNumber,
    setPhoneNumber,
    firstName,
    setFirstName,
    lastName,
    setLastName,
  } = useContext(SomeContext);
  const [newEmail, setNewEmail] = useState(email);
  const [newPassword, setNewPassword] = useState(password);
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber);
  const[bio,setBio]=useState("")
  const handleNewEmail = (e) => {
    setNewEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setNewPassword(e.target.value);
  };
  const handleFirstName = (e) => {
    setNewFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setNewLastName(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setNewPhoneNumber(e.target.value);
  };
  const handleBio = (e) => {
    setBio(e.target.value);
  };
  
  return (
    <div className="profileForm">
      <form>
        <div>
          <p className='profileText'>
          Update Email:
          </p>
          <input type="text" className="profileInput"></input>
        </div>
        <div>
          <p className='profileText'>
          Update Password:
          </p>
          <input type="password" className="profileInput"></input>
        </div>
        <div>
        <p className='profileText'>
          Update First Name:
          </p>
          <input type="text" className="profileInput"></input>
        </div>
        <div>
        <p className='profileText'>
          Update Last Name:
          </p>
          <input type="text" className="profileInput"></input>
        </div>
        <div>
        <p className='profileText'>
          Update Phone Number:
          </p>
          <input type="tel" className="profileInput"></input>
        </div>
        <div>
        <p className='profileText'>
          Add Bio:
          </p>
          <input type="text" className="profileInput bio"></input>
        </div>
        <button className="profileButton">Save Changes</button>
      </form>
    </div>
  );
}

export default Profile;
