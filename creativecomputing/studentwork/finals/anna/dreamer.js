function enterName () {

    var entername = document.getElementById('namebox').value;

	return entername;
}

var bulbStat = false;
var birdStat = false;
var catStat = false;

var bulborbirdbodyStat = false;
var catbodyStat = false;

var bulbbodyStat = false;
var birdbodyStat = false;

window.onload = function () {
	var bulbClicks = document.getElementById('bulb'); 
	bulbClicks.addEventListener('click', bulbClick);

	var birdClicks = document.getElementById('bird'); 
	birdClicks.addEventListener('click', birdClick);
	
	var catClicks = document.getElementById('cat'); 
	catClicks.addEventListener('click', catClick);

	var bulborbirdbodyClicks = document.getElementById('bulborbirdbody'); 
	bulborbirdbodyClicks.addEventListener('click', bulborbirdbodyClick);
	
	var bulbbodyClicks = document.getElementById('bulbbody'); 
	bulbbodyClicks.addEventListener('click', bulbbodyClick);

	var birdbodyClicks = document.getElementById('birdbody'); 
	birdbodyClicks.addEventListener('click', birdbodyClick);
	
	var catbodyClicks = document.getElementById('catbody'); 
	catbodyClicks.addEventListener('click', catbodyClick);
	
}

function bulbClick () {
	if (bulbStat == false) {
		document.getElementById('bulb').setAttribute('id', 'bulbClick');
		
	if (birdStat == true) {
			document.getElementById('birdClick').setAttribute('id', 'bird');}
			
	if (catStat == true) {
			document.getElementById('catClick').setAttribute('id', 'cat');}
		
		bulbStat = true;
		birdStat = false;
		catStat = false;
		
		showResults ()
	}}
	
function birdClick () {
	if (birdStat == false) {
		document.getElementById('bird').setAttribute('id', 'birdClick');
		
	if (bulbStat == true) {
			document.getElementById('bulbClick').setAttribute('id', 'bulb');}
			
	if (catStat == true) {
			document.getElementById('catClick').setAttribute('id', 'cat');}
		
		bulbStat = false;
		birdStat = true;
		catStat = false;
		
		showResults ()
	}}
	
function catClick () {
	if (catStat == false) {
		document.getElementById('cat').setAttribute('id', 'catClick');
		
	if (bulbStat == true) {
			document.getElementById('bulbClick').setAttribute('id', 'bulb');}
			
	if (birdStat == true) {
			document.getElementById('birdClick').setAttribute('id', 'bird');}
		
		bulbStat = false;
		birdStat = false;
		catStat = true;
		
		showResults ()
	}}

function bulborbirdbodyClick () {
	if (bulborbirdbodyStat == false) {
		document.getElementById('bulborbirdbody').setAttribute('id', 'bulborbirdbodyClick');
		
	if (catbodyStat == true) {
			document.getElementById('catbodyClick').setAttribute('id', 'catbody');}

		bulborbirdbodyStat = true;			
		catbodyStat = false;
		
		showResults ()
	}}
	
function catbodyClick () {
	if (catbodyStat == false) {
		document.getElementById('catbody').setAttribute('id', 'catbodyClick');
		
	if (bulborbirdbodyStat == true) {
			document.getElementById('bulborbirdbodyClick').setAttribute('id', 'bulborbirdbody');}
			
		catbodyStat = true;
		bulborbirdbodyStat = false;
		
		showResults ()
	}}
	
function bulbbodyClick () {
	if (bulbbodyStat == false) {
		document.getElementById('bulbbody').setAttribute('id', 'bulbbodyClick');
		
	if (birdbodyStat == true) {
			document.getElementById('birdbodyClick').setAttribute('id', 'birdbody');}
		
		bulbbodyStat = true;
		birdbodyStat = false;
		
		showResults ()
	}}
	
function birdbodyClick () {
	if (birdbodyStat == false) {
			document.getElementById('birdbody').setAttribute('id', 'birdbodyClick');
		
	if (bulbbodyStat == true) {
		document.getElementById('bulbbodyClick').setAttribute('id', 'bulbbody');}

		birdbodyStat = true;		
		bulbbodyStat = false;
		
		showResults ()
	}}

