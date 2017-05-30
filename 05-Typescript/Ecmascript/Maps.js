/**
 * Created by USRDEL on 29/5/17.
 */
var arreglo = [1, 2, 3, 4, 5];
var resultado = arreglo.map(function (valor, indice, arreglo) {
    //noinspection JSAnnotator
    return valor * 2 / 10;
});
console.log(resultado);
