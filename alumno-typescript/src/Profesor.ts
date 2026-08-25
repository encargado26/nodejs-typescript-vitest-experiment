import { Persona } from "./Persona";

export class Profesor extends Persona {
  materia: any;
  constructor(
    public nombre: string,
    public legajo: number
  ) {
    super(nombre, legajo);
  }
}