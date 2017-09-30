// JavaScript Document//////////////////PROBLEM 1////////////////////


//Create a function called isWeekEnd that accepts a day of the week (Monday - Sunday) as its only parameter.
//If the argument you passed in is equal to 'Saturday', return true. If it's not, return false.

function isWeekEnd(day){);} 
 	if (day == 'Saturday') {
		return true;
	}
	else {
		return false;
	}

//tests
isWeekEnd("Friday");
isWeekEnd("Tuesday");
isWeekEnd("Saturday");

//////////////////PROBLEM 2////////////////////


//Use the same function in problem 1 and check to see if day is equal to Saturday or Sunday. Return true or false.

function isWeekEnd(day) {
	if (day == 'Saturday' || day == 'Sunday') {
		return true;
	}
	else {
		return false;
	}
}

////test
isWeekEnd("Sunday");
isWeekEnd("Wednesday");


//////////////////PROBLEM 3////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

function getName(){
	var person = prompt("Please enter name")
	return person;
}
getName()


//////////////////PROBLEM 4////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome(){
	var result=getName();
	alert("Welcome, "+ result);
}



//////////////////PROBLEM 5////////////////////



//Create a function called myName that returns your name

function myName(){
	return "Laura"
}
 
myName();


//Now save the function definition of myName into a new variable called newMyName

var newMyName == myName();

//Now alert the result of invoking newMyName

alert(newMyName);

//////////////////PROBLEM 6////////////////////



//Create a function  to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

function sumTriple(x,y){
	if (x == y){
		return 3 * (x + y)
	}
	else{
		return (x + y)
	}
	
}

console.log(sumTriple(10, 20));
console.log(sumTriple(10,10));



//////////////////PROBLEM 7////////////////////



//Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.

function test50(x,y)
{
	return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(test50(50, 50))
console.log(test50(20, 50))
console.log(test50(20, 20))
console.log(test50(20, 30))