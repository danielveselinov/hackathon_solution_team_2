// icons
import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";

// styles
import styles from "../styles/footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-links-container"]}>
        <a href="#">Privacy Policy</a>
        <a href="#">Help & Support</a>
      </div>
      <div className={styles["footer-logo-container"]}>
        <h1>BAK</h1>
      </div>
      <div className={styles["footer-media-links-container"]}>
        <a href="" className={styles["footer-media-link"]}>
          <AiFillFacebook />
        </a>
        <a href="" className={styles["footer-media-link"]}>
          <AiFillLinkedin />
        </a>
        <a href="" className={styles["footer-media-link"]}>
          <AiFillInstagram />
        </a>
        <a href="" className={styles["footer-media-link"]}>
          <AiFillTwitterSquare />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
