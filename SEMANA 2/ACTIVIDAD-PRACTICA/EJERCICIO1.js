// Yhojan Andres Caro Gonzalez | Andres Alvarez
const aprendices = [
{ id: 1, nombre: "Ana", ficha:
3223874, nota: 4.2 },
{ id: 2, nombre: "Luis", ficha:
3223874, nota: 3.5 },
{ id: 3, nombre: "María", ficha:
3223875, nota: 4.8 }
];

//Filtrar Aprobados
const aprobados = aprendices.filter(a => a.nota >= 3.0);

// Calcular promedio del grupo
const calcularPromedio = aprendices =>
  aprendices.reduce((acum, aprendiz) => acum + aprendiz.nota, 0) / aprendices.length;


//buscarPorNombre(aprendices,nombre)

const Buscarpornombre = (aprendices , nombre ) =>
    aprendices.find (aprendiz => aprendiz.nombre === nombre);


//obtenerNombres(aprendices)

const Obtenernombres = aprendices =>
aprendices.map(aprendiz => aprendiz.nombre);



console.log("Aprobados:", aprobados.length);
console.log(calcularPromedio(aprendices));
console.log(Buscarpornombre(aprendices , "Ana"));
console.log(Obtenernombres(aprendices));
