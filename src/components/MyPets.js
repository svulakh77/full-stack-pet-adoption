import React, {useContext, useEffect, useState} from "react";
import PetCard from "./PetCard";
import PetPage from "./PetPage";
import axios from 'axios';
import SomeContext from "../Context";
function MyPets() {
// const[pets,setPets]=useState([]);
const [token]=useState(localStorage.getItem('token')||'');
const {pets,setPets}=useContext(SomeContext)
console.log(token)
useEffect(()=>{
  axios.get('http://localhost:8080/pets',{
    headers:{
      authorization:`Bearer ${JSON.stringify(token)}`,
    }
  }).then((res)=>{
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
  return (
    <div>
      <button className="myPetsButton">Pets</button>
      <button className="myPetsButton">Saved Pets</button>
      <div className='petList'>
      {pets.map(pet=>(<div><PetCard
        type = {pet.type}
        petName={pet.petName}
        pic={pet.pic}
        weight = {pet.weight}
        height = {pet.height}
        color = {pet.color}
        status = {pet.adoptionStatus}
        breed = {pet.breed}
        diet = {pet.dietaryRestrictions}
        hypoallergenic = {pet.hypoallergenic}
        key = {pet.id}
        pet = {pet}

        />
        {/* <PetPage pet = {pet}/> */}
      </div>))}
      
      </div>
    </div>
  );
};
export default MyPets;
