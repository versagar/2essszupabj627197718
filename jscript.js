function openNav() { 
    document.getElementById("mySidenav").style.width = "20vw";
    document.getElementById("mySidenav").style.backgroundColor="rgba(0,0,0,0.7)"
    }
    
function closeNav() {document.getElementById("mySidenav").style.width="0";
    }
    
function openOv() {
      document.getElementById("myOv").style.width="20vw";
      document.getElementById("myFeed").style.width="79vw";
      document.getElementById("openOv").style.width="0"
      document.getElementById("openOv").style.padding="0"
      document.getElementById("info").style.width="75vw";
    }
function closeOv() {
      document.getElementById("myOv").style.width = "0";
      document.getElementById("myFeed").style.width="99vw";
      document.getElementById("openOv").style.width="auto";
      document.getElementById("openOv").style.padding="10px";
      document.getElementById("info").style.width="85vw";
 
    }