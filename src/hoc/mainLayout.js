import React from "react";

import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const mainLayout = (props) => {
  return (
    <>
      <Container className="mt-5">
        {props.children}
        <ToastContainer />
      </Container>
    </>
  );
};

export default mainLayout;
