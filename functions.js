


function onload(){

	  
}
var ships =[];

function buyShip(buyButton){
	var shipName = buyButton.name;
	console.log(shipName);
	var shipCount = parseInt(document.getElementById("owned_"+shipName).innerHTML);
	shipCount++;
	document.getElementById("owned_"+shipName).innerHTML = shipCount;
}



// -------------------------------------------------------- PHP Kod 
/* $.post( "php/php.php",   { 
		value: "test", 
		value2: "test2"
		},
	function( data ) {
		console.log(data);
		
	}); */