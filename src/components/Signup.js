import React, { useState, useContext } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { ModalBody,Form, InputGroup } from "react-bootstrap";
import SomeContext from "../Context";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Signup() {
  const {
    show,
    onModalSubmit,
    handleClose,
    email,
    setEmail,
    password,
    setPassword,
    phoneNumber,
    setPhoneNumber,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    setCurrentUser,
    currentUser,
    setAuthenticated,
  } = useContext(SomeContext);
  const navigate = useNavigate();

  // const [signedUpUser,setSignedUpUser]=useState(false)
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleSignUp = async (e) => {
    try {
      const signedUp = {
        email,
        password,
        repassword: password,
        firstName,
        lastName,
        phoneNumber,
      };
      const res = await axios.post(
        "http://localhost:8080/users/signup",
        signedUp
      );
      if(res.data.token) {
        e.stopPropagation();
        handleClose();
        setAuthenticated(true)
        setCurrentUser(res.data.newUser)
        
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('currentUser',JSON.stringify(res.data.newUser))
        
        navigate('/')
      }
      // localStorage.setItem('currentUser',JSON.stringify(res.data.newUser))
      navigate("/");
      e.stopPropagation();
      setAuthenticated(true);
      //  setCurrentUser(res.data);
      handleClose();
      console.log(res.data);
      console.log(res.data.token);
      console.log(currentUser)
      
    } catch (error) {
      setAuthenticated(false);
      console.log(error);
      console.log(error.response.data);
      alert(error.response.data);
    }
  };
  return (
    <div>
      <form onSubmit={handleSignUp}>
        <Modal
          show={show}
          backdrop="static"
          keyboard={false}
          className="signUpModal"
          onHide={onModalSubmit}
        >
          <ModalBody className="signUpModalContent">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onModalSubmit}
            ></button>
            <form>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Email:</InputGroup.Text>
                <Form.Control
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  onChange={handleEmail}
                  name="email"
                  type="email"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Password:</InputGroup.Text>
                <Form.Control
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  onChange={handlePassword}
                  name="password"
                  type="password"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Confirm Password:</InputGroup.Text>
                <Form.Control
                  placeholder="Confirm Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  onChange={handlePassword}
                  name="repassword"
                  type="password"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">First Name:</InputGroup.Text>
                <Form.Control
                  placeholder="First Name"
                  aria-label="firstName"
                  aria-describedby="basic-addon1"
                  onChange={handleFirstName}
                  name="firstName"
                  type="text"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Last Name:</InputGroup.Text>
                <Form.Control
                  placeholder="Last Name"
                  aria-label="lastName"
                  aria-describedby="basic-addon1"
                  onChange={handleLastName}
                  name="lastName"
                  type="text"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Phone Number:</InputGroup.Text>
                <Form.Control
                  placeholder="Phone Number"
                  aria-label="phoneNumber"
                  aria-describedby="basic-addon1"
                  onChange={handlePhoneNumber}
                  name="phoneNumber"
                  type="tel"
                />
                </InputGroup>
              <Button
              onClick={handleSignUp}
              className="signUpButton"
              type="submit"
            >
              Sign Up
            </Button>
            </form>

          </ModalBody>
        </Modal>
      </form>
    </div>
  );
}

export default Signup;
