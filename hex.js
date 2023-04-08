const hexvalue=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

const butn=document.getElementById("butn");
const color=document.getElementById("color")

butn.addEventListener("click",function(){
   
    hex="#"
    for(let i=0;i<6;i++)
    {
        hex+=hexvalue[randnum()]
    }

    document.body.style.backgroundColor=hex
    color.textContent=hex
})


randnum=()=>{

    return Math.floor(Math.random() * hexvalue.length)
}