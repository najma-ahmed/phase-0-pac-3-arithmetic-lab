function add(a,b){
    const result =a + b
    return result;
}
function substract(a,b){
    const result = a - b
    return result;
}
substract()
function multiply(a,b){
    const result =a * b
    return result;
}
function divide(a,b){
    const result =a / b
    return result;
}
function makeInt(n){
    const parsed=parseInt(`${n}`,10);
    return `${parsed}`;
}
function increment (n){
    const nIncreament = (n+=1)
    return nIncreament
}
function decrement(n){
    const decrement = n;
    return decrement
}
function preserveDecimal (n){
    return parseFloat(n)
}
preserveDecimal()