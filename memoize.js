const memoize = (fn) => {
    const cache = {};
    return function (...args){
        const context = this;
        const keyArgs = JSON.stringify(args)

        if(keyArgs in cache){
            console.log("From cache")
            return cache[keyArgs];
        }else{

            console.log("computing..")
            cache[keyArgs] = fn.apply(context, args)
            return cache[keyArgs];
        }
    }
}
// Don't do this way
const fn = (n) => {
    if(n === 0){
        return 1;
    }
    return n * fn(n-1); // this is calling original function not memoized version
}
const memoizedfn = memoize(fn); // 

const factorial = memoize((n) => {
    if(n === 0){
        return 1;
    }
    return n * factorial(n-1);
})


console.log(factorial(5))
console.log(factorial(5))
console.log(factorial(4))
console.log(factorial(3))

