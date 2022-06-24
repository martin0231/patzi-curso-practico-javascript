
function calculo(dinero, interes){
    const totalAPagar = dinero + ((dinero * interes) / 100)

    return totalAPagar
}

function calcularCuotas(){
    const cantidadDinero = document.getElementById("cantidad")
    const value1 = Number(cantidadDinero.value)
    const cantidadCuotas = document.getElementById("selecCuotas")
    const value2 = Number(cantidadCuotas.value)

    const totalADevolver = calculo(value1, value2)

    const devolver = document.getElementById("devolver") 
    devolver.innerText = "El total de dinero a devolver es: " + totalADevolver

    switch(true){
        case (value2 === 10):
            const totalCuotas = totalADevolver / 6
            const resultP1 = document.getElementById("cantidadDeCuotas")
            resultP1.innerText = "El valor de la cuota es de: " + totalCuotas
        break;
        case (value2 === 15):
            const totalCuotas2 = totalADevolver / 12
            const resultP2 = document.getElementById("cantidadDeCuotas")
            resultP2.innerText = "El valor de la cuota es de: " + totalCuotas2
        break;
        case (value2 === 25):
            const totalCuotas3 = totalADevolver / 18
            const resultP3 = document.getElementById("cantidadDeCuotas")
            resultP3.innerText = "El valor de la cuota es de: " + totalCuotas3
        break;
        case (value2 === 40):
            const totalCuotas4 = totalADevolver / 30
            const resultP4 = document.getElementById("cantidadDeCuotas")
            resultP4.innerText = "El valor de la cuota es de: " + totalCuotas4
        break;
        case(value1 === 0):
            const resultP5 = document.getElementById("cantidadDeCuotas")
            resultP5.innerText = "Introduzca un cantidad de dinero "
    }

    const totalInteres = totalADevolver - value1

    const interes = document.getElementById("interes")
    interes.innerText = "El interes a pagar es de: " + totalInteres
}

