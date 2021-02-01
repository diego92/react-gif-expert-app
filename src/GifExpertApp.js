import React, { useState } from "react";

export const GifExpertApp = () => {
  // const categories = ["One Punch", "Samurai X", "Dragon Ball"];

  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  const handleAddCategory = () => {
    // setCategories([...categories, "Death Note"]);
    setCategories((cats) => [...cats, "Death Note"]);
  };

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <button onClick={handleAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li> // el key debe ser unico y no debe ser el indice
        ))}
      </ol>
    </>
  );
};
