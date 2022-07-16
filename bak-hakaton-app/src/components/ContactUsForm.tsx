import React from "react";
import { Row } from "react-bootstrap";
import styles from "../styles/contact.module.scss";
import InputLabelFormComponent from "./InputLabelFormComponent";
import SubmitButton from "./SubmitButton";
type Props = {};

export default function ContactUsForm({}: Props) {
  return (
    <div
      className={`${styles.formStyle}
      w-75`}
    >
      <h2 className="text-center mb-3">Contact</h2>
      <p className="text-center mb-4">
        In need of a logistics solution? Contact our team with sending an email
        via the form below or by phone:
        <br />
        Atanas Boshkov
        <br />
        +389 78 788 432
      </p>
      <Row className="justify-content-around">
        <div className="col-6">
          <InputLabelFormComponent
            label={"Full name"}
            type={"text"}
            placeholder={"Full name"}
          />
        </div>
        <div className="col-6">
          <InputLabelFormComponent
            label={"Email"}
            type={"email"}
            placeholder={"ex@email.com"}
          />
        </div>
      </Row>
      <Row className="justify-content-around">
        <div className="col-6">
          <InputLabelFormComponent
            label={"Company Name"}
            type={"text"}
            placeholder={"Company Name"}
          />
        </div>
        <div className="col-6">
          <InputLabelFormComponent
            label={"Phone Number"}
            type={"phone"}
            placeholder={"+389 78 899 871"}
          />
        </div>
      </Row>
      <div className="w-100">
        <textarea
          id=""
          name="w3review"
          placeholder="Message.."
          rows={7}
          className="w-100 mt-4 p-3"
        ></textarea>
      </div>
      <SubmitButton />
      <p className="d-block text-center mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, odio!
      </p>
    </div>
  );
}
