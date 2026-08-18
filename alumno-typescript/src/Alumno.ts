export class Alumno {
  legajo(legajo: any) {
    throw new Error("Method not implemented.");
  }
  constructor(
    public nombre: string,
    public edad: number
  ) {}

  public esMayorDeEdad(): boolean {
    return this.edad >= 18;
  }

  public obtenerEstado(): string {
    return this.esMayorDeEdad() ? "Mayor de edad" : "Menor de edad";
  }
}