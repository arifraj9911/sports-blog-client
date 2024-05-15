import { useEffect, useState } from "react";
import "./ScrollButton.css";
import { BiSolidUpArrow } from "react-icons/bi";
import { animateScroll as scroll } from "react-scroll";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button when the user scrolls down
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500, // Adjust duration as needed
      smooth: "easeInOutQuad", // Use easing function for smooth scrolling
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="scroll-to-top-button show text-xl"
          onClick={scrollToTop}
        >
          <BiSolidUpArrow />
        </button>
      )}
    </>
  );
};

export default ScrollButton;
