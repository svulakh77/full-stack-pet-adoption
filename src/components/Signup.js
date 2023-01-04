import React, { useState, useContext } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";
import SomeContext from "../Context";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Signup() {
  const { show, onModalSubmit,handleClose,email,
    setEmail,
    password,
    setPassword,
    phoneNumber,
    setPhoneNumber,
    firstName,setFirstName,
    lastName,setLastName, 
    setCurrentUser,authenticated,setAuthenticated} = useContext(SomeContext);
    const navigate = useNavigate()

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
      e.stopPropagation();
      handleClose();
      const signedUp = {
        email,
        password,
        repassword:password,
        firstName,
        lastName,
        phoneNumber,
      };
      const res = await axios.post(
        "http://localhost:8080/users/signup",
        signedUp
      );
      if(res.data.token) {
        setAuthenticated(true)
        setCurrentUser(res.data.user)
        localStorage.setItem('token', res.data.token)
        navigate('/')
      }
      console.log(res.data);
    } catch (error) {
      console.log(error);
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
              <div className="SignUp">
               Email:
                <input
                  type="text"
                  className="Email"
                  onChange={handleEmail}
                ></input>
              </div>
              <div className="SignUp">
                Password:
                <input
                  type="password" name="password"
                  onChange={handlePassword}
                ></input>
              </div>
              <div>
                Confirm Password:
                <input
                  type="password" className="password"
                  onChange={handlePassword}
                ></input>
              </div>
              <div>
                First Name:
                <input
                  type="text"
                  className="firstName"
                  onChange={handleFirstName}
                ></input>
              </div>
              <div>
                Last Name:
                <input
                  type="text"
                  className="lastName"
                  onChange={handleLastName}
                ></input>
              </div>
              <div>
                Phone Number:
                <input
                  type="tel"
                  className="phone"
                  onChange={handlePhoneNumber}
                ></input>
              </div>
            </form>
            
            <Button onClick={handleSignUp} className='signUpButton'type="submit">
              Sign Up
            </Button>
          </ModalBody>
        </Modal>
      </form>
    </div>
  );
}

export default Signup;
