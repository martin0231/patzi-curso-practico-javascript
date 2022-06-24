// Proemdio

/* const lista1 = [
    100, 200, 300, 400
] */
/* 
let sumaLista1 = 0;

for(let i = 0; i < lista1.length; i++){
    sumaLista1 = sumaLista1 + lista1[i];
} */

function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(

        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento
        }
        )

    const promedioLista = sumaLista / lista.length

    return promedioLista
}

// Mediana

  
  /* const lista2 = [
    100,
    200,
    500,
    400000000,
  ];
  
  const mitadLista2 = parseInt(lista2.length / 2);
  let mediana;

  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  if (esPar(lista2.length)) {
function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  


function calcularMediana(medianaLista){

    medianaLista.sort(
      function(valorAcumulado, nuevoValor){
        return valorAcumulado - nuevoValor
      }
    )
    
    const mitadLista2 = parseInt(medianaLista.length / 2);
    let mediana;
    
    if (esPar(medianaLista.length)) {
      const elemento1 = medianaLista[mitadLista2 - 1];
      const elemento2 = medianaLista[mitadLista2];
    
      const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
      ]);
      
      mediana = promedioElemento1y2;
      return mediana
    } else {
      mediana = medianaLista[mitadLista2];
      return mediana
    }
  
}
    const elemento1 = lista1[mitadLista2 - 1];
    const elemento2 = lista2[mitadLista2];
  
    const promedioElemento1y2 = calcularMediaAritmetica([
      elemento1,
      elemento2,
    ]);
    
    mediana = promedioElemento1y2;
  } else {const lista1 = [
    100, 200, 300, 400
]
    mediana = lista2[mitadLista2];
  } */


function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  


function calcularMediana(medianaLista){

    medianaLista.sort(
      function(valorAcumulado, nuevoValor){
        return valorAcumulado - nuevoValor
      }
    )
    
    const mitadLista2 = parseInt(medianaLista.length / 2);
    let mediana;
    
    if (esPar(medianaLista.length)) {
      const elemento1 = medianaLista[mitadLista2 - 1];
      const elemento2 = medianaLista[mitadLista2];
    
      const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
      ]);
      
      mediana = promedioElemento1y2;
      return mediana
    } else {
      mediana = medianaLista[mitadLista2];
      return mediana
    }
  
}

// Moda

//const lista1=[1,2,3,1,2,3,4,2,2,2,1,];


function calcularModa(lista){

  const lista1Count={};

  lista.map(function(elemento){
    if(lista1Count[elemento]){

      lista1Count[elemento]+=1;}

    else{lista1Count[elemento]=1;}
  });

  const lista1Array = Object.entries(lista1Count).sort(
    function(elementoA,elementoB){
      return elementoA[1]-elementoB[1];
    });
    
  const moda = lista1Array[lista1Array.length-1];
  return moda
}

// Reto 

// Formula para proemdio ponderado

// [(N1*C1)+(N2*C2)+(N3*C3)] / (C1+C2+C3)

const materias = [
  {
      name: "Educacion Fisisca",
      nota: 10,
      credito: 2,
  },
  {
      name: "Programacion",
      nota: 8,
      credito: 5,
  },
  {
      name: "Finanzas Personales",
      nota:7,
      credito: 5,
  },
];

function calcularPromedioPonderado(lista){

  const totalNotas = lista.map(function(materia)
    {
      return materia.nota * materia.credito
    });
  const totalCredito = lista.map(function(materia)
    {
      return materia.credito
    });

  const sumaNotas = totalNotas.reduce(
    function (valorAcumulado, nuevoElemento){
          return valorAcumulado + nuevoElemento
      },0
    )
  const sumaCredito = totalCredito.reduce(
      function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento
        }
      )


  const promedioPonderado = sumaNotas / sumaCredito
  
  return promedioPonderado
}