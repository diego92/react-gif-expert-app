import React from "react";
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category); // luego de los dos puntos va el nombre que le quiero dar

  return (
    <>
      <h3>{category}</h3>
      {loading ? (
        "Cargando..."
      ) : (
        <div className="card-grid">
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </div>
      )}
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string,
};
