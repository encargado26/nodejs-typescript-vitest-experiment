import { describe, expect, test } from "vitest";
import { Profesor } from "../src/Profesor";

describe("Profesor", () => {
  test("crear un profesor con nombre y legajo", () => {
    const profe = new Profesor("Carlos", 789);
    expect(profe.nombre).toBe("Carlos");
    expect(profe.legajo).toBe(789);
  });

  test("el legajo se asigna correctamente", () => {
    const profe = new Profesor("Laura", 101);
    expect(profe.legajo).toBe(101);
  });

  test("el nombre se asigna correctamente", () => {
    const profe = new Profesor("María", 202);
    expect(profe.nombre).toBe("María");
  });

  test("un profesor con legajo cero se guarda correctamente", () => {
    const profe = new Profesor("Nuevo", 0);
    expect(profe.legajo).toBe(0);
  });

  test("un profesor con nombre vacío se guarda correctamente", () => {
    const profe = new Profesor("", 303);
    expect(profe.nombre).toBe("");
  });

  test("dos profesores distintos deben tener legajos diferentes", () => {
    const profe1 = new Profesor("Carlos", 111);
    const profe2 = new Profesor("Laura", 222);
    expect(profe1.legajo).not.toBe(profe2.legajo);
  });
});