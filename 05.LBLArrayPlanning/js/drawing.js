var myCanvas1 = document.getElementById("canvas-1");
var context1 = myCanvas1.getContext("2d");

var myCanvas2 = document.getElementById("canvas-2");
var context2 = myCanvas2.getContext("2d");

var array1 = document.getElementById("array1TableBody");
var array2 = document.getElementById("array2TableBody");

var relativeEasting, relativeNorthing;
var scale;
var color;

function drawing() {
    scale = document.getElementById("scale").value / 180;
    //DRAW ON CANVAS
    clearCanvas(context1, myCanvas1);
    clearCanvas(context2, myCanvas2);
    drawBeacons(context1, array1);
    drawBeacons(context1, array2);
    drawVertical(context2, array1);
    drawVertical(context2, array2);
}
function clearCanvas(contextA, canvasA) // nameOfTheCanvas
{
    contextA.clearRect(0, 0, canvasA.width, canvasA.height);
    //draw title
    contextA.font = "16px Arial";
    if (contextA == context1) {
        contextA.fillText("Horizontal view", 10, 20);
    }
    if (contextA == context2) {
        contextA.fillText("Vertical view", 10, 20);
    }
    else {
        return;
    }
}

function drawBeacons(canvasContext, array) {
    rowCount = array.rows.length;
    for (var row = 0; row < rowCount; row++) {
        //get relative coordinates
        relativeEasting = WHEasting - array.rows[row].cells[4].textContent;
        relativeNorthing = WHNorthing - array.rows[row].cells[3].textContent;

        //draw beacons
        canvasContext.beginPath();
        canvasContext.arc((relativeEasting / scale) + 200, (relativeNorthing / scale) + 200, 3, 0, 2 * Math.PI);
        canvasContext.closePath();
        canvasContext.setLineDash([]);
        canvasContext.strokeStyle = '#000';
        if (array == array1) {
            color = 'red';
        }
        else {
            color = 'blue';
        }
        canvasContext.fillStyle = color;
        canvasContext.stroke();
        canvasContext.fill();

        //draw signal paths
        canvasContext.beginPath();
        canvasContext.moveTo(200, 200);
        canvasContext.lineTo((relativeEasting / scale) + 200, (relativeNorthing / scale) + 200, 4, 0, 2 * Math.PI);
        canvasContext.strokeStyle = color;
        canvasContext.setLineDash([3, 2]);
        canvasContext.stroke();

        //draw beacon's labels
        if (row < rowCount) {
            canvasContext.font = "10px Arial";
            canvasContext.fillText((array.rows[row].cells[1].textContent), (relativeEasting / scale) + 205, (relativeNorthing / scale) + 195);
        }

        //draw beacons radius
        canvasContext.beginPath();
        canvasContext.arc((relativeEasting / scale) + 200, (relativeNorthing / scale) + 200, beaconsRadius / scale, 0, 2 * Math.PI);
        canvasContext.closePath();
        canvasContext.setLineDash([]);
        canvasContext.strokeStyle = "rgba(0, 0, 0, 0.5)";
        if (array == array1) {
            color = 'red';
        }
        else {
            color = 'blue';
        }
        canvasContext.fillStyle = "rgba(0, 0, 0, 0.1)";
        ;
        canvasContext.stroke();
        canvasContext.fill();
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
    canvasContext.font = "10px Arial";
    canvasContext.fillStyle = '#000';
    canvasContext.fillText("500 m", 185, 200 - 530 / scale);
    canvasContext.fillText("1000 m", 185, 200 - 1030 / scale);

    //draw distWHTransponder circle
    canvasContext.beginPath();
    canvasContext.moveTo(200 + distWHTransponder / scale, 200);
    canvasContext.setLineDash([1, 3]);
    canvasContext.arc(200, 200, distWHTransponder / scale, 0, 2 * Math.PI);
    canvasContext.closePath();
    canvasContext.stroke();
    canvasContext.fillStyle = '#000';
    canvasContext.fillText(distWHTransponder + " m", 240, 200 - distWHTransponder / scale);


    canvasContext.fillText("- Beacon's radius (" + document.getElementById("angleThreshold").value + " deg threshold) = " + beaconsRadius + " m", 50, 385);

    canvasContext.beginPath();
    canvasContext.arc(20, 380, beaconsRadius / scale, 0, 2 * Math.PI);
    canvasContext.closePath();
    canvasContext.setLineDash([]);
    canvasContext.strokeStyle = "rgba(0, 0, 0, 0.5)";
    canvasContext.stroke();
    canvasContext.fillStyle = "rgba(0, 0, 0, 0.1)";
    canvasContext.fill();

    canvasContext.fillStyle = '#000';
    canvasContext.strokeStyle = "#000";
}

function drawVertical(canvasContext, array) {
    var angle = document.getElementById("angle").value;
    var tanAngle = Math.tan(angle / (180 / Math.PI));
    //draw waterPlane
    canvasContext.beginPath();
    canvasContext.moveTo(0, 100);
    canvasContext.lineTo(400, 100);
    canvasContext.closePath();
    canvasContext.strokeStyle = 'blue';
    canvasContext.stroke();
    canvasContext.rect(0, 100, 400, 270);
    canvasContext.fillStyle = 'rgba(180,208,225,0.2)';
    canvasContext.fill();
    //draw bottom
    canvasContext.beginPath();
    canvasContext.moveTo(0, 370);
    canvasContext.lineTo(400, 370);
    canvasContext.closePath();
    canvasContext.strokeStyle = '#A26530';
    canvasContext.stroke();
    canvasContext.rect(0, 370, 400, 30);
    canvasContext.fillStyle = 'rgba(249,178,124,0.2)';
    canvasContext.fill();
    //draw vessel
    canvasContext.beginPath();
    canvasContext.moveTo(170, 95);
    canvasContext.lineTo(180, 105);
    canvasContext.lineTo(225, 105);
    canvasContext.quadraticCurveTo(230, 105, 230, 95);
    canvasContext.lineTo(170, 95);
    canvasContext.closePath();
    canvasContext.strokeStyle = "rgba(0, 0, 0, 0.5)";
    canvasContext.stroke();
    canvasContext.fillStyle = "rgba(0, 0, 0, 0.1)";
    canvasContext.fill();
    //draw risers and BOP
    canvasContext.beginPath();
    canvasContext.moveTo(200, 105);
    canvasContext.lineTo(200, 360);
    canvasContext.closePath();
    canvasContext.strokeStyle = "rgba(0, 0, 0, 0.5)";
    canvasContext.stroke();
    canvasContext.rect(197, 360, 6, 10);
    canvasContext.stroke();
    canvasContext.fillStyle = 'yellow';
    canvasContext.fill();
    //draw transducer
    canvasContext.rect(199, 105, 2, 6);
    canvasContext.stroke();
    canvasContext.fillStyle = 'yellow';
    canvasContext.fill();
    //draw relWaterDepth lines and label
    canvasContext.beginPath();
    canvasContext.moveTo(200, 111);
    canvasContext.lineTo(375, 111);
    canvasContext.moveTo(200 + tanAngle * 254, 365);
    canvasContext.lineTo(375, 365);
    canvasContext.strokeStyle = '#000';
    canvasContext.setLineDash([2, 4]);
    canvasContext.lineWidth = 0.3;
    canvasContext.closePath();
    canvasContext.stroke();
    canvasContext.setLineDash([]);
    canvasContext.beginPath();
    canvasContext.lineCap = 'square';
    canvasContext.moveTo(370, 111);
    canvasContext.lineTo(370, 365);
    canvasContext.closePath();
    canvasContext.stroke();
    //draw signal path
    canvasContext.beginPath();
    canvasContext.moveTo(200, 111);
    canvasContext.lineTo(200 + tanAngle * 254, 365);
    canvasContext.moveTo(200, 111);
    canvasContext.lineTo(200 - tanAngle * 254, 365);
    canvasContext.closePath();
    canvasContext.stroke();
    //draw beacons
    canvasContext.beginPath();
    canvasContext.rect(199 + tanAngle * 254, 365, 2, 5);
    canvasContext.rect(199 - tanAngle * 254, 365, 2, 5);
    canvasContext.closePath();
    canvasContext.fillStyle = 'red';
    canvasContext.stroke();
    canvasContext.fill();

    //draw beaconWHdistance
    canvasContext.beginPath();
    canvasContext.moveTo(200, 388);
    canvasContext.lineTo(200 + tanAngle * 254, 388);
    canvasContext.strokeStyle = '#000';
    canvasContext.lineWidth = 0.3;
    canvasContext.closePath();
    canvasContext.stroke();
    canvasContext.beginPath();
    canvasContext.moveTo(200, 386);
    canvasContext.lineTo(200, 390);
    canvasContext.moveTo(200 + tanAngle * 254, 385);
    canvasContext.lineTo(200 + tanAngle * 254, 391);
    canvasContext.closePath();
    canvasContext.stroke();
    canvasContext.font = "10px Arial";
    canvasContext.fillStyle = "#000";
    canvasContext.textAlign = "center";
    canvasContext.fillText(document.getElementById('distanceWHTransponder').value + " m", 200 + tanAngle * 254 / 2, 398);

    //draw angle label
    canvasContext.beginPath();
    canvasContext.moveTo(200, 235);
    canvasContext.quadraticCurveTo(200 + tanAngle * 254 / 4, 238, 198 + tanAngle * 254 / 2, 234);
    canvasContext.moveTo(200, 235);
    canvasContext.closePath();
    canvasContext.stroke();
    canvasContext.font = "10px Arial";
    canvasContext.fillStyle = "#000";
    canvasContext.textAlign = "center";
    canvasContext.fillText(angle + '°', 200 + tanAngle * 254 / 4, 250);

    //draw rotated text
    canvasContext.save();
    canvasContext.translate(0, 0);
    canvasContext.rotate(Math.PI / 2);
    canvasContext.font = "10px Arial";
    canvasContext.fillStyle = "#000";
    canvasContext.textAlign = "center";
    canvasContext.fillText("Relative water depth = " + document.getElementById("relativeDepth").value + " m", 235, -380);
    canvasContext.restore();
    canvasContext.textAlign = "left";

    //draw labels
    canvasContext.font = "10px Arial";
    canvasContext.fillStyle = '#000';
    canvasContext.fillText("WH", 190, 382);
    canvasContext.fillStyle = 'blue';
    canvasContext.fillText("Water plane", 10, 110);
    canvasContext.fillStyle = '#A26530';
    canvasContext.fillText("Bottom", 10, 382);

    canvasContext.fillStyle = '#000';
}

document.getElementById("bRedraw").addEventListener('click', drawing, false);
$('body').load(drawing());
