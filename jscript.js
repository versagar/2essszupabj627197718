function openNav() { 
    document.getElementById("mySidenav").style.width = "40vw";
    document.getElementById("mySidenav").style.backgroundColor="rgba(0,0,0,0.7)"
    }
    
    function closeNav() {document.getElementById("mySidenav").style.width="0";
    }
    
    function openOv() {
      document.getElementById("myOv").style.width="20vw";
      document.getElementById("myFeed").style.width="80vw";
      document.getElementById("openOv").style.width="0"
      document.getElementById("openOv").style.padding="0"
    }
    function closeOv() {
      document.getElementById("myOv").style.width = "0";
      document.getElementById("myFeed").style.width="100vw";
      document.getElementById("openOv").style.width="100px";
      document.getElementById("openOv").style.padding="10px"
      
    }
