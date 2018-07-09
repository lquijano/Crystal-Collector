$(document).ready(function(){
  var Random=Math.floor(Math.random()*40;
// This will generate a random number between 0-40

$('#randomNumber').text(Random);
// this will print the random number to the div named randomNumber

var crystal1= Math.floor(Math.random()*11+1)
var crysta2= Math.floor(Math.random()*11+1)
var crysta3= Math.floor(Math.random()*11+1)
var crysta4= Math.floor(Math.random()*11+1)
// this is suppose to set up random numbers for each crystal from 1-12

var userTotal= 0;
var wins= 0;
var losses = 0;
// As i click on buttons these counters will increase

$('#numberWins').text(wins);
$('#numberLosses').text(losses);
// This will print the counter in the Divs displaying it to the userTotal

//resets the game
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      totalScoreCounter= 0;
      $('#finalTotal').text(userTotal);
      }

function winning(){
  alert("You won!");
    wins++;
    $('#numberWins').text(wins);
    reset();
  }

function youSuck(){
  alert ("You suck!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
  //sets up click for jewels
    $('#one').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
            //sets win/lose conditions
          if (userTotal == Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          }
    })
    $('#two').on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
          if (userTotal == Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          }
    })
    $('#three').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
  //sets win/lose conditions
            if (userTotal == Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          }
    })
    $('#four').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);

            if (userTotal == Random){
            yay();
          }
          else if ( userTotal > Random){
            loser();
          }
    });
  });
