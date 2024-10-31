const fibonacci = function(term){
    term = parseInt(term);
    if(term == 0){
        return(0);
    }
    if(term < 0){
        return('OOPS');
    }
    let fib1 = 1;
    let fib2 = 1;
    for(let i = 0; i < term; i++){
        let control = 0;
        if(i > 1){
            control = fib2;
            fib2 = fib1 + fib2;
            fib1 = control;
        }
}
    return(fib2);
}
module.exports = fibonacci;