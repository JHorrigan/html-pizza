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
        ctx.textAlign = "center";
        ctx.fillStyle = "#FFFFFF";

        var textX = (adCanvas.width / 2) - 80;
        var textY = (adCanvas.height / 2);
        ctx.fillText("New York's Best Pizza", textX, textY - 10);

        // Add the text styling for the sub text
        ctx.font = "Italic 22px Georgia";
        ctx.fillText("Joe's Pizza Co.", textX, textY + 25);

        // Add the seperator line
        var lineLength = 360;
        var lineY = (adCanvas.height / 2) + 0.5; // Ensure line is crisp

        ctx.beginPath();
        ctx.moveTo(40, lineY);
        ctx.lineTo((lineLength + 40), lineY);
        ctx.lineWidth = 1.0;
        ctx.strokeStyle = "rgba(255,255,255,0.4)";
        ctx.stroke();

        // Draw the offer circle
        ctx.beginPath();
        ctx.arc(525, 75, 80, 0, Math.PI*2, true);
        ctx.fillStyle = "#009A00";
        ctx.fill();

        // Create a linear gradient for the circle
        var linGrad = ctx.createLinearGradient(0,0,0,160);
        linGrad.addColorStop(0, "#009A00");
        linGrad.addColorStop(0, "#085A00");

    }
}
