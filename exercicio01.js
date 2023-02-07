function estatistica(array){
    const maior = Math.max(null, array);
    const menor = Math.min(null, array);
    let soma = 0;

    for(let i = 0; i < array.length; i++){
        soma += array[i];
    }
    const media =  soma / array.length;
    return [maior, menor, media];
}
console.log(estatistica([8,4,12]));