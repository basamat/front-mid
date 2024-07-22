import React, { useState } from "react";

const TextArea = () => {
  const [text, setText] = useState("");

  const encodeText = (text) => {
    return text.split("").reverse().join("");
  };

  const handleChange = (event) => {
    const inputText = event.target.value;
    const encodedText = encodeText(inputText);
    setText(encodedText);
  };

  return <textarea value={text} onChange={handleChange} />;
};

export default TextArea;
