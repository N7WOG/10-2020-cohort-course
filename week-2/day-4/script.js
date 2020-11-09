var currentPosition = 0

var prevImage = function () {
    if (currentPosition > -200) {
        currentPosition = -1000
    } else {
        currentPosition = currentPosition + 200;
    };
    document.getElementById('jsImageSlider').style.transform = 'translateX(' + currentPosition + 'px)';
    console.log(currentPosition);
}

var nextImage = function() {
    if (currentPosition < -800) {
        currentPosition = 0
    } else {
        currentPosition = currentPosition - 200;
    };
    document.getElementById('jsImageSlider').style.transform = 'translateX(' + currentPosition + 'px)';
    console.log(currentPosition);
}