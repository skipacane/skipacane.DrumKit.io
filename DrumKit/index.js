
// Detect button press
var numOfDrums = document.querySelectorAll(".drum").length;


for (var i = 0; i < numOfDrums; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);

        switch (buttonInnerHtml) {
            case "a":
                var a_audio = new Audio("sounds/crash.mp3");
                a_audio.play();
                break;
            case "s":
                var s_audio = new Audio("sounds/kick-bass.mp3");
                s_audio.play();
                break;
            case "d":
                var d_audio = new Audio("sounds/snare.mp3");
                d_audio.play();
                break;
            case "f":
                var f_audio = new Audio("sounds/tom-1.mp3");
                f_audio.play();
                break;
            case "j":
                var j_audio = new Audio("sounds/tom-2.mp3");
                j_audio.play();
                break;
            case "k":
                var k_audio = new Audio("sounds/tom-3.mp3");
                k_audio.play();
                break;
            case "l":
                var l_audio = new Audio("sounds/tom-4.mp3");
                l_audio.play();
                break;
            default:
                console.log(buttonInnerHtml);
        }

    });
}


// Detect keypress

    document.addEventListener("keypress", function(event) {
        makeSound(event.key);
    });

function makeSound (key) {
    switch (key) {
        case "a":
            var a_audio = new Audio("sounds/crash.mp3");
            a_audio.play();
            break;
        case "s":
            var s_audio = new Audio("sounds/kick-bass.mp3");
            s_audio.play();
            break;
        case "d":
            var d_audio = new Audio("sounds/snare.mp3");
            d_audio.play();
            break;
        case "f":
            var f_audio = new Audio("sounds/tom-1.mp3");
            f_audio.play();
            break;
        case "j":
            var j_audio = new Audio("sounds/tom-2.mp3");
            j_audio.play();
            break;
        case "k":
            var k_audio = new Audio("sounds/tom-3.mp3");
            k_audio.play();
            break;
        case "l":
            var l_audio = new Audio("sounds/tom-4.mp3");
            l_audio.play();
            break;
        default:
            console.log(key);
    }
}