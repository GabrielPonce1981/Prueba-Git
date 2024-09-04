console.log("Hola mundo");

const suma = (a,b) => {
    const promesa = new Promise((resolve, reject) => {
        if (a < 0 || b < 0) {
            reject('No se permiten numeros negativos');
        }
        else {
            const resultado = a + b;
            resolve(resultado);
        }
    });
    return promesa;
}

//Para invocar la promesa, usamos el metodo then y catch, el then se ejecuta cuando la promesa se cumple y el catch cuando la promesa no se cumple
//es decir, el then se ejecuta cuando resolve y el catch cuando reject

suma(10,20)
.then(resultadoSuma => {
    console.log("El resultado de la suma es: ", resultadoSuma);
})
.catch(error => {
    console.log("Error: no se permiten numero negativos ", error);
})

console.log("Fin del programa");