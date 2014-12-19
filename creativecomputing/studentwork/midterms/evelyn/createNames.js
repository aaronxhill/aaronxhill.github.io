function nameGame (name) {
	var names = {};
	names.firstName = name;
		if (name[0]=="A" || name[0]=="E" || name[0]=="I" || name[0]=="O" || name[0]=="U")
		{var stem = name.toLowerCase();}
			else {var stem = name.substring(1);}
	
		if ( name[0]=="B" )
		{ names.bName = name[1]+stem.substring(1);}
			else { names.bName = "b"+stem;}
	
		if ( name[0]=="F" )
		{ names.fName = name[1]+stem.substring(1);}
			else { names.fName = "f"+stem;}
	
		if ( name[0]=="M" )
		{ names.mName = name[1]+stem.substring(1);}
			else { names.mName = "m"+stem;}
	
		for (var i=0; i < document.getElementsByClassName("firstName").length; i++) 
		{document.getElementsByClassName("firstName")[i].textContent = names.firstName}
	
		document.getElementById("firstNameStemB").textContent = names.bName;
		document.getElementById("firstNameStemF").textContent = names.fName;
		document.getElementById("firstNameStemM").textContent = names.mName;
	
	return names;
}

function changeName(e) {
	e.preventDefault();
	var names = document.getElementById("nmgm").value;
	nameGame(names)
	document.getElementById("nmgm").value = "";
}

addEventListener("submit", changeName, false);