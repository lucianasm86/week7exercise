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