import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("pruebas en el componente <AddCategory />", () => {
  const setCategories = jest.fn(); // Aca tengo la referencia para evaluar ciertas cosas
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  // beforeEach(() => {
  //   // Aca se ejecuta todo lo que se limpie o reinicialice
  //   jest.clearAllMocks(); // Se usa para limpiar los mocks luego de cada test. usualmente para funciones y otros mocks
  //   wrapper = shallow(<AddCategory setCategories={setCategories} />);
  // });

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";
    input.simulate("change", { target: { value } });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  // TODO: Verificar este test al final
  // test("no debe postear la informacion con submit", () => {
  //   wrapper.find("form").simulate("submit", { preventDefault() {} }); // Forma corta de enviar una funcion preventDefault

  //   expect(setCategories).not.toHaveBeenCalled();
  // });

  test("debe de llamar el setCategories y limpiar la caja de texto", () => {
    const value = "Hola Mundo";
    // Simulando el change en input
    wrapper.find("input").simulate("change", { target: { value } });
    // Simulando el submit en form
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    // setCategories se debe haber llamado una vez
    expect(setCategories).toHaveBeenCalled();
    // expect(setCategories).toHaveBeenCalledTimes(2); // Sirve para indicar que se llamo 2 veces a la funcion setCategories
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); // Evaluo que se haya llamado con una funcion en su interior
    // input debe estar vacio
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
