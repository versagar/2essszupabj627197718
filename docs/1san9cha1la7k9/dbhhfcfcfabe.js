document.addEventListener("contextmenu", event => event.preventDefault());
document.addEventListener("keydown", event => {
    if (event.keyCode === 123 || event.ctrlKey && event.shiftKey && event.keyCode === 73) {
        event.preventDefault()
    }
});
getBeauty("dtp");
getBeauty("mbp");
getBeauty("kpp");
// getBeauty("../dtp");
// getBeauty("../mbp");
// getBeauty("../kpp");
// getBeauty("../../dtp");
// getBeauty("../../mbp");
// getBeauty("../../kpp");
getBeauty("tempresp");
getBeauty('lib');
//document.getElementById("updates").innerHTML = '<object type="text/html" data="../../ady12ata14n9/updateindex.html" width="100%" height="400vh"></object>';
function openNav() {
    document.getElementById("mySidenav").style.width = "20%";
    document.getElementById("mySidenav").style.backgroundColor = "rgba(0,0,0,0.7)"
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0"
}

function openOv() {
    document.getElementById("myOv").style.width = "20%";
    document.getElementById("myFeed").style.width = "80%";
    document.getElementById("openOv").style.display = "none"
}

function closeOv() {
    document.getElementById("myOv").style.width = "0";
    document.getElementById("myFeed").style.width = "100%";
    document.getElementById("openOv").style.display = "block"
}
var c = 0;
var a = 0;
var b = 0;

function openForm() {
    if (a == 1) {
        a = 0;
        document.getElementById("form").style.display = "none";
        document.getElementById("formBtn").innerHTML = "Open Form"
    } else {
        a = 1;
        b = 1;
        openSagar();
        document.getElementById("form").style.display = "block";
        document.getElementById("guideFrame").src = "https://docs.google.com/forms/d/e/1FAIpQLSdPYLXazozE5HBf9LSb7frOYMblCh5PnoVQeiBv1dNdhJTTAA/viewform?";
        document.getElementById("formBtn").innerHTML = "Close Form"
    }
}

function openSagar() {
    if (b == 1) {
        b = 0;
        document.getElementById("form").style.display = "none";
        document.getElementById("sagarBtn").innerHTML = "Open Profile"
    } else {
        b = 1;
        a = 1;
        openForm();
        document.getElementById("form").style.display = "block";
        document.getElementById("guideFrame").src = "../../ecjigjd/saga&1214.html";
        document.getElementById("sagarBtn").innerHTML = "Close Profile"
    }
}

function openCpnotice() {
    if (c == 1) {
        c = 0;
        document.getElementById("cpnotice").style.display = "none"
    } else {
        c = 1;
        document.getElementById("cpnotice").style.display = "block"
    }
}
var sb = 0;

function showBlock(id) {
    document.getElementById(id).style.display = "block"
}

function hideBlock(id) {
    document.getElementById(id).style.display = "none"
}
var sbtwo = 0;

function showblockTwo(one, two) {
    document.getElementById(one).style.display = "block";
    document.getElementById(two).style.display = "block"
}

function hideblockTwo(one, two) {
    document.getElementById(one).style.display = "none";
    document.getElementById(two).style.display = "none"
}

function displayBlock(id) {
    if (sb == 1) {
        sb = 0;
        document.getElementById(id).style.display = "none"
    } else {
        sb = 1;
        document.getElementById(id).style.display = "block"
    }
}

function displayblockTwo(one, two) {
    if (sbtwo == 1) {
        sbtwo = 0;
        document.getElementById(one).style.display = "none";
        document.getElementById(two).style.display = "none"
    } else {
        sbtwo = 1;
        document.getElementById(one).style.display = "block";
        document.getElementById(two).style.display = "block"
    }
}

function fillsecondwidthTwo(w, u, one, two) {
    document.getElementById(one).style.width = w + u;
    document.getElementById(two).style.width = 100 - w + u;
}
var ssw = 0;

function switchsetfillWidth(w, u, one, two) {
    if (ssw == 1) {
        ssw = 0;
        fillsecondwidthTwo(0, u, one, two);
    } else {
        ssw = 1;
        fillsecondwidthTwo(w, u, one, two);
    }
}

function setWidth(w, u, id) {
    document.getElementById(id).style.width = w + u;
}

function setWidthHeight(w, wu, h, hu, id) {
    document.getElementById(id).style.width = w + wu;
    document.getElementById(id).style.height = h + hu;
}
var sw = 0;

function switchWidth(w, u, id) {
    if (sw == 1) {
        sw = 0;
        document.getElementById(id).style.width = 0;
    } else {
        sw = 1;
        document.getElementById(id).style.width = w + u;
    }
}

