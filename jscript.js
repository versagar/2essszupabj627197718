// Disable right-click context menu
document.addEventListener('contextmenu', event => event.preventDefault());
// Disable F12 key and Ctrl+Shift+I combo
document.addEventListener('keydown', event => {
  if (event.keyCode === 123 || (event.ctrlKey && event.shiftKey && event.keyCode === 73)) {
    event.preventDefault();
  }
});

document.getElementById("updates").innerHTML = '<object type="text/html" data="updateindex.html" width="100%" height="400vh"></object>';
function openNav() { 
    document.getElementById("mySidenav").style.width = "20vw";
    document.getElementById("mySidenav").style.backgroundColor="rgba(0,0,0,0.7)"
    }
    
function closeNav() {document.getElementById("mySidenav").style.width="0";
    }
    
function openOv() {
      document.getElementById("myOv").style.width="20vw";  
      document.getElementById("myFeed").style.width="80vw";
      document.getElementById("openOv").style.display="none";
    }
function closeOv() {
      document.getElementById("myOv").style.width = "0"; 
      document.getElementById("myFeed").style.width="100vw";
      document.getElementById("openOv").style.display="inline";
    }
    var a = 0;
    var b = 0;  
function openForm() {
    
    if (a==0) {
        document.getElementById("form").style.display= "block";
        a = 1;
        document.getElementById("guideFrame").src= "https://docs.google.com/forms/d/e/1FAIpQLSdPYLXazozE5HBf9LSb7frOYMblCh5PnoVQeiBv1dNdhJTTAA/viewform?";
        document.getElementById("formBtn").innerHTML= "Close Form";
        document.getElementById("footer").style.display= "none";
        document.getElementById("feed").style.height= "100vh";
    } else {
        document.getElementById("form").style.display= "none";
        a = 0;
        document.getElementById("formBtn").innerHTML= "Open Form";
        document.getElementById("footer").style.display= "block";
        document.getElementById("feed").style.height= "70vh";
    }

}
function openSagar() {
    
    if (b==0) {
        document.getElementById("form").style.display= "block";
        b = 1;
        document.getElementById("guideFrame").src= "dtbs/saga&1214.html";
        document.getElementById("sagarBtn").innerHTML= "Close Profile";
        document.getElementById("footer").style.display= "none";
        document.getElementById("feed").style.height= "100vh";
    } else {
        document.getElementById("form").style.display= "none";
        b = 0;
        document.getElementById("sagarBtn").innerHTML= "Open Profile";
        document.getElementById("footer").style.display= "block";
        document.getElementById("feed").style.height= "70vh";
    }

}
