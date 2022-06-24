// [P * (100 - D)]/100

function calcularPrecioConDescuento(precio, descuento){
    const  porcentajePrecioConDescuento = 100 - descuento
    const  precioConDescuento = (precio * porcentajePrecioConDescuento) / 100

    return precioConDescuento
}


function calcularPrecioCupon(precio, descuento){
    const  precioConCupon = (precio * descuento )/100

    return  precioConCupon
}

/* let cupones = [
    "cupon1",
   "cupon2",
    "cupon3",
] */

const cupones = [
    {
        name: "15",
        descuento: 15,
    },
    {
        name: "30",
        descuento: 30,
    },
    {
        name: "25",
        descuento: 25,
    },
];

function calcularPrecio(){
    const input1 = document.getElementById("inputPrice")
    const value1 = input1.value
    const input2 = document.getElementById("inputDescuento")
    const value2 = input2.value

    const input3 = document.getElementById("inputCupon")
    const value3 = input3.value

    const total = calcularPrecioConDescuento(value1, value2)

    const resultP = document.getElementById("resultP")
    resultP.innerText = "El precio a pagar con descuento es: $" + total

    let descuento;

    const isCouponValueValid = cupones.find(function (cupones) {
        return cupones.name === value3;
    });

    if (!isCouponValueValid) {
        alert("El cupón " + value3 + "no es válido");
    } else{
        switch(value3){
            case cupones[0]:
                descuento = 10
                const total1 = calcularPrecioCupon(value1, descuento)
                const resultP1 = document.getElementById("resultP1")
                resultP1.innerText = "El precio a pagar con descuento + cupon es: $" + (total - total1)
            break;
            case cupones[1]:
                descuento = 15
                const total2 = calcularPrecioCupon(value1, descuento)
                const resultP2 = document.getElementById("resultP1")
                resultP2.innerText = "El precio a pagar con descuento + cupon es: $" + (total - total2)
            break;
            case cupones[2]:
                descuento = 30
                const total3 = calcularPrecioCupon(value1, descuento)
                const resultP3 = document.getElementById("resultP1")
                resultP3.innerText = "El precio a pagar con descuento + cupon es: $" + (total - total3)
            break
        }
    }
}


/* 
function calcularPrecioConCupon(){
    const input1 = document.getElementById("inputPrice")
    const value1 = input1.value

    const input2 = document.getElementById("inputDescuento")
    const value2 = input2.value

    const input3 = document.getElementById("inputCupon")
    const value3 = input3.value

    const total = calcularPrecioCupon(value1, value2, value3)

    const resultP1 = document.getElementById("resultP1")
    resultP1.innerText = "El precio a pagar con descuento + cupon es: $" + total
} */


