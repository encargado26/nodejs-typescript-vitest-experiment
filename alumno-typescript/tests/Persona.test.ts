import { describe, expect, test } from "vitest";
import { Persona } from "../src/Persona";

describe("Persona", () => {
  test("crear una persona con nombre y legajo", () => {
    const persona = new Persona("Carlos", 789);

    expect(persona.nombre).toBe("Carlos");
    expect(persona.legajo).toBe(789);
  });

  test("el legajo se asigna correctamente", () => {
    const persona = new Persona("Laura", 101);

    expect(persona.legajo).toBe(101);
  });

  test("el nombre se asigna correctamente", () => {
    const persona = new Persona("María", 202);

    expect(persona.nombre).toBe("María");
  });

  test("una persona con legajo cero se guarda correctamente", () => {
    const persona = new Persona("Nuevo", 0);

    expect(persona.legajo).toBe(0);
  });

  test("una persona con nombre vacío se guarda correctamente", () => {
    const persona = new Persona("", 303);

    expect(persona.nombre).toBe("");
  });

  test("dos personas distintas deben tener legajos diferentes", () => {
    const persona1 = new Persona("Carlos", 111);
    const persona2 = new Persona("Laura", 222);

    expect(persona1.legajo).not.toBe(persona2.legajo);
  });
});