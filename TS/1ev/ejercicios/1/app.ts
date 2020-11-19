// Uso de Let y Const
let nombre = "Ricardo Tapia";
let edad = 23;

let PERSONAJE = {
  nombre: nombre,
  edad: edad,
};

// Cree una interfaz que sirva para validar el siguiente objeto
let batman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"],
};

// ---------------- Convertir esta funcion a una funcion de flecha -------------------------------
/* function resultadoDoble(a, b) {
  return (a + b) * 2;
} */
const resultadoDoble = (a, b) => {
  (a + b) * 2;
};

// ---------------- Función con parametros obligatorios, opcionales y por defecto ----------------
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
const getAvenger = (nombre: string, poder?: string, arma = "arco") => {
  let mensaje;
  if (poder) {
    mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  } else {
    mensaje = nombre + " tiene un " + arma;
  }
  console.log(mensaje);
};

let avg1 = getAvenger("pepe", "comer");
let avg2 = getAvenger("jose");

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

// Se crea clase Persona
class Rectangulo {
  // Atributos
  private base: number;
  private altura: number;

  // Constructor
  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }

  // Se define función -> area
  calcularArea(): number {
    return this.base * this.altura;
  }
}

const rectan1 = new Rectangulo(2, 10);
console.log(rectan1.calcularArea());
