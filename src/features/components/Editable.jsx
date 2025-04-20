import React, { useState } from "react";
import styles from "./editable.module.css";
import Input from "./Input";

const Editable = () => {
  const [editable, setEditable] = useState(false);
  const [inputValue, setInputValue] = useState("Title");

  const toggleEditable = () => {
    setEditable((prevEditable) => !prevEditable);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      {editable ? (
        <div className="p-6">
          <label className="block text-sm font-medium text-gray-700">
            Styled Input
          </label>
          <Input
            placeholder="Type something..."
            className="mt-2"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      ) : (
        <>Title: {inputValue}</>
      )}
      <button onClick={toggleEditable}>{editable ? "Close" : "Edit"}</button>
    </div>
  );
};

export default Editable;
