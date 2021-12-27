//incomplete prime number
const n = parseInt(prompt(`enter number`));
let count=0;
for(let i=1;i<n+1;i++){
    if(n%i==0)
    count++;
}if(count==2){
    console.log(`prime`);
}else
    console.log(`not prime`);    

