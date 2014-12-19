// In this assignment, you are going to write several if/then statements that will 
// programmatically give you the correct name variations for The Name Game for ANY
// name provided in the variable "name" (on line 6 of the code). You can assume the
// name is only a single first name, and that it is capitalized.

var name = "Tony"; 

// Initialize variables (do not change the next four lines)
var stem = "";
var bName = "";
var fName = "";
var mName = "";

// ONE: Write if/then logic that will update the variable "stem" with the
//      correct name stem for any given name (for the name Betsy, the stem is
//      "etsy." For the name Oscar, the stem is "oscar")


if(name[0]=="A" ||name[0]== "E" || name[0]=="I" || name[0]=="O" || name[0]=="U"){
stem = name.toLowerCase();
}

else {
stem = name.substring(1);
}


// TWO: Write if/then logic that will update the variable "bName" with the correct
//      name in the "B" line of The Name Game. For Aaron, it's "Baaron". For Chris, 
//      it's "Bhris." But for Betsy, it's "Etsy."

if(name[0]=="B"){
 bName= name[1].toUpperCase()+name.substring(2);
}
else{bName= "B" + stem
}

// THREE: Write if/then logic that will update the variable "fName" with the correct
//        name in the "F" line of The Name Game. For Aaron, it's "Faaron". For Chris, 
//        it's "Fhris." But for Fannie, it's "Annie." 

if(name[0]=="F") {
 fName= name[1].toUpperCase()+name.substring(2);
}
else{fName= "F" + stem;
}

// FOUR: Write if/then logic that will update the variable "mName" with the correct
//       name in the "M" line of The Name Game. For Aaron, it's "Maaron". For Chris, 
//       it's "Mhris." But for Mary, it's "Ary."

if(name[0]=="M"){
 mName= name[1].toUpperCase()+name.substring(2);
}
else{mName= "M" + stem
}


// PART TWO: Update your "styles.css" file from Assignment 2 to further iterate on
//           the visual design of the HTML file that is viewed in the browser. We will
//           continue with this theme for a few more weeks; you should have a very strong
//           composition by the time we're at the end of assignments related to The Name Game.
