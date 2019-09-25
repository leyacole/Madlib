// this how you make a function
function madlibs() {
	var adjective1 = prompt("Give me an adjective");
	var adjective2 = prompt("Give me another adjective");
	var ride = prompt("Favorite Carnival Ride");
	var restaurant = prompt("Favorite Restaurant");
	var game = prompt("Fave Game");
	var hobby = prompt("Fave Hobby");
	alert("Thank you for playing");

	$('.madlibs').html("A vacation is when you take a trip to some "+adjective1+" place with your "+adjective2+" family. Usually you go to some place that is near a "+ride+" or a "+restaurant+". A good vacation place is one where you can play "+game+" or "+hobby+"!");
}

// this is how you call a function

$('#start').click(function(){
	madlibs();
})

//clear function
function clear() {
	$('.madlibs').html("");
}

//clear button
$('#clear').click(function(){
	clear();
})

function techMadlib() {
	var adjective = prompt("Give me a adjective");
	var num = prompt("Give me a number");
	var noun = prompt("Give me a noun");
	var room = prompt("Give me a room in the house");
	var noun2 = prompt("Give me a plural noun");

	$('.madlibs').html("Since I use my computer everyday, it can get "+adjective+" really quickly. I usually clean it "+num+" times a day. My rountine consists of grabbing a soft "+noun+"  from the "+room+" and wiping down the keyboard to get rid of all the "+noun2+"!")

}

//Tech Madlib button
$('#tech').click(function(){
	techMadlib();
})

//Leya's Madlib
function leyaMadlib() {
	var adjective = prompt("Give me an adjective");
	var name = prompt("Give me a name");
	var adjective2 = prompt("Give me an adjective");

	$('.madlibs').html(" I "+adjective+" everyday in the park and see "+name+" all the time. He says what "+adjective2+" are you doing?")
}

//Leya Madlib button
$('#leya').click(function(){
	leyaMadlib();
})

