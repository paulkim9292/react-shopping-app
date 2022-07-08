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
      <h1>안녕하세요!</h1>
      <h4>
        이 웹사이트는 제가 지금까지 배운 프론트엔드 기술들(HTML, CSS,
        JavaScript, React, 등)을 연습하고자 많든 프로젝트입니다.
      </h4>
      <h4>
        ReactJS를 활용하여 만들었으며 자세한 개발과정과 사용 기술들은 제{" "}
        <button
          onClick={() =>
            window.open(
              "https://github.com/paulkim9292/react-shopping-app",
              "_blank"
            )
          }
        >
          GITHUB
        </button>{" "}
        에 적어놓았습니다.
      </h4>
    </div>
  );
}

export default About;
