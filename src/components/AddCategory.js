import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log("handleInputChange llamado");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevenimos el envío del formulario

    setCategories((cats) => [inputValue, ...cats]);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      ></input>
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
