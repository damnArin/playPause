console.log('start')
var ifPlaying = true
if(ifPlaying)
{
	document.write('<audio id="player" autoplay loop><source src="http://tx.sharp-stream.com/http_live.php?i=jazzfmmobile.aac&device=rpweb" type="audio/mp3"></audio>')
	document.getElementById('player').play()
	ifPlaying = false
}
else
{
	document.getElementById('player').pause()
	ifPlaying = true
}
// let url = chrome.runtime.getURL('flamingos.mp3')
// let url = chrome.runtime.getURL('http://tx.sharp-stream.com/http_live.php?i=jazzfmmobile.aac&device=rpweb')

// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://tx.sharp-stream.com/http_live.php?i=jazzfmmobile.aac&device=rpweb', true);
// xhr.responseType = 'blob';
// xhr.onload = function(e) {
  // var img = document.createElement('img');
  // img.src = window.URL.createObjectURL(this.response);
  // document.body.appendChild(img);
//  var resp = this.response
//  console.log(resp)
//  var myAudio = new Audio(resp);
//  myAudio.play();

// };

// xhr.send();
// console.log(url)
// var myAudio = new Audio(url);

// myAudio.play();
console.log('end')

