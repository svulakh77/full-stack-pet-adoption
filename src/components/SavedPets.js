import React,{useContext,useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import SomeContext from '../Context'
import axios from 'axios'


function SavedPets() {
    const navigate = useNavigate()
    const [token]=useState(localStorage.getItem('token')||'');
    const {pets,setPets}=useContext(SomeContext)
    useEffect(()=>{
        axios.get('http://localhost:8080/pets',
          {withCredentials: true}
        ).then((res)=>{
          setPets(res.data)
          
        })
      },[token])
    const handleMyPets = ()=>{
        navigate("/myPets")
    }
  return (
    <div> <button className="button-81" onClick={handleMyPets}>Pets</button>
    <button className="button-81" >Saved Pets</button></div>
  )
}

export default SavedPets