window.onload=function(){injson();};

var input_ans;
var data = json_question_data;
var i = 0;
var done = false;
var score = 0;
var donelist = [];
var indexlist = [];

function getquestion(){
	var questiondata = donelist[i];
	return questiondata.question;
}

function getchoice(){
	var choicedata = donelist[i];
	return choicedata.choice;
}

function getans(){
	var ansdata = donelist[i];
	return ansdata.ans;
}

function generatequestion(){ //first run
	do{
		var loop = false;
		var index = Math.floor(Math.random()*data.length);
		if (indexlist.includes(data[index]) & (index > data.length-1)){
			loop = true;
		}else{
			loop = false;
			indexlist[i] = index;
		}
	}
	while (loop)
	donelist[i] = data[index];
	showQuestion();
	showchoice();
}

function showQuestion(){ //second
	var quest = getquestion();
	var questionhtml = document.getElementById("firstq");
	var value = i+1
	questionhtml.innerHTML = "Q."+ value + " " + quest;
}

function showchoice(){ //third
	var choice = getchoice();
	document.getElementById("choice1").innerHTML = choice[0];
	document.getElementById("choice2").innerHTML = choice[1];
	document.getElementById("choice3").innerHTML = choice[2];
	document.getElementById("choice4").innerHTML = choice[3];
}

function Enter_ans(){
	if (document.getElementById('choice11').checked) {
	  input_ans = 0;
	}

	if (document.getElementById('choice22').checked) {
	  input_ans = 1;
	}

	if (document.getElementById('choice33').checked) {
	  input_ans = 2;
	}

	if (document.getElementById('choice44').checked) {
	  input_ans = 3;
	}

	checkans(input_ans);
}

function checkans(num){
	var input_data = donelist[i];
	var inputans = input_data.choice
	if (inputans[num] == getans()){
		score = score + 1;
	}
	nextquestion()
}

function nextquestion(){ //last run
	if (donelist.length == 5){
		displayreslt();
	}else{
		i = i + 1; 
		generatequestion();
	}
}

// the functon displays the link to the correct answer
function displayreslt() {
	document.getElementById("option1").innerHTML = "";
	document.getElementById("option2").innerHTML = "";
	document.getElementById("option3").innerHTML = "";
	document.getElementById("option4").innerHTML = "";
	document.getElementById("Input_button").innerHTML = "";
	document.getElementById("firstq").innerHTML = "Your score is " + score;
}

//navBar dropdown
function injson(){
	var mydata = JSON.parse(jsondata);
	var topiclist = [];
	for (var x=0;x<mydata.length;x++){
		if (x>0){
			makeherf(mydata[x].topic,x);
		}
	}
	generatequestion()
}

function makeherf(topic,index) {
	// Create anchor element.
	var a = document.createElement('a'); 
	
	// Create the text node for anchor element.
	var link = document.createTextNode(topic);
	
	// Append the text node to anchor element.
	a.appendChild(link);
	
	// Set the title.
	a.title = topic; 
	
	// Set the href property.
	href="./storybroad.html?num="+index
	console.log(href);
	a.href = href; 
	
	// Append the anchor element to the body.
	document.getElementById("myDropdown").appendChild(a); 
	
	}

