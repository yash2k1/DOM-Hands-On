 let bg= document.getElementsByClassName("gameContainer");
 let rightNumber=document.getElementsByClassName("rightNumber");
 let input=document.getElementById("guessNumber"); 
 let numberStatus=document.getElementById("numberStatus"); 
 let chances=document.getElementById("chances"); 
 let highscore=document.getElementById("highscore");
 let check=document.getElementById("check");
 
// logic
console.log(bg[0]);
highscore=0;
let random=parseInt(10*Math.random()+1);
function checkNumber(){
if(input.value==random){
    bg[0].style.backgroundColor="green";
    numberStatus.innerHTML=" &#128525; &#128525; hurray you won &#128525; &#128525; "
    check.style.display="none";
    rightNumber[0].innerHTML=random;
    highscore.innerHTML++;
}
else if(input.value>random){
    numberStatus.innerHTML=" Your Guess Is High "
    chances.innerHTML--;
    highscore.innerHTML++;
}
else {
    numberStatus.innerHTML="Your Guess Is Low";
    chances.innerHTML--;
    highscore.innerHTML++;
}

}