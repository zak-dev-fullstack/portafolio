import { useEffect, useState } from "react";
import "./scrollindicator.css";
export function ScrollIndicator() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll">
      <div className="progressMainWrapper">
        <div
          className="progressMainStyle"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}
