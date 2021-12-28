//number of money notes in amount
var amount = parseInt(prompt(`sum of money`));
var taka = [1000,500,200,100,50,20,10,5,2,1];

if(amount%taka[0]>=0){
    let x = Math.trunc(amount/taka[0]);
    amount = amount%taka[0];
    console.log(`${x} number of ${taka[0]} notes`)
}
if(amount%taka[1]>=0){
    let x = Math.trunc(amount/taka[1]);
    amount = amount%taka[1];
    console.log(`${x} number of ${taka[1]} notes`)
}
if(amount%taka[2]>=0){
    let x = Math.trunc(amount/taka[2]);
    amount = amount%taka[2];
    console.log(`${x} number of ${taka[2]} notes`)
}
if(amount%taka[3]>=0){
    let x = Math.trunc(amount/taka[3]);
    amount = amount%taka[3];
    console.log(`${x} number of ${taka[3]} notes`)
}
if(amount%taka[4]>=0){
    let x = Math.trunc(amount/taka[4]);
    amount = amount%taka[4];
    console.log(`${x} number of ${taka[4]} notes`)
}
if(amount%taka[5]>=0){
    let x = Math.trunc(amount/taka[5]);
    amount = amount%taka[5];
    console.log(`${x} number of ${taka[5]} notes`)
}
if(amount%taka[6]>=0){
    let x = Math.trunc(amount/taka[6]);
    amount = amount%taka[6];
    console.log(`${x} number of ${taka[6]} notes`)
}
if(amount%taka[7]>=0){
    let x = Math.trunc(amount/taka[7]);
    amount = amount%taka[7];
    console.log(`${x} number of ${taka[7]} notes`)
}
if(amount%taka[8]>=0){
    let x = Math.trunc(amount/taka[8]);
    amount = amount%taka[8];
    console.log(`${x} number of ${taka[8]} notes`)
}
if(amount%taka[9]==0){
    let x = Math.trunc(amount/taka[9]);
    amount = amount%taka[9];
    console.log(`${x} number of ${taka[9]} notes`)
}
