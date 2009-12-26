addEvent(window, "load", HideShow);

function HideShow(spshow) {
  var inp=document.getElementsByTagName('span');
  for(var i=0;i<inp.length;i++) {
    if(inp[i].className == "shinit") {
        inp[i].className = "shhidden";
    }
    if(inp[i].className == "shvisible" && typeof(spshow) == "string") {
        inp[i].className = "shhidden";
    }
  }
  
  if(typeof(spshow) == "string" && spshow != '') {
  	document.getElementById(spshow).className = "shvisible";
  }
}
