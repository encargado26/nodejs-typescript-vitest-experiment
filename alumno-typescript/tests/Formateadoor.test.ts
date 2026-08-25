import { describe, expect, test } from "vitest";
import { Formateador } from "../src/Formateador";
import { Alumno } from "../src/Alumno";
import { Profesor } from "../src/Profesor";
import { Materia } from "../src/Materia";

// Persona es clase base, Alumno y Profesor heredan de ella
describe("Formateador", () => {
  test("formatearPersona devuelve nombre y legajo", () => {
    const alumno = new Alumno("Juan", 20, 123);
    const resultado = Formateador.formatearPersona(alumno);
    expect(resultado).toBe("Juan (123)");
  });

  test("formatearAlumno incluye nombre, legajo, edad y estado mayor de edad", () => {
    const alumno = new Alumno("Ana", 19, 456);
    const resultado = Formateador.formatearAlumno(alumno);
    expect(resultado).toContain("Ana (456)");
    expect(resultado).toContain("Edad: 19");
    expect(resultado).toContain("Mayor de edad");
  });

  test("formatearAlumno incluye estado menor de edad", () => {
    const alumno = new Alumno("Bebé", 5, 789);
    const resultado = Formateador.formatearAlumno(alumno);
    expect(resultado).toContain("Menor de edad");
  });

  test("formatearProfesor devuelve nombre, legajo y materia", () => {
    const materia = new Materia("Historia", 2026, "Humanidades");
    const profe = new Profesor("Carlos", 101);
    // asignamos materia al profesor
    profe.materia = materia;
    const resultado = Formateador.formatearProfesor(profe);
    expect(resultado).toBe("Carlos (101) - Materia: Historia");
  });

  test("formatearProfesor funciona con materia distinta", () => {
    const materia = new Materia("Matemática", 2026, "Exactas");
    const profe = new Profesor("Laura", 202);
    profe.materia = materia;
    const resultado = Formateador.formatearProfesor(profe);
    expect(resultado).toContain("Laura (202)");
    expect(resultado).toContain("Materia: Matemática");
  });

  test("formatearPersona también funciona con Profesor", () => {
    const profe = new Profesor("María", 303);
    const resultado = Formateador.formatearPersona(profe);
    expect(resultado).toBe("María (303)");
  });
});
