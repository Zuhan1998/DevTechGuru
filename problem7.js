//incomplete fibonacci
// const n = parseInt(prompt(`enter number`));
var x = [] ;

for(var i=2; i<10; i++)
{ 
    x[0]=0;
    x[1]=1;
    x[i] = x[i-2] + x[i-1];
    console.log(x[i]);
}