export function divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number"){
        throw new TypeError("Both arguments must be numbers");
    }

    if(Number.isNaN(a) || Number.isNaN(b)){
        throw new TypeError("Arguments cannot be NaN");
    }

    if (a === 0 && b === 0){
        throw new RangeError("0 divided by 0 is undefined")
    }

    if (b === 0){
        throw new RangeError("Division by zero is not allowed");
    }

    return a / b;
}