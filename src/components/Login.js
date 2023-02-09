import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import SomeContext from "../Context";
import { Modal } from "react-bootstrap";
import { Form, InputGroup, ModalBody } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Login() {
  const { show, onModalSubmit,handleClose,currentUser,setCurrentUser,authenticated,setAuthenticated, admin, setAdmin } = useContext(SomeContext);
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
      const loggedIn = {
        email,
        password,
      };
      console.log(loggedIn)
      const res = await axios.post(
        "http://localhost:8080/users/login",
        loggedIn,{withCredentials: true}
      );
    
      if(res.data.token) {
        e.stopPropagation();
        handleClose();
        setAuthenticated(true)
        setCurrentUser(res.data.user)
        console.log(res.data.user)
        
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('currentUser',JSON.stringify(res.data.user))
        
        navigate('/')
      }
      if (res.data.user.isAdmin===1){
        setAdmin(true);
        // admin = true;
       
      }
      else {
        setAdmin(false);
        // admin = false
      }
      console.log(admin)
      console.log(currentUser);
      console.log(res.data.token);
    } catch (error) {
      console.log(error)
      // console.log(error.response.data)
      // alert(error.response.data)
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
            {/* Password:
            <input
              type="password"
              className="password"
              onChange={handlePassword}
            ></input> */}
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
