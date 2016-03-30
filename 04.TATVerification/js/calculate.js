function calculate() {
    WH = new Object();
    SHZ = new Object();
    WHTable = document.getElementById('tableWHBody');
    beaconTable = document.getElementById('tableBody');
    rowCount = beaconTable.rows.length;
    draught = document.getElementById('draught').value;
    transducerDepth = document.getElementById('transducerDepth').value;

    WH.northing = WHTable.rows[0].cells[1].textContent;
    WH.easting = WHTable.rows[0].cells[2].textContent;
    WH.depth = WHTable.rows[0].cells[3].textContent;

    SHZ.northing = WHTable.rows[1].cells[1].textContent;
    SHZ.easting = WHTable.rows[1].cells[2].textContent;
    SHZ.depth = WHTable.rows[1].cells[3].textContent;


    calculateDistancesAndSlantRanges(rowCount);
    drawing();
    verifyTAT();
}

function calculateDistancesAndSlantRanges(rowCount) {
    for (row = 0; row < rowCount; row++) {
        horizontalDistance(WH, 6);
        slantRange(5);
        horizontalDistance(SHZ, 8);
        slantRange(7);
    }
}

function horizontalDistance(position, n) {
    horizontalDistanceValue = Math.sqrt((beaconTable.rows[row].cells[1].textContent - position.northing) * (beaconTable.rows[row].cells[1].textContent - position.northing) + (beaconTable.rows[row].cells[2].textContent - position.easting) * (beaconTable.rows[row].cells[2].textContent - position.easting));
    beaconTable.rows[row].cells[n].textContent = Math.round(horizontalDistanceValue);
}

function slantRange(n) {
    var slantRange = Math.sqrt((horizontalDistanceValue * horizontalDistanceValue) + (beaconTable.rows[row].cells[3].textContent - draught - transducerDepth) * (beaconTable.rows[row].cells[3].textContent - draught - transducerDepth));
    beaconTable.rows[row].cells[n].textContent = Math.round(slantRange);
}

var bCalculate = document.getElementById("bCalculate");
bCalculate.addEventListener('click', calculate, false);

var WH, SHZ;
var WHTable, beaconTable, rowCount, row;
var horizontalDistanceValue;
var draught, transducerDepth;


