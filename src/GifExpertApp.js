import React, { useState } from "react";
import PropTypes from "prop-types";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  // const handleAddCategory = () => {
  //   // setCategories([...categories, "Death Note"]);
  //   setCategories((cats) => [...cats, "Death Note"]);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} /> // el key debe ser unico y no debe ser el indice
        ))}
      </ol>
    </>
  );
};

GifExpertApp.propTypes = { defaultCategories: PropTypes.array };
