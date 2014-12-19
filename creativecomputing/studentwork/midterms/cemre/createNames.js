function nameGame(name) {
    var names = {};
    names.firstName = name;
    
if(name[0]=="A" ||name[0]== "E" || name[0]=="I" || name[0]=="O" || name[0]=="U"){
var stem = name.toLowerCase();
}

else {
stem = name.substring(1);
}


if(name[0]=="B"){
bName= name[1].toUpperCase()+name.substring(2);
}
    
else{bName= "B" + stem;
}

if(name[0]=="F") {
fName= name[1].toUpperCase()+name.substring(2);
}
    
else{fName= "F" + stem;
}

if(name[0]=="M"){
mName= name[1].toUpperCase()+name.substring(2);
}
    
else{mName= "M" + stem;
}

names.bName = bName;
names.fName = fName;
names.mName = mName;
    
document.getElementById("bName").textContent= names.bName
document.getElementById("fName").textContent= names.fName
document.getElementById("mName").textContent= names.mName

for (i=0; i<document.getElementsByClassName("firstName").length ; i++){
    
document.getElementsByClassName("firstName")[i].textContent=names.firstName;
}    

return names;
}

function changeName(e) {
e.preventDefault();
var name = document.getElementById("nameTextBox").value;
nameGame(name)
document.getElementById("nameTextBox").value= "";
}

addEventListener('submit',changeName, false);
