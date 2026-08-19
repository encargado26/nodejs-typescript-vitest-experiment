import { Persona } from "./Persona";

export class Alumno extends Persona {
  constructor(
    nombre: string,
    public edad: number,
    legajo: number
  ) {
    super(nombre, legajo);
  }

  public esMayorDeEdad(): boolean {
    return this.edad >= 18;
  }

  public obtenerEstado(): string {
    return this.esMayorDeEdad()
      ? "Mayor de edad"
      : "Menor de edad";
}
}