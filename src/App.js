import "./App.css";
import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Search from "./components/Search";
import OpenModal from "./components/OpenModal";
import NavBarOut from "./components/NavBarOut";
import SomeContext from "./Context";
import React, { useState, useEffect } from "react";
import Profile from "./components/Profile";
import NavBarIn from "./components/NavBarIn";
import MyPets from "./components/MyPets";
import AddPets from "./components/AddPets";
import PetPage from "./components/PetPage";
import EditPet from "./components/EditPet";
import DashBoard from "./components/DashBoard";
import SavedPets from "./components/SavedPets";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  const [show, setShow] = useState(true);
  const [currentUser, setCurrentUser] = useState("");
  const [admin, setAdmin] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [pic, setPic] = useState("");
  const [pets, setPets] = useState([]);
  const[adopted,setAdopted]=useState(false);
  const[fostered,setFostered]=useState(false);
  const[returned,setReturned]=useState(true);
  const[saved,setSaved]=useState("");
  const [modal,setModal]=useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(!show);
  };
  const handleModal = () => {
    setModal(!modal);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("currentUser");
    const parsedUser = JSON.parse(user);

    if (token && parsedUser) {
      setAuthenticated(true);
      setCurrentUser(parsedUser);
      if (parsedUser.isAdmin === 1) {
        setAdmin(true);
      }
    }

  }, []);

  const onModalSubmit = (e) => {
    e.stopPropagation();
    handleClose();
  };
  const addPet = (newPet) => {
    const newPetArray = [...pets, newPet];
    setPets(newPetArray);
  };
  return (
    <SomeContext.Provider
      value={{
        adopted,setAdopted,
        fostered,setFostered,
        returned,setReturned,
        pets,
        setPets,
        admin,
        setAdmin,
        addPet,
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
        pic,
        setPic,
        saved,
        setSaved,
        handleModal,
        modal,
        setModal
      }}
    >
      <div className="App">

        <OpenModal />

        {authenticated ? <NavBarIn /> : <NavBarOut />}
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/myPets" element={<MyPets />}></Route>
          <Route path="/addPet" element={<PrivateRoute admin={admin}><AddPets /></PrivateRoute>}></Route>
          <Route path="/petPage/:id" element={<PetPage />}></Route>
          <Route path="/editPet" element={<PrivateRoute admin={admin}><EditPet /></PrivateRoute>}></Route>
          <Route path="/dashBoard" element={<DashBoard/>}></Route>
          <Route path="/savedPets" element={<SavedPets/>}></Route>
        </Routes>
      </div>
    </SomeContext.Provider>
  );
}

export default App;
