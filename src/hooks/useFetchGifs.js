import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({ data: [], loading: true });

  useEffect(() => {
    getGifs(category).then((imgs) => setstate({ data: imgs, loading: false }));
  }, [category]); // si la categoria cambia va a volver a ejecutar el useEffect

  return state; // { data: [], loading: true }
};
