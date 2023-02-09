import React ,{useState,useEffect} from 'react'
import DropDown from './Accordion';
import axios from 'axios';

function Search() {
  const[basics,setBasics]=useState([])
  useEffect(()=>{
    axios.get(`http://localhost:8080/pets/search/basic`).then((res)=>{
      setBasics(res.data)
      console.log(basics)
    })
  },[])

 
   
   return <div className="searchList">
  <DropDown/>
  
   
   
   
   </div>
   
   
   };


export default Search