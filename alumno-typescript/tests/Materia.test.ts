import { describe, expect, test } from "vitest";
import { Materia } from "../src/Materia";
import { Alumno } from "../src/Alumno";
import { Profesor } from "../src/Profesor";

describe("Materia", () => {
  test("crear materia con atributos básicos", () => {
    const materia = new Materia("Programación", 2026, "Sistemas");
    expect(materia.nombre).toBe("Programación");
    expect(materia.anio).toBe(2026);
    expect(materia.carrera).toBe("Sistemas");
  });

  test("agregar alumnos a la materia", () => {
    const alumno1 = new Alumno("Juan", 20, 123);
    const alumno2 = new Alumno("Ana", 17, 456);
    const materia = new Materia("Programación", 2026, "Sistemas", [alumno1, alumno2]);
    expect(materia.alumnos.length).toBe(2);
  });

  test("asignar profesor titular", () => {
    const titular = new Profesor("Carlos", 789);
    const materia = new Materia("Programación", 2026, "Sistemas", [], undefined, titular);
    expect(materia.titular?.nombre).toBe("Carlos");
  });

  test("asignar profesor adjunto", () => {
    const adjunto = new Profesor("Laura", 101);
    const materia = new Materia("Programación", 2026, "Sistemas", [], adjunto);
    expect(materia.adjunto?.nombre).toBe("Laura");
  });

  test("una materia sin alumnos debe tener lista vacía", () => {
    const materia = new Materia("Historia", 2026, "Humanidades");
    expect(materia.alumnos.length).toBe(0);
  });

  test("una materia puede tener titular y adjunto al mismo tiempo", () => {
    const titular = new Profesor("Carlos", 789);
    const adjunto = new Profesor("Laura", 101);
    const materia = new Materia("Matemática", 2026, "Exactas", [], adjunto, titular);
    expect(materia.titular?.nombre).toBe("Carlos");
    expect(materia.adjunto?.nombre).toBe("Laura");
  });
});
