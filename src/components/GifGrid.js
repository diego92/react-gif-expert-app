import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
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
    setImages(gifs);
  };

  return (
    <div>
      <h3>{category}</h3>
      {images.map((img) => (
        <GifGridItem key={img.id} {...img} />
      ))}
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string,
};
