// document.oncontextmenu = function right_click() {
//     alert("Right Click is disabled, Press F12 to inspect.")
//     return false;
// }

document.onkeydown = function (e) {

    if(e.ctrlKey && e.keyCode == 85) {
        alert("Ctrl+U (View Page Source) is disabled.")
        return false;
    }
}