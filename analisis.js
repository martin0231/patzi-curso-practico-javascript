const salriosArg = argentina.map(function(persona){
    return persona.salario
})

const salariosArgSort = salriosArg.sort(
    function(valorAcumulado, nuevoValor){
      return valorAcumulado - nuevoValor
    })

function esPar(numerito) {
        if (numerito % 2 === 0) {
          return true;
        } else {
          return false;
        }
    }  

function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
    
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento
        }
        )
    const promedioLista = sumaLista / lista.length
    
    return promedioLista
}

function medianaSalarios(medianaLista){
    
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

const medianaGeneralArg = medianaSalarios(salariosArgSort)

// Mediana del top 10%
const spliceStart = (salariosArgSort.length * 90) / 100;
const spliceCount = salariosArgSort.length 

const salariosArgTop10 = salariosArgSort.splice(
  spliceStart,
);

const medianaTop10Arg = medianaSalarios(salariosArgTop10)

console.log({
  medianaGeneralArg ,
  medianaTop10Arg,
});

const claseBaja = argentina.filter(function(persona){
  return persona.salario < 1000
})

const claseMedia = argentina.filter(function(persona){
  return persona.salario > 1000 && persona.salario < 5000
})

const claseAlta = argentina.filter(function(persona){
  return persona.salario > 5000
})

const porcentajeDePobreza = claseBaja.length * 100 / salariosArgSort.length
const porcentajedeClaseMedia = claseMedia.length * 100 / salariosArgSort.length
const porcentajedeClaseAlta = claseAlta.length * 100 / salariosArgSort.length

console.log(
  "El porcentaje de pobreza en tu pais es de " + parseInt( porcentajeDePobreza) + "%",

  "El porcentaje de pobreza en tu pais es de " +  parseInt(porcentajedeClaseMedia) + "%",

  "El porcentaje de pobreza en tu pais es de " + parseInt(porcentajedeClaseAlta)+ "%",
)