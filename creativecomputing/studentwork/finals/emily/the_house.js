
var pageOneContent = 
'<font color="white"><font size="14">' +
'<p align="center"> You walk down an empty street, </p>' +
'<p align="center"> a single street light flickering on and off, </p> ' +
'<p align="center"> with two friends and the trusty family dog. </p>' +
'</font>' +
'<div class="round-button">' +
'<div class="round-button-circle">' +
'<div id="buttonNextOne">Next</div></div></div>';

var pageTwoContent = '<p align="right"> As you approach the flickering light, you spot an abandoned house on the side. </p>' +
'<p align="right"> You and your two friends start to push each other around </p>' +
'<p align="right"> calling the other "chicken"' +
" if they don't enter the house. </p>" +
'<p align="right"> You all finally decide to go in together. </p>' +
'<div class="round-button">' +
'<div class="round-button-circle">' +
'<div id="buttonNextTwo">Next</div></div></div>';

var pageThreeContent = '<p> The front door is locked. </p>' +
'<div class="round-button">' +
'<div class="round-button-circle">' +
'<div id="buttonBreakWindow">Break the window</div></div></div>';

var pageFourContent =  
'<p> Once inside you are faced </p>' +
'<p> with two staircases; </p>' +
'<p> one going up and one going down. </p>' +
'<div class="round-button">' +
'<div class="round-button-circle">' +
'<div id="buttonUp">Up</div></div></div>' +
'<div class="round-button">' +
'<div class="round-button-circle">' +
'<div id="buttonDown">Down</div></div></div>';

var pageFiveContent ='<font color="black">' + 
'<p align="center">Wrong choice,</p>' +
'<p align="center">After exploring the second floor you and your friends get split up.</p>' +
'<p align="center">While you are frantically searching for them, you realize the more you search</p>' +
"<p align='center'>the more you get lost and go deeper into the house's trap.</p>" +
"<p align='center'>Overtime, you lose grasp on reality; forever in the house's grasp.</p>" +
'</font>';

var pageSixContent = '<font color="black">' +
'<p align="center"> Wrong choice,</p>' +
'<p align="center">You and your friends walk down the stairs.</p>' +
'<p align="center">It has passed some time and you still havent reached the basement. </p>' +
'<p align="center">After awhile you start to get a bad feeling. </p>' +
'<p align="center">You turn around and start walking up again but never reach the top.</p>' +
'<p align="center">Walking in the dark makes you lose your sense of what is up or down.</p>' +
"<p align='center'>You don't know how much time has passed. </p>" +
"<p align='center'>Overtime, you lose grasp on reality; forever in the house's grasp. </p>" +
"</font>";

window.onload = function () {

var clickFromStartPage = document.getElementsByTagName('body')[0];
clickFromStartPage.addEventListener('click', toPageOne);


function toPageOne () {
    document.body.style.backgroundImage = 'url(the_house_1.jpg)';
    document.getElementById('pageOne').innerHTML = pageOneContent;
    clickFromStartPage.removeEventListener('click', toPageOne);
    var buttonNextOneClick = document.getElementById('buttonNextOne');
    buttonNextOneClick.addEventListener('click', buttonNextOneClicked);
    }

function buttonNextOneClicked () {
    document.getElementById('pageOne').innerHTML = '';
    document.body.style.backgroundImage = 'url(the_house_2.jpg)';
    document.getElementById('pageTwo').innerHTML = pageTwoContent;
    // add event listener for next button here
    var buttonNextTwoClick = document.getElementById('buttonNextTwo');
    buttonNextTwoClick.addEventListener('click', buttonNextTwoClicked);
    }

}

function buttonNextTwoClicked () {
    document.getElementById('pageTwo').innerHTML = '';
    document.body.style.backgroundImage = 'url(the_house_3.jpg)';
    document.getElementById('pageThree').innerHTML = pageThreeContent;
    var buttonBreakWindowClick = document.getElementById('buttonBreakWindow');
    buttonBreakWindowClick.addEventListener('click', buttonBreakWindowClicked)
    }
    
function buttonBreakWindowClicked () {
    document.getElementById('pageThree').innerHTML = '';
    document.body.style.backgroundImage = 'url(the_house_4.jpg)';
    document.getElementById('pageFour').innerHTML = pageFourContent;
    var buttonUpClick = document.getElementById('buttonUp');
    buttonUpClick.addEventListener('click', buttonUpClicked)
    var buttonDownClick = document.getElementById('buttonDown');
    buttonDownClick.addEventListener('click', buttonDownClicked)
    }

function buttonUpClicked () {
    document.getElementById('pageFour').innerHTML = '';
    document.body.style.backgroundImage = 'url(white_page.jpg)';
    document.getElementById('pageFive').innerHTML = pageFiveContent;
    }
    
function buttonDownClicked () {
    document.getElementById('pageFour').innerHTML = '';
    document.body.style.backgroundImage = 'url(white_page.jpg)';
    document.getElementById('pageSix').innerHTML = pageSixContent;
    }


    

