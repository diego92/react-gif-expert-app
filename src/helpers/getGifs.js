export const getGifs = async (category) => {
  // encode uri cambia los espacios por %20
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=d1DvYQ5f6O59f814O2FX5N3Gca3dBXwX`;

  const respuesta = await fetch(url);
  const { data } = await respuesta.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }));
  return gifs;
};
