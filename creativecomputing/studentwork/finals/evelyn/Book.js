$(function (){
  $("section").hide();
	$("body").css({
		"background": "url(img/Books.jpg)",
		"background-size": "cover"
	});
});

$(function (){
	$("section#firstlevelquestion").show();
	$("section#firstlevelchoice").show();
});

$(document).on("click", "#firstlevelchoiceYes", function () {
	$("section").hide();
	$("section#caslon").show();
	$("body").css({
		"background": "url(img/FirstLevelDisplay.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#firstlevelchoiceNo", function () {
	$("section").hide();
	$("section#secondlevelquestion").show();
	$("section#secondlevelchoice").show();
	$("body").css({
		"background": "url(img/SecondLevelComb.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#secondlevelchoiceYes", function () {
	$("section").hide();
	$("section#minion").show();
	$("body").css({
		"background": "url(img/SecondLevelTEXT.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#secondlevelchoiceNo", function () {
	$("section").hide();
	$("section#thirdlevelquestion").show();
	$("section#thirdlevelchoice").show();
	$("body").css({
		"background": "url(img/ThirdLevelTEXT.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#thirdlevelchoiceYes", function () {
	$("section").hide();
	$("section#fourthlevelquestionEYE").show();
	$("section#fourthlevelchoiceEYE").show();
	$("body").css({
		"background": "url(img/FirstLevelDisplay.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#fourthlevelchoiceYesEYE", function () {
	$("section").hide();
	$("section#sabon").show();
	$("body").css({
		"background": "url(img/Miller.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#fourthlevelchoiceNoEYE", function () {
	$("section").hide();
	$("section#garamond").show();
	$("body").css({
		"background": "url(img/FourthLevel.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#thirdlevelchoiceNo", function () {
	$("section").hide();
	$("section#fourthlevelquestionSANSSERIF").show();
	$("section#fourthlevelchoiceSANSSERIF").show();
	$("body").css({
		"background": "url(img/ThirdLevelDisplaySwiss.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#fourthlevelchoiceYesSANSSERIF", function () {
	$("section").hide();
	$("section#optima").show();
	$("body").css({
		"background": "url(img/Univers.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#fourthlevelchoiceNoSANSSERIF", function () {
	$("section").hide();
	$("section#fifthlevelquestion").show();
	$("section#fifthlevelchoice").show();
	$("body").css({
		"background": "url(img/ThirdLevelDisplay90s.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#fifthlevelchoiceNo", function () {
	$("section").hide();
	$("section#sixthlevelquestion").show();
	$("section#sixthlevelchoice").show();
	$("body").css({
		"background": "url(img/secondLevel.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#sixthlevelchoiceNo", function () {
	$("section").hide();
	$("section#baskerville").show();
	$("body").css({
		"background": "url(img/thirdLevel.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#sixthlevelchoiceYes", function () {
	$("section").hide();
	$("section#seventhlevelquestion").show();
	$("section#seventhlevelchoice").show();
	$("body").css({
		"background": "url(img/SeventhLevel.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#seventhlevelchoiceYes", function () {
	$("section").hide();
	$("section#ffscala").show();
	$("body").css({
		"background": "url(img/FirstLevelTEXT.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#seventhlevelchoiceNo", function () {
	$("section").hide();
	$("section#syntax").show();
	$("body").css({
		"background": "url(img/SecondLevelDisplayModern.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#fifthlevelchoiceYes", function () {
	$("section").hide();
	$("section#joanna").show();
	$("body").css({
		"background": "url(img/letterGothic.jpg)",
		"background-size": "cover"
	});
})