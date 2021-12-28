//calculator

//var operation = ['+','-','*','/','%','sqr','sq'];
var operation = prompt();
switch(operation){
    case "+":
        var x = parseInt(prompt(`insert number`));
        var y = parseInt(prompt(`insert second number`));
        let sum = x+y;
        console.log(sum);
        break;
    case "-":
        var x = parseInt(prompt(`insert number`));
        var y = parseInt(prompt(`insert second number`));
        let sub= x+y;
        console.log(sub);
        break;
    case "*":
        var x = parseInt(prompt(`insert number`));
        var y = parseInt(prompt(`insert second number`));
        let mul= x*y;
        console.log(mul);
        break;
    case "/":
        var x = parseInt(prompt(`insert number`));
        var y = parseInt(prompt(`insert second number`));
        let div= x/y;
        console.log(div);
        break;
    case "%":
        var x = parseInt(prompt(`insert number`));
        var y = parseInt(prompt(`insert second number`));
        let rem = x%y;
        console.log(rem);
        break;
    case "sqr":
        var x = parseInt(prompt(`insert number`));
        let root = Math.sqrt(x);
        console.log(root);
        break;
    case "sq":
        var x = parseInt(prompt(`insert number`));
        let square = x*x;
        console.log(square);
        break;
}
