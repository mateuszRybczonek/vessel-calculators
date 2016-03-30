function calculate() {
    var relDepth = document.getElementById("depth").value - document.getElementById("draught").value - document.getElementById("transducerDepth").value;
    document.getElementById("relativeDepth").value = relDepth;

    startAngle = document.getElementById("heading").value;
    angle = document.getElementById("angle").value;
    distWHTransponder = Math.round(relDepth * Math.sin(angle / (180 / Math.PI)));
    document.getElementById("distanceWHTransponder").value = distWHTransponder;

    var angleThreshold = document.getElementById("angleThreshold").value;
    beaconsRadius = (Math.round(relDepth * Math.sin((Number(angle) + Number(angleThreshold)) / (180 / Math.PI))) - Math.round(relDepth * Math.sin((Number(angle) - Number(angleThreshold)) / (180 / Math.PI)))) / 2;
    document.getElementById("beaconsRadius").value = beaconsRadius;

    WHNorthing = document.getElementById("WHPosition").cells[1].textContent;
    WHEasting = document.getElementById("WHPosition").cells[2].textContent;

    for (row = 0; row < array1.rows.length; row++) {
        calculateNorthingsAndEastings(array1, 0);
    }
    for (row = 0; row < array2.rows.length; row++) {
        calculateNorthingsAndEastings(array2, 180 / array2.rows.length);
    }
    drawing();
}
function calculateNorthingsAndEastings(array, angleShift) {
    array.rows[row].cells[5].textContent = distWHTransponder;
    bearing = Math.round(angleShift + Number(startAngle) + 360 / array.rows.length * row);
    array.rows[row].cells[6].textContent = bearing;
    //calculate beacon's northing
    deltaNorthing = Math.round(Math.sqrt(distWHTransponder * Math.cos(bearing / (180 / Math.PI)) * (distWHTransponder * Math.cos(bearing / (180 / Math.PI)))));
    if (bearing < 90) {
        beaconNorthing = Math.round(Number(WHNorthing) + Number(deltaNorthing));
    }
    else {
        if (bearing < 270) {
            beaconNorthing = Math.round(Number(WHNorthing) - Number(deltaNorthing));
        }
        else {
            beaconNorthing = Math.round(Number(WHNorthing) + Number(deltaNorthing));
        }
    }
    array.rows[row].cells[3].textContent = beaconNorthing;
    //calculate beacon's easting
    deltaEasting = Math.round(distWHTransponder * Math.sin(bearing / (180 / Math.PI)));
    beaconEasting = Math.round(Number(WHEasting) + Number(deltaEasting));
    array.rows[row].cells[4].textContent = beaconEasting;
}

var row, distWHTransponder;
var WHNorthing, WHEasting;
var bearing, deltaNorthing, deltaEasting, beaconNorthing, beaconEasting;
var startAngle, angle, beaconsRadius;
var array1 = document.getElementById("array1TableBody");
var array2 = document.getElementById("array2TableBody");
document.getElementById("bCalculate").addEventListener('click', calculate, false);