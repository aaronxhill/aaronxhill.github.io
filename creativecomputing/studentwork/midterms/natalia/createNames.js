function nameGame(name) {
	var names = {};
	var firstName = name;
	var stem = "";
	var bName = "";
	var fName = "";
	var mName = "";
	
				if (name[0] == "A" || name[0] == "E" || name[0] == "I" || name[0] == "O" || name[0] == "U") {
				stem = name.toLowerCase();} 

				else {stem = name.substring(1);}
				
				if (name[0] == "B"){
				var bName = name[1].toUpperCase()+ name.substring(2);}

				else {bName = "B" + stem;}
				
				if (name[0] == "F"){
				var fName = name[1].toUpperCase()+ name.substring(2);}

				else {fName = "F" + stem;}
				
				if (name[0] == "M"){
				var mName = name[1].toUpperCase()+ name.substring(2);}

				else {mName = "M" + stem;}

names.firstName = name;
names.bName = bName;
names.fName = fName
names.mName = mName;

document.getElementById("bName").textContent=names.bName ;
document.getElementById("fName").textContent=names.fName ;
document.getElementById("mName").textContent=names.mName ;

for (var i = 0; i< document.getElementsByClassName('firstName').length; i++){
document.getElementsByClassName('firstName')[i].textContent = names.firstName;
}

return names;
}

function changeName(e) {
e.preventDefault();
var name = document.getElementById('nameTextBox').value;
nameGame(name)
document.getElementById('nameTextBox').value = '';
}

addEventListener('submit', changeName, false);
