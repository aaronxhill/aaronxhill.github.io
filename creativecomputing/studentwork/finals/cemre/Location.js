
var buttonSceneStatus = false; 
var buttonMusicStatus = false; 
var buttonFoodStatus = false; 
var buttonCasualStatus = false; 
var buttonSophisticatedStatus = false; 
var buttonLivelyStatus = false; 


window.onload = function () {
	var buttonSceneClick = document.getElementById('buttonScene'); 
	buttonSceneClick.addEventListener('click', buttonSceneClicked);

	var buttonMusicClick = document.getElementById('buttonMusic'); 
	buttonMusicClick.addEventListener('click', buttonMusicClicked);
	
	var buttonFoodClick = document.getElementById('buttonFood'); 
	buttonFoodClick.addEventListener('click', buttonFoodClicked);

	var buttonCasualClick = document.getElementById('buttonCasual'); 
	buttonCasualClick.addEventListener('click', buttonCasualClicked);
    
    var buttonSophisticatedClick = document.getElementById('buttonSophisticated'); 
	buttonSophisticatedClick.addEventListener('click', buttonSophisticatedClicked);
    
    var buttonLivelyClick = document.getElementById('buttonLively'); 
	buttonLivelyClick.addEventListener('click', buttonLivelyClicked);
}

  function buttonSceneClicked () {
	if (buttonSceneStatus == false) {
		document.getElementById('buttonScene').setAttribute('id', 'buttonSceneClicked');
		
		if (buttonMusicStatus == true) {
			document.getElementById('buttonMusicClicked').setAttribute('id', 'buttonMusicClicked');
        }
        if (buttonFoodStatus == true) {
			document.getElementById('buttonFoodClicked').setAttribute('id', 'buttonFoodClicked');
		}
		
		buttonSceneStatus = true;
		buttonMusicStatus = false;
        buttonFoodStatus = false;
		
		showResults()
	}
}

function buttonMusicClicked () {
	if (buttonMusicStatus == false) {
		document.getElementById('buttonMusic').setAttribute('id', 'buttonMusicClicked');
		
		if (buttonSceneStatus == true) {
			document.getElementById('buttonSceneClicked').setAttribute('id', 'buttonScene');
        }
        if (buttonFoodStatus == true) {
            document.getElementById('buttonFoodClicked').setAttribute('id', 'buttonFood');
		}

		buttonMusicStatus = true; 
		buttonSceneStatus = false; 
        buttonFoodStatus = false;
		
		showResults()
	}
}

function buttonFoodClicked () {
	if (buttonFoodStatus == false) {
		document.getElementById('buttonFood').setAttribute('id', 'buttonFoodClicked');
		
		if (buttonSceneStatus == true) {
			document.getElementById('buttonSceneClicked').setAttribute('id', 'buttonScene');
        }
        
        if (buttonMusicStatus == true) {
			document.getElementById('buttonMusicClicked').setAttribute('id', 'buttonMusic');
		
		}
		
		buttonFoodStatus = true;
		buttonSceneStatus = false;
		buttonMusicStatus = false;
		showResults()
	}
}

function buttonCasualClicked () {
	if (buttonCasualStatus == false) {
		document.getElementById('buttonCasual').setAttribute('id', 'buttonCasualClicked');
		
		if (buttonSophisticatedStatus == true) {
			document.getElementById('buttonSophisticatedClicked').setAttribute('id', 'buttonSophisticated');
        }
            
		if (buttonLivelyStatus == true) {
			document.getElementById('buttonLivelyClicked').setAttribute('id', 'buttonLively');
		}

		buttonCasualStatus = true; 
		buttonSophisticatedStatus = false; 
        buttonLivelyStatus = false;
		
		showResults()
	}
}


function buttonSophisticatedClicked () {
	if (buttonSophisticatedStatus == false) {
		document.getElementById('buttonSophisticated').setAttribute('id', 'buttonSophisticatedClicked');
		
		if (buttonCasualStatus == true) {
			document.getElementById('buttonCasualClicked').setAttribute('id', 'buttonCasual');
        }
            
		if (buttonLivelyStatus == true) {
			document.getElementById('buttonLivelyClicked').setAttribute('id', 'buttonLively');
		}

		buttonSophisticatedStatus = true; 
		buttonCasualStatus = false; 
        buttonLivelyStatus = false;
		
		showResults()
	}
}

function buttonLivelyClicked () {
	if (buttonLivelyStatus == false) {
		document.getElementById('buttonLively').setAttribute('id', 'buttonLivelyClicked');
		
		if (buttonSophisticatedStatus == true) {
			document.getElementById('buttonSophisticatedClicked').setAttribute('id', 'buttonSophisticated');
        }
            
		if (buttonCasualStatus == true) {
			document.getElementById('buttonCasualClicked').setAttribute('id', 'buttonCasual');
		}

		buttonLivelyStatus = true; 
		buttonSophisticatedStatus = false; 
        buttonCasual = false;
		
		showResults()
	}
}

