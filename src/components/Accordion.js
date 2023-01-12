import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(
    eventKey
    // , () =>
    //   console.log('totally custom!'),
  );

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
function ChildToggle({ eventKey, children }) {
  const childClick = useAccordionButton(eventKey, () => {
    console.log("kiddy click");
    return (
      <button
        type="button"
        //   className='accordionButton'
        onClick={childClick}
      >
        {children}
      </button>
    );
  });
}

export default function Dropdown() {
  return (
    <div>
      <Accordion>
        <Card>
          <CustomToggle as={Card.Header} eventKey="0">
            Basic Search
          </CustomToggle>

          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <h5>Pet Type:</h5>
              <form className="basicForm">
                <div className="basicInput">
                  <label className="basicPet" htmlFor="dog">
                    {" "}
                    Dog
                  </label>
                  <input
                    className="basicPet"
                    type="checkbox"
                    id="dog"
                    name="dog"
                    value="dog"
                  />
                </div>
                <div className="basicInput">
                  <label className="basicPet" htmlFor="cat">
                    {" "}
                    Cat
                  </label>
                  <input
                    className="basicPet"
                    type="checkbox"
                    id="cat"
                    name="cat"
                    value="Cat"
                  />
                </div>
                <div className="basicInput">
                  <label className="basicPet" htmlFor="bird">
                    {" "}
                    Bird
                  </label>
                  <input
                    className="basicPet"
                    type="checkbox"
                    id="bird"
                    name="bird"
                    value="Bird"
                  />
                </div>
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
                <div className="advancedBox">
                  <h5>Pet Type:</h5>
                  <form className="basicForm">
                    <div className="basicInput">
                      <label className="basicPet" htmlFor="dog">
                        {" "}
                        Dog
                      </label>
                      <input
                        className="basicPet"
                        type="checkbox"
                        id="dog"
                        name="dog"
                        value="dog"
                      />
                    </div>
                    <div className="basicInput">
                      <label className="basicPet" htmlFor="cat">
                        {" "}
                        Cat
                      </label>
                      <input
                        className="basicPet"
                        type="checkbox"
                        id="cat"
                        name="cat"
                        value="Cat"
                      />
                    </div>
                    <div className="basicInput">
                      <label className="basicPet" htmlFor="bird">
                        {" "}
                        Bird
                      </label>
                      <input
                        className="basicPet"
                        type="checkbox"
                        id="bird"
                        name="bird"
                        value="Bird"
                      />
                    </div>
                  </form>
                </div>
                <div className="advancedBox">
                  <h5>Adoption Status:</h5>
                  <form className="basicForm">
                    <div className="basicInput">
                      <label className="basicPet" htmlFor="availible">
                        {" "}
                        Availible
                      </label>
                      <input
                        className="basicPet"
                        type="checkbox"
                        id="availible"
                        name="availible"
                        value="availible"
                      />
                    </div>
                    <div className="basicInput">
                      <label className="basicPet" htmlFor="fostered">
                        {" "}
                        Fostered
                      </label>
                      <input
                        className="basicPet"
                        type="checkbox"
                        id="fostered"
                        name="fostered"
                        value="Fostered"
                      />
                    </div>
                    <div className="basicInput">
                      <label className="basicPet" htmlFor="Adopted">
                        {" "}
                        Adopted
                      </label>
                      <input
                        className="basicPet"
                        type="checkbox"
                        id="adopted"
                        name="adopted"
                        value="Adopted"
                      />
                    </div>
                  </form>
                </div>
                <div className="advancedBox">
                  <h5>Pet Height:</h5>
                  <form className="basicForm">
                    <div className="basicInput">
                      <label className="basicPet" htmlFor="small">
                        {" "}
                        Short
                      </label>
                      <input
                        className="basicPet"
                        type="checkbox"
                        id="short"
                        name="short"
                        value="short"
                      />
                    </div>
                    <div className="basicInput">
                      <label className="basicPet" htmlFor="average">
                        {" "}
                        Average
                      </label>
                      <input
                        className="basicPet"
                        type="checkbox"
                        id="average"
                        name="average"
                        value="Average"
                      />
                    </div>
                    <div className="basicInput">
                      <label className="basicPet" htmlFor="tall">
                        {" "}
                        Tall
                      </label>
                      <input
                        className="basicPet"
                        type="checkbox"
                        id="tall"
                        name="tall"
                        value="Tall"
                      />
                    </div>
                  </form>
                </div>
                <div className="advancedBox">
                  <h5>Pet Weight:</h5>
                  <form className="basicForm">
                    <div className="basicInput">
                      <label className="basicPet" htmlFor="light">
                        {" "}
                        Light
                      </label>
                      <input
                        className="basicPet"
                        type="checkbox"
                        id="light"
                        name="light"
                        value="light"
                      />
                    </div>
                    <div className="basicInput">
                      <label className="basicPet" htmlFor="medium">
                        {" "}
                        Medium
                      </label>
                      <input
                        className="basicPet"
                        type="checkbox"
                        id="medium"
                        name="medium"
                        value="Medium"
                      />
                    </div>
                    <div className="basicInput">
                      <label className="basicPet" htmlFor="heavy">
                        {" "}
                        Heavy
                      </label>
                      <input
                        className="basicPet"
                        type="checkbox"
                        id="heavy"
                        name="heavy"
                        value="heavy"
                      />
                    </div>
                  </form>
                </div>
                <div className="advancedBox">
                  <h5>Pet Name:</h5>
                  <input
                    className="basicPet"
                    type="search"
                    placeholder="Search By Pet Name"
                  />
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

// export default DropDown
