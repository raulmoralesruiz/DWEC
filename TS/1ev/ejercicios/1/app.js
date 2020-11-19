// Uso de Let y Const
var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
// Cree una interfaz que sirva para validar el siguiente objeto
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
// ---------------- Convertir esta funcion a una funcion de flecha -------------------------------
/* function resultadoDoble(a, b) {
  return (a + b) * 2;
} */
var resultadoDoble = function (a, b) {
    (a + b) * 2;
};
// ---------------- Función con parametros obligatorios, opcionales y por defecto ----------------
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
var getAvenger = function (nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene un " + arma;
    }
    console.log(mensaje);
};
var avg1 = getAvenger("pepe", "comer");
var avg2 = getAvenger("jose");
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
// Se crea clase Persona
var Rectangulo = /** @class */ (function () {
    // Constructor
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    // Se define función -> area
    Rectangulo.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}());
var rectan1 = new Rectangulo(2, 10);
console.log(rectan1.calcularArea());
