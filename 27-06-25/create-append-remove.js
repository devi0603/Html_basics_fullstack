let aish=document.createElement("p");
aish.textContent="I'm Chitti";
aish.innerHTML="Memory 1 Tera Byte";
aish.style.color="blue";
aish.style.fontSize="20px";
document.getElementById("vasi").appendChild(aish);
let sana=document.getElementsByClassName("list")[3];
    if(sana){
        sana.remove();
    }

//remove  element example:remove the first .info paragraph 
setTimeout(()=>{
    let re=document.getElementsByClassName("list")[3];
    if(re){
        re.remove();
    }
 },2000);
 let newHeading=document.createElement("h2");
 newHeading.innerHTML="This is a new heading added by Javascript!";
 newHeading.style.color="purple";
 newHeading.style.fontSize="24px";
 document.body.appendChild(newHeading);
 //Appen the text after 3 seconds
 setTimeout(()=>{
    let newText=document.createElement("p");
    newText.textContent="This text is added after 3 seconds!";
    newText.style.color="green";
    document.body.appendChild(newText);
 },3000);
 //Append text to tag
 let tagText=document.createElement("p");
 tagText.textContent="This text is appended to the tag!";
 tagText.style.color="orange";
 document.getElementById("vasi").appendChild(tagText);
 // Create a list,add items,and remove one
 let List=document.createElement("ul");
 for(let i=1;i<=3;i++){
    let listitmes=document.createElement("li");
    listitmes.textContent='Item ${i}';
    myList.appendChild(li);
    document.body.appendChild(List);
 }