function nameGame (name) {
	
	var names = {};
	
	var stem = "";
	var bName = "";
	var fName = "";
	var mName = "";
	
	if (name [0] == 'A' || name [0] == 'E' || name [0] == 'I'||name [0] == 'O' || name [0] == 'U') 
{stem = name.substring(0);
stem = name.toLowerCase(0);
}  
	else {stem = name.substring(1);
}

if (name [0] == 'B') {
	bName = name[1].toUpperCase(0) + name.substring(2)
	;
}
	else {
	bName = 'B' + stem;
}


if (name [0] == 'F') {
	fName = name[1].toUpperCase(0) + name.substring(2);
}
	else {
	fName = 'F' + stem;
}


if (name [0] == 'M') {
	mName = name[1].toUpperCase(0) +name.substring(2);
}
	else {
	mName = 'M' + stem;
}

	names.firstName = name;
	names.bName = bName;
	names.fName = fName;
	names.mName = mName; 
	
	
for (var i=0; i < document.getElementsByClassName('firstName').length; i++)
{document.getElementsByClassName('firstName')[i].textContent = names.firstName
}

document.getElementById('firstNameStemB').textContent = names.bName;
document.getElementById('firstNameStemF').textContent = names.fName;
document.getElementById('firstNameStemM').textContent = names.mName;

	return names;
}

function changename(e){
e.preventDefault();

var entername = document.getElementById('nameChange').value;
nameGame(entername)
document.getElementById('nameChange').value = '';
}

addEventListener('submit', changename, false);
