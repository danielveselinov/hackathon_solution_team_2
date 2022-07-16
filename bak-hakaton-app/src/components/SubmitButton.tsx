import React from "react";
import styles from "../styles/submitBtnStyles.module.scss";
type Props = {};

export default function SubmitButon({}: Props) {
  return (
    <div className="text-center">
      <button className={styles.submitBtnStyles} type="submit">
        Send
      </button>
    </div>
  );
}
