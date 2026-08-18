import { describe, expect, test } from "vitest";
import { Profesor } from "../src/Profesor";

describe("Profesor", () => {
  test("crear un profesor con nombre y legajo", () => {
    const profe = new Profesor("Carlos", 789);
    expect(profe.nombre).toBe("Carlos");
    expect(profe.legajo).toBe(789);
  });
});
