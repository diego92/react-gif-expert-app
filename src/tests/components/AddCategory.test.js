import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { AddCategory } from "../../components/AddCategory";

describe("pruebas en el componente <AddCategory />", () => {
  const setCategories = () => {};
  test("debe de mostrarse correctamente ", () => {
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);

    expect(wrapper).toMatchSnapshot();
  });
});
