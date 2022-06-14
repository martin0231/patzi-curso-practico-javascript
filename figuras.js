// codigo del cuadrado

function perimetroCuadrado (lado) {
    return lado * 4;
}
function areaCuadrado(lado) {
    return lado * lado;
} 

// codigo del triangulo

function perimetroTriangulo(lado1, lado2, base) {
    return (Number(lado1) + Number(lado2) + Number(base));
};

function areaTriangulo (base, altura) {
    return (base * altura)/2;
};

function alturaTriangulo(lado1, lado2, base){
    return Math.sqrt((lado1 * lado2) - ((base * base) / 4))
}


// codigo del circulo

function diametroCirculo(radio) {
    return radio * 2;
}
const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

// aca conectamos con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado (value);
    alert(perimetro+ "Cm.");
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado (value);
    document.write(area + "Cm2.");
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = input1.value;
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = input2.value;
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = input3.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
        alert(perimetro + "cm");
}

function calcularAreaTriangulo(){
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = input3.value;
    const input4 = document.getElementById("InputTriangulo4")
    const value4 = input4.value

    const area = areaTriangulo(value3, value4)
    alert(area + "cm2")
}

// function calcularAlturaTrianguloIsosceles(){
//     const input1 = document.getElementById("InputTriangulo01");
//     const value1 = input1.value;
//     const input2 = document.getElementById("InputTriangulo02");
//     const value2 = input2.value;
//     const input3 = document.getElementById("InputTriangulo03");
//     const value3 = input3.value;

//     const altura = alturaTriangulo(value1, value2, value3)
//     alert(altura)
// }

// function alturaTriangulo(lado, base) {
//     return Math.sqrt((lado * lado) - ((base * base)/4));
// }

function calcularAlturaTriangulo() {
    const input1 = document.getElementById("inputTriangulo01");
    const lado1 = Number(input1.value);
    const input2 = document.getElementById("inputTriangulo02");
    const lado2 = Number(input2.value);
    const input3 = document.getElementById("inputTriangulo03");
    const lado3 = Number(input3.value);

    if (((lado1 + lado2) < lado3) || ((lado2 + lado3) < lado1) || ((lado1 + lado3) < lado2)) {
        alert("No es un triangulo!")
    }
    else { 
        switch (true){
            case (lado1 === lado2 && lado1 != lado3):
                const altura = alturaTriangulo(lado1, lado3)
                alert(altura + "Cm.")
                break;
            case (lado2 === lado3 && lado2 != lado1):
                const altura2 = alturaTriangulo(lado2, lado1)
                alert(altura2 + "Cm.")
                break;
            case (lado1 === lado3 && lado1 != lado2):
                const altura3 = alturaTriangulo(lado1, lado2)
                alert(altura3 + "Cm.")
                break;
            default:
                alert("No es un triangulo isosceles!")
        }
    }   
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo")
    const value = input.value

    const perimetro = perimetroCirculo(value) 
        const diametro = diametroCirculo(value)
        alert(diametro * PI);
    
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo")
    const value = input.value

    const area = areaCirculo(value)
        alert(area + "cm2" )
}

