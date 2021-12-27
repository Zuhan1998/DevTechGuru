    //normal armstrong and incomplete loop armstrong
    const x = parseInt(prompt("Input Number"));
    let y1 = x%10 ;
    let y2 = (x/10) ;
    y2 = parseInt(y2%10) ;
    let y3 = (x/100) ;
    y3 = parseInt(y3%10) ;
    console.log(`first digit ${y1}`);
    console.log(`second digit ${y2}`);
    console.log(`third digit ${y3}`);
    let z1=y1*y1*y1;
    let z2=y2*y2*y2;
    let z3=y3*y3*y3;

    let num = z1+z2+z3;
    if(num == x){
        console.log(`armstrong`);
    }else{
        console.log(`armweak`);
    }
    /*const n = parseInt(prompt(`input no.`));
    var x = num ; 
    var sum = 0;
    for(let i=0;i<=num;i++){
        let k = x % 10 ;
        z = k*k*k;
        sum = sum + z;
        x = parseInt((x/10));
        if (n = sum)
        console.log(`armstrong`);
        else
        console.log(`armweak`);
    }*/
    