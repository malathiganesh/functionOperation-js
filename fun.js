var a = parseInt(prompt("enter a number:"));
var b = parseInt(prompt("enter a number:"));
var op = prompt("enter a operator");
switch (op) {
    case '+':
        console.log("Result:", (a + b));
        break;
    case '-':
        console.log("Result:", (a - b));
        break;
    case '*':
        console.log("Result:", (a * b));
        break;
    case '/':
        console.log("Result:", (a / b));
        break;
    case 's':
        console.log("Result:", (a * a));
        console.log("Result:", (b * b));
        break;
    case 'p':
        console.log("Result:", (a ** b));
        break;
    case 'c':
        console.log("Result:", (a * a * a))
        console.log('Result:', (b * b * b));
    default:
        console.log("please enter a number:)");
}