function fatorial(number){
    let resultado = 1;
    let fator = `${number}! = `;

    for(let i = number; i > 0; i--){
        resultado *= i;
        fator += `${i}`;

        if(i > 1){
            fator = fator + ` X `;
        }
    }
    fator = fator + ` = ${resultado}`;
    return fator;
}
console.log(fatorial(2));