export class Alumno {
  constructor(
    public nombre: string,
    public edad: number,
    public legajo: number  
  ) {}

  public esMayorDeEdad(): boolean {
    return this.edad >= 18;
  }

  public obtenerEstado(): string {
    return this.esMayorDeEdad() ? "Mayor de edad" : "Menor de edad";
  }
}
