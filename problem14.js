//number of vowels
var str = prompt(`enter string`);
var vow = ["a","e","i","o","u"];
var count=0;
for(let i=0;i<str.length;i++){
    for(let j=0;j<vow.length;j++){
    if(str[i] == vow[j])
    count++;
    }
}
console.log(`number of vowels is ${count}`);

