

var total=0;

function rollTheDice(){

var player=Math.floor(Math.random()*6)+1;
var num1=document.querySelector(".number").innerHTML = player;
var dice=`images/${player}.png`;
var img= document.querySelector('#img1').setAttribute('src', dice);

total += num1;
        if (total >= 30) {
          alert("You have won the game");
          total = 0;
        }
 document.querySelector(".score").innerHTML = `Your Total Score is ${total}`;

}