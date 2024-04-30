document.addEventListener("DOMContentLoaded", function() {
    var redLight = document.getElementById('red');
    var yellowLight = document.getElementById('yellow');
    var greenLight = document.getElementById('green');

    function switchLights() {
        setTimeout(function() {
            // Turn on red light, turn off others
            redLight.style.opacity = '1';
            yellowLight.style.opacity = '0.3';
            greenLight.style.opacity = '0.3';
        }, 0);
        setTimeout(function() {
            // Turn on yellow light, turn off others
            redLight.style.opacity = '0.3';
            yellowLight.style.opacity = '1';
            greenLight.style.opacity = '0.3';
        }, 2000); // Yellow light stays on for 2 seconds
        setTimeout(function() {
            // Turn on green light, turn off others
            redLight.style.opacity = '0.3';
            yellowLight.style.opacity = '0.3';
            greenLight.style.opacity = '1';
        }, 4000); // Green light stays on for 2 seconds
    }

    // Call switchLights in an infinite loop
    setInterval(switchLights, 6000); // Total cycle time is 6 seconds (2 seconds for each light)
    
    // Initial call to start the cycle
    switchLights();
});
