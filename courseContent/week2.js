// JavaScript day 2

var Car = {

    Make: "Hyundai",
    Model: "Elantra",
    Year: 2010,
    Dents: 6,
    addDent: function(i){
            return this.Dents = this.Dents + i;
    }
}


console.log( 'Make: ' + Car.Make );
console.log( 'Model: ' + Car.Model );
console.log( 'Year: ' + Car.Year );
console.log( 'Dents: ' + Car.Dents );

console.log(Car.addDent(4))


var dog = {
	
	Fur: "Poofy",
	Ears: "Droopy",
	
	sayBark: function() {
       return " My fur is " this.Fur + "and my Ears are " + this.Ears + "bork bork";

}
	
	dog.sayBark.call(dog); 
	console.log( 'Fur: ' + dog.Fur );
	console.log( 'Ears: ' + dog.Ears );
	
	
	
////////radio	
	
var radio = {
	
	Type: "Analog",
	Volume: "30",
	Station: "90.9 FM"

var radio2 = {
	
	Type: "Digital",
	Volume: "10",
	Station: "902"
}
	
radio.Type.call(myObject);	
	
	
	
}


//////////////calculator

var calculator = {
	
	
	function Calculator() {
  this.square = function (x) {
    return x * x;
  }
}



	
	