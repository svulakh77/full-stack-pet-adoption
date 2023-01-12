import "./App.css";
import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Search from "./components/Search";
import OpenModal from "./components/OpenModal";
import NavBarOut from "./components/NavBarOut";
import SomeContext from "./Context";
import React, { useState,useEffect } from "react";
import Profile from "./components/Profile";
import NavBarIn from "./components/NavBarIn";
import MyPets from "./components/MyPets";
import AddPets from "./components/AddPets";
function App() {
  const [show, setShow] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [admin, setAdmin] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [type, setType] = useState("");
  const [petName, setPetName] = useState("");
  const [pic, setPic] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [petBio, setPetBio] = useState("");
  const [hypoallergenic, setHypoallergenic] = useState(false);
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [breed, setBreed] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  useEffect(()=>{
const token = localStorage.getItem('token')
const user = localStorage.getItem('currentUser')
const parsedUser = JSON.parse(user)
if (token && parsedUser ){
  setAuthenticated(true)
  setCurrentUser(parsedUser)
}
  },[])
  const onModalSubmit = (e) => {
    e.stopPropagation();
    handleClose();
  };
  return (
    <SomeContext.Provider
      value={{
        admin,
        setAdmin,
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
        show,
        handleShow,
        onModalSubmit,
        handleClose,
        authenticated,
        setAuthenticated,
        currentUser,
        setCurrentUser,
        type,
        setType,
        petName,
        setPetName,
        pic,
        setPic,
        height,
        setHeight,
        weight,
        setWeight,
        petBio,
        setPetBio,
        hypoallergenic,
        setHypoallergenic,
        dietaryRestrictions,
        setDietaryRestrictions,
        breed,
        setBreed,
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
          <Route path="/myPets" element={<MyPets />}></Route>
          <Route path="/addPet" element={<AddPets />}></Route>
        </Routes>
      </div>
    </SomeContext.Provider>
  );
}

export default App;
