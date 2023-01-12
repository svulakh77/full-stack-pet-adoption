import React, {useContext} from "react";
import {Link} from "react-router-dom";
import { Button } from "react-bootstrap";
import SomeContext from "../Context";

function NavBarIn() {
  const {currentUser,setCurrentUser,authenticated,setAuthenticated } = useContext(SomeContext);
  const handleLogout=()=>{
    setCurrentUser("")
    setAuthenticated(false)
    localStorage.removeItem("token")
  }
  return (
    <div>
      <nav>
        <div className="nav">
          <Link className="link" to={'/'}>Home</Link>
          <Link className="link" to={"/search"}>
            Search
          </Link>
          <Link className="link" to={"/profile"} >
            Profile
          </Link>
          <Link className="link" to={"/myPets"}>My Pets</Link>
          <Link className="link" to={"/addPet"}>Add Pets</Link>
          
          <Link className="link" to={"/"} onClick={handleLogout}>Logout</Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBarIn;
