function receivesAFunction(get){
    return get()
}

function returnsANamedFunction(){
    return function name(){
        return 0;
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        return 0;
    }
}
