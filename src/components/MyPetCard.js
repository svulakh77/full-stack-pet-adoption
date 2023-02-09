
import React,{useState,useContext} from 'react'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import SaveButton from './SaveButton';
import HeartButton from './HeartButton'; 
import NegativeMessage from './NegativeMessage';
import SomeContext from '../Context';
function MyPetCard({pet}) {
    const navigate = useNavigate();
    const [likes, setLikes] = useState(false);
   const [isClicked, setIsClicked] = useState(false);
   const [loaded, setLoaded] = useState(false);
   const token = localStorage.getItem("token");
   const {pets,setPets,currentUser,admin}=useContext(SomeContext)
   
   useEffect(() => {
    console.log(pet.ownerId)
    if (currentUser.id === pet.ownerId) {
    axios.get(`http://localhost:8080/pets/user/${pet.ownerId}`,
      {withCredentials: true}
    ).then((res)=>{
      setPets(res.data)
      console.log(res.data)
      console.log(currentUser)
      console.log(admin)
    })
    setLoaded(true)
  } 
   
   }, [token])
   useEffect(()=>{
    if (currentUser.id !== pet.ownerId){
      <NegativeMessage/>
    }
   })
 
   
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
        navigate(`/petPage/${pet.id}`)
   }
   return (
     <>
     {loaded && (
      <div className='petCard'>
      <div className='petInfo'>
        <img src={pet.pic} className="petPic" alt="Pet Pic Holder"></img>
      <h3>Name:{pet.petName}</h3>
      <h3>Adoption Status:{pet.adoptionStatus}</h3>
   

      {/* <span className="likes-counter">{ `Like | ${likes}` }</span> */}
      {/* <label>&#9829</label> */} 
      <div className='petCardButtons'>
      {/* <button
        className={likes?"heart":"button-81"}
        style={{ backgroundColor: "red", color:"white" }}
        onClick={handleClick}
      >{likes? "":"Save"}</button> */}
        <button onClick={handlePetCard} className="button-81" >See More</button>
        </div>
    </div>
    </div>
     )}
     </>
     
   )
 
}

export default MyPetCard