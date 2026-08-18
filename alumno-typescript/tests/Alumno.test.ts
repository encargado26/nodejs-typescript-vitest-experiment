import { describe, expect, test } from "vitest";
import { Alumno } from "../src/Alumno";

describe("Alumno", () => {

  test("un alumno de 18 años debe ser mayor de edad", () => {
    // Arrange
    const alumno = new Alumno("Juan", 18);

    // Act
    const resultado = alumno.esMayorDeEdad();

    // Assert
    expect(resultado).toBe(true);
  });

  test("un alumno de 17 años debe ser menor de edad", () => {
    const alumno = new Alumno("Pedro", 17);
    expect(alumno.esMayorDeEdad()).toBe(false);
  });

  test("obtenerEstado devuelve 'Mayor de edad' para 25 años", () => {
    const alumno = new Alumno("Ana", 25);
    expect(alumno.obtenerEstado()).toBe("Mayor de edad");
  });

  test("obtenerEstado devuelve 'Menor de edad' para 15 años", () => {
    const alumno = new Alumno("Luis", 15);
    expect(alumno.obtenerEstado()).toBe("Menor de edad");
  });

});
