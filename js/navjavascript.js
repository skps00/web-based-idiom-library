/*小心dom載入未完全*/
window.onload=function(){injson();};

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
		document.write("YC合格秘笈");
    } else {
        x.className = "topnav";
		document.write("大師兄滿分秘笈");
    }
}*/

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
/*
//navBar dropdown
function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}*/





