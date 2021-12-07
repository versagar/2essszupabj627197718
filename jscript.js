function openNav() { 
    document.getElementById("mySidenav").style.width = "40vw";
    document.getElementById("mySidenav").style.backgroundColor="rgba(0,0,0,0.7)"
    }
    
    function closeNav() {document.getElementById("mySidenav").style.width="0";
    }
    
    function hideMblock() {
      var iframe = document.getElementById("rFrame");
      var elmnt = iframe.contentWindow.document.getElementsById("mBlock");
      elmnt.style.display = "none";
    }