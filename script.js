// document.oncontextmenu = new Function("return false");

document.onkeydown = function (e) {

    // disable U key
    if(e.ctrlKey && e.keyCode == 85) {
        alert("Ctrl+U is disabled.")
        return false;
    }
}