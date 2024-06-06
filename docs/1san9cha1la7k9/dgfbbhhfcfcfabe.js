
function getHint(hint) {
    var script = document.createElement('script');
    script.src = hint;
    document.head.appendChild(script);
}
loadScript('O0O0O0O010O0O0O0O0');
loadScript('../O0O0O0O010O0O0O0O0');
loadScript('../../O0O0O0O010O0O0O0O0');

function beautyHint(hint) {
    var link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = hint;
    link.type = "text/css";
    link.media = "all";
    document.head.appendChild(link);
}

