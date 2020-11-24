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
        ctx.fillRect(0,0,600,150);

        // Add the text styling
        ctx.font = "Bold 32px Georgia";
        ctx.TextAlign = "center";
        ctx.fillStyle = "#FFFFFF";

        var textX = (adCanvas.width / 2) - 80;
        var textY = (adCanvas.height / 2);
        ctx.fillText("New York's Best Pizza", textX, textY - 10);

        // Add the text styling for the sub text
        ctx.font = "Italic 22px Georgia";

    }
}
