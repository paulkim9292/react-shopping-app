import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { mouseCatFalse } from "../store/store";
import styles from "./About.module.css";

function About() {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(mouseCatFalse());
    };
  }, []);
  return (
    <div className={styles.about}>
      <p>This is </p>
    </div>
  );
}

export default About;
