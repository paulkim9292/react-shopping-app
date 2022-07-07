import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { mouseCatFalse } from "../store/store";

function About() {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(mouseCatFalse());
    };
  }, []);
  return (
    <div>
      <p>This is </p>
    </div>
  );
}

export default About;
