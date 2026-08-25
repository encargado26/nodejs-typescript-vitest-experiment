import { IConNombre } from "./IConNombre";
import { IConLegajo } from "./IConLegajo";  

export class Persona 
    implements IConNombre, 
               IConLegajo {

  constructor(
    public nombre: string,
    public legajo: number
  ) {}
}