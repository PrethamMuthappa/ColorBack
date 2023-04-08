let mycolors=["Red","Green","Blue","Orange","Cyan","Pink"];

const butn=document.getElementById("butn");
const color=document.getElementById("color");

butn.addEventListener("click",function(){

const randnumber=randnum();

 document.body.style.backgroundColor=mycolors[randnumber]
 color.textContent=mycolors[randnumber ]
})

randnum=()=>{
 
    return Math.floor(Math.random()* mycolors.length)

}