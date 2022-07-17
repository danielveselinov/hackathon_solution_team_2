import React, { useState } from "react";
import { Row } from "react-bootstrap";
import styles from "../styles/contact.module.scss";
import style from "../styles/general.module.scss";
import InputLabelFormComponent from "./InputLabelFormComponent";
import SubmitButton from "./SubmitButton";
type Props = {};

const DEFAULT_FORM_VALUES = {
  name: "",
  email: "",
  message: "",
  companyName: "",
  phone: "",
};

export default function ContactUsForm({}: Props) {
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
      inputsValue.message === "" ||
      inputsValue.companyName === "" ||
      inputsValue.phone === ""
    )
      return;

    const data = {
      full_name: inputsValue.name,
      email: inputsValue.email,
      company_name: inputsValue.companyName,
      phone_number: inputsValue.phone,
      message: inputsValue.message,
    };

    const errorHandling = {
      message: "The full name field is required. (and 4 more errors)",
    };

    const errors = {
      full_name: ["The full name field is required."],
      email: ["The email field is required."],
      company_name: ["The company name field is required."],
      phone_number: ["The phone number field is required."],
      message: ["The message field is required."],
    };

    fetch("https://5884-46-217-247-67.eu.ngrok.io/api/contact/business", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => console.log(res))
      .catch((error) => {
        console.log({ ...errorHandling, ...errors });
      });

    setInputsValue(DEFAULT_FORM_VALUES);
  };

  return (
    <form
      onSubmit={submitHandler}
      className={`${styles.formStyle}
      w-75`}
    >
      <h2 className={style["primary-title"]}>Contact</h2>
      <p className="text-center mb-4">
        In need of a logistics solution? Contact our team with sending an email
        via the form below or by phone:
        <br />
        Atanas Boshkov
        <br />
        +389 78 788 432
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
      <Row className="justify-content-around">
        <div className="col-lg-6 col-md-12 mb-3">
          <InputLabelFormComponent
            label={"Company Name"}
            type={"text"}
            placeholder={"Company Name"}
            name={"companyName"}
            handler={setInputsValueFunc}
            value={inputsValue.companyName}
          />
        </div>
        <div className="col-lg-6 col-md-12 mb-3">
          <InputLabelFormComponent
            label={"Phone Number"}
            type={"phone"}
            placeholder={"+389 78 899 871"}
            name={"phone"}
            handler={setInputsValueFunc}
            value={inputsValue.phone}
          />
        </div>
      </Row>
      <div className="w-100">
        <textarea
          id=""
          placeholder="Message.."
          rows={7}
          className="w-100 mt-4 p-3"
          name={"message"}
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
