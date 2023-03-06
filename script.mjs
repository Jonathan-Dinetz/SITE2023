function myFunction(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "scale 0.5s ease-in 0s"
    elem.style.scale = '180';
}

function myFunctionreverse(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "scale 0.5s ease-in 0s"
    elem.style.scale = '1';
}

function visibility(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "background 0.2s ease-in-out .2s"
    elem.style.background = 'white';
}

function invisibility(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "background 0.25s ease-in-out 0s"
    elem.style.background = 'transparent';
}

function hideself(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "height 0s"
    elem.style.height = '0px';
}

function showself(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "height 0s"
    elem.style.height = '25px';
}

function opensesame(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "color 0.4s ease-in-out .2s"
    elem.style.color = 'white';
}

function shutdownsesame(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "color 0.25s ease-in-out 0s";
    elem.style.color = 'transparent';
}

function slideop(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "top 0.75s ease-out 0s";
    elem.style.top = '0vw';
}

function slideopreverse(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "top 0.75s ease-in 0s";
    elem.style.top = '100vh';
}

function slideophide(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "opacity 0.5s ease-in-out 0s";
    elem.style.opacity = '0%';
}

function slideopshow(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "opacity 0.25s ease-in-out 0.5s";
    elem.style.opacity = '100%';
}

function display(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "scale 0s ease-in-out 0s";
    elem.style.scale = '1';
}

function displaynone(el) {
    var elem = document.getElementById(el);
    elem.style.transition = "scale 0s ease-in-out 0.5s";
    elem.style.scale = '0';
}




