/*小心dom載入未完全*/
window.onload=function(){injson();};


var useapi = true;
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
		document.write("YC");
    } else {
        x.className = "topnav";
		document.write("大師兄");
    }
}

function injson(){
	// first we get current URL (web page address in browser)
    var dloc= window.location.href;
	console.log(dloc)
    //then we split into chunks array
    var dsplt= dloc.split("?");
	console.log(dsplt)
	//then we again split into final chunk array, but only second element
	//of the first array i.e dsplt[1]
	var sanitize= dsplt[1].split("=")[1];
	console.log("sanitize"+sanitize)
	var mydata = JSON.parse(jsondata);
	for (var x=0;x<mydata.length;x++){
		if (x>0){
			makeherf(mydata[x].topic,x);
		}
	}
	showDetail(mydata,sanitize)
}


function showDetail(data,index){
	var incontent = data;
	document.getElementById("topic").innerHTML = incontent[0].topic+"<br>" + incontent[index].topic;
	//changeType(document.getElementById("topic"),'h2')
	document.getElementById("intro").innerHTML = "<h2>"+incontent[0].intro+"</h2><br>"+incontent[index].intro;
	//changeType(document.getElementById("Video"),'h5')
	document.getElementById("content").innerHTML = "<h2>"+incontent[0].content+"</h2><br>" + incontent[index].content;
	//changeType(document.getElementById("content"),'h5');
	if (useapi){
	//using Youtube API
	onYouTubeIframeAPIReady(incontent[index].video);
	}else{
	//Only use youtube iframe
	var convered = correctVideolink(incontent[index].video);
	console.log("convered Video Link is "+ convered);
	document.getElementById('videoPlayer').src = convered;
	}
}

function correctVideolink(srclink){
	var videoId = getVideoID(srclink);
	/*console.log("ID Position is "+ idposition);
	console.log("Video ID is "+ videoId);*/
	var tempale = "https://www.youtube.com/embed/";
	var correctedLink = tempale+videoId;
	return correctedLink;
}

function getVideoID(srclink){
	var hyperlink = srclink
	var idposition = hyperlink.indexOf("?v=");
	var videoId = hyperlink.substring(idposition+3,idposition+3+11);
	//console.log("ID Position is "+ idposition);
	console.log("Video ID is "+ videoId);
	console.log("type of Video ID is "+ typeof videoId);
	return videoId;
}

function changeType(object,type){
	var dummy = document.createElement(type);
	dummy.innerText = object.innerText;
	object.parentNode.replaceChild(dummy, object);
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
	
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady(srclink) {
	player = new YT.Player('player', {
							height: '390',
							width: '640',
							videoId: getVideoID(srclink),
							playerVars: {
								'playsinline': 1
								},
							events: {
								'onReady': onPlayerReady,
								'onStateChange': onPlayerStateChange
								}
							}
						);
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
	event.target.playVideo();
	}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
	if (event.data == YT.PlayerState.PLAYING && !done) {
		setTimeout(stopVideo, 6000);
		done = true;
	}
}

function stopVideo() {
	player.stopVideo();
}