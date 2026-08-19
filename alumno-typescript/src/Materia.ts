import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";

export class Materia {
  constructor(
    public nombre: string,
    public anio: number,
    public carrera: string,
    public alumnos: Alumno[] = [],
    public adjunto?: Profesor,
    public titular?: Profesor
  ) {}
}