function primo(num){
    for(let j = 2; j < num; j++){
        if(num % j === 0){
            return false
        }
    }
    if (num != 1){
        return true;
    }else if(num == 1){
        return false;
    }
    
}
console.log(primo(7));