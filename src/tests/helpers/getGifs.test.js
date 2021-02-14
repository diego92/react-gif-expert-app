import { getGifs } from "../../helpers/getGifs";
import "@testing-library/jest-dom";

describe("pruebas con getGifs Fetch", () => {
  test("debe de traer 10 elementos", async () => {
    const gifs = await getGifs("One Punch");

    expect(gifs.length).toBe(10);
  });

  test("debe tener un arreglo vacio", async () => {
    const gifs = await getGifs("");

    console.log(gifs);
    expect(gifs.length).toBe(0);
  });
});
