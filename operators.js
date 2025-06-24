//1.Aritmhetic Operatiors
//Arithmetic operators are used to perform mathematical operators

let a=10;
let b=5;
console.log("Arthmetic Operators:");
console.log("a=",a,"b=",b);
let sum=a+b;
let difference=a-b;
let product=a*b;
let quotient=a/b;
let remainder=a%b;
let exponent=a**b;
console.log("Arthmetic Operation");
console.log("Sum:",sum);
console.log("Difference:",difference);
console.log("Product:",product);
console.log("Quotient:",quotient);
console.log("Remainder:",remainder);
console.log("Exponent:",exponent);
console.log("\n");


//2.Assignment Operators
let x=10;
x+=5;
x-=5;
x*=5;
x/=5;
x%=5;
console.log("Assignment Opertors: ");
console.log("x after assignment:",x);
console.log("\n");

//3.Comparison Operators
let isEqual=(a==b);
let isStrictEqual=(a===b);
let isNotEqual=(a!=b);
let isStrictNotEqual=(a!==b);
let isGreaterthan=(a>b);
let isLessThan=(a<b);
let isGretaerThanOrEqaul=(a>=b);
let isLessThanOrEqual=(a<=b);
console.log("Comparison Operators:");
console.log("Is Equal:",isEqual);
console.log("Is Scrict Equal:",isStrictEqual);
console.log("Is Not Equal:",isNotEqual);
console.log("Is Strict Nopt Equal:",isStrictNotEqual);
console.log("Is Greater Than:", isGreaterthan);
console.log("Is Less Than:",isLessThan);
console.log("Is Greater Than or Equal:", isGretaerThanOrEqaul);
console.log("Is Less Than or Equal:",isLessThanOrEqual);
console.log("\n");



//4.Logical Opereartors
let andOperator=(a>0&&b>0);
let orOperator=(a>0||b<0);
let notOperartor=!(a<b);
console.log("Logical Operator:");
console.log("AND Opertors:",andOperator);
console.log("OR OPerators:",orOperator);
console.log("NOT Operator:",notOperartor);
console.log("\n");

//5.Bitwise Operators
let bitwiseAnd=a&b;
let bitwiseOr=a|b;
let bitwiseXor=a^b;
let bitwiseNot=~a;
let leftShift=a<<1;
let rightShift=a>>1;
console.log("Bitwise Operators:");
console.log("Bitwise And:",bitwiseAnd);
console.log("Bitwise Or:",bitwiseOr);
console.log("Bitwise XOR:",bitwiseXor);
console.log("Bitwise Not:",bitwiseNot);
console.log("Left shift:",leftShift);
console.log("Right shift:",rightShift);
console.log("\n");


//6.Ternary Operator
let age=18;
let eligibility=(age>18)? "Eligible to vote":"Not Eligible to vote";
console.log("Tenary Operator:");
console.log("Eligibility:",eligibility);
console.log("\n");


//7. Typeof Operator
//The typeof opertor is used to detrmine thr type of a variable or value
let variableType = typeof a;
console.log("Typeof Operator:");
console.log("Type of variable 'a':",variableType);
console.log("\n");