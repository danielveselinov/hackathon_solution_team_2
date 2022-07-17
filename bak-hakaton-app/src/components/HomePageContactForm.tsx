import React, { useState } from "react";
import { Row } from "react-bootstrap";
import styles from "../styles/contact.module.scss";
import InputLabelFormComponent from "./InputLabelFormComponent";
import SubmitButton from "./SubmitButton";
type Props = {};

const DEFAULT_FORM_VALUES = {
  name: "",
  email: "",
  message: "",
};

export default function ContactForm({}: Props) {
  const [inputsValue, setInputsValue] = useState(DEFAULT_FORM_VALUES);

  const setInputsValueFunc = (e: React.FormEvent) => {
    const name = (e.target as HTMLInputElement).name;
    const value = (e.target as HTMLInputElement).value;

    setInputsValue({ ...inputsValue, [name]: value });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      inputsValue.name === "" ||
      inputsValue.email === "" ||
      inputsValue.message === ""
    )
      return;

    setInputsValue(DEFAULT_FORM_VALUES);
  };

  return (
    <form
      onSubmit={submitHandler}
      className={`${styles.formStyle}
      w-75`}
    >
      <h2 className="text-center mb-3">Contact</h2>
      <p className="text-center mb-4">
        Reach out to us for any questions or inquires
      </p>
      <Row className="justify-content-around">
        <div className="col-lg-6 col-md-12 mb-3">
          <InputLabelFormComponent
            label={"Full name"}
            type={"text"}
            placeholder={"Full name"}
            name={"name"}
            handler={setInputsValueFunc}
            value={inputsValue.name}
          />
        </div>
        <div className="col-lg-6 col-md-12 mb-3">
          <InputLabelFormComponent
            label={"Email"}
            type={"email"}
            placeholder={"ex@email.com"}
            name={"email"}
            handler={setInputsValueFunc}
            value={inputsValue.email}
          />
        </div>
      </Row>

      <div className="w-100">
        <textarea
          id=""
          placeholder="Message.."
          rows={7}
          className="w-100 mt-4 p-3"
          name="message"
          onChange={setInputsValueFunc}
          value={inputsValue.message}
        ></textarea>
      </div>
      <SubmitButton />
      <p className="d-block text-center mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, odio!
      </p>
    </form>
  );
}
