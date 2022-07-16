// icons
import { ImFacebook2, ImLinkedin } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";

// styles
import styles from "../styles/footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-links"]}>
        <a href="#">Privacy Policy</a>
        <a href="#">Help & Support</a>
      </div>
      <div className={styles["footer-logo-container"]}>
        <h1>BAK</h1>
      </div>
      <div className={styles["footer-media-links"]}>
        <a href="" className={styles["media-link"]}>
          <ImFacebook2 />
        </a>
        <a href="" className={styles["media-link"]}>
          <ImLinkedin />
        </a>
        <a href="" className={styles["media-link"]}>
          <AiFillInstagram />
        </a>
        <a href="" className={styles["media-link"]}>
          <FaTwitterSquare />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
