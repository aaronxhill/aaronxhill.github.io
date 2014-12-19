var button00 = false,
button01 = false,
button02 = false,
button03 = false,
button04 = false,
button05 = false,
button10 = false,
button11 = false,
button12 = false,
button13 = false,
button14 = false,
button15 = false;
button20 = false;
button21 = false;
button22 = false; 
button23 = false;
button24 = false;
button25 = false;
button30 = false;
button31 = false;
button32 = false;
button33 = false;
button34 = false;
button35 = false;
button40 = false;
button41 = false;
button42 = false;
button43 = false;
button44 = false;
button42 = false;
button43 = false;
button44 = false;
button45 = false;
button50 = false;
button51 = false;
button52 = false;
button53 = false;
button54 = false;
button55 = false;
button56 = false;
button57 = false;
button58 = false;
button59 = false;
button510 = false;
button511 = false;
button60 = false;
button61 = false;
button62 = false;
button63 = false;
button64 = false;
button65 = false;


var Aries = 0,
Taurus = 0,
Gemini = 0,
Cancer = 0,
Leo = 0,
Virgo = 0,
Libra = 0,
Scorpio = 0,
Sagittarius = 0,
Capricorn = 0,
Aquarius = 0,
Pisces = 0;

window.onload = function () {

    document.getElementById('button00').addEventListener('click', function () {butPress(0,0,6)});
    document.getElementById('button01').addEventListener('click', function () {butPress(0,1,6)});
    document.getElementById('button02').addEventListener('click', function () {butPress(0,2,6)});
    document.getElementById('button03').addEventListener('click', function () {butPress(0,3,6)});
    document.getElementById('button04').addEventListener('click', function () {butPress(0,4,6)});
    document.getElementById('button05').addEventListener('click', function () {butPress(0,5,6)});
    
    document.getElementById('button10').addEventListener('click', function () {butPress(1,0,6)});
    document.getElementById('button11').addEventListener('click', function () {butPress(1,1,6)});
    document.getElementById('button12').addEventListener('click', function () {butPress(1,2,6)});
    document.getElementById('button13').addEventListener('click', function () {butPress(1,3,6)});
    document.getElementById('button14').addEventListener('click', function () {butPress(1,4,6)});
    document.getElementById('button15').addEventListener('click', function () {butPress(1,5,6)});
    
    document.getElementById('button20').addEventListener('click', function () {butPress(2,0,6)});
    document.getElementById('button21').addEventListener('click', function () {butPress(2,1,6)});
    document.getElementById('button22').addEventListener('click', function () {butPress(2,2,6)});
    document.getElementById('button23').addEventListener('click', function () {butPress(2,3,6)});
    document.getElementById('button24').addEventListener('click', function () {butPress(2,4,6)});
    document.getElementById('button25').addEventListener('click', function () {butPress(2,5,6)});
    
    document.getElementById('button30').addEventListener('click', function () {butPress(3,0,6)});
    document.getElementById('button31').addEventListener('click', function () {butPress(3,1,6)});
    document.getElementById('button32').addEventListener('click', function () {butPress(3,2,6)});
    document.getElementById('button33').addEventListener('click', function () {butPress(3,3,6)});
    document.getElementById('button34').addEventListener('click', function () {butPress(3,4,6)});
    document.getElementById('button35').addEventListener('click', function () {butPress(3,5,6)});
    
    document.getElementById('button40').addEventListener('click', function () {butPress(4,0,6)});
    document.getElementById('button41').addEventListener('click', function () {butPress(4,1,6)});
    document.getElementById('button42').addEventListener('click', function () {butPress(4,2,6)});
    document.getElementById('button43').addEventListener('click', function () {butPress(4,3,6)});
    document.getElementById('button44').addEventListener('click', function () {butPress(4,4,6)});
    document.getElementById('button45').addEventListener('click', function () {butPress(4,5,6)});
    
    document.getElementById('button50').addEventListener('click', function () {butPress(5,0,12)});
    document.getElementById('button51').addEventListener('click', function () {butPress(5,1,12)});
    document.getElementById('button52').addEventListener('click', function () {butPress(5,2,12)});
    document.getElementById('button53').addEventListener('click', function () {butPress(5,3,12)});
    document.getElementById('button54').addEventListener('click', function () {butPress(5,4,12)});
    document.getElementById('button55').addEventListener('click', function () {butPress(5,5,12)});
    document.getElementById('button56').addEventListener('click', function () {butPress(5,6,12)});
    document.getElementById('button57').addEventListener('click', function () {butPress(5,7,12)});
    document.getElementById('button58').addEventListener('click', function () {butPress(5,8,12)});
    document.getElementById('button59').addEventListener('click', function () {butPress(5,9,12)});
    document.getElementById('button510').addEventListener('click', function () {butPress(5,10,12)});
    document.getElementById('button511').addEventListener('click', function () {butPress(5,11,12)});
    
    document.getElementById('button60').addEventListener('click', function () {butPress(6,0,6)});
    document.getElementById('button61').addEventListener('click', function () {butPress(6,1,6)});
    document.getElementById('button62').addEventListener('click', function () {butPress(6,2,6)});
    document.getElementById('button63').addEventListener('click', function () {butPress(6,3,6)});
    document.getElementById('button64').addEventListener('click', function () {butPress(6,4,6)});
    document.getElementById('button65').addEventListener('click', function () {butPress(6,5,6)});
 
    
    
    

}

