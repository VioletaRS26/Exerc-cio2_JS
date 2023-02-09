function agrupamento(array){
    let cont1 = 0;
    let cont2 = 0;
    let cont3 = 0;
    let cont4 = 0;
    let cont0 = 0;
    let result = [];
    for(let i = 0; i <array.length; i++){
        if(array[i] < 0 || array[i] > 100){
            cont0 ++;
        } else if(array[i] <= 25){
            cont1 ++;
        } else if (array[i] <= 50){
            cont2 ++;
        } else if (array[i] <= 75){
            cont3 ++;
        } else{
            cont4 ++;
        }
    }
    result[0] = cont1;
    result[1] = cont2;
    result[2] = cont3;
    result[3] = cont4;

    return result;
}
console.log(agrupamento([10, 5, 80, 60, 25, 99, 81, 92]));