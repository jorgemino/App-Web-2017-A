/**
 * Created by USRDEL on 3/6/17.
 */
let arreglo=[
    {
        nombre:"Jorge",
        apellido:"Miño",
        nota:6,
        id:1
    },
    {
        nombre: "Lenin",
        apellido : "Miño",
        nota : 9,
        id:4
    },
    {
        nombre: "Jose",
        apellido : "Perez",
        nota : 4,
        id:5
    },
    {
        nombre: "Deysi",
        apellido : "Tacan",
        nota : 7,
        id:3
    }
];
arreglo.find(function(value){

    return value.apellido=="Miño";});

let filtrado=arreglo.filter((valor,indice,arreglo)=>{
    return valor.nota<7;});
console.log(filtrado);
