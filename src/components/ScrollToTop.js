import { useEffect, useState } from "react";

function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showTopBtn ? (
        <button onClick={goToTop} className="toTopBtnANDCartBtn">
          TOP
        </button>
      ) : null}
    </>
  );
}
export default ScrollToTop;
