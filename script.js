let selector1=document.getElementById("text");
let selector2=document.getElementsByTagName("h1");
let selector3 =document.getElementsByClassName("box");
let selector4=document.getElementsByTagName("h1");
let selector5=document.getElementsByClassName("content");
let selector6=document.getElementsByTagName("h1");
let selector7_1=document.getElementsByClassName("questionBoxContainer");
let selector7_2=document.getElementsByTagName("button");
let hour=document.getElementById("hh");
let minute=document.getElementById("mm");
let second=document.getElementById("ss");
let ampm=document.getElementById("ampm");
// question 1
console.log(selector1);
selector1.innerHTML=selector1;
// question 2
console.log(selector2[0]);
selector2[0].innerHTML=selector2[0];
// question 3
console.log(selector3[0]);
selector3[0].innerHTML=selector3[0];
// question 4

selector4[1].addEventListener('click',()=>{
    selector4[1].innerHTML="hello world";
})
// question 5

function changeContent5(){
    selector5[0].innerHTML=  "Welcome to Elevation academy";
    
 }
// question 6
selector6[2].addEventListener('click',()=>{
selector6[2].setAttribute("style","color:red");
selector6[2].setAttribute("id","heading");
})
// question 7
let flag=0;
selector7_2[1].addEventListener('click',()=>{
    if(flag%2===0)selector7_1[0].style.flexDirection="row";
    else selector7_1[0].style.flexDirection="column";
    flag++;
})
// question 9
function clock(){
    let time =new Date();
    let tempHour=time.getHours();
     minute.innerHTML=`${time.getMinutes()} :`;
     second.innerHTML=time.getSeconds();
    if(tempHour>=12){
     hour.innerHTML=`${tempHour-12} :`;
     ampm.innerHTML=": PM";
    }else{ 
    hour.innerHTML=`${tempHour} : `;
    ampm.innerHTML=": AM";
     }
}
setInterval(()=>{
   clock()
    }, 1000);



// question 10
