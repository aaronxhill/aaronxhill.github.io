//--------------logic----------------------

$(function (){
  $("section").hide();
});

$(function (){
	$("section#firstlevelquestion").show();
	$("section#firstlevelchoice").show();
});

$(document).on("click", "#firstLevelChoiceYes", function () {
	$("section").hide();
	$("section#univers").show();
	$("body").css({
		"background": "url(img/Univers.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#firstLevelChoiceNo", function () {
	$("section").hide();
	$("section#secondlevequestion").show();
	$("section#secondlevelchoices").show();
	$("body").css({
		"background": "url(img/secondLevel.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#secondLevelChoiceYes", function () {
	$("section").hide();
	$("section#lettergothic").show();
	$("body").css({
		"background": "url(img/letterGothic.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#secondLevelChoiceNo", function () {
	$("section").hide();
	$("section#thirdlevelquestion").show();
	$("section#thirdlevelchoices").show();
	$("body").css({
		"background": "url(img/thirdLevel.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#thirdLevelChoiceYes", function () {
	$("section").hide();
	$("section#ocr").show();
	$("body").css({
		"background": "url(img/ocr.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#thirdLevelChoiceNo", function () {
	$("section").hide();
	$("section#ffdin").show();
	$("body").css({
		"background": "url(img/ffdin.jpg)",
		"background-size": "cover"
	});
})