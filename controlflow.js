//Example of 'if'.'else if', and 'else' statements
let age=18;
if(age<18){
    console.log("You are a minor.");
}
else if(age>=10&&age<65){
    console.log("You are an abult.");
}
else{
    console.log("You are a senior citizen.");
}
console.log("\n");
//Example of 'swicth' ststement
let day=3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");                            
}
console.log("\n");
//Edxample of loop
for(let i=0;i<5;i++){
    console.log("Iteration:",i);
}
console.log("\n");
//Example of 'while' loop
let j=0;
while(j < 5) {
    console.log("While loop Iteration:",j);
    j++;
}
console.log("\n");
//Example of 'do...while' loop
let k=0;
do{
    console.log("Do...while Loop Iterartion:",k);
    k++;
}while(k<5);