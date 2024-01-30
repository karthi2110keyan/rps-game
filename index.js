/* computer chooose random rock,paper,scissor */

let x= document.getElementById("text");
let y= document.getElementById("text_one");
let z=document.getElementById("text_two");
let a=document.getElementById("win");
let b=document.getElementById("lose");
let c=document.getElementById("tie");
let rockImage=document.getElementById("rock")

let score={
  win:0,
  lose:0,
  tie:0
}



console.log(JSON.parse(localStorage.getItem('score')))


function game(){
  let randomChoice = Math.random()

let ramdomNumber =Math.floor( randomChoice * 10);

  let computerMove="";
  
if(ramdomNumber>=0 && ramdomNumber<4){

  computerMove ="rock";

}else if (ramdomNumber>=4 && ramdomNumber<7){
  computerMove="paper";
}else if(ramdomNumber>=7 && ramdomNumber<=10){
  computerMove="scissor"
}
return computerMove;
}





 function playerpick (playerMove){


   const computerMove= game();
   let result ="";
if(playerMove==="rock"){
      
    if("rock"===computerMove){
      result = "tie";
    }else if("paper"===computerMove){
      result ="lose";
    }else if("scissor"===computerMove){
      result ="win";
    }
   
}else if(playerMove==="paper"){

  

      if("paper"===computerMove){
      result = "tie";
    }else if("scissor"===computerMove){
      result ="lose";
    }else if("rock"===computerMove){
      result ="win";
    }

} else if(playerMove=== "scissor"){

    if("scissor"=== computerMove){
      result = "tie";
    }else if("rock"=== computerMove){
      result ="lose";
    }else if("paper"=== computerMove){
      result ="win";
    }

}

if ("win"===result){
  score.win += 1;
}else if("lose"===result){
  score.lose +=1;
}else if("tie"===result){
  score.tie +=1
}
let r=JSON.stringify(score)
localStorage.setItem("score",JSON.stringify(r));



a.textContent=score.win;
b.textContent=score.lose;
c.textContent=score.tie;
x.textContent=playerMove;

y.textContent=computerMove;
z.textContent=result;
}





