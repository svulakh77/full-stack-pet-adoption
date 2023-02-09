import React, {useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import MyPetCard from "./MyPetCard";
import PetPage from "./PetPage";
import axios from 'axios';
import SomeContext from "../Context";
function MyPets() {
// const[pets,setPets]=useState([]);
const [token]=useState(localStorage.getItem('token')||'');
const navigate=useNavigate()
const {pets,setPets,currentUser,admin}=useContext(SomeContext)
console.log(token)
useEffect(()=>{
  axios.get('http://localhost:8080/pets',
    {withCredentials: true}
  ).then((res)=>{
    setPets(res.data)
  })
},[token])
console.log(pets)

  const [likes, setLikes] = useState(100);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };
  const handleSavedPets=()=>{
    navigate("/savedPets")
  }
  return (
    <div>
      <div className="myPets">
      <button className="button-81">Pets</button>
      <button className="button-81" onClick={handleSavedPets}>Saved Pets</button>
      </div>
      <div className='petList'>
      {pets.map((pet) => (
          <MyPetCard pet={pet} />
        ))}
      </div>
    </div>
  );
};
export default MyPets;
