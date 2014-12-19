function nameGame(name) {
      var names = {};
      

var stem = "";
var firstName = "";
var bName = "";
var fName = "";
var mName = "";


if (name[0] == "A" || name[0] == "E" || name[0] == "I" || name[0] == "O" || name[0] =="U")
 {
    stem = name.toLowerCase();
}

else{
    stem = name.substring(1);
     }
     
if (name[0] == 'B'){
    bName = name[1].toUpperCase() + name.substring(2);
    }
    
else{
    bName = "B" + stem;
     }
     
if (name[0] == 'F'){
    fName = name[1].toUpperCase() + name.substring(2);
    }
    
else{
    fName = "F" + stem;
     }
     
if (name[0] == 'M'){
   mName = name[1].toUpperCase() + name.substring(2);
    }
    
else{
    mName = "M" + stem;
     }


names.firstName = name;
names.bName = bName;
names.fName = fName;
names.mName = mName;



for ( var i = 0; i < document.getElementsByClassName('name').length; i++)
{document.getElementsByClassName('name')[i].textContent = names.firstName}


document.getElementById('bName').textContent = names.bName;
document.getElementById('fName').textContent = names.fName;
document.getElementById('mName').textContent = names.mName;



return names;

}

function changeName (e) {
e.preventDefault();
var newName = document.getElementById('nameTextBox').value;
nameGame(newName)
document.getElementById('nameTextBox').value= '';
}

addEventListener('submit', changeName, false);

     

     
     
     
     
     
     
     

     
