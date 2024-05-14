import { useEffect, useState } from "react";
import "./ScrollButton.css";
import { GoArrowUp } from "react-icons/go";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-btn ${
        isVisible ? "show" : "hide"
      } flex items-center gap-1`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span>Top</span>
      <span>
        <GoArrowUp />
      </span>
    </button>
  );
};

export default ScrollButton;