function showResults () {
	if (bulbStat == true && bulborbirdbodyStat == true && bulbbodyStat == true) {
		var resultToShow = "<h2>" + enterName() + " you are a...</h2>" + 
		"<h2>BRIGHT GAZER!</h2>" + 
		'<img id = "bulbphoto" src="bulb.jpg" />' +
		'<img id = "bulbbodyphoto" src="bulbbody.jpg" />'; 
		
		document.getElementById('results').innerHTML = resultToShow;
		document.getElementById('outerContainer').innerHTML = '';
	}
	
	else if (birdStat == true && bulborbirdbodyStat == true && birdbodyStat == true) {
		var resultToShow = "<h2>" + enterName() + " you are a...</h2>" + 
		"<h2>SHINING STAR!</h2>" + 
		'<img id = "birdphoto" src="bird.jpg" />' +
		'<img id = "birdbodyphoto" src="birdbody.jpg" />'; 
			
		document.getElementById('results').innerHTML = resultToShow;
		document.getElementById('outerContainer').innerHTML = '';
	}
	
	else if (catStat == true && catbodyStat == true) {
		var resultToShow = "<h2>" + enterName() + " you are a...</h2>" + 
		"<h2>WANDERING DREAMER!</h2>" + 
		'<img id = "catphoto" src="cat.jpg" />' +
		'<img id = "catbodyphoto" src="catbody.jpg" />'; 
		
		document.getElementById('results').innerHTML = resultToShow;
		document.getElementById('outerContainer').innerHTML = '';
	}
	
	else if (bulbStat == true && catbodyStat == true) {
		var resultToShow = "<h2>" + enterName() + " you are a...</h2>" + 
		"<h2>BRIGHT DREAMER!</h2>" + 
		'<img id = "bulbphoto" src="bulb.jpg" />' +
		'<img id = "catbodyphoto" src="catbody.jpg" />'; 
		
		document.getElementById('results').innerHTML = resultToShow;
		document.getElementById('outerContainer').innerHTML = '';
	}
	
	else if (birdStat == true && catbodyStat == true) {
		var resultToShow = "<h2>" + enterName() + " you are a...</h2>" + 
		"<h2>SHINING DREAMER!</h2>" + 
		'<img id = "birdphoto" src="bird.jpg" />' +
		'<img id = "catbodyphoto" src="catbody.jpg" />'; 
		
		document.getElementById('results').innerHTML = resultToShow;
		document.getElementById('outerContainer').innerHTML = '';
	}
	
	else if (catStat == true && bulborbirdbodyStat == true && bulbbodyStat == true) {
		var resultToShow = "<h2>" + enterName() + " you are a...</h2>" + 
		"<h2>WANDERING GAZER!</h2>" + 
		'<img id = "catphoto" src="cat.jpg" />' +
		'<img id = "bulbbodyphoto" src="bulbbody.jpg" />'; 
		
		document.getElementById('results').innerHTML = resultToShow;
		document.getElementById('outerContainer').innerHTML = '';
	}

	else if (catStat == true && bulborbirdbodyStat == true && birdbodyStat == true) {
		var resultToShow = "<h2>" + enterName() + " you are a...</h2>" + 
		"<h2>WANDERING STAR!</h2>" + 
		'<img id = "catphoto" src="cat.jpg" />' +
		'<img id = "birdbodyphoto" src="birdbody.jpg" />'; 
		
		document.getElementById('results').innerHTML = resultToShow;
		document.getElementById('outerContainer').innerHTML = '';
	}

	else if (bulbStat == true && bulborbirdbodyStat == true && birdbodyStat == true) {
		var resultToShow = "<h2>" + enterName() + " you are a...</h2>" + 
		"<h2>BRIGHT STAR!</h2>" + 
		'<img id = "bulbphoto" src="bulb.jpg" />' +
		'<img id = "birdbodyphoto" src="birdbody.jpg" />'; 
		
		document.getElementById('results').innerHTML = resultToShow;
		document.getElementById('outerContainer').innerHTML = '';
	}
		else if (bulbStat == true && bulborbirdbodyStat == true && birdbodyStat == true) {
		var resultToShow = "<h2>" + enterName() + " you are a...</h2>" + 
		"<h2>BRIGHT STAR!</h2>" + 
		'<img id = "bulbphoto" src="bulb.jpg" />' +
		'<img id = "birdbodyphoto" src="birdbody.jpg" />'; 
		
		document.getElementById('results').innerHTML = resultToShow;
		document.getElementById('outerContainer').innerHTML = '';
	}
	
	else if (birdStat == true && bulborbirdbodyStat == true && bulbbodyStat == true) {
		var resultToShow = "<h2>" + enterName() + " you are a...</h2>" + 
		"<h2>SHINING GAZER!</h2>" + 
		'<img id = "birdphoto" src="bird.jpg" />' +
		'<img id = "bulbbodyphoto" src="bulbbody.jpg" />'; 
		
		document.getElementById('results').innerHTML = resultToShow;
		document.getElementById('outerContainer').innerHTML = '';
	}}