function fullOpen() {
    document.getElementById('header').style.display = "none";
    document.getElementById('fullOpener').style.display = "none";
    document.getElementById('fullCloser').style.display = "block";
    setWidthHeight(100, "%", 100, "%", "wbody");
}

function fullClose() {
    document.getElementById('header').style.display = "flex";
    document.getElementById('fullOpener').style.display = "block";
    document.getElementById('fullCloser').style.display = "none";
    document.getElementById('wbody').style.height = 'calc(100% - 12vmin)';
}

function pgtwc(id, name) {
    var oname = '<object type="text/html" data="' + name + 'twc.html" width="100%" height="100%"></object>';
    // document.getElementById(id).innerHTML = twcloader;
    document.getElementById(id).innerHTML = oname;
}

function loadObject(elementId, url) {
    var oname = '<object type="text/html" data="' + url + '" class="loadedobject" id="obin' + elementId + '"></object>';
    //var oname = url;
    if (url) {
        document.getElementById(elementId).innerHTML = oname;
    } else {
        document.getElementById(elementId).innerHTML = "Sorry, the content could not be loaded at this moment.";
    }
}

function loadIn(elementId, url) {
    const el = document.getElementById(elementId);

    // Step 1: Animate fade out and shrink
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    el.style.opacity = '0';
    el.style.transform = 'scale(0.8)';

    // Step 2: Fetch the content while it's fading out
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Page not found');
            }
            return response.text();
        })
        .then(html => {
            // Step 3: After fade-out completes, change content and fade back in
            setTimeout(() => {
                el.innerHTML = html;
                el.style.opacity = '1';
                el.style.transform = 'scale(1)';

                // Now extract and re-run <script> tags inside the newly injected HTML
                const scripts = el.querySelectorAll("script");
                scripts.forEach(oldScript => {
                    const newScript = document.createElement("script");

                    if (oldScript.src) {
                        newScript.src = oldScript.src;
                    } else {
                        newScript.textContent = oldScript.textContent;
                    }

                    // Optional: Copy script attributes (e.g. type, async)
                    [...oldScript.attributes].forEach(attr =>
                        newScript.setAttribute(attr.name, attr.value)
                    );

                    // Append to body to execute it
                    document.body.appendChild(newScript);
                    document.body.removeChild(newScript);
                });

            }, 500); // Delay must match transition
        })
        .catch(error => {
            console.error('Error loading page:', error);
            // Optional fallback
            if (typeof loadObject === 'function') {
                loadObject(elementId, url);
            }
        });
}


function loadhPagesuff(id, name, suff, dir) {
    var page = dir + name + suff + '.html';
    loadIn(id, page);
    //loadObject(id, page);
}

function gslidetwc(id, gid) {
    // var twcloader = '<div id="twcloaderGif"></div>';
    var oname = '<div id="ttgsidBox'+id+'" class="ttgsidbox"><iframe id="ttgsidFrame'+id+'" class="ttgsidframe" src="https://docs.google.com/presentation/d/' + gid + '/embed" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true";></iframe><div class="abs gslidestrip"></div></div>';
    // document.getElementById(id).innerHTML = twcloader;
    document.getElementById(id).innerHTML = oname;
}

function gdoctwc(id, gid) {
    // var twcloader = '<div id="twcloaderGif"></div>';
    var oname = '<div id="ttgdidBox'+id+'" class="ttgdidbox"><iframe id="ttgdidFrame'+id+'" class="ttgdidframe" src="https://docs.google.com/document/d/' + gid + '/pub?embedded=true" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true";></iframe><div class="abs gdocstrip"></div></div>';
    // document.getElementById(id).innerHTML = twcloader;
    document.getElementById(id).innerHTML = oname;
}


function inptwcData(tid, rid) {
    var source = document.getElementById(tid);
    document.getElementById(rid).innerText = source.innerText;
}
var twctidLast = 'wbody';
var twctfLast = 'sa6ang2rha7lay9/t6w2c7pfs/home';
//var twcttStat = 0;
//var twctUndo = 0;
//function viewBackbtn() {console.log('twcttStat:', twcttStat); if (twcttStat === 1) {showBlock('twctBack');} else {hideBlock('twctBack');}}


//hideBlock('twctBack');
function omTwc(fName, aid) {
    pgtwc('wbody', 'sa6ang2rha7lay9/t6w2c7pfs/' + fName);
    openMenu('twcmenu', 'tmBtn', "ecjigjd/ecabejdcddgiah.png", "ecjigjd/updraw.png");
    inptwcData(aid, 'twcpHead');
    twctfLast = 'sa6ang2rha7lay9/t6w2c7pfs/' + fName;
    twctidLast = aid;
}


