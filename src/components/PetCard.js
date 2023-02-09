import React,{useState,useEffect,useContext} from 'react'

import { useNavigate } from "react-router-dom";
import axios from 'axios';
import SaveButton from './SaveButton';
import HeartButton from './HeartButton';
import SomeContext from '../Context';

import { Loading } from '@nextui-org/react';

function PetCard({pet}) {
  const{currentUser,saved,setSaved}=useContext(SomeContext)
   const navigate = useNavigate();
   const [likes, setLikes] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handleClick = async (e) => {
    console.log("clicked")
    setLoading(true)
    if (!isClicked) {
      try {
        const savedPet = {
          ownerId:currentUser.id,
          petId:pet.id
        };
        const res = await axios.post(
          "http://localhost:8080/saves/savePet",
          savedPet,{withCredentials: true}
        );
        console.log(res.data)
        setSaved(res.data)
        console.log(saved)
        setLikes(true);
    } catch(err){
      console.log(err)
    }
  }
    else {
      setLikes(false);
    }
    setIsClicked(!isClicked);
    setLoading(false)
  };
  
   const handlePetCard=async()=>{
try{
  const res=await axios.get(`http://localhost:8080/pets/${pet.id}`)
  console.log(res.data)
navigate(`/petPage/${pet.id}`)
   }catch(err){
    console.log(err)
   }
  }
  return (
    <div className='petCard'>
      <div className='petInfo'>
        <img src={pet.pic} className="petPic" alt="Pet Pic Holder"></img>
      <h3>Name:{pet.petName}</h3>
      <h3>Adoption Status:{pet.adoptionStatus}</h3>
   

      {/* <span className="likes-counter">{ `Like | ${likes}` }</span> */}
      {/* <label>&#9829</label> */} 
      <div className='petCardButtons'>
        {currentUser?
      <button
        className={likes? "heart": "button-81"}
        style={{ backgroundColor: "red", color:"white" }}
        onClick={(e)=>handleClick(e)}
      >{loading ? <Loading /> : likes? "":"Save"}</button>:""}
        <button onClick={handlePetCard} className="button-81" >See More</button>
        </div>
    </div>
    </div>
    
  )
}

export default PetCard