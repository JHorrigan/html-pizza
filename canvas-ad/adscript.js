window.onload = function() {
    var adCanvas = document.getElementById("adCanvas");
    if (adCanvas.getContext) {
        // Initialise a 2d drawing context
        var ctx = adCanvas.getContext("2d");

        drawAdvert();
    }

    function drawAdvert() {
        // Create the Background Rectangle
        ctx.fillStyle = "rgba(0,0,0,0.4)";
    }
}
