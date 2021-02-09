import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { GifGridItem } from "../../components/GifGridItem";

describe("pruebas en <GifGridItem />", () => {
  let wrapper = shallow(<GifGridItem />); // no es buena practica pero sino no aplica las ayudas
  beforeEach(() => {
    wrapper = shallow(<GifGridItem />);
  });

  test("debe mostrar <GifGridItem /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
