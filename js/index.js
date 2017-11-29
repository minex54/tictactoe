$(document).ready(function(){
  
  var turn = "X";
  
  var turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
  
  var computersTurn = "O";
  
  var gameOn = false;
  
  var count = 0;
  
  $("#turnX").click(function(){
    turn = "O"
    computersTurn = "X";
     $("#turnO").removeClass("btn-primary");
    $("#turnX").addClass("btn-primary");
    
    reset();
  });
  
  $("#turnO").click(function(){
    turn = "X"
    computersTurn = "O";
    $("#turnX").removeClass("btn-primary");
    $("#turnO").removeClass("btn-secondary");
    $("#turnO").addClass("btn-primary");
  
    reset();
  });
  
  function computerTurn(){
    var taken = false;
    while(taken === false && count !== 5){
      var computersMove = (Math.random()*10).toFixed();
      var move = $("#"+ computersMove).text();
      if(move === "#"){
        $("#"+computersMove).text(computersTurn);
        $("#"+computersMove).css("background-color", "grey");
        taken = true;
        turns[computersMove]=computersTurn;
       
      }
    }
  }
  
  
  function playerTurn(turn, id){
    var spotTaken =$("#"+id).text();
    if(spotTaken === "#"){
      count++;
      $("#" + id).text(turn);
       turns[id]=turn;
      
      
      winCondition(turns, turn);
     
      if(gameOn === false){
        computerTurn();
        winCondition(turns, computersTurn);
      }
    }
  }
  
  function winCondition (turnArray, currentTurn){
    
    if (turnArray[0] === currentTurn && turnArray[1]===currentTurn && turnArray[2] === currentTurn) {
      gameOn = true;
      
      $("#topDiv span").text("Player " + currentTurn + " wins!");
      setTimeout(function(){ $("#topDiv span").text(""); }, 2000);
      reset();
       $(".tic").css("background-color", "white");
    } 
     else if (turnArray[2] === currentTurn && turnArray[4]===currentTurn && turnArray[6] === currentTurn) {
      gameOn = true;
      
      $("#topDiv span").text("Player " + currentTurn + " wins!");
       setTimeout(function(){ $("#topDiv span").text(""); }, 2000);
       reset();
        $(".tic").css("background-color", "white");
    } 
    else if (turnArray[0] === currentTurn && turnArray[3]===currentTurn && turnArray[6] === currentTurn) {
      gameOn = true;
      
      $("#topDiv span").text("Player " + currentTurn + " wins!");
      setTimeout(function(){ $("#topDiv span").text(""); }, 2000);
      reset();
       $(".tic").css("background-color", "white");
      }
    else if (turnArray[0] === currentTurn && turnArray[4]===currentTurn && turnArray[8] === currentTurn) {
      gameOn = true;
      
      $("#topDiv span").text("Player " + currentTurn + " wins!");
      setTimeout(function(){ $("#topDiv span").text(""); }, 2000);
      reset();
       $(".tic").css("background-color", "white");
    } 
    else if (turnArray[1] === currentTurn && turnArray[4]===currentTurn && turnArray[7] === currentTurn) {
      gameOn = true;
      
      $("#topDiv span").text("Player " + currentTurn + " wins!");
      setTimeout(function(){ $("#topDiv span").text(""); }, 2000);
      reset();
       $(".tic").css("background-color", "white");
   
    } else if (turnArray[2] === currentTurn && turnArray[5]===currentTurn && turnArray[8] === currentTurn) {
      gameOn = true;
      
      $("#topDiv span").text("Player " + currentTurn + " wins!");
      setTimeout(function(){ $("#topDiv span").text(""); }, 2000);
      reset();
       $(".tic").css("background-color", "white");
    } else if (turnArray[3] === currentTurn && turnArray[4]===currentTurn && turnArray[5] === currentTurn) {
      gameOn = true;
      
      $("#topDiv span").text("Player " + currentTurn + " wins!");
      setTimeout(function(){ $("#topDiv span").text(""); }, 2000);
      reset();
       $(".tic").css("background-color", "white");
    } 
    else if(turnArray[6]===currentTurn && turnArray[7]===currentTurn && turnArray[8]===currentTurn){
        gameOn = true;
      
      $("#topDiv span").text("Player " + currentTurn + " wins!");
      setTimeout(function(){ $("#topDiv span").text(""); },2000);
      reset();
       $(".tic").css("background-color", "white");
    }
    else if(turnArray[0] !== "#" && turnArray[1] !== "#" && turnArray[2] !== "#" && turnArray[3] !== "#" && turnArray[4] !== "#" && turnArray[5] !== "#" && turnArray[6] !== "#" && turnArray[7] !== "#" && turnArray[8] !== "#" && turnArray[9] !== "#"){
      gameOn = true; 
    $("#topDiv span").text("It's a tie!!");
      setTimeout(function(){ $("#topDiv span").text(""); }, 2000);
      reset();}
    else {
      gameOn = false;
    }
  }
  
  
  
  $(".tic").click(function(){
    var slot = $(this).attr("id");
     $(this).css("background-color", "grey");
 playerTurn(turn, slot);
   
  });
  
  function reset(){
    $(".square").css("background-color", "white");
    turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
    count = 0;
    
    $(".tic").text("#");
    $()
   
    gameOn = true;
    
    
   
  };
  
});