function showResults () {
	if (buttonSceneStatus == true && buttonCasualStatus == true) {
		document.getElementById('results').innerHTML = "<h4>LE BAIN! If you want dramatic city views that turn magical at sundown, the glittering Le Bain at The Standard Highline is for you. With its stunning views of the Hudson River and New Jersey, its pink waterbeds, mini hot tubs, and colorful lawn chairs create a lively atmosphere that makes Le Bain one of the favorites in the city. </h4>";
		document.getElementById('outerContainer').innerHTML = '';
        document.body.style.background = "url('lebain.jpg') no-repeat center top fixed"
	}
	
	else if (buttonSceneStatus == true && buttonSophisticatedStatus == true) {
		document.getElementById('results').innerHTML =  "<h4>UPSTAIRS AT THE KIMBERLY HOTEL! Thirty stories above street level, Upstairs exudes an elegant, sophisticated air without alienating any of its visitors. The dark leather chairs, ivy hanging from the walls, and strings of lights above all add to the simplistically-chic vibe without distracting from the beautiful panoramic views over Midtown.. Oh, and the striking view of the Chrysler Building glistening in the distance, isn't too shabby either.</h4> "; 
		document.getElementById('outerContainer').innerHTML = '';
        document.body.style.background = "url('upstairs-at-the-kimberly-hotel-21.jpg') no-repeat center top fixed"
 
	}
	
	else if (buttonSceneStatus == true && buttonLivelyStatus == true) {
		document.getElementById('results').innerHTML = " <h4> LA BIRRERIA! Perched on top of Mario Batali's behemoth marketplace Eataly in the Flatiron, the 14th floor La Birreria is an excellent match for casual nights. Open year-round thanks to a retractable glass roof, this unfussy space with utilitarian wood tables and red metal chairs shines during the summer season when the breeze is gentle and the sun is warm. As for view, the Empire State Building peaks over the rooftop, and if a beer cask occasionally blocks the skyline, grilled lamb chops with mint salsa verde and one of those delicious brews should make up for it.</h4>" ;
            '<img src = "orig.jpg"/>';
		document.getElementById('outerContainer').innerHTML = '';
        document.body.style.background = "url('orig.jpg') no-repeat center top fixed"
	}
	
    
   if (buttonMusicStatus == true && buttonLivelyStatus == true) {
		document.getElementById('results').innerHTML = "<h4> CIELO! From its state-of-the-art space in downtown's ultra-chic Meatpacking District, Cielo provides a music program specializing in deeply soulful house music as well as various genres of electronic music. Cielo is a haven for mature individuals seeking intelligent nightlife with neither the hassles of large clubs nor the elitism of upscale lounges with too many VIP rooms. </h4>";
		document.getElementById('outerContainer').innerHTML = '';
       document.body.style.background = "url('cielo.jpg') no-repeat center top fixed"
	}
    
    else if (buttonMusicStatus == true && buttonSophisticatedStatus == true) {
        document.getElementById('results').innerHTML =  "<h4> FLATIRON ROOM! With more than 400 varities of whiskey line the shelves at this bar, Flatiron Room is a perfect spot to enjoy nightly live jazz performances while nibbling cured meats, cheeses, oysters and ceviches. </h4>";
		document.getElementById('outerContainer').innerHTML = '';
        document.body.style.background = "url('flatiron_room.jpg') no-repeat center top fixed"
	}
    
    if (buttonMusicStatus == true && buttonCasualStatus == true) {
        document.getElementById('results').innerHTML =  "<h4> PARKSIDE LOUNGE! It is a great spot to experience a taste of what New York City has to offer. This place has been around for over 50 years and it has kept some of the original fixtures. The drinks are always cheap and they have a pool table and a great jukebox. No need to mention that they have great live music every night. </h4>";
		document.getElementById('outerContainer').innerHTML = '';
        document.body.style.background = "url('patparksidelounge.jpg') no-repeat center top fixed"
	}
    
   else if (buttonFoodStatus == true && buttonLivelyStatus == true) {
		document.getElementById('results').innerHTML =    "<h4> GRAMERCY TAVERN! One of New York's most beloved restaurants, Gramercy Tavern has welcomed guests to enjoy its contemporary American cuisine with Chef Michael Anthony, warm hospitality, lively atmosphere without being overwhelming. </h4>";
		document.getElementById('outerContainer').innerHTML = '';
       document.body.style.background = "url('gramercytavern.jpg') no-repeat center top fixed"
       
}
      else if (buttonFoodStatus == true && buttonSophisticatedStatus == true) {
		document.getElementById('results').innerHTML =  "<h4> ELEVEN MADISON PARK!  Eleven Madison Park expresses the spirit of grand New York dining with a contemporary accent. With soaring 30-foot ceilings and windows overlooking beautiful Madison Square Park, the Art-Deco restaurant embodies an urbane sophistication. Ched, Daniel Humm's cooking uses modernist techniques to create food with dazzling art-like plating and refined, European flavors. There is no a la carte menu, instead, guests pick from the day's featured ingredients for a prix fixe menu</h4>";
		document.getElementById('outerContainer').innerHTML = '';
          document.body.style.background = "url('Eleven Madison Park.jpg') no-repeat center top fixed "
          
      }
          
          else if (buttonFoodStatus == true && buttonCasualStatus == true) {
		document.getElementById('results').innerHTML =   "<h4> SHAKE SHACK! Go to the one that is located at Madison Square Park- the original and the best. Because the line at lunchtime is unbearable, go late at night, sit at one of the regulation-green Parks Department tables, and have one of everything on the menu.</h4>";
		document.getElementById('outerContainer').innerHTML = '';
        document.body.style.background = "url('shakeshack.jpg') no-repeat center top fixed"
    
}
}




