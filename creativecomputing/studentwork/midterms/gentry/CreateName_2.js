function nameGame (name) {
	var names = {}; //object
	names.firstName = name;	
	

if (name[0] == 'A' || name[0] == 'E' || name[0] == 'I' || name[0] == 'O' || name[0] == 'U') {
	var stem = name.toLowerCase();

} 
	else {
	var stem = name.substring(1);

	}
	

if (name[0] == 'B') {
	names.bName = name[1] + stem.substring(1);
}
   else {
   	names.bName = 'B' + stem;
   }

   

if (name[0] == 'F') {
	names.fName = name[1] + stem.substring(1);

}
   else {
   	names.fName = 'F' + stem;
   }

   

if (name[0] == 'M') {
	names.mName = name[1] + stem.substring(1);
}
   else {
   	names.mName = 'M' + stem;
   }

   //names.firstName = name;
   //names.bName = bName;
   //names.fName = fName;
   //names.mName = mName;


for (i = 0; i<document.getElementsByClassName('firstName').length; i++) {
document.getElementsByClassName('firstName')[i].textContent = names.firstName;
}

document.getElementById('bName').textContent = names.bName;
document.getElementById('fName').textContent = names.fName;
document.getElementById('mName').textContent = names.mName;


return names;
}

function changeName(e) {
	e.preventDefault();

	var names = document.getElementById('nmgm').value; //create a variable to collect the name inside the text box 
	console.log('hello');
	nameGame(names)  //collect the input value and put it into the variable. Feed this through the nameGame function.
	document.getElementById('nmgm').value = "";

}

addEventListener('submit', changeName, false);




	

