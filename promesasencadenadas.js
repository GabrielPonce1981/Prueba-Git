console.log("Hagamos unas promesas encadenadas");   

const suma = (a,b) => {
    const promesa = new Promise((resolve, reject) => {
    if( a < 0 || b < 0){
        reject("Los numeros deben ser positivos");
    }
    else{
      const resultado = a + b;
      resolve(resultado);
    }
    });
    return promesa;
}

const resta = (a,b) => {
    const promesa = new Promise((resolve, reject) =>{
        if(a < 0 || b < 0){
            reject("Los numeros deben ser positivos");
        }
        else{
            const resultado = a - b;
            resolve(resultado);
        }
        
    });
    return promesa;
}

suma(4,9)
.then((resultadoSuma) =>{
    console.log("El resultado de la suma es: " + resultadoSuma);
    return resta(resultadoSuma, 2);
})
.then((resultadoResta) =>{
    console.log("El resultado de la resta es: " + resultadoResta);
})
.catch((error) =>{
    console.log("Error: ", error);
});

console.log("Fin del programa");