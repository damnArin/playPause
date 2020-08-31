var toggle = false;

// function callback() {
//     if (chrome.runtime.lastError) {
//         console.log(chrome.runtime.lastError.message);
//     } else {
//     	alert('tab exists')
//         // Tab exists
//     }
// }

chrome.browserAction.onClicked.addListener(function(tab) {
	// alert(toggle)
  toggle = !toggle;
  // alert("after")
  // alert(toggle)
  if(toggle){
  	// alert("in true")
  	// alert(tab.id)
    chrome.browserAction.setIcon({path: "icon_ju.png"});
    document.getElementById('myAudio').play()
    // chrome.tabs.executeScript(tab.id, {file:"hello.js"});
  }
  else{
  	  	// alert("in false")
  	// alert(tab.id)
    chrome.browserAction.setIcon({path: "icon128.png"});
    // chrome.tabs.executeScript(tab.id, {code:"alert('yo')"});
    // alert('howdy')
    document.getElementById('myAudio').pause()
  }
});



// chrome.browserAction.setIcon({
//     path: objIcon,
//     tabId: nTabID

// }, callback);

// // var ifPlaying = false

// chrome.browserAction.onClicked.addListener(function(tab) {
// 	console.log('start')

// 	var ifPlaying = false
// 	// ifPlaying = !ifPlaying
// 	//document.write('<audio id="player" autoplay loop><source src="http://tx.sharp-stream.com/http_live.php?i=jazzfmmobile.aac&device=rpweb" type="audio/mp3"></audio>')
// 	if(ifPlaying === false) {
// 		// document.getElementById('player').play()
// 		ifPlaying = true
// 		alert("true")

// 	} else {
// 		// document.getElementById('player').pause()
// 		ifPlaying = false
// 		alert("false")
// 	}
// 	console.log('end')

//     // chrome.tabs.executeScript(null, {file: "testScript.js"});

// });
