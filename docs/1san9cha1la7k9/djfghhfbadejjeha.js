var pid;
function showTgp() {
    displayblockTwo('rTgp','tgpMenu');
    if (window.innerWidth < 520) {
        setWidth(100,'%', 'content');
        setWidth(100,'%', 'topicDesc');
    } else {
        fillsecondwidthTwo(35, '%', 'content', 'topicDesc');
    }
}
function showContent() {
    if (window.innerWidth < 520) {
        displayBlock('content');
    } else {
        switchsetfillWidth(35, '%', 'content', 'topicDesc');
    }
}
function tgpOpen(con) {
    hint = con;
       getLink();
       
        if (document.getElementById('contentbtn').style.display == "none") {
           
        }
        else {
            fillsecondwidthTwo(0,'%', 'content', 'topicDesc');
            ssw = 0;
        }
    }
    
function rphysics(pid) {

    document.getElementById(pid).innerHTML='<object type="text/html" data="sa6ang2rha7lay9/pa6n2na7sang9/bfdjdefcgchfadrps.html" width="100%" height="100%"></object>';
}

function audible(pid) {
    document.getElementById(pid).innerHTML='<object type="text/html" data="sa6ang2rha7lay9/pa6n2na7sang9/eiejcbchfigjjjadb.html" width="100%" height="100%"></object>';
}

function dforum(pid) {
    document.getElementById(pid).innerHTML='<object type="text/html" data="sa6ang2rha7lay9/pa6n2na7sang9/ecbiccfbhehdfm.html" width="100%" height="100%"></object>';
}

function guide(pid) {
    document.getElementById(pid).innerHTML='<object type="text/html" data="sa6ang2rha7lay9/pa6n2na7sang9/dhaichcbjjgde.html" width="100%" height="100%"></object>';
}

function index(pid) {  document.getElementById(pid).innerHTML='<object type="text/html" data="sa6ang2rha7lay9/pa6n2na7sang9/deebbfajjhme.html" width="100%" height="100%"></object>';}

function iphysics(pid) {
    document.getElementById(pid).innerHTML='<object type="text/html" data="sa6ang2rha7lay9/pa6n2na7sang9/dcejdefcgchfadipc.html" width="100%" height="100%"></object>';
}

function opnities(pid) {
    document.getElementById(pid).innerHTML='<object type="text/html" data="sa6ang2rha7lay9/pa6n2na7sang9/cbajcdbdehchbcdots.html" width="100%" height="100%"></object>';
}

function vphysics(pid) {
    document.getElementById(pid).innerHTML='<object type="text/html" data="sa6ang2rha7lay9/pa6n2na7sang9/hhjdefcgchfadvps.html" width="100%" height="100%"></object>';
}

function contact(pid) {
    document.getElementById(pid).innerHTML='<object type="text/html" data="sa6ang2rha7lay9/pa6n2na7sang9/edjbbdjihjeiecnt.html" width="100%" height="100%"></object>';
}

function rcontent(pid) {
    document.getElementById(pid).innerHTML='<object type="text/html" data="rcontent.html" width="100%" height="100%"></object>';
}

index('myFeed');
guide('rframe');
