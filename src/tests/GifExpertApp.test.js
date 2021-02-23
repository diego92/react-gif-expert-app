import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { GifExpertApp } from "../GifExpertApp";

describe("Pruebas en <GifExpertApp />", () => {
  test("debe mostrar <GifExpertApp /> correctamente", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe mostrar una lista de categorias correctamente", () => {
    const categories = ["One Punch", "Dragon Ball"];

    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
