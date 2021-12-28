//largest string from array
var str = [];
const n = parseInt(prompt(`enter number of strings`));
for(let i=0; i<n; i++){
    str[i] = prompt(`enter string`);
    console.log(str[i]);
}
var num = [];
for(i=0;i<n;i++){
    num[i]=str[i].length;
    console.log(`${num[i]} is the length of ${str[i]}`);
}
var max=str[0];
for(i=1;i<n;i++){
if(str[i].length>=max.length){
    max=str[i];
    }
}console.log(`${max} is the largest string`);  
