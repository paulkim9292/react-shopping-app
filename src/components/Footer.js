import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <button
          onClick={() =>
            window.open(
              "https://github.com/paulkim9292/react-shopping-app",
              "_blank"
            )
          }
        >
          <FontAwesomeIcon className={styles.link} icon={faGithub} />
        </button>
        <button>
          <FontAwesomeIcon className={styles.link} icon={faInstagram} />
        </button>
        <button>
          <FontAwesomeIcon className={styles.link} icon={faFacebook} />
        </button>
      </div>
      <p>© 2022. Kim Sungwoo. All rights reserved.</p>
    </div>
  );
}

export default Footer;
