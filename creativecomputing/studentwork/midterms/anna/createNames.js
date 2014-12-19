function nameGame (name){
	var names = {};
	
	var Name = "";
	var bName = "";
	var fName = "";
	var mName = "";
	
if (name[0] == "A" || name[0] == "E" || name[0] == "I" || name[0] == "O" || name[0] == "U"){
Name = name.toLowerCase();
}

else{
Name = name.substring(1);
}

if (name[0] == "B"){
bName = name[1].toUpperCase() + name.substring(2);
}

else{
bName = "B" + Name;
}

if (name[0] == "F"){
fName = name[1].toUpperCase() + name.substring(2);
}

else{
fName = "F" + Name;
}

if (name[0] == "M"){
mName = name[1].toUpperCase() + name.substring(2);
}

else{
mName = "M" + Name;
}

	names.Name = name;
	names.bName = bName;
	names.fName = fName;
	names.mName = mName;

for(var i=0; i < document.getElementsByClassName("firstname").length; i++)
{document.getElementsByClassName("firstname")[i].textContent = names.Name}

document.getElementById("bName").textContent = names.bName;
document.getElementById("fName").textContent = names.fName;
document.getElementById("mName").textContent = names.mName;

	return names;
}

function changename(e){
e.preventDefault();

var entername = document.getElementById('namebox').value;
nameGame(entername)
document.getElementById('namebox').value = '';
}

addEventListener('submit', changename, false);
