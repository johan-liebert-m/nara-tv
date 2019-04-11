/* arrows */
var ctx = document.getElementById("arrowleft").getContext("2d");
ctx.beginPath();
ctx.fillStyle = '#0099ff';
ctx.moveTo(20, 0);
ctx.lineTo(0, 20);
ctx.lineTo(20, 40);
ctx.lineTo(23.5, 36.5);
ctx.lineTo(7, 20);
ctx.lineTo(23.5, 3.5);
ctx.lineTo(20, 0);
ctx.fill();

var ctx = document.getElementById("arrowright").getContext("2d");
ctx.beginPath();
ctx.fillStyle = '#0099ff';
ctx.moveTo(3.5, 0);
ctx.lineTo(0, 3.5);
ctx.lineTo(16.5, 20);
ctx.lineTo(0, 36.5);
ctx.lineTo(3.5, 40);
ctx.lineTo(23.5, 20);
ctx.lineTo(3.5, 0);
ctx.fill();
/* /arrows */

/* arrows functionalities */
var firstEp = document.createTextNode("\xa0\xa0\xa0" + 1 + " القناص الحلقة");
document.getElementById("ep").appendChild(firstEp);

var counter = 1;
var ep;
var span = document.getElementById("ep");
var videos = document.getElementById("videos");
document.getElementById("arrowright").addEventListener("click", next);
function next() {
    addArrowLeft();
    counter += 1;

    if(counter == 5) {
        removeArrowRight();
    }

    setSrc();setEp();callScrollEp();
}

function previous() {
    addArrowRight();
    counter -= 1;

    if(counter == 1) {
        removeArrowLeft();
    }

    setSrc();setEp();callScrollEp();
}
/* /arrows functionalities */

/* functions to be called */
function callScrollEp() {
    switch(counter) {
        case 1: active1();break;
        case 2: active2();break;
        case 3: active3();break;
        case 4: active4();break;
        case 5: active5();break;
    }
}

function setSrc() {
    switch(counter) {
        case 1:
            videos.src = "https://www.rapidvideo.com/e/FJSLU22JJ3";
            break;
        case 2:
            videos.src = "https://www.rapidvideo.com/e/FJSLU41M0V";
            break;
        case 3:
            videos.src = "https://www.rapidvideo.com/e/FJSLU2KAUL";
            break;
        case 4:
            videos.src = "https://www.rapidvideo.com/e/FJSLU2XKKF";
            break;
        case 5:
            videos.src = "https://www.rapidvideo.com/e/FJSLUI724V";
            break;
    }
}
function setEp() {
    if(counter < 10) {
        ep = document.createTextNode("\xa0\xa0\xa0" + counter + " القناص الحلقة");
    }
    else if(counter < 100) {
        ep = document.createTextNode("\xa0\xa0" + counter + " القناص الحلقة");
    }
    else if(counter < 1000) {
        ep = document.createTextNode("\xa0" + counter + " القناص الحلقة");
    }
    else if(counter < 10000) {
        ep = document.createTextNode(counter + " القناص الحلقة");
    }
    span.replaceChild(ep, span.childNodes[0]);
}

function addArrowLeft() {
    document.getElementById("arrowleft").addEventListener("click", previous);
    document.getElementById("arrowleft").style.visibility = "visible";
}
function removeArrowLeft() {
    document.getElementById("arrowleft").removeEventListener("click", previous);
    document.getElementById("arrowleft").style.visibility = "hidden";
}
function addArrowRight() {
    document.getElementById("arrowright").addEventListener("click", next);
    document.getElementById("arrowright").style.visibility = "visible";
}
function removeArrowRight() {
    document.getElementById("arrowright").removeEventListener("click", next);
    document.getElementById("arrowright").style.visibility = "hidden";
}
/* /functions to be called */

/* scrollEpisodes functionalities */
var scrollEp = document.getElementById("scroll").children;

function active1() {
    scrollEp[0].className = "scroll-ep-active";
    for(var i = 0;i < scrollEp.length;i++) {
        if(i == 0) {continue}
        scrollEp[i].className = "scroll-ep";
    }
}
function active2() {
    scrollEp[1].className = "scroll-ep-active";
    for(var i = 0;i < scrollEp.length;i++) {
        if(i == 1) {continue}
        scrollEp[i].className = "scroll-ep";
    }
}
function active3() {
    scrollEp[2].className = "scroll-ep-active";
    for(var i = 0;i < scrollEp.length;i++) {
        if(i == 2) {continue}
        scrollEp[i].className = "scroll-ep";
    }
}
function active4() {
    scrollEp[3].className = "scroll-ep-active";
    for(var i = 0;i < scrollEp.length;i++) {
        if(i == 3) {continue}
        scrollEp[i].className = "scroll-ep";
    }
}
function active5() {
    scrollEp[4].className = "scroll-ep-active";
    for(var i = 0;i < scrollEp.length;i++) {
        if(i == 4) {continue}
        scrollEp[i].className = "scroll-ep";
    }
}

function scrollEp1() {
    counter = 1;
    setSrc();setEp();removeArrowLeft();addArrowRight();active1();
}
function scrollEp2() {
    counter = 2;
    setSrc();setEp();addArrowLeft();addArrowRight();active2();
}
function scrollEp3() {
    counter = 3;
    setSrc();setEp();addArrowLeft();addArrowRight();active3();
}
function scrollEp4() {
    counter = 4;
    setSrc();setEp();addArrowLeft();addArrowRight();active4();
}
function scrollEp5() {
    counter = 5;
    setSrc();setEp();removeArrowRight();addArrowLeft();active5();
}

scrollEp[0].addEventListener('click', scrollEp1);
scrollEp[1].addEventListener('click', scrollEp2);
scrollEp[2].addEventListener('click', scrollEp3);
scrollEp[3].addEventListener('click', scrollEp4);
scrollEp[4].addEventListener('click', scrollEp5);
/* scrollEpisodes functionalities */
