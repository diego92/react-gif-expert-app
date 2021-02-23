import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const category = "One Punch";

  //   let wrapper = shallow(<GifGrid category={category} />); // no es buena practica pero sino no aplica las ayudas

  //   beforeEach(() => {});

  test("debe mostrar <GifGrid /> correctamente", () => {
    useFetchGifs.mockReturnValue({ data: [], loading: true });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar items cuando se cargan imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "abc",
        url: "http://localhost:4000/cualquierimagen.jpg",
        title: "Cualquier cosa",
      },
      {
        id: "123",
        url: "http://localhost:4000/cualquierimagen.jpg",
        title: "Cualquier cosa",
      },
    ];
    useFetchGifs.mockReturnValue({ data: gifs, loading: false });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false); // Verifico que el parrafo no existe
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length); // Verifico que el parrafo no existe
  });
});
