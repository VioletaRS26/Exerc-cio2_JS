function fibonacci(num){
    var fibonac = [];
    if(num != 0 && num!= 1){
        fibonac[0] = 0;
        fibonac[1] = 1;

        for (let i = 2; i < num; i++) {
            fibonac[i] = fibonac[i - 2] + fibonac[i - 1];
        }
        return fibonac.join(', ') + "...";
    }else{
        fibonac[0] = 0;
        return fibonac.join() + "...";
    }
}
console.log(fibonacci(0));