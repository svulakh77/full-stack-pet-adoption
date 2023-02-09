import React, { useState, useContext } from "react";
import axios from "axios";
import SomeContext from "../Context";
import { Form, InputGroup } from "react-bootstrap";

function Profile() {
  const {
    email,
    password,
    phoneNumber,
    firstName,
    lastName,
    handleClose,
    setCurrentUser,
    currentUser,
  } = useContext(SomeContext);
  const [newEmail, setNewEmail] = useState(email);
  const [newPassword, setNewPassword] = useState(password);
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber);
  const [bio, setBio] = useState("");
  const handleNewEmail = (e) => {
    setNewEmail(e.target.value);
  };
  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };
  const handleNewFirstName = (e) => {
    setNewFirstName(e.target.value);
  };
  const handleNewLastName = (e) => {
    setNewLastName(e.target.value);
  };
  const handleNewPhoneNumber = (e) => {
    setNewPhoneNumber(e.target.value);
  };
  const handleBio = (e) => {
    setBio(e.target.value);
  };
  const handleProfile = async (e) => {
    try {
      console.log("Updating user");
      e.stopPropagation();
      handleClose();
      let newProfile = {};
      if (newEmail) {
        newProfile["email"] = newEmail;
      }
      if (newPassword) {
        newProfile["password"] = newPassword;
      }
      if (newFirstName) {
        newProfile["firstName"] = newFirstName;
      }
      if (newLastName) {
        newProfile["lastName"] = newLastName;
      }
      if (newPhoneNumber) {
        newProfile["phoneNumber"] = newPhoneNumber;
      }
      if (bio) {
        newProfile["bio"] = bio;
      }
      console.log(newProfile);
      const token = localStorage.getItem("token");
      const res = await axios.put(
        "http://localhost:8080/users/profile",
        newProfile,
        { withCredentials: true }
      );
      localStorage.getItem("token", res.data.token);
      console.log(res.data);
      setCurrentUser(newProfile);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="profileForm">
      <div className="addPetContainer">
        <div className="addPet">
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Update Email:</InputGroup.Text>
            <Form.Control
              placeholder={currentUser.email}
              aria-label="Email"
              aria-describedby="basic-addon1"
              onChange={handleNewEmail}
              name="email"
              type="email"
              default={currentUser.email}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              Update Password:
            </InputGroup.Text>
            <Form.Control
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              onChange={handleNewPassword}
              name="password"
              type="password"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              Update First Name:
            </InputGroup.Text>
            <Form.Control
              placeholder="First Name"
              aria-label="First Name"
              aria-describedby="basic-addon1"
              onChange={handleNewFirstName}
              name="firstName"
              type="text"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              Update Last Name:
            </InputGroup.Text>
            <Form.Control
              placeholder="Last Name"
              aria-label="Last Name"
              aria-describedby="basic-addon1"
              onChange={handleNewLastName}
              name="lastName"
              type="text"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              Update Phone Number:
            </InputGroup.Text>
            <Form.Control
              placeholder="Phone Number"
              aria-label="Phone Number"
              aria-describedby="basic-addon1"
              onChange={handleNewPhoneNumber}
              name="phoneNumber"
              type="tel"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Add a Bio:</InputGroup.Text>
            <Form.Control
              placeholder="Bio"
              aria-label="Bio"
              aria-describedby="basic-addon1"
              onChange={handleBio}
              name="bio"
              as="textarea"
            />
          </InputGroup>
          <button className="profileButton" onClick={handleProfile}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
