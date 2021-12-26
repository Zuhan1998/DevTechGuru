//incomplete loop diye kora max
const x = parseInt(prompt("Input Number"));
    for (let i = 0; i<x+1 ; i++){
        let y = [];
        y[i] =  parseInt(prompt("input numbers"))
        let sum = sum + y[i];
        //console.log(`${y[i]}`)
    }console.log(`${sum}`);
    /*for(let i=0;i<length.y+1;i++){
        let z;
    for (i = y[0]; i<length.y; i++){
        z=x[i];
        if(z>x[i+1])
        console.log(`the largest number is ${z}`)
        else
        console.log(`searching`)
     }z=x[x+1];
    }*/

    /*const x = parseInt(prompt("First Number"));
    const y = parseInt(prompt("Second Number"));
    const z = parseInt(prompt("Third Number"));
    const u = parseInt(prompt("Fourth Number"));
    if(x>y){
        if(x>z && x>z && x>u){
            console.log(`${x} is the largest`)
        }
    }else if(y>u){
        if(y>z && y>u){
            console.log(`${y} is the largest`)
        }
    }else if(z>u){
            console.log(`${z} is the largest`)
    }else{
        console.log(`${u} is the largest`)
    }
    */