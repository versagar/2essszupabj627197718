

document.addEventListener("contextmenu", event => event.preventDefault()); document.addEventListener("keydown", event => { if (event.keyCode === 123 || event.ctrlKey && event.shiftKey && event.keyCode === 73) { event.preventDefault() } }); getBeauty("dtp");getBeauty("mbp");getBeauty("kpp");getBeauty("../dtp");getBeauty("../mbp");getBeauty("../kpp");getBeauty("../../dtp");getBeauty("../../mbp");getBeauty("../../kpp"); document.getElementById("updates").innerHTML = '<object type="text/html" data="../../ady12ata14n9/updateindex.html" width="100%" height="400vh"></object>'; function openNav() { document.getElementById("mySidenav").style.width = "20%"; document.getElementById("mySidenav").style.backgroundColor = "rgba(0,0,0,0.7)" } function closeNav() { document.getElementById("mySidenav").style.width = "0" } function openOv() { document.getElementById("myOv").style.width = "20%"; document.getElementById("myFeed").style.width = "80%"; document.getElementById("openOv").style.display = "none" } function closeOv() { document.getElementById("myOv").style.width = "0"; document.getElementById("myFeed").style.width = "100%"; document.getElementById("openOv").style.display = "inline" } var c = 0; var a = 0; var b = 0; 

function openForm() { if (a == 1) { a = 0; document.getElementById("form").style.display = "none"; document.getElementById("formBtn").innerHTML = "Open Form" }  else { a = 1; b = 1; openSagar(); document.getElementById("form").style.display = "block"; document.getElementById("guideFrame").src = "https://docs.google.com/forms/d/e/1FAIpQLSdPYLXazozE5HBf9LSb7frOYMblCh5PnoVQeiBv1dNdhJTTAA/viewform?"; document.getElementById("formBtn").innerHTML = "Close Form" } } 

function openSagar() { if (b == 1){ b = 0; document.getElementById("form").style.display = "none"; document.getElementById("sagarBtn").innerHTML = "Open Profile" } else  { b = 1; a = 1; openForm(); document.getElementById("form").style.display = "block"; document.getElementById("guideFrame").src = "../../ecjigjd/saga&1214.html"; document.getElementById("sagarBtn").innerHTML = "Close Profile" } } 

function openCpnotice() { if (c == 1) { c = 0; document.getElementById("cpnotice").style.display = "none" } else { c = 1; document.getElementById("cpnotice").style.display = "block" }  } 
var sb = 0;
function showBlock(id) {document.getElementById(id).style.display = "block"}
function hideBlock(id) {document.getElementById(id).style.display = "none"}
var sbtwo = 0;
function showblockTwo(one,two) {document.getElementById(one).style.display = "block"; document.getElementById(two).style.display = "block"}
function hideblockTwo(one,two) {document.getElementById(one).style.display = "none"; document.getElementById(two).style.display = "none"}

function displayBlock(id) {if (sb == 1) { sb = 0; document.getElementById(id).style.display = "none" }  else { sb = 1; document.getElementById(id).style.display = "block" }}

function displayblockTwo(one,two){ if (sbtwo == 1) { sbtwo = 0; document.getElementById(one).style.display = "none"; document.getElementById(two).style.display = "none" }  else { sbtwo = 1; document.getElementById(one).style.display = "block"; document.getElementById(two).style.display = "block"  }}

function fillsecondwidthTwo(w,u,one,two) {
    document.getElementById(one).style.width = w + u;
    document.getElementById(two).style.width = 100 - w + u;
  }
var ssw = 0; 
function switchsetfillWidth(w,u,one,two){
    if (ssw == 1) {
        ssw = 0;
        fillsecondwidthTwo(0,u,one, two);
    } else {
        ssw = 1;
        fillsecondwidthTwo(w,u,one, two);
    }
}
function setWidth(w,u,id){
    document.getElementById(id).style.width = w + u;
}
function setWidthHeight (w,wu,h,hu,id) {
    document.getElementById(id).style.width =  w + wu;
    document.getElementById(id).style.height =  h + hu;
}
var sw = 0;
function switchWidth(w,u,id) {if (sw == 1) {
    sw = 0;
    document.getElementById(id).style.width = 0;
} else {
    sw = 1;
    document.getElementById(id).style.width = w + u;
}

}

//var containerWidth = document.getElementById('two').offsetWidth; // Get the container width if needed.
//var adjustedWidth = containerWidth - awidth; // Calculate the adjusted width
