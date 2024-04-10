import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";

import { addNewsletter, removeNewsletter } from "../../store/actions";
import { showToast } from "../includes/toast";

const Newsletter = () => {
  const userData = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const inputText = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const textValue = inputText.current.value;

    dispatch(addNewsletter({ email: textValue }));
  };

  useEffect(() => {
    if (userData.newletter) {
      if (userData.newletter === "added") {
        showToast("SUCCESS", "Added Successfully");
        inputText.current.value = "";
      } else {
        showToast("ERROR", "already exist");
        inputText.current.value = "";
      }
    }
  }, [userData]);

  useEffect(() => {
    return () => {
      dispatch(removeNewsletter());
    };
  }, []);

  return (
    <>
      <div className="newsletter_container mb-5">
        <h1>Join Our Newsletter</h1>
        <div className="form">
          <Form className="mt-4" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Enter Email"
                name="email"
                ref={inputText}
              />
              <Button variant="dark mt-2" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
