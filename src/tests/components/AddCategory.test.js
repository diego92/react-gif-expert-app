import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { AddCategory } from "../../components/AddCategory";

describe("pruebas en el componente <AddCategory />", () => {
  const setCategories = () => {};
  const wrapper = shallow(<AddCategory setCategories={setCategories} />);

  test("debe de mostrarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";
    input.simulate("change", { target: { value } });

    expect(wrapper.find("p").text()).toBe("Hola Mundo");
  });
});
