import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    getGifs();
  }, []); // no poner dependecias aca hace que no se ejecute de nuevo la peticion

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=dragon+ball&limit=10&api_key=d1DvYQ5f6O59f814O2FX5N3Gca3dBXwX";

    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    }));
    console.log(gifs);
  };

  console.log(count);
  return (
    <div>
      <h3>{category}</h3>
      <button onClick={() => setCount(count + 1)}>Buscar</button>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string,
};