function twctgoBack() {
    pgtwc('wbody', twctfLast);
    inptwcData(twctidLast, 'twcpHead');
}

function twcttOpen(ttstt, gsid, gdid) {
    showBlock('twcHeadline');
    inptwcData(ttstt, 'ttHead');
    gslidetwc('ttFrame1', gsid);
    gdoctwc('ttFrame2',gdid);
    setDisplay('none', 'ttFrame4');
}

function openMenu(w, opener, imgOpener, imgCloser) {
    var snd = new Audio("ecjigjd/ekdjgjchdjjacgfbElca.wav");
    var x = document.getElementById(w);
    var o = document.getElementById(opener);
    snd.play();
    if (x.style.display == "block") {
        x.style.display = "none";
        o.src = imgOpener; // "ecjigjd/ecabejdcddgiah.png";
    } else {
        x.style.display = "block";
        o.src = imgCloser; // "ecjigjd/updraw.png";
    }
}

function opentMenu(w, opener, tOpener, tCloser) {
    var snd = new Audio("ecjigjd/ekdjgjchdjjacgfbElca.wav");
    var x = document.getElementById(w);
    var o = document.getElementById(opener);
    snd.play();
    if (x.style.display == "block") {
        x.style.display = "none";
        o.innerHTML = tOpener; // "ecjigjd/ecabejdcddgiah.png";
    } else {
        x.style.display = "block";
        o.innerHTML = tCloser; // "ecjigjd/updraw.png";
    }
}
function shortenTitle(title) {
    return title
        .split(' ') // Split the title into words based on spaces
        .map(word => word.substring(0, 2).toLowerCase()) // Get the first two letters of each word and convert to lowercase
        .join('') // Join the letters without any separator
        .replace('&', '') // Remove '&'
        .replace('(', '') // Remove '('
        .replace(')', ''); // Remove ')'
}

function loadttMenu(suff, tname) {
    //var pagename = document.getElementById('ttHead').innerText.toLowerCase().trim();
    var pagename = shortenTitle(document.getElementById('ttHead').innerText);
    loadhPagesuff("ttFrame2", pagename, suff, "topics/" + tname + "/");
    setDisplay("none", "ttmContainer");
}

function loadttFrame(num, suff, pre) {
    loadhPagesuff("ttFrame" + num, pre, suff, "topics/");
}

function setDisplay(option, id) {
    document.getElementById(id).style.display = option;
}

//var containerWidth = document.getElementById('two').offsetWidth; // Get the container width if needed.
//var adjustedWidth = containerWidth - awidth; // Calculate the adjusted width
// General Blocks

function toggleCon(id, con, vone, vtwo) {
    var el = document.getElementById(id);

    // If 'con' starts with '.style', toggle inline CSS styles
    if (con.startsWith('style.')) {
        // Remove '.style' from the string to access the actual style property
        var styleProperty = con.replace('style.', '').trim();

        // Toggle the inline CSS property
        if (el.style[styleProperty] === vtwo) {
            el.style[styleProperty] = vone;
        } else {
            el.style[styleProperty] = vtwo;
        }
    } else {
        // Otherwise, toggle the property (like class, attribute, etc.)
        if (el[con] === vtwo) {
            el[con] = vone;
        } else {
            el[con] = vtwo;
        }
    }
}

var hor = 0;

function move(dir, id, step) {
    hor = hor + 2 - dir;
    document.getElementById(id).style.right = step * hor + "vw";
}

function autoScroll(id, dist, dur1, dur2, stayTime) {
  const el = document.getElementById(id);
  let cancelled = false;

  function cancelScroll() {
    cancelled = true;
    el.removeEventListener('wheel', cancelScroll);
    el.removeEventListener('touchstart', cancelScroll);
    el.removeEventListener('keydown', cancelScroll);
  }

  // Add user-interaction listeners
  el.addEventListener('wheel', cancelScroll, { passive: true });
  el.addEventListener('touchstart', cancelScroll, { passive: true });
  el.addEventListener('keydown', cancelScroll);

  const start = el.scrollTop;
  const startTime = performance.now();

  function animate(time) {
    if (cancelled) return;
    const p = Math.min((time - startTime) / dur1, 1);
    el.scrollTop = start + dist * p;
    if (p < 1) requestAnimationFrame(animate);
    else setTimeout(scrollBack, stayTime);
  }

  function scrollBack() {
    const backStart = el.scrollTop;
    const backTime = performance.now();

    function back(t) {
      if (cancelled) return;
      const p = Math.min((t - backTime) / dur2, 1);
      el.scrollTop = backStart - dist * p;
      if (p < 1) requestAnimationFrame(back);
    }

    requestAnimationFrame(back);
  }

  requestAnimationFrame(animate);
}
