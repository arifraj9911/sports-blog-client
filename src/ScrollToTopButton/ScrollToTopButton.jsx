import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import "./ScrollToTopButton.css";
import { BiSolidUpArrow } from "react-icons/bi";
const ScrollToTopButton = () => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuad",
    });
  };

  return (
    <>
      {isVisible && (
        <button onClick={scrollTop} className="scroll-top-btn show">
         <BiSolidUpArrow />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
