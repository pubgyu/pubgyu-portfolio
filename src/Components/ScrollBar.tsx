import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "Styles/ScrollBar.scss";

const handleProgressBar = (root: HTMLElement) => {
  const totalScroll = root.scrollTop;
  const windowHeight = root.scrollHeight - root.clientHeight;

  if (windowHeight <= 0) {
    return 0;
  }

  return Math.max(Math.floor((totalScroll / windowHeight) * 100), 0);
};

export default function ScrollBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const root = document.getElementById("root");

    if (!root) {
      return undefined;
    }

    const handleScroll = () => {
      setScroll(handleProgressBar(root));
    };

    handleScroll();
    root.addEventListener("scroll", handleScroll);

    return () => {
      root.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.8
      }}
      className="scrollBarWrap"
    >
      <i className="progress" style={{ width: `${scroll}%` }} />
      <span className="txt">{`${scroll}%`}</span>
    </motion.span>
  );
}
