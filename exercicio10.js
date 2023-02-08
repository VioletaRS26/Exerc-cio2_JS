function febre(numeros){
    let tem = []
    numeros = [];

    for(let i = 0; i <= numeros.length; i++){
        if(numeros >= 41){
            
            tem[i] = ("Hipertermia");
        }else if(numeros >= 39.6 && numeros < 41){
            tem[i] = ("Febre Alta");
        }else if(numeros>= 37.8 && numeros < 39.6){
            tem[i] = ("Febre");
        }else if (numeros  >= 35.1 && numeros < 37.8){
            tem[i] = ("Normal");
        }else if(numeros <= 35){
            tem[i] = ("Hipotermia");
        }
    }
    return tem; 
}
console.log(febre([35.41, 33.12, 41.06, 38.9, 40.22]));