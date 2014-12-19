var feminineStatus = false; 
var masculineStatus = false; 
var bothStatus = false; 
var punkStatus = false; 
var grungeStatus = false; 
var bohemianStatus = false; 
var prepyStatus = false; 



window.onload = function () {
	var feminineClick = document.getElementById('feminineButton'); 
	feminineClick.addEventListener('click', feminine);

	var masculineClick = document.getElementById('masculineButton'); 
	masculineClick.addEventListener('click',masculine);
	
	var bothClick = document.getElementById('bothButton'); 
	bothClick.addEventListener('click', both);

	var punkClick = document.getElementById('punkButton'); 
	punkClick.addEventListener('click', punk);
	
	var grungeClick = document.getElementById('grungeButton'); 
	grungeClick.addEventListener('click', grunge);
	
	var bohemianClick = document.getElementById('bohemianButton'); 
	bohemianClick.addEventListener('click', bohemian);
	
	var prepyClick = document.getElementById('prepyButton'); 
	prepyClick.addEventListener('click', prepy);
}


function feminine () {
	if (feminineStatus == false) {
		document.getElementById('feminineButton').setAttribute('class', 'buttonClicked');
		document.getElementById('masculineButton').setAttribute('class', 'button');
		document.getElementById('bothButton').setAttribute('class', 'button');
				
		feminineStatus = true;
		masculineStatus = false;
		bothStatus = false;

		showResults()
	}
}

function masculine () {
	if (masculineStatus == false) {
		document.getElementById('feminineButton').setAttribute('class', 'button');
		document.getElementById('masculineButton').setAttribute('class', 'buttonClicked');
		document.getElementById('bothButton').setAttribute('class', 'button');
				
		feminineStatus = false;
		masculineStatus = true;
		bothStatus = false;
		
		showResults()
	}
}

function both () {
	if (bothStatus == false) {
		document.getElementById('feminineButton').setAttribute('class', 'button');
		document.getElementById('masculineButton').setAttribute('class', 'button');
		document.getElementById('bothButton').setAttribute('class', 'buttonClicked');
				
		feminineStatus = false;
		masculineStatus = false;
		bothStatus = true;
		
		showResults()
	}
}
	
function punk () {
	if (punkStatus == false) {
		document.getElementById('punkButton').setAttribute('class', 'buttonClicked');
		document.getElementById('grungeButton').setAttribute('class', 'button');
		document.getElementById('bohemianButton').setAttribute('class', 'button');
		document.getElementById('prepyButton').setAttribute('class', 'button');
				
		punkStatus = true;
		grungeStatus = false;
		bohemianStatus = false;
		prepyStatus = false; 

		showResults()
	}
}

function grunge () {
	if (grungeStatus == false) {
		document.getElementById('punkButton').setAttribute('class', 'button');
		document.getElementById('grungeButton').setAttribute('class', 'buttonClicked');
		document.getElementById('bohemianButton').setAttribute('class', 'button');
		document.getElementById('prepyButton').setAttribute('class', 'button');
				
		punkStatus = false;
		grungeStatus = true;
		bohemianStatus = false;
		prepyStatus = false; 

		showResults()
	}
}

function bohemian () {
	if (bohemianStatus == false) {
		document.getElementById('punkButton').setAttribute('class', 'button');
		document.getElementById('grungeButton').setAttribute('class', 'button');
		document.getElementById('bohemianButton').setAttribute('class', 'buttonClicked');
		document.getElementById('prepyButton').setAttribute('class', 'button');
				
		punkStatus = false;
		grungeStatus = false;
		bohemianStatus = true;
		prepyStatus = false; 

		showResults()
	}
}

function prepy () {
	if (prepyStatus == false) {
		document.getElementById('punkButton').setAttribute('class', 'button');
		document.getElementById('grungeButton').setAttribute('class', 'button');
		document.getElementById('bohemianButton').setAttribute('class', 'button');
		document.getElementById('prepyButton').setAttribute('class', 'buttonClicked');
				
		punkStatus = false;
		grungeStatus = false;
		bohemianStatus = false;
		prepyStatus = true; 

		showResults()
	}
}


function showResults () {
    if (feminineStatus || masculineStatus || bothStatus) {
    
        if (feminineStatus) {
            showResultsFeminine()
        }
        
        else if (masculineStatus) {
            showResultsMasculine()
        }
        
        else if (bothStatus) {
            showResultsBoth()
        }
    
    }  
}


