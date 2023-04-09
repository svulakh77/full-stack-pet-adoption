import React, { useEffect, useState,useContext } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import axios from "axios";
import PetCard from "./PetCard";
import SomeContext from "../Context";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <button
      type="button"
      className="accordionButton"
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export default function Dropdown() {
  //   console.log(basic);
  const [petType, setPetType] = useState({});
  const [petsData, setPetsData] = useState({});
  const{pets, setPets} = useContext(SomeContext)

  const handleChange = (e) => {
    setPets({ ...pets, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleBasicSearch = async (e) => {
    e.preventDefault();
    console.log(pets);
    try {
      const res = await axios.get(`http://localhost:8080/pets/search/basic`, {
        params: { type: pets.type },
      });
      setPets(res.data)
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="accordionData">
      <Accordion>
        <Card>
          <CustomToggle as={Card.Header} eventKey="0">
            Basic Search
          </CustomToggle>

          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <h5>Pet Type:</h5>
              <form className="basicForm" onSubmit={handleBasicSearch}>
                <div className="basicInput">
                  <label className="basicPet" htmlFor="dog">
                    {" "}
                    Dog
                  </label>
                  <input
                    onChange={handleChange}
                    className="basicPet"
                    type="radio"
                    id="dog"
                    name="type"
                    value="dog"
                  />
                </div>
                <div className="basicInput">
                  <label className="basicPet" htmlFor="cat">
                    {" "}
                    Cat
                  </label>
                  <input
                    onChange={handleChange}
                    className="basicPet"
                    type="radio"
                    id="cat"
                    name="type"
                    value="Cat"
                  />
                </div>
                <div className="basicInput">
                  <label className="basicPet" htmlFor="bird">
                    {" "}
                    Bird
                  </label>
                  <input
                    onChange={handleChange}
                    className="basicPet"
                    type="radio"
                    id="bird"
                    name="type"
                    value="Bird"
                  />
                </div>
                <button className="button-9" role="button" type="submit">
                  Basic Search
                </button>
              </form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card>
          <CustomToggle as={Card.Header} eventKey="1">
            Advanced Search
          </CustomToggle>

          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <div className="advancedSearch">
                <h5>Pet Type:</h5>
                <form className="basicForm" >
                  <div className="basicInput">
                    <label className="basicPet" htmlFor="dog">
                      {" "}
                      Dog
                    </label>
                    <input
                      className="basicPet"
                      type="radio"
                      id="dog"
                      name="type"
                      value="dog"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="basicInput">
                    <label className="basicPet" htmlFor="cat">
                      {" "}
                      Cat
                    </label>
                    <input
                      className="basicPet"
                      type="radio"
                      id="cat"
                      name="type"
                      value="Cat"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="basicInput">
                    <label className="basicPet" htmlFor="bird">
                      {" "}
                      Bird
                    </label>
                    <input
                      className="basicPet"
                      type="radio"
                      id="bird"
                      name="type"
                      value="Bird"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="advancedBox">
                    <h5>Adoption Status:</h5>
                    <div className="basicInput">
                      <label className="basicPet" htmlFor="availible">
                        {" "}
                        Availible
                      </label>
                      <input
                        className="basicPet"
                        type="radio"
                        id="availible"
                        name="adoptionStatus"
                        value="availible"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="basicInput">
                      <label className="basicPet" htmlFor="fostered">
                        {" "}
                        Fostered
                      </label>
                      <input
                        className="basicPet"
                        type="radio"
                        id="fostered"
                        name="adoptionStatus"
                        value="Fostered"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="basicInput">
                      <label className="basicPet" htmlFor="Adopted">
                        {" "}
                        Adopted
                      </label>
                      <input
                        className="basicPet"
                        type="radio"
                        id="adopted"
                        name="adoptionStatus"
                        value="Adopted"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="advancedBox">
                    <h5>Pet Height:</h5>
                    <div className="basicInput">
                      <label className="basicPet" htmlFor="small">
                        {" "}
                        Short
                      </label>
                      <input
                        className="basicPet"
                        type="radio"
                        id="short"
                        name="height"
                        value="short"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="basicInput">
                      <label className="basicPet" htmlFor="average">
                        {" "}
                        Average
                      </label>
                      <input
                        className="basicPet"
                        type="radio"
                        id="average"
                        name="height"
                        value="Average"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="basicInput">
                      <label className="basicPet" htmlFor="tall">
                        {" "}
                        Tall
                      </label>
                      <input
                        className="basicPet"
                        type="radio"
                        id="tall"
                        name="height"
                        value="Tall"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="advancedBox">
                    <h5>Pet Weight:</h5>
                    <div className="basicInput">
                      <label className="basicPet" htmlFor="light">
                        {" "}
                        Light
                      </label>
                      <input
                        className="basicPet"
                        type="radio"
                        id="light"
                        name="weight"
                        value="light"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="basicInput">
                      <label className="basicPet" htmlFor="medium">
                        {" "}
                        Medium
                      </label>
                      <input
                        className="basicPet"
                        type="radio"
                        id="medium"
                        name="weight"
                        value="Medium"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="basicInput">
                      <label className="basicPet" htmlFor="heavy">
                        {" "}
                        Heavy
                      </label>
                      <input
                        className="basicPet"
                        type="radio"
                        id="heavy"
                        name="weight"
                        value="heavy"
                        onChange={handleChange}
                      />
                    </div>
                    <button className="button-9" role="button">
                      Advanced Search
                    </button>
                  </div>
                  <div className="advancedBox">
                    <h5>Pet Name:</h5>
                    <input
                      className="basicPet"
                      type="search"
                      placeholder="Search By Pet Name"
                      name="petName"
                      onChange={handleChange}
                    />
                  </div>
                </form>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <div className="petList">

        {pets.length>0 && pets.map((pet) => (
          <PetCard pet={pet} />
        ))}
      </div>
    </div>
  );
}

// export default DropDown
