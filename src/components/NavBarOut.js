import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SomeContext from "../Context";

function NavBarOut() {
  const { show, handleClose, handleShow, onModalSubmit } =
    useContext(SomeContext);
  return (
    <nav>
      <div className="nav">
        <Link className="link" to={"/"}>
          Home
        </Link>
        <Link className="link" to={"/search"}>
          Search
        </Link>
        <Link className="link" to={"/openModal"} onClick={handleShow}>
          Login or Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default NavBarOut;
