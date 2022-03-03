// Cards Height Script
var maxHeight = -1,
    elems = document.querySelectorAll(".col > *");
elems = [].slice.call(elems) // Now a true Array

elems.forEach(function (e) {
    maxHeight = Math.max(maxHeight, e.offsetHeight);
});

elems.forEach(function (e) {
    e.style.height = maxHeight + "px";
});



// < !--Logo Resize starts here-- >
//  When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        // Image Scroll width
        document.getElementById("QES__Logo").style.width = "275px";
    } else {
        // Image initial width
        document.getElementById("QES__Logo").style.width = "300px";
    }
}

function getDocHeight() {
    var D = document;
    return Math.max(
        Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
        Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
        Math.max(D.body.clientHeight, D.documentElement.clientHeight)
    );
}
$(window).load(function () {
    document.getElementById("footer").style.top = getDocHeight() + 40 + "px";
    document.getElementById("footer").style.display = "block";
});




// Logo Redirection Using JS
function imageClick(url) {
    window.location = url;
}
