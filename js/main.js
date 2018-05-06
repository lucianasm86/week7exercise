var myH1 = document.getElementById("myH1");
	myH1.innerText = "Tudo bem?";
var myNewH1 = document.getElementById("myNewH1");

function getInfo() {
	var userInput = document.getElementById("userInput").value;
	console.log(userInput);
		myNewH1.innerText = userInput;
}

var myArray = ["this", "is", "a", "string", "array"];

for (i = 0; i < myArray.length; i++) {
	console.log(myArray[i]);
}

var myObject = {
	name: "Luciana",
	age: 32,
	country: "Brazil"
};

console.log(myObject.name);
console.log(myObject.age);
console.log(myObject.country);


var heading1 = document.getElementById("heading1");
var heading2 = document.getElementById("heading2");
var heading3 = document.getElementById("heading3");


var array = [ 
	{
		city: "San Francisco",
		state: "California",
		country: "USA"
	},
	{
		city: "Recife",
		state: "Pernambuco",
		country: "Brazil"
	},
	{
		city: "Miami Beach",
		state: "Florida",
		country: "USA"
	}
];

for (i = 0; i < array.length; i++) {
	console.log(array[i].city);
	console.log(array[i].state);
	console.log(array[i].country);
}

document.body.style.color = "red";



