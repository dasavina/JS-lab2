document.addEventListener("DOMContentLoaded", function() {
    var onButton = document.getElementById('on');
    var offButton = document.getElementById('off');
    var lampImage = document.getElementById('lampImage');

    onButton.onclick = function () {
        lampImage.setAttribute('src', 'images/lampOn.png');
    };

    offButton.onclick = function () {
        lampImage.setAttribute('src', 'images/lampOff.png');
    };
});
