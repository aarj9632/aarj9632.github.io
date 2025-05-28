// **********Contact Me Button Animation***********

// function contactme() {
//     document.querySelector(".footer").style.cssText = "background: linear-gradient(90deg, rgba(255,255,255,0.7) 50%, transparent 50%), linear-gradient(90deg, rgba(255,255,255,0.7) 50%, transparent 50%), linear-gradient(0deg, rgba(255,255,255,0.7) 50%, transparent 50%), linear-gradient(0deg, rgba(255,255,255,0.7) 50%, transparent 50%);background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;background-size: 15px 4px, 15px 4px, 4px 15px, 4px 15px;background-position: 0px 0px, 272px 100%, 0px 60px, 100% 0px;border-radius: 20px;padding: 15px;animation: border-dance-footer 8s infinite linear; transition: 0.2s;";

//     document.querySelector(".social-media").style.cssText = "background: linear-gradient(90deg, rgba(255,255,255,0.7) 50%, transparent 50%), linear-gradient(90deg, rgba(255,255,255,0.7) 50%, transparent 50%), linear-gradient(0deg, rgba(255,255,255,0.7) 50%, transparent 50%), linear-gradient(0deg, rgba(255,255,255,0.7) 50%, transparent 50%); background-repeat: repeat-x, repeat-x, repeat-y, repeat-y; background-size: 15px 4px, 15px 4px, 4px 15px, 4px 15px;background-position: 0px 7px, 272px 70px, 0px 60px, 287px 0px; border-radius: 20px; padding: 10px;animation: border-dance-social-media 10s infinite linear; transition: 0.2s;";
// }

// ******Disable the F12 key and Ctrl+U*********

document.addEventListener('keydown', function (event) {
    // Check if the F12 key is pressed
    if (event.key === 'F12' || event.keyCode === 123) {
        event.preventDefault();
        console.log("F12 is disabled.");
    }

    // Check if Ctrl+U is pressed
    if ((event.ctrlKey || event.metaKey) && (event.key === 'u' || event.key === 'U' || event.keyCode === 85)) {
        event.preventDefault();
        console.log("Ctrl+U is disabled.");
    }
});

// ******Disable the context menu*********

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    console.log("Right-click context menu disabled.");
});