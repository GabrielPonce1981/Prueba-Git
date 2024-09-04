console.log('Hola mundo');

// const suma = (a,b, callback) => {
//     const resultado = a + b;
//     callback (resultado)
// };

const resta = (a,b) => a - b;
const multiplicacion = (a,b) => a * b;
const division = (a,b) => a / b;

//const operaciones = (a,b,callback) => callback(a,b);

//console.log(operaciones(10,20,suma));
//console.log(operaciones(10,20,resta));

// suma(10,20, (resultado) => {
//     console.log(resultado);
// });

//quiero hacer manejo de errores con callbacks
const suma = (a,b, callback) => {
    if (a < 0 || b < 0) {
        console.log('No se permiten numeros negativos');
    }
    else {
        const resultado = a + b;
        callback (null, resultado)//con null indicamos que no hay error en la llmada
    }
};

suma(-8,20, (error, resultado) => {//para manejar los errores vamos a ver en detalle con promesas
    if (error) {
        console.log("Error", error);
    }
    else {
        console.log(resultado);
    }
});

console.log('Fin del programa');