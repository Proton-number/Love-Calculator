function face() {	
var Lovescore = Math.random() * 100;
Lovescore = Math.floor(Lovescore)  + 1;
alert("The love score between " + document.getElementById("name1").value + " and " + document.getElementById("name2").value + " is " + Lovescore + "%" );
	}