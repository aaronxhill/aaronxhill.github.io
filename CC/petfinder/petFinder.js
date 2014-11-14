
var buttonOneYesStatus = false; 
var buttonOneNoStatus = false; 
var buttonTwoYesStatus = false; 
var buttonTwoNoStatus = false; 


window.onload = function () {
	var buttonOneYesClick = document.getElementById('buttonOneYes'); 
	buttonOneYesClick.addEventListener('click', buttonOneYesClicked);

	var buttonOneNoClick = document.getElementById('buttonOneNo'); 
	buttonOneNoClick.addEventListener('click', buttonOneNoClicked);
	
	var buttonTwoYesClick = document.getElementById('buttonTwoYes'); 
	buttonTwoYesClick.addEventListener('click', buttonTwoYesClicked);

	var buttonTwoNoClick = document.getElementById('buttonTwoNo'); 
	buttonTwoNoClick.addEventListener('click', buttonTwoNoClicked);
}

function buttonOneYesClicked () {
	if (buttonOneYesStatus == false) {
		document.getElementById('buttonOneYes').setAttribute('id', 'buttonOneYesClicked');
		
		if (buttonOneNoStatus == true) {
			document.getElementById('buttonOneNoClicked').setAttribute('id', 'buttonOneNo');
		}
		
		buttonOneYesStatus = true;
		buttonOneNoStatus = false;
		
		showResults()
	}
}

function buttonOneNoClicked () {
	if (buttonOneNoStatus == false) {
		document.getElementById('buttonOneNo').setAttribute('id', 'buttonOneNoClicked');
		
		if (buttonOneYesStatus == true) {
			document.getElementById('buttonOneYesClicked').setAttribute('id', 'buttonOneYes');
		}

		buttonOneNoStatus = true; 
		buttonOneYesStatus = false; 
		
		showResults()
	}
}

function buttonTwoYesClicked () {
	if (buttonTwoYesStatus == false) {
		document.getElementById('buttonTwoYes').setAttribute('id', 'buttonTwoYesClicked');
		
		if (buttonTwoNoStatus == true) {
			document.getElementById('buttonTwoNoClicked').setAttribute('id', 'buttonTwoNo');
		}
		
		buttonTwoYesStatus = true;
		buttonTwoNoStatus = false;
		
		showResults()
	}
}

function buttonTwoNoClicked () {
	if (buttonTwoNoStatus == false) {
		document.getElementById('buttonTwoNo').setAttribute('id', 'buttonTwoNoClicked');
		
		if (buttonTwoYesStatus == true) {
			document.getElementById('buttonTwoYesClicked').setAttribute('id', 'buttonTwoYes');
		}

		buttonTwoNoStatus = true; 
		buttonTwoYesStatus = false; 
		
		showResults()
	}
}

function showResults () {
	if (buttonOneNoStatus == true && buttonTwoNoStatus == true) {
		document.getElementById('results').innerHTML = "<h2>The best pet for you...</h2>"+ 
		"<h2>TURTLE!</h2>" + 
		'<img src="turtle.jpg" />'; 
		document.getElementById('outerContainer').innerHTML = '';
	}
	
	else if (buttonOneNoStatus == true && buttonTwoYesStatus == true) {
		document.getElementById('results').innerHTML = "<h2>The best pet for you...</h2>"+
		"<h2>CAT!</h2>" + 
		'<img id="catPhoto" src="cats.jpg" />';
		document.getElementById('outerContainer').innerHTML = '';
 
	}
	
	else if (buttonOneYesStatus == true && buttonTwoYesStatus == true) {
		document.getElementById('results').innerHTML = '<h2>The best pet for you...</h2>'+
		'<h2>DOG!</h2>' + 
		'<img src="dog.jpg" />    ';
		document.getElementById('outerContainer').innerHTML = '';
	}
	
	else if (buttonOneYesStatus == true && buttonTwoNoStatus == true) {
		document.getElementById('results').innerHTML = '<h2>The best pet for you...</h2>'+
		'<h2>SEAL!</h2>' +
		'<img src="seal.jpg" />';
		document.getElementById('outerContainer').innerHTML = '';
	}
}



