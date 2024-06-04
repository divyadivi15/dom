var randomNumber1 = Math.floor(Math.random()*5);


function player1()
{
if(randomNumber1===0)
{
    var randomImg1= document.querySelector(".player1 img").setAttribute("src","./image/dice1.png");
}
else if(randomNumber1===1)
{
    var randomImg1= document.querySelector(".player1 img").setAttribute("src","./image/dice2.png");
}

else if(randomNumber1===2)
{
    var randomImg1= document.querySelector(".player1 img").setAttribute("src","./image/dice3.png");
}
else if(randomNumber1===3)
{
    var randomImg1= document.querySelector(".player1 img").setAttribute("src","./image/dice4.png");
}
else if(randomNumber1===4)
{
    var randomImg1= document.querySelector(".player1 img").setAttribute("src","./image/dice5.png");
}
else
{
    var randomImg1= document.querySelector(".player1 img").setAttribute("src","./image/dice6.png");
}
return randomImg1;
}
var output=player1();


var randomNumber2 = Math.floor(Math.random()*5);

function player2()
{
if(randomNumber2===0)
{
    var randomImg2= document.querySelector(".player2 img").setAttribute("src","./image/dice1.png");
}
else if(randomNumber2===1)
{
    var randomImg2= document.querySelector(".player2 img").setAttribute("src","./image/dice2.png");
}
else if(randomNumber2===2)
{
    var randomImg2= document.querySelector(".player2 img").setAttribute("src","./image/dice3.png");
}
else if(randomNumber2===3)
{
    var randomImg2= document.querySelector(".player2 img").setAttribute("src","./image/dice4.png");
}
else if(randomNumber2===4)
{
    var randomImg2= document.querySelector(".player2 img").setAttribute("src","./image/dice5.png");
}
else
{
    var randomImg2= document.querySelector(".player2 img").setAttribute("src","./image/dice6.png");
}
return randomImg2;
}
var output2=player2();


var player= wins(randomNumber1,randomNumber2);
function wins(randomNumber1,randomNumber2)
{
 if(randomNumber1<randomNumber2)
 {
     var result= document.querySelector("h1").innerHTML='Player2 Wins!🚩';
 }
 else if(randomNumber1>randomNumber2)
 {
    var result= document.querySelector("h1").innerHTML='Player1 Wins!🚩';
 }
 else
 {
    var result= document.querySelector("h1").innerHTML='Draw!🚩';
 }
return result;
}
