import { describe, expect, test } from "vitest";
import { Alumno } from "../src/Alumno";

describe("Alumno", () => {
  test("un alumno de 18 años debe ser mayor de edad", () => {
    const alumno = new Alumno("Juan", 18);
    expect(alumno.esMayorDeEdad()).toBe(true);
    expect(alumno.obtenerEstado()).toBe("Mayor de edad");
  });

  test("un alumno de 17 años debe ser menor de edad", () => {
    const alumno = new Alumno("Ana", 17);
    expect(alumno.esMayorDeEdad()).toBe(false);
    expect(alumno.obtenerEstado()).toBe("Menor de edad");
  });

  test("un alumno de 0 años debe ser menor de edad", () => {
    const alumno = new Alumno("Bebé", 0);
    expect(alumno.esMayorDeEdad()).toBe(false);
    expect(alumno.obtenerEstado()).toBe("Menor de edad");
  });

  test("un alumno de 120 años sigue siendo mayor de edad", () => {
    const alumno = new Alumno("Anciano", 120);
    expect(alumno.esMayorDeEdad()).toBe(true);
    expect(alumno.obtenerEstado()).toBe("Mayor de edad");
  });

  test("el legajo se guarda correctamente", () => {
    const alumno = new Alumno("Pedro", 25);
    expect(alumno.legajo).toBe(202);
  });

  test("el nombre se guarda correctamente", () => {
    const alumno = new Alumno("Lucía", 19);
    expect(alumno.nombre).toBe("Lucía");
  });
});