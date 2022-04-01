import { logging, PersistentUnorderedMap } from 'near-sdk-as'

@nearBindgen
class Alumno {
  public cuenta: string;
  public numero_control: u64;
  public nombre: string;
  public apellidos: string;
  public carrera: string;
  public taller: string;


}

const alumnos = new PersistentUnorderedMap<string, Alumno>("p");

export function setAlumno(cuenta: string,numero_control: u64, nombre: string, apellidos: string, carrera: string, taller:string): void {

  let alumno = new Alumno;

  alumno.cuenta = cuenta;
  alumno.numero_control = numero_control;
  alumno.nombre = nombre;
  alumno.apellidos = apellidos;
  alumno.carrera = carrera;
  alumno.taller= taller; 


  alumnos.set(cuenta, alumno);


  logging.log(`Se registró al alumno correctamente`);
}

export function getAlumno(cuenta: string): Alumno | null {
  return alumnos.get(cuenta);
}

@nearBindgen
class Maestro {
  public cuenta_maestro: string;
  public nombre: string;
  public apellidos: string;
  public taller: string;
}

const maestros = new PersistentUnorderedMap<string, Maestro>("p");

export function setMaestro(cuenta_maestro: string, nombre: string, apellidos: string, taller:string): void {

  let maestro = new Maestro;

  maestro.cuenta_maestro= cuenta_maestro;
  maestro.nombre = nombre;
  maestro.apellidos = apellidos;
  maestro.taller= taller; 


  maestros.set(cuenta_maestro, maestro);


  logging.log(`Se registró al maestro exitosamente`);
}

export function getMaestro(cuenta_maestro: string): Maestro | null {
  return maestros.get(cuenta_maestro);
}

@nearBindgen
class Taller {
  public nombre_taller: string;
  public horario: string;
  public dias: string;
  public cuenta_maestro:string;

}

const talleres = new PersistentUnorderedMap<string, Taller>("p");

export function setTaller(nombre_taller: string, horario: string, dias:string, cuenta_maestro: string): void {

  let taller= new Taller;

  
  taller.nombre_taller = nombre_taller;
  taller.horario= horario; 
  taller.dias= dias; 
  taller.cuenta_maestro= cuenta_maestro;


  talleres.set(nombre_taller, taller);


  logging.log(`Se registró el taller exitosamente`);
}

export function getTaller(nombre_taller: string): Taller | null {
  return talleres.get(nombre_taller);
}


