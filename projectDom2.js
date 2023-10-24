var main=document.querySelector("#main")
var crsr=document.querySelector(".crusor")
var crsr1=document.querySelector(".crusor1")
var crsr2=document.querySelector(".crusor2")

main.addEventListener("mousemove",function(ashish)
{
    crsr.style.left=ashish.x+"px"
    crsr.style.top=ashish.y+"px"
})
main.addEventListener("mousemove",function(ashish)
{
    
    crsr1.style.left=ashish.x+"px"
    crsr1.style.bottom=ashish.y+"px"
})
main.addEventListener("mousemove",function(deatails)
{
    
    crsr2.style.left=deatails.x+"px"
    crsr2.style.top=deatails.y+"px"
})
//here the argument clarify the deatails of the crusor ,it is movning in whixh direction


//for the direction purpose im using x axis and y axis 