function butPress (ques, num, total) {

    if (eval("button" + ques + num) === false) {
    
        eval("document.getElementById('button" + ques + num + "').setAttribute('class', 'buttonClicked')");
        eval("button" + ques + num + "= true");
        
        for (var i = 0; i < total; i++) {
        
            if (i != num) { 
            eval("document.getElementById('button" + ques + i + "').setAttribute('class', 'button')");
            eval("button" + ques + i + "= false");
            
            }        
        }    
    }
    showResult()
}

// calculate score

//0
// A) = Leo 60 points, 40 virgo 
// B) = Scorpio 50 points, Gemini 50 points 
// C) = Pisces 40 points, Capricorn: 60 points 
// D) = Libra 70 points,  Sagittarius: 30 points 
// E) = Aquarius: 40 points, Gemini: 60 points 
// F) = Taurus: 60 points, Aries 40 points

// 1
// a) taurus 20, aquarius 10, virgo 10 
// b) pisces 20, aquarius 20, , libra 10  
// c) aquarius 10, aries 10,  gemini 10 
// d) taurus 10, scorpio 10 , 
// E) taurus 10, caner 10 , sagittarius 10 
// F) gemini 10, leo 10, capricorn 10 


//2
//a) aries 10, libra 10 sagittaires 10 
//b) scorpio 10, pisces 10,capricorn 10  
//c) pisces 10, aquarius 10, leo 10 
//d) cancer 10,  leo 10 
//e) aquarius 10, gemini 10, 
 //f) taurus 10, virgo 10 
 
//3 
//A) = Libra 10, leo 50 , virgo 20  , gemini 10 
//B) = Scorpio 50, capricorn 50 , pisces 10, 
//C) = Aries 50, Pisces 50 
//D) = aquarius 30, libra 30, sagittarius 30 
//E) =  virgo 10, gemini 10 
//F) = taurus 30, libra 30, sagittarius 30 

//4
//a) libra 25, sagittarius 30 , gemini 20 , taurus 20
//b) aquarius 30, capricorn 25 , virgo 20 
//c) libra 30, aquarius 30, gemini 30 
//d) aries 30, capricorn 30, caner 30 
//e)  scorpio 30, libra 10 
//f) pisces 40, aquarius 20 


//5
//A) sagittarius  70 points,  Aries 70 points , leo 70 points		/50
//B) cancer 50 points , scorpio 50, capricorn 50     				/51
//C)Taurus 50, cancer 50, virgo 50 , 50 capricorn 					/52
//D) aries 50, leo 50, aquarius 50,  libra 50 						/53
//E) aries 50, libra 50, aquarius 50, leo 50 						/54
//F)taurus 50, pisces 50, virgo 50, scorpio 50 						/55
//G)aries 50, gemini 50, leo 50, libra 50, sagittarius 50 			/56	
//H) taurus 50, cancer 50, capricorn 50, scorpio 50  				/57
//I) gemini 50, leo 50, aquarius 50, sagittarius 50 				/58
//J) taurus 50, cancer 50, leo 50, virgo 50, capricorn 50 			/59
//K) taurus 50, virgo 50, scorpio 50, capricorn 50 					/510
//L) leo 60, sagittarius 60, gemini 60								/511


//6

