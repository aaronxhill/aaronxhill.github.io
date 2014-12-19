$(function (){
  $("section").hide();
	$("body").css({
		"background": "url(img/Newspaper.jpg)",
		"background-size": "cover"
	});
});

$(function (){
	$("section#zerolevelquestion").show();
	$("section#zerolevelchoice").show();
});

$(document).on("click", "#zerolevelchoiceTEXT", function () {
	$("section").hide();
	$("section#firstlevelquestionTEXT").show();
	$("section#firstlevelchoiceTEXT").show();
	$("body").css({
		"background": "url(img/FirstLevelTEXT.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#firstLevelChoiceYesTEXT", function () {
	$("section").hide();
	$("section#times").show();
	$("body").css({
		"background": "url(img/Times.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#firstLevelChoiceNoTEXT", function () {
	$("section").hide();
	$("section#secondlevequestionTEXT").show();
	$("section#secondlevelchoicesTEXT").show();
	$("body").css({
		"background": "url(img/SecondLevelTEXT.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#secondLevelChoiceYesTEXT", function () {
	$("section").hide();
	$("section#miller").show();
	$("body").css({
		"background": "url(img/Miller.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#secondLevelChoiceNoTEXT", function () {
	$("section").hide();
	$("section#thirdlevelquestionTEXT").show();
	$("section#thirdlevelchoicesTEXT").show();
	$("body").css({
		"background": "url(img/ThirdLevelTEXT.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#thirdLevelChoiceYesTEXT", function () {
	$("section").hide();
	$("section#arnhem").show();
	$("body").css({
		"background": "url(img/Arnhem.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#thirdLevelChoiceNoTEXT", function () {
	$("section").hide();
	$("section#proforma").show();
	$("body").css({
		"background": "url(img/Proforma.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#zerolevelchoiceDISPLAY", function () {
	$("section").hide();
	$("section#firstlevelquestionDISPLAY").show();
	$("section#firstlevelchoiceDISPLAY").show();
	$("body").css({
		"background": "url(img/FirstLevelDisplay.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#firstLevelChoiceYesDISPLAY", function () {
	$("section").hide();
	$("section#secondlevequestionDISPLAYhighway").show();
	$("section#secondlevelchoicesDISPLAYhighway").show();
	$("body").css({
		"background": "url(img/SecondLevelDisplayHighway.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#secondLevelChoiceYesDISPLAYhighway", function () {
	$("section").hide();
	$("section#thirdlevelquestionDISPLAYage").show();
	$("section#thirdlevelchoicesDISPLAYage").show();
	$("body").css({
		"background": "url(img/ThirdLevelDisplayAge.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#thirdLevelChoiceYesDISPLAYage", function () {
	$("section").hide();
	$("section#interstate").show();
	$("body").css({
		"background": "url(img/Interstate.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#secondLevelChoiceNoDISPLAYhighway", function () {
	$("section").hide();
	$("section#thirdlevelquestionDISPLAYswiss").show();
	$("section#thirdlevelchoicesDISPLAYswiss").show();
	$("body").css({
		"background": "url(img/ThirdLevelDisplaySwiss.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#thirdLevelChoiceYesDISPLAYswiss", function () {
	$("section").hide();
	$("section#helvetica").show();
	$("body").css({
		"background": "url(img/Helvetica.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#thirdLevelChoiceNoDISPLAYage", function () {
	$("section").hide();
	$("section#franklingothic").show();
	$("body").css({
		"background": "url(img/FranklinGothic.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#firstLevelChoiceNoDISPLAY", function () {
	$("section").hide();
	$("section#secondlevequestionDISPLAYmodern").show();
	$("section#secondlevelchoicesDISPLAYmodern").show();
	$("body").css({
		"background": "url(img/SecondLevelDisplayModern.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#secondLevelChoiceYesDISPLAYmodern", function () {
	$("section").hide();
	$("section#gotham").show();
	$("body").css({
		"background": "url(img/Gotham.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#secondLevelChoiceNoDISPLAYmodern", function () {
	$("section").hide();
	$("section#thirdlevelquestionDISPLAY90s").show();
	$("section#thirdlevelchoicesDISPLAY90s").show();
	$("body").css({
		"background": "url(img/ThirdLevelDisplay90s.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#thirdLevelChoiceYesDISPLAY90s", function () {
	$("section").hide();
	$("section#helvetica").show();
	$("body").css({
		"background": "url(img/Helvetica.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#thirdLevelChoiceNoDISPLAY90s", function () {
	$("section").hide();
	$("section#ffmeta").show();
	$("body").css({
		"background": "url(img/FFMeta.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#zerolevelchoiceCOMB", function () {
	$("section").hide();
	$("section#firstlevelquestionCOMB").show();
	$("section#firstlevelchoiceCOMB").show();
	$("body").css({
		"background": "url(img/FirstLevelCOMB.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#firstlevelchoiceYesCOMB", function () {
	$("section").hide();
	$("section#arnhem").show();
	$("body").css({
		"background": "url(img/Arnhem.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#firstlevelchoiceNoCOMB", function () {
	$("section").hide();
	$("section#secondlevelquestionCOMB").show();
	$("section#secondlevelchoiceCOMB").show();
	$("body").css({
		"background": "url(img/SecondLevelComb.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#secondlevelchoiceYesCOMB", function () {
	$("section").hide();
	$("section#thirdlevelquestionCOMB").show();
	$("section#thirdlevelchoiceCOMB").show();
	$("body").css({
		"background": "url(img/ThirdLevelComb.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#thirdlevelchoiceYesCOMB", function () {
	$("section").hide();
	$("section#swift").show();
	$("body").css({
		"background": "url(img/Swift.jpg)",
		"background-size": "cover"
	});
})

$(document).on("click", "#secondlevelchoiceNoCOMB", function () {
	$("section").hide();
	$("section#getout").show();
	$("body").css({
		"background": "url(img/GetOut.jpg)",
		"background-size": "cover"
	});
})
