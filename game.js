document.write("0");

// first step is to generate a random number this is done by using the random number function 
var randomNumber= Math.random()*(120-19)+19;

// crystal should have a random hidden value between 1-12 
var img1= Math.random()*(12-1)+1;
var img2= Math.random()*(12-1)+1;
var img3= Math.random()*(12-1)+1;
var img4= Math.random()*(12-1)+1;


// The player will then click on a crystal to add specific amount of points to the total score 
// I must create a function to add the points to the total score

function sum1() {
  var total = 0;
  for (var i=1; i<=5; i++) {
    total += Number(document.getElementById('total score'+i).value);
  }
  return total;
}
// Now i must create a method because the property's value is a function 
// so the game can hide the amount the crystal is worth until Crystal is clicked

$("button").click (function() {
	$("total").hide();

});
$ ("button").click(function(){
	$("total").show()

});

// the player wins if their total score matches the random number from the start of game
// need to create an if statment 
if (total ().randomNumber = 120)() {
	alert ("You win");
}

if (total ().random > 120)() {
	alert ( "You lose");

}

//Create a reset function to generate a new random number 
//the reset function should include all the variables 
var reset= function() {
	if (total().random =120);
	if (total().random >120);

};

