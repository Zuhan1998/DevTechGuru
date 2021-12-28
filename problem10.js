//string length
let str = prompt(`enter word`);
console.log(`${str.length}`);

//str reverse
let str = prompt(`enter string`);
var word = [];
word = [str.length];
word = Array.from(str);
var drow = [];
let i;
let j;

for(j=str.length-1,i=0;j>=i,j>=0;j--,i++){
    drow[j]=word[i];
}

let rst;
rst = drow.join("");
console.log(`${rst}`);