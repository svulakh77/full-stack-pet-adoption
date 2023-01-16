import React,{useState,useContext} from 'react'
import axios from 'axios'
import SomeContext from '../Context';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PetPageChild from './PetPageChild';

function PetPage() {
    const [token]=useState(localStorage.getItem('token')||'');
    const [pet,setPet]=useState("")
    const {id} = useParams()
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
      axios.get(`http://localhost:8080/pets/${id}`,{
        headers:{
          authorization:`Bearer ${JSON.stringify(token)}`,
        }
      }).then((res)=>{
        setPet(res.data)
        console.log(res.data)
        console.log(pet)
        setLoading(false)
      })
    },[token])
  return (
    <div className='petPage'>
        {/* <h3>Name:{pet.petName}</h3> */}
        {!loading && pet.map(onePet=>(<div><PetPageChild
        onePet = {onePet}
        
/>
        </div>))}
    </div>
  )
}

export default PetPage