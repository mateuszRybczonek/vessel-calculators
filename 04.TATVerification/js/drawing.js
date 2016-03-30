var myCanvas1 = document.getElementById("canvas-1");
var context1 = myCanvas1.getContext("2d");

var myCanvas2 = document.getElementById("canvas-2");
var context2 = myCanvas2.getContext("2d");

var myCanvas3 = document.getElementById("canvas-3");
var context3 = myCanvas3.getContext("2d");

var relativeEasting, relativeNorthing;
var beaconTable = document.getElementById("table");
var scale = 6;
var colors = ['red', 'green', 'blue', 'orange', 'purple', 'gray', 'brown', 'pink', 'black', 'darkGreen'];

function drawing() {
    //DRAW ON CANVAS
    clearCanvas(context1, myCanvas1);
    clearCanvas(context2, myCanvas2);
    clearCanvas(context3, myCanvas3);
    drawBeacons(context1, SHZ);
    drawBeacons(context2, WH);
}
function clearCanvas(contextA, canvasA) // nameOfTheCanvas
{
    contextA.clearRect(0, 0, canvasA.width, canvasA.height);
    //draw title
    contextA.font = "16px Arial";
    if (contextA == context1) {
        contextA.fillText("SHZ", 10, 20);
    }
    if (contextA == context2) {
        contextA.fillText("WH", 10, 20);
    }
    else {
        return;
    }

}

function drawBeacons(canvasContext, position) {
    for (var row = 0; row < rowCount; row++) {
        //get relative coordinates
        relativeEasting = position.easting - beaconTable.rows[row].cells[2].textContent;
        relativeNorthing = position.northing - beaconTable.rows[row].cells[1].textContent;

        //draw beacons
        canvasContext.beginPath();
        canvasContext.arc((relativeEasting / scale) + 200, (relativeNorthing / scale) + 200, 4, 0, 2 * Math.PI);
        canvasContext.closePath();
        canvasContext.setLineDash([]);
        canvasContext.strokeStyle = '#000';
        canvasContext.fillStyle = colors[row];
        canvasContext.stroke();
        canvasContext.fill();

        //draw signal paths
        canvasContext.beginPath();
        canvasContext.moveTo(200, 200);
        canvasContext.lineTo((relativeEasting / scale) + 200, (relativeNorthing / scale) + 200, 4, 0, 2 * Math.PI);
        canvasContext.strokeStyle = colors[row];
        canvasContext.setLineDash([3, 2]);
        canvasContext.stroke();


        //draw beacon's labels
        if (row < rowCount - 3) {
            canvasContext.font = "10px Arial";
            canvasContext.fillText((beaconTable.rows[row].cells[0].textContent), (relativeEasting / scale) + 205, (relativeNorthing / scale) + 195);
        }
    }
    //draw vessel's shape
    canvasContext.beginPath();
    canvasContext.arc(200, 200, 4, 0, 2 * Math.PI);
    canvasContext.moveTo(190, 180);
    canvasContext.quadraticCurveTo(200, 160, 210, 180);
    canvasContext.lineTo(210, 230);
    canvasContext.lineTo(190, 230);
    canvasContext.lineTo(190, 180);
    canvasContext.closePath();
    canvasContext.setLineDash([]);
    canvasContext.strokeStyle = "black";
    canvasContext.stroke();

    //draw 500m and 1000m circles
    canvasContext.beginPath();
    canvasContext.moveTo(200 + 500 / scale, 200);
    canvasContext.setLineDash([1, 3]);
    canvasContext.arc(200, 200, 500 / scale, 0, 2 * Math.PI);
    canvasContext.moveTo(200 + 1000 / scale, 200);
    canvasContext.arc(200, 200, 1000 / scale, 0, 2 * Math.PI);
    canvasContext.closePath();
    canvasContext.stroke();
    canvasContext.fillStyle = '#000';
    canvasContext.fillText("500 m", 185, 200 - 530 / scale);
    canvasContext.fillText("1000 m", 185, 200 - 1030 / scale);
}