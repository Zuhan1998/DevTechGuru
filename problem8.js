//loop in 1000 strong arms

for(let r=0;r<1000;r++){
    //const x = parseInt(prompt("Input Number"));
    let y1 = r%10 ;
    let y2 = (r/10) ;
    y2 = parseInt(y2%10) ;
    let y3 = (r/100) ;
    y3 = parseInt(y3%10) ;
    /*console.log(`first digit ${y1}`);
    console.log(`second digit ${y2}`);
    console.log(`third digit ${y3}`);*/
    let z1=y1*y1*y1;
    let z2=y2*y2*y2;
    let z3=y3*y3*y3;

    let num = z1+z2+z3;
    if(num == r){
        console.log(`${r} is armstrong`);
    }
}