import React from "react";
import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { GifGridItem } from "./GifGridItem";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const { loading } = useFetchGifs();
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   getGifs(category).then((imgs) => setImages(imgs));
  // }, [category]); // si la categoria cambia va a volver a ejecutar el useEffect

  return (
    <>
      <h3>{category}</h3>
      {loading ? "Cargando..." : "Data cargada"}
      {/* <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div> */}
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string,
};
