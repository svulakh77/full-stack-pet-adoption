import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import ModalBody from "react-bootstrap/ModalBody";
import SomeContext from "../Context";
import { Button, ModalHeader } from "react-bootstrap";

function OpenModal() {
  const { show, onModalSubmit } = useContext(SomeContext);
  return (
    <div className="modal">
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        className="modal"
        onHide={onModalSubmit}
      >
        <ModalBody className="modalContent">
          {" "}
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={onModalSubmit}
          ></button>
          <Link className="modalLink" to={"/signup"}>
            <h1> Signup </h1>
          </Link>
          <Link className="modalLink" to={"/login"}>
            Already have an account? Login here
          </Link>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default OpenModal;
