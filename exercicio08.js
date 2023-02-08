function fibonacci(num){
    let soma = [];
    for(let i = 0; i <= num; i++){
        soma += i;
    }
    return soma;
}
console.log(fibonacci(5));