var speechRecognition=window.webkitSpeechRecognition;
var recognition=new speechRecognition();
var textbox=document.getElementById("speechtext");
function photo(){
document.getElementById("speechtext").innerHTML="";
recognition.start();
}
recognition.onresult=function run(event){
console.log(event);
content=event.results[0][0].transcript;
console.log(content);
document.getElementById("speechtext").innerHTML=content;
}

