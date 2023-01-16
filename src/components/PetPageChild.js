import React from "react";

function PetPageChild({ onePet }) {
  console.log(onePet);
  return (
    <div className="petPageContainer">
      <div className="petPage">
        <div className="petPageInfo">
        <img src={onePet.pic} className='petPagePic'></img>
        <div>Name:{onePet.petName}</div>
        <div>
          {onePet.color} {onePet.type}
        </div>
        <div>{onePet.breed}</div>
        <div>{onePet.adoptionStatus}</div>
        <div>{onePet.height} cm</div>
        <div>{onePet.weight} kg</div>
        <div>{onePet.hypoallergenic}</div>
        <div>{onePet.dietaryRestrictions}</div>
        <div>{onePet.petBio}</div>
      </div>
    </div>
    <div className="statusButtons">
    <button class="button-34" role="button">Adopt</button>
    <button class="button-34" role="button">Foster</button>
    </div>
    </div>
  );
}

export default PetPageChild;
