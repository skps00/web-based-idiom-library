window.onload=function(){injson();};




function userdata(){
	var input1 = document.getElementById("name").value;
	var input2 = document.getElementById("gender").value;
	var input3 = document.getElementById("improve").value;
	var input4 = document.getElementById("feeling").value;
	var list = [input1, input2, input3, input4]
	console.log(list)
	return list
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

