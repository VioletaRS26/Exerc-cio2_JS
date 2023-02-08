function estatistica(array){
    const maior = Math.max.apply(null, array);
    const menor = Math.min.apply(null, array);
    let soma = 0;

    for(var i = 0; i < array.length; i++){
        soma += array[i];
    }
    const media =  soma / array.length;
    return [maior, menor, media];
}
console.log(estatistica([8,4,12]));