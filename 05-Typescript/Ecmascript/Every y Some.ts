/**
 * Created by USRDEL on 29/5/17.
 */
let arreglo= [2,8,9,8,5];
/*let resultado=arreglo.map(
    (valor,indice,arreglo)=>{
        //noinspection JSAnnotator
        return valor*2/10;
    });
console.log(resultado);
*///si todos cumplen verdadero y si no falso
let resultado2=arreglo.every((valor,indice,arreglo)=>{
    return (valor>=2);
});
console.log(resultado2);
