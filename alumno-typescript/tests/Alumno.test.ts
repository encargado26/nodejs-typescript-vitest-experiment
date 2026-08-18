import { describe, expect, test } from "vitest";
import { Alumno } from "../src/Alumno";

describe("Alumno", () => {

  test("un alumno de 18 años debe ser mayor de edad", () => {
    const alumno = new Alumno("Juan", 18);

    const resultado = alumno.esMayorDeEdad();

    expect(resultado).toBe(true);
  });

});
