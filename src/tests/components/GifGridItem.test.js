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
});
