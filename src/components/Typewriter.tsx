import React, { useState, useEffect } from "react";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string;
  delay: number;
}

const Typewriter = ({ text, delay, ...rest }: Props) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <p {...rest}>{currentText}</p>;
};

export default Typewriter;