//a) aries 20,  gemini 40, sagittarius 20 
//b) leo 20, capricorn 40 
//c) libra 30, aries 35 
//d) pisces 20, aquarius 20, taurus 10 
//e) virgo 30 , scorpio 10 

//f) pisces 30, cancer 30, 



function calcScore () {

Aries = 40 * button05 + button12 * 10 + button20 * 10 + button32 * 50 + button43 * 30 + button50 * 70 + button53 * 50 + button54 * 50 + button56 * 50 + button60 * 20 + button62 * 35;
Taurus = 60 * button05 + button10 * 20 + button13 * 10 + button14 * 10 + button25 * 10 + button34 * 30 + button40 * 20 + button52 * 50 + button55 * 50 + button57 * 50 + button59 * 50 + button59 * 50 + button510 * 50 + button63 * 10;
Gemini = 50 * button01 + 60 * button04 + button12 * 10 + button15 * 10 + button24 * 10 + button30 *10 + button33 * 10  + button40 * 20 + button42 * 30 + button56 * 50 + button58 * 50 + button511 * 60 + button60 * 40;
Cancer = 10 * button14 + button23 * 10 + button23 * 10 + button43 * 30 + button51 * 50 + button52 * 50 + button57 * 50 + button59 * 50 + button63 * 30;
Leo = 60 * button00 + button15 * 10 + button22 * 10 + button23 * 10 + button30 * 50 + button50 * 70 + button53 * 50 + button54 * 50 + button56 * 50 + button58 * 50 + button59 * 50 + button511 * 60 + button61 * 20;
Virgo = 40 * button00 + button10 * 10 + button25 * 10 + button30 * 20 + button34 * 30 + button41 * 20 + button52 * 50 + button55 * 50 + button59 * 50 + button510 * 50 + button64 * 30;
Libra = 70 * button03 + button11 * 10 + button20 * 10 + button30 * 10 + button33 * 30 + button34 * 30 + button40 * 25 + button42 * 30 + button43 * 10 + button53 * 50 + button54 * 50 + button56 * 50 + button62 * 30;
Scorpio = 50 * button01 + button13 * 10 + button21 * 10 + button31 * 50 + button44 * 30 + button51 * 50 + button55 * 50 + button57 * 50 + button510 * 50 + button64 * 10;
Sagittarius = 30 * button03 + button14 * 10 + button20 * 10 + button33 * 30 + button34 * 30  + button40 * 30 + button50 * 70 + button56 * 50 + button58 * 50 + button511 * 60 + button60 * 20;
Capricorn = 60 * button02 + button15 * 10 + button21 * 10 + button31 * 50 + button41 * 25 + button43 * 30 + button51 * 50 + button52 * 50 + button57 * 50 + button59 * 50 + button510 * 50 + button61 * 40;
Aquarius = 40 * button04 + button10 * 10 + button11 * 20 + button12 * 10 + button22 * 10 + button24 * 10 + button33 * 30 + button41 * 30 + button42 * 30 + button43 * 20 + button53 * 50 + button54 * 50 + button58 * 50 + button63 * 20 + button63 * 20;
Pisces = 40 * button02 + button11 * 20 + button21 * 10 + button22 * 10 + button31 * 10 + button32 * 50 + button44 * 40 + button55 * 50 + button63 * 20 + button65 * 30;

var scores = [Aries, Taurus, Gemini, Cancer, Leo, Virgo, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces];
var signs = ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'];

result = "";
         

for (var i = 0; i < 11; i++) {

    if (scores[i+1] > scores[i]) {result = signs[i+1]}
    
    }

return result; 

}

function showResult () {

    if ((button00 + button01 + button02 + button03 + button04 + button05) > 0 
     && (button10 + button11 + button12 + button13 + button14 + button15) > 0
     && (button20 + button21 + button22 + button23 + button24 + button25) > 0
     && (button30 + button31 + button32 + button33 + button34 + button35) > 0
     && (button40 + button41 + button42 + button43 + button44 + button45) > 0
     && (button50 + button51 + button52 + button53 + button54 + button55 + button56 + button57 + button58 + button59 + button510 + button511) > 0
     && (button60 + button61 + button62 + button63 + button64 + button65) > 0)
     {
     
     result = calcScore(); 
     
     document.getElementById('results').innerHTML = "<img src='" + result + "result.png'/>";
     
     }

}




