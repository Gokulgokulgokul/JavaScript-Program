//tagname
console.log(document.getElementsByTagName("h1"))
console.log(document.getElementsByTagName("h1").length)

//id
console.log(document.getElementById("idg"))

//classname
console.log(document.getElementsByClassName("cl"));

//queryselector;
console.log(document.querySelector("h1"));  
console.log(document.querySelector(".cl"));  
console.log(document.querySelector("#idg"));


//querySelectorAll
console.log(document.querySelectorAll("li"))
var a=document.querySelectorAll("li");
for(let i=0;i<a.length;i++)
{
    console.log(a[i]);
}
var ch1=document.getElementById("yellow");
var ch2=document.getElementsByClassName("green");
var ch3=document.getElementsByTagName("h4");
var ch4=document.querySelector(".blue");
var ch5=document.querySelectorAll(".teal")
function change()
{
    ch1.setAttribute("style", "background-color: red;");
    // ch2.setAttribute("style", "background-color: red;");
    ch4.setAttribute("style", "background-color: red;");
    
  ch5.forEach(Ele=>{
Ele.style.backgroundColor="red";
Ele.textContent="teal";
  })
    


}




    
