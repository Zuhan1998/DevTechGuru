//Farenheit to Celsius using Functions
const n = parseInt(prompt(`enter temperature`));
let x = conversion(n);
console.log(x);
function conversion(t){
    let y= (t-32)/1.8;
    return y.toFixed(1);
}