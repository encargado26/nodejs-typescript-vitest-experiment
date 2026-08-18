import { Materia } from "../src/Materia";
import { Alumno } from "../src/Alumno";
import { Profesor } from "../src/Profesor";
import { describe, expect, test } from "vitest";

describe("Materia", () => {
  test("crear materia con alumnos y profesores", () => {
    const alumno1 = new Alumno("Juan", 20);
    const alumno2 = new Alumno("Ana", 17);
    const titular = new Profesor("Carlos", 789);
    const adjunto = new Profesor("Laura", 101);

    const materia = new Materia("Programación", 2026, "Sistemas", [alumno1, alumno2], adjunto, titular);

    expect(materia.nombre).toBe("Programación");
    expect(materia.alumnos.length).toBe(2);
    expect(materia.titular?.nombre).toBe("Carlos");
    expect(materia.adjunto?.nombre).toBe("Laura");
  });
});
