 
var content= document.getElementById("container");
var btn=document.getElementById("btn");
btn.addEventListener("click",function(){
	clearBox(content);
	play(content);
	var yesBtn=document.getElementById("yes");
	var noBtn=document.getElementById("no");
	var question=document.getElementById("question");
	var nbQuestion=0;
	yesBtn.addEventListener("click",function(){
		clearBox(question);
		nextQuestion(question);
		nbQuestion++;
		if(nbQuestion>4)
		{
			clearBox(content);
			guessing(content);
			var btnyes=document.getElementById("yes");
			var btnno=document.getElementById("no");
			btnyes.addEventListener("click",function(){
			clearBox(content);
			winner(content);
			});
			btnno.addEventListener("click",function(){
			clearBox(content);
			loser(content);
			});
		}

	},false);
	noBtn.addEventListener("click",function(){
		clearBox(question);
		nextQuestion(question);
		nbQuestion++;
		if(nbQuestion>4)
		{
		clearBox(content);
		guessing(content);
		var btnyes=document.getElementById("yes");
		var btnno=document.getElementById("no");
		btnyes.addEventListener("click",function(){
			clearBox(content);
			winner(content);
		});
		btnno.addEventListener("click",function(){
			clearBox(content);
			loser(content);
		});
		}

	},false);

});
function play(element)
{
	element.innerHTML ="	<div class=\"question\" id=\"question\">the question is ?</div>	<div class=\"col-md-6 col-sm-3 col-xs-6\"> <a href=\"#\" class=\"btn btn-sm animated-button yes\" id=\"yes\">Yes</a> </div><div class=\"col-md-6 col-sm-3 col-xs-6\"> <a href=\"#\" class=\"btn btn-sm animated-button no\" id=\"no\">No</a> </div>";
}
function nextQuestion(element)
{
	element.innerHTML="the other question";
}	
function clearBox(element)
{	
	element.innerHTML = "";
}
function guessing(element)
{
	element.innerHTML = "<div class=\"guess\">\
						<strong>Were you thinking about </strong>\
						leo dicaprio?</div>\
						<div class=\"morph pic\">\
						<img src=\"images/leo-dicaprio.jpg\">\
						</div>\
						<div class=\"row\">\
    					<div class=\"col-md-6 col-sm-3 col-xs-6\"> <a href=\"#\" class=\"btn btn-sm animated-button yes\" id=\"yes\">Yes</a> </div>\
    					<div class=\"col-md-6 col-sm-3 col-xs-6\"> <a  href=\"#\" class=\"btn btn-sm animated-button no\" id=\"no\">No</a> </div>\
						</div>";
}
function winner(element)
{
	element.innerHTML = "<div class=\"winning\">\
						<strong>Akinator winns thank you for playing</strong>\
						</div>";
}
function loser(element)
{
	element.innerHTML = "<div class=\"losing\">\
						<strong>Couldn't guess your actor! Next time </strong>\
						</div>";
}