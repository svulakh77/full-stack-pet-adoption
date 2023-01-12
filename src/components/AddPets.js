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
  } = useContext(SomeContext);
  const[color,setColor]=useState("")

  const handleType = (e) => {
    setType(e.target.value);
  };
  const handlePetName = (e) => {
    setPetName(e.target.value);
  };
  const handlePic = (e) => {
    setPic(e.target.value);
  };
  const handleHeight = (e) => {
    setHeight(e.target.value);
  };
  const handleWeight = (e) => {
    setWeight(e.target.value);
  };
  const handleColor = (e)=>{
    setColor(e.target.value)
  };
  const handlePetBio = (e) => {
    setPetBio(e.target.value);
  };
  const handleDietaryRestrictions = (e) => {
    setDietaryRestrictions(e.target.value);
  };
  const handleBreed = (e) => {
    setBreed(e.target.value);
  };


  const handlePet = async (e) => {
    try {
      e.preventDefault();
      const addedPet = {
        type,
        petName,
        pic,
        height,
        weight,
        color,
        petBio,
        hypoallergenic,
        dietaryRestrictions,
        breed,
      };
      console.log(addedPet)
      const token = localStorage.getItem('token')
      const res = await axios.post(
        "http://localhost:8080/pets/newPet",
        addedPet,
        {headers: {authorization: `Bearer ${token}`}}
      );
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
                  onChange={handleType}
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
                  onChange={handlePetName}
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
                  name="pic"
                  type="file"
                />
              </InputGroup>
        
          <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Pet Height:</InputGroup.Text>
                <Form.Control
                  placeholder="Pet Height"
                  aria-label="Pet Height"
                  aria-describedby="basic-addon1"
                  onChange={handleHeight}
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
                  onChange={handleWeight}
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
                  onChange={handleColor}
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
                  onChange={handlePetBio}
                  name="petBio"
                  as="textarea"
                />
              </InputGroup>
        
        <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Check if Hypoallergenic:</InputGroup.Text>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" className='form-check-label' onClick={setHypoallergenic(true)}/>
      </Form.Group>
              </InputGroup>
       
        <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Pet Dietary Restrictions:</InputGroup.Text>
                <Form.Control
                  placeholder="Pet Dietary Restrictions"
                  aria-label="Pet Color"
                  aria-describedby="basic-addon1"
                  onChange={handleDietaryRestrictions}
                  name="Dietary Restrictions"
                  type="text"
                />
              </InputGroup>
       
<InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Pet Breed:</InputGroup.Text>
                <Form.Control
                  placeholder="Pet Breed"
                  aria-label="Pet Breed"
                  aria-describedby="basic-addon1"
                  onChange={handleBreed}
                  name="breed"
                  type="text"
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
