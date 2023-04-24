//Realizar una funcion que muestre todos los numeros pares entre a Y b


entregaUno(a = parseInt(prompt("Ingrese el numero de inicio para obtener los pares")),
    b = parseInt(prompt("Ingrese el numero final para obtener los pares")));

function entregaUno(a = 2, b = 0) {
    let n;
    
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) n = i;
        console.log(n);
    }
    return n;
}

//ejecucion de la funcion
//entregaUno(a, b)

