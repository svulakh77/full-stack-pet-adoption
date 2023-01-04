import "./App.css";
import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Search from "./components/Search";
import OpenModal from "./components/OpenModal";
import NavBarOut from "./components/NavBarOut";
import SomeContext from "./Context";
import React, { useState } from "react";
import Profile from "./components/Profile";
import NavBarIn from "./components/NavBarIn";
import MyPets from "./components/MyPets";
function App() {
  const [show, setShow] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const onModalSubmit = (e) => {
    e.stopPropagation();
    handleClose();
  };
  return (
    <SomeContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        phoneNumber,
        setPhoneNumber,
        firstName,setFirstName,
        lastName,setLastName,
        show,
        handleShow,
        onModalSubmit,
        handleClose,
        authenticated,
        setAuthenticated,
        currentUser,
        setCurrentUser,
      }}
    >
      <div className="App">
        {authenticated ? <NavBarIn /> : <NavBarOut />}
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/openModal" element={<OpenModal />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path='/myPets' element={<MyPets/>}></Route>
        </Routes>
      </div>
    </SomeContext.Provider>
  );
}

export default App;
