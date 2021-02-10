import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { GifGridItem } from "../../components/GifGridItem";

describe("pruebas en <GifGridItem />", () => {
  const title = "Un titulo";
  const url = "http://localhost/imagen.jpg";
  let wrapper = shallow(<GifGridItem title={title} url={url} />); // no es buena practica pero sino no aplica las ayudas
  beforeEach(() => {
    wrapper = shallow(<GifGridItem title={title} url={url} />);
  });

  test("debe mostrar <GifGridItem /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de tener un parrafo con el title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("debe de tener la imagen igual al url y alt de los props", () => {
    const img = wrapper.find("img");
    // console.log(img.props().src);
    // console.log(img.prop("src")); de estas maneras puedo acceder a las propiedades de un elemento
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("debe de tener la clase animate__fadeIn", () => {
    const div = wrapper.find("div");
    expect(div.prop("className").includes("animate__fadeIn")).toBe(true); // valida que tenga la clase de css
  });
});
