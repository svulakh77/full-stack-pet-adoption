import React, { useState, useContext } from "react";
import axios from "axios";
import SomeContext from "../Context";
import { Modal } from "react-bootstrap";
import { ModalBody } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Login() {
  const { show, onModalSubmit,handleClose,currentUser,setCurrentUser,authenticated,setAuthenticated } = useContext(SomeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = async (e) => {
    try {
      e.stopPropagation();
      handleClose();
      const loggedIn = {
        email,
        password,
      };
      console.log(loggedIn)
      const res = await axios.post(
        "http://localhost:8080/users/login",
        loggedIn
      );
    
      if(res.data.token) {
        setAuthenticated(true)
        setCurrentUser(res.data.user)
        localStorage.setItem('token', res.data.token)
        navigate('/')
      }
      console.log(res.data.user.firstName);
      console.log(res.data.token);
      console.log(currentUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <Modal
          show={show}
          backdrop="static"
          keyboard={false}
          className="loginModal"
          onHide={onModalSubmit}
        >
          <ModalBody className="loginModalContent">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={onModalSubmit}
          ></button>
          Email:
            <input type="text" className="email" onChange={handleEmail}></input>
            Password:
            <input
              type="password"
              className="password"
              onChange={handlePassword}
            ></input>
             <Button onClick={handleLogin} className='signUpButton'type="submit">
              Log In
            </Button>
          </ModalBody>
        </Modal>
      </form>
    </div>
  );
}

export default Login;
