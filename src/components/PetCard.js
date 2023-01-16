import React,{useState} from 'react'

import { useNavigate } from "react-router-dom";
import axios from 'axios';

function PetCard({pet}) {
   const navigate = useNavigate();
   const [likes, setLikes] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  // const  [toggleHeart, setToggleHeart] = useState(false)
    
  // const changeColor = useCallback(() =>{
  //  setToggleHeart(!toggleHeart)
  // },[])
  const handleClick = () => {
    if (isClicked) {
      setLikes(true);
      // alert("Pet Saved!")
    } else {
      setLikes(false);
    }
    setIsClicked(!isClicked);
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
      <button className='heart'onClick={handleClick} style={{backgroundColor:likes?"red":"white"}}>
      {/* <span className="likes-counter">{ `Like | ${likes}` }</span> */}
      {/* <label>&#9829</label> */} 
    </button>
        <button onClick={handlePetCard} >See More</button>
        
    </div>
    </div>
    
  )
}

export default PetCard