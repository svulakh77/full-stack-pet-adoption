import React, { useState, useContext } from "react";
import SomeContext from "../Context";
import EditButton from "./EditButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function PetPageChild({ onePet }) {
  const {
    currentUser,
    authenticated,
    adopted,
    setAdopted,
    fostered,
    setFostered,
    returned,
    setReturned,
    admin,
  } = useContext(SomeContext);
  const handleAdopted = async () => {
    try {
      const adoptedPet = {
        id: onePet.id,
        adoptionStatus: "Adopted",
      };
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `http://localhost:8080/pets/${onePet.id}/adopt`,
        adoptedPet,
        { withCredentials: true }
      );
      localStorage.getItem("token", res.data.token);
      console.log(res.data);
      setAdopted(true);
      setReturned(false);
      setFostered(false);
      alert(
        `Thank you for adopting ${onePet.petName}! The owner will contact you shortly`
      );
      window.location.reload(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleReturned = async () => {
    try {
      const returnedPet = {
        id: onePet.id,
        adoptionStatus: "Available",
        ownerId: 0,
      };
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `http://localhost:8080/pets/${onePet.id}/return`,
        returnedPet,
        { withCredentials: true }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
    setReturned(true);
    setFostered(false);
    setAdopted(false);
    alert(
      `We will be in touch with you shortly about returning ${onePet.petName} to the agency`
    );
    window.location.reload(true);
  };
  const handleFostered = async () => {
    const adoptedPet = {
      id: onePet.id,
      adoptionStatus: "Fostered",
    };
    const token = localStorage.getItem("token");
    const res = await axios.put(
      `http://localhost:8080/pets/${onePet.id}/adopt`,
      adoptedPet,
      { withCredentials: true }
    );
    console.log(res.data);
    setReturned(false);
    setFostered(true);
    setAdopted(false);
    alert(
      `Thank you for fostering ${onePet.petName}! The owner will contact you shortly`
    );
    window.location.reload(true);
  };
  let hypostatus = "Not Hypoallergenic";
  if (Boolean(onePet.hypoallergenic)) {
    hypostatus = "Hypoallergenic";
  }


  return (
    <div className="petPageContainer">
      <div className="petPage">
        <div className="petPageInfo">
          <img src={onePet.pic} className="petPagePic"></img>
          <div>Name:{onePet.petName}</div>
          <div>
            {onePet.color} {onePet.type}
          </div>
          <div>{onePet.breed}</div>
          <div>{onePet.adoptionStatus}</div>
          <div>{onePet.height} cm</div>
          <div>{onePet.weight} kg</div>
          <div>{hypostatus}</div>
          <div>{onePet.dietaryRestrictions}</div>
          <div>{onePet.petBio}</div>
        </div>
      </div>
      {currentUser && authenticated ? (
        <div className="petCardButtons">
          {onePet.adoptionStatus === "Available" ||
         
          ( onePet.ownerId == currentUser.id && 
          onePet.adoptionStatus === "Fostered") ? (
            <button
              className="button-34"
              role="button"
              onClick={handleAdopted}
              style={{ backgroundColor: "#5E5DF0" }}
            >
              Adopt
            </button>
          ) : (
            ""
          )}
          {onePet.adoptionStatus === "Available" ? (
            <button
              className="button-34"
              role="button"
              onClick={handleFostered}
              style={{ backgroundColor: "#00FF00" }}
            >
              Foster
            </button>
          ) : (
            ""
          )}
          {(onePet.ownerId == currentUser.id && onePet.adoptionStatus === "Adopted") ||
          ( onePet.ownerId == currentUser.id && onePet.adoptionStatus === "Fostered" )? (
            <button
              className="button-34"
              role="button"
              onClick={handleReturned}
              style={{ backgroundColor: "#FFA500" }}
            >
              Return
            </button>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
      {admin ? <EditButton /> : ""}
    </div>
  );
}
export default PetPageChild;
