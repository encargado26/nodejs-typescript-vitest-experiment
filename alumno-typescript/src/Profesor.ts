import { Persona } from "./Persona";

export class Profesor extends Persona {
  constructor(
    public nombre: string,
    public legajo: number
  ) {
    super(nombre, legajo);
  }
}
