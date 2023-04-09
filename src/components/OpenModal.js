import React, { useContext } from "react";
import SomeContext from "../Context";
import { Modal, Text, Link, Row, Spacer } from "@nextui-org/react";

function OpenModal() {
  const { onModalSubmit, modal, handleModal } = useContext(SomeContext);
  return (
    <div className="modal">
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={modal}
        onClose={handleModal}
      >
        <Modal.Header>
          <Text id="modal-title" size={24}>
            Welcome to
            <Text
              b
              css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
                marginInlineStart: "$xs"
              }}
              size={24}
            >
            Pet Adoption 
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Link auto flat block color="secondary" href="/login">
          <Row>
              <Spacer x="6.7" />
            Log In
            <Spacer x="6.7" />
            </Row>
          </Link>
          <Link auto block href="/signup">
            <Row>
            <Spacer x="6.5" />
            Sign Up
            <Spacer x="6.5" />
            </Row>
          </Link>
        </Modal.Body>
      </Modal>

    </div>
  );
}

export default OpenModal;
