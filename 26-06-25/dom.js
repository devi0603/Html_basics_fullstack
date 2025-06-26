document.title="NEW dom file";
document.getElementById("Head1").innerHTML="Hello, World!";
document.getElementById("para1").style.color="red";
document.body.style.backgroundColor="White";
document.getElementById("para1").innerHTML="Welcome to JS";
document.getElementsByTagName("h1")[1].style.color="blue";
let mahesh=document.getElementsByClassName("ds");
mahesh[0].style.color="red";
mahesh[1].style.color="Green";
mahesh[2].style.color="Orange";
mahesh[3].style.color="blue";

//document.getElementsByClassName("ds")[0].style.color="green";
//document.getElementsByClassName("ds")[1].style.color="green";
//document.getElementsByClassName("ds")[2].style.color="orange";
//document.getElementsByClassName("ds")[3].style.color="red";
//document.getElementsByClassName("ds")[4].style.color="pink"; 

//style element by queryselctor
document.querySelector(".dsa").style.color="Red";
// style elements using  querySElectorAll
let element =document.querySelectorAll(".EB");
element[0].style.color="Red";
element[1].style.color="Green";
element[2].style.color="Blue";
element[3].style.color="Orange";
//function to toggle background color
//function changeBackground(){
  // if  (document.body.style.backgroundColor === "pink"){
   //document.body.style.backgroundColor="orange";
//}
//else {
  //  document.body.style.backgroundColor="pink";
//}
//}
function changeBackground() {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === "lightblue" ? "red" : "yellow";
}
function changetext() {
    document.getElementById("clg").innerHTML = "CMRCET,CMREC";
    document.getElementById("clg").style.backgroundColor = "coral";
    document.getElementById("clg").style.fontSize = "30px";
    document.getElementById("clg").style.textAlign = "center";
    document.getElementById("clg").style.padding = "15px";  // This line adds padding
}
