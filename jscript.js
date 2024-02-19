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
function openForm() {
    
    if (a==0) {
        document.getElementById("form").style.display= "block";
        a = 1;
        document.getElementById("form").src= "forms.google.com";
        document.getElementById("formBtn").innerHTML= "Close Form";
    } else {
        document.getElementById("form").style.display= "none";
        a = 0;
        document.getElementById("formBtn").innerHTML= "Open Form";
    }

}
function openSagar() {
    
    if (a==0) {
        document.getElementById("form").style.display= "block";
        a = 1;
        document.getElementById("form").src= "dtbs/saga&1214.html";
        document.getElementById("sagarBtn").innerHTML= "Close Profile";
    } else {
        document.getElementById("form").style.display= "none";
        a = 0;
        document.getElementById("sagarBtn").innerHTML= "Open Profile";
    }

}
