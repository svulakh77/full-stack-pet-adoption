import React, {useEffect, useState} from "react";
import PetCard from "./PetCard";
import axios from 'axios';

function MyPets() {
const[pets,setPets]=useState([]);
const [token]=useState(localStorage.getItem('token')||'');
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


  return (
    <div>
      <button className="myPetsButton">Pets</button>
      <button className="myPetsButton">Saved Pets</button>
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
      </div>))}
    </div>
  );
}

export default MyPets;
