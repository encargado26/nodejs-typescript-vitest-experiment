import { Persona } from "./Persona";
import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";


export class Formateador {
    public static formatearPersona(persona: Persona): string {
        return `${persona.nombre} (${persona.legajo})`;
    }
    public static formatearAlumno(alumno: Alumno): string {
        return `${alumno.nombre} (${alumno.legajo}) - Edad: ${alumno.edad} - Estado: ${alumno.obtenerEstado()}`;
    }
    public static formatearProfesor(profesor: Profesor): string {
        return `${profesor.nombre} (${profesor.legajo}) - Materia: ${profesor.materia.nombre}`;
    }
}