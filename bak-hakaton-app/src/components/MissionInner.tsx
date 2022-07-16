import Image from "next/image";

// styles
import styles from "../styles/mission-inner.module.scss";

export interface MissionType {
  id: string;
  title: string;
  text: string;
  image: string;
}

interface Props {
  mission: MissionType;
}

const MissionInner: React.FC<Props> = ({ mission }) => {
  const { image, text, title } = mission;
  return (
    <div className={styles["mission-inner"]}>
      <h2 className={styles["mission-inner-title"]}>{title}</h2>
      <div className={styles["mission-inner-content"]}>
        <div className={styles["mission-inner-desc"]}>
          <p>{text}</p>
        </div>
        <div className={styles["mission-inner-img-container"]}>
          <img
            src={`https://5884-46-217-247-67.eu.ngrok.io/storage/${image}`}
            alt={title}
          />
        </div>
      </div>
    </div>
  );
};

export default MissionInner;
