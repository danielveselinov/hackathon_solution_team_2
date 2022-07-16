import React from "react";
import { Row } from "react-bootstrap";
import InputLabelFormComponent from "./InputLabelFormComponent";
import styles from "../styles/contact.module.scss";
import SubmitButton from "./SubmitButton";
type Props = {};

export default function CareersForm({}: Props) {
  return (
    <div>
      <div
        className={`${styles.formStyle}
      w-75`}
      >
        <h2 className="text-center mb-3">Contact</h2>
        <p className="text-center mb-4">
          Interested in joining the BAK Logistics’ team - send us a message and
          our HR representative will get in touch.{" "}
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
    </div>
  );
}