function showResultsFeminine () {
	if (punkStatus == true && prepyStatus == false && bohemianStatus == false && grungeStatus == false) {
		document.getElementById('results').innerHTML = "<h2>What style should you wear</h2>"+ 
		"<h2>punkStatus!</h2>" + 
		'<img src="punkfeminine.jpg" />'; 
		document.getElementById('outerContainer').innerHTML = '';
	}
	
	else if (punkStatus == false && prepyStatus == true && bohemianStatus == false && grungeStatus == false) {
		document.getElementById('results').innerHTML = "<h2>What style should you wear</h2>"+
		"<h2>prepyStatus!</h2>" + 
		'<img id="catPhoto" src="prepyfeminine.jpg" />';
		document.getElementById('outerContainer').innerHTML = '';
 
	}
	
	else if (punkStatus == false && prepyStatus == false && bohemianStatus == true && grungeStatus == false) {
		document.getElementById('results').innerHTML = '<h2>What style should you wear</h2>'+
		'<h2>bohemianStatus!</h2>' + 
		'<img src="bohemianfeminine.jpg" />    ';
		document.getElementById('outerContainer').innerHTML = '';
	}
	
	else if (punkStatus == false && prepyStatus == false && bohemianStatus == false && grungeStatus == true) {
		document.getElementById('results').innerHTML = '<h2>What style should you wear</h2>'+
		'<h2>grungeStatus!</h2>' +
		'<img src="grungefeminine.jpg" />';
		document.getElementById('outerContainer').innerHTML = '';
	}
}

function showResultsMasculine () {
	if (punkStatus == true && prepyStatus == false && bohemianStatus == false && grungeStatus == false) {
		document.getElementById('results').innerHTML = "<h2>What style should you wear</h2>"+ 
		"<h2>punkStatus!</h2>" + 
		'<img src="punkmasculine.jpg" />'; 
		document.getElementById('outerContainer').innerHTML = '';
	}
	
	else if (punkStatus == false && prepyStatus == true && bohemianStatus == false && grungeStatus == false) {
		document.getElementById('results').innerHTML = "<h2>What style should you wear</h2>"+
		"<h2>prepyStatus!</h2>" + 
		'<img id="catPhoto" src="prepymasculine.jpg" />';
		document.getElementById('outerContainer').innerHTML = '';
 
	}
	
	else if (punkStatus == false && prepyStatus == false && bohemianStatus == true && grungeStatus == false) {
		document.getElementById('results').innerHTML = '<h2>What style should you wear</h2>'+
		'<h2>bohemianStatus!</h2>' + 
		'<img src="bohemianmasculine.jpg" />    ';
		document.getElementById('outerContainer').innerHTML = '';
	}
	
	else if (punkStatus == false && prepyStatus == false && bohemianStatus == false && grungeStatus == true) {
		document.getElementById('results').innerHTML = '<h2>What style should you wear</h2>'+
		'<h2>grungeStatus!</h2>' +
		'<img src="grungemasculine.jpg" />';
		document.getElementById('outerContainer').innerHTML = '';
	}
}




function showResultsBoth () {
	if (punkStatus == true && prepyStatus == false && bohemianStatus == false && grungeStatus == false) {
		document.getElementById('results').innerHTML = "<h2>What style should you wear</h2>"+ 
		"<h2>punkStatus!</h2>" + 
		'<img src="punkboth.jpg" />'; 
		document.getElementById('outerContainer').innerHTML = '';
	}
	
	else if (punkStatus == false && prepyStatus == true && bohemianStatus == false && grungeStatus == false) {
		document.getElementById('results').innerHTML = "<h2>What style should you wear</h2>"+
		"<h2>prepyStatus!</h2>" + 
		'<img id="catPhoto" src="prepyboth.jpg" />';
		document.getElementById('outerContainer').innerHTML = '';
 
	}
	
	else if (punkStatus == false && prepyStatus == false && bohemianStatus == true && grungeStatus == false) {
		document.getElementById('results').innerHTML = '<h2>What style should you wear</h2>'+
		'<h2>bohemianStatus!</h2>' + 
		'<img src="bohemianboth.jpg" />    ';
		document.getElementById('outerContainer').innerHTML = '';
	}
	
	else if (punkStatus == false && prepyStatus == false && bohemianStatus == false && grungeStatus == true) {
		document.getElementById('results').innerHTML = '<h2>What style should you wear</h2>'+
		'<h2>grungeStatus!</h2>' +
		'<img src="grungeboth.jpg" />';
		document.getElementById('outerContainer').innerHTML = '';
	}
}
