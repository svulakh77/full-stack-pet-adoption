import React from "react";
import { useNavigate } from "react-router-dom";
function EditButton() {
const navigate=useNavigate()
const handleEditPet=()=>{
  navigate("/editPet")
}
  return (
    <div>
      <button class="button-2" role="button" onClick={handleEditPet}>
        Edit Pet
      </button>
    </div>
  );
}

export default EditButton;
