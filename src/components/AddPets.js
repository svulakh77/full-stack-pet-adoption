import React, { useContext, useState } from "react";
import SomeContext from "../Context";
import { Form, InputGroup, Modal, Nav } from 'react-bootstrap';
import axios from "axios";

function AddPets() {
  const {
    type,
    setType,
    petName,
    setPetName,
    pic,
    setPic,
    height,
    setHeight,
    weight,
    setWeight,
    petBio,
    setPetBio,
    hypoallergenic,
    setHypoallergenic,
    dietaryRestrictions,
    setDietaryRestrictions,
    breed,
    setBreed,
    addPet
  } = useContext(SomeContext);
  // const[color,setColor]=useState("")
  const [petInfo, setPetInfo]=useState({type:'',petName:'', height:0,weight:0,color:'',petBio:'',hypoallergenic:0,dietaryRestrictions:'',breed:''})
const handlePetInfo = (e)=>{
  setPetInfo({...petInfo,[e.target.id]:e.target.value});
}
const handlePic = (e) => {
  setPic(e.target.files[0]);
};


  const handlePet = async (e) => {
    e.preventDefault();
    try {
      const addedPet = new FormData()
      addedPet.append('type',petInfo.type);
      addedPet.append('petName',petInfo.petName);
      addedPet.append('pic',pic);
      addedPet.append('height',petInfo.height);
      addedPet.append('weight',petInfo.weight);
      addedPet.append('color',petInfo.color);
      addedPet.append('petBio',petInfo.petBio);
      addedPet.append('hypoallergenic',petInfo.hypoallergenic);
      addedPet.append('dietaryRestrictions',petInfo.dietaryRestrictions);
      addedPet.append('breed',petInfo.breed)
      
      console.log(addedPet)
      const token = localStorage.getItem('token')
      const res = await axios.post(
        "http://localhost:8080/pets/newPet",
        addedPet,
        {headers: {authorization: `Bearer ${token}`}}
      );
      addPet(res.data)
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
    <div className='addPetContainer'>
    <div className='addPet'>
      <form className="addPetForm" onSubmit={handlePet}>
       
        <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Pet Type:</InputGroup.Text>
                <Form.Control
                  placeholder="Pet Type"
                  aria-label="Pet Type"
                  aria-describedby="basic-addon1"
                  onChange={handlePetInfo}
                  value = {petInfo.type}
                  id="type"
                  name="type"
                  type="text"
                />
              </InputGroup>
      
        <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Pet Name:</InputGroup.Text>
                <Form.Control
                  placeholder="Pet Name"
                  aria-label="Pet Name"
                  aria-describedby="basic-addon1"
                  onChange={handlePetInfo}
                  value = {petInfo.petName}
                  id='petName'
                  name="name"
                  type="text"
                />
              </InputGroup>
        
         <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Pet Picture:</InputGroup.Text>
                <Form.Control
                  placeholder="Pet Picture"
                  aria-label="Pet Picture"
                  aria-describedby="basic-addon1"
                  onChange={handlePic}
                  accept='img/*'
                  name="pic"
                  type="file"
                  className='petPic'
                />
              </InputGroup>
        
          <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Pet Height:</InputGroup.Text>
                <Form.Control
                  placeholder="Pet Height"
                  aria-label="Pet Height"
                  aria-describedby="basic-addon1"
                  onChange={handlePetInfo}
                  id='height'
                  value = {petInfo.height}
                  name="height"
                  type="text"
                />
              </InputGroup>
     
         <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Pet Weight:</InputGroup.Text>
                <Form.Control
                  placeholder="Pet Weight"
                  aria-label="Pet Weight"
                  aria-describedby="basic-addon1"
                  onChange={handlePetInfo}
                  value={petInfo.weight}
                  id='weight'
                  name="weight"
                  type="text"
                />
              </InputGroup>
        <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Pet Color:</InputGroup.Text>
                <Form.Control
                  placeholder="Pet Color"
                  aria-label="Pet Color"
                  aria-describedby="basic-addon1"
                  onChange={handlePetInfo}
                  value={petInfo.color}
                  id='color'
                  name="color"
                  type="text"
                />
              </InputGroup>
     
        <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Pet Bio:</InputGroup.Text>
                <Form.Control
                  placeholder="Pet Bio"
                  aria-label="Pet Bio:"
                  aria-describedby="basic-addon1"
                  onChange={handlePetInfo}
                  value={petInfo.petBio}
                  id='petBio'
                  name="petBio"
                  as="textarea"
                />
              </InputGroup>
        
        <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Check if Hypoallergenic:</InputGroup.Text>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" id='hypoallergenic' className='form-check-label' onClick={handlePetInfo} value={petInfo.hypoallergenic}/>
      </Form.Group>
              </InputGroup>
       
        <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Pet Dietary Restrictions:</InputGroup.Text>
                <Form.Control
                  placeholder="Pet Dietary Restrictions"
                  aria-label="Pet Color"
                  aria-describedby="basic-addon1"
                  onChange={handlePetInfo}
                  value={petInfo.dietaryRestrictions}
                  name="Dietary Restrictions"
                  type="text"
                  id='dietaryRestrictions'
                />
              </InputGroup>
       
<InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Pet Breed:</InputGroup.Text>
                <Form.Control
                  placeholder="Pet Breed"
                  aria-label="Pet Breed"
                  aria-describedby="basic-addon1"
                  onChange={handlePetInfo}
                  value={petInfo.breed}
                  name="breed"
                  type="text"
                  id='breed'
                />
              </InputGroup>
        <button className="profileButton"  type='submit'>
          Add Pet
        </button>
      </form>
    </div>
    </div>
    </>
  );
}

export default AddPets;
