function intervalo(a , b){
    let num = [];
    if(b > a){
        for(let i = a; i <= b; i++){
            num.push(i);
        }
        return  num;
    }else {
        for(let i = b; i <= a; i++){
            num.push(i);
        }
        return num.reverse();
    }
}
console.log(intervalo(0, -5));
