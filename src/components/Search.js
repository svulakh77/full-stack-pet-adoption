import React ,{useState} from 'react'
import SearchItem from './SearchItem';
import Example from './Accordion';
import axios from 'axios';

function Search() {
  
const handleBasicSearch = async()=>{
  try{
  const res = await axios.get(`http://localhost:8080/pets/search/basic`)
  console.log(res.data)
  }catch(err){
    console.log(err)
  }
}
 
   
   return <div>
   
  <Example/>
  
   
   
   
   </div>
   
   
   };


export default Search