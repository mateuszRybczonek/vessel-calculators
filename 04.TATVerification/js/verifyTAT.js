function verifyTAT() {

    document.getElementById("TATTableBodySHZ").innerHTML = "";
    document.getElementById("TATTableBodyWH").innerHTML = "";
    tableHeadSHZ.innerHTML = "";
    tableHeadWH.innerHTML = "";


    createTableHead(tableHeadSHZ);
    createTableHead(tableHeadWH);
    createTableRow(TATTableBodySHZ);
    createTableRow(TATTableBodyWH);
    calculateTravelTimes(TATTableBodySHZ, 7); //beacon table cell
    calculateTravelTimes(TATTableBodyWH, 5);
    OKnotOK(TATTableBodySHZ);
    OKnotOK(TATTableBodyWH);
    drawTravelTimes();
}
function createTableHead(tableName) {
    newTH = document.createElement('th');
    newTH.setAttribute('scope', 'col');
    newTH.setAttribute('class', 'verifyCol');
    tableName.appendChild(newTH);

    newTH = document.createElement('th');
    newTH.setAttribute('scope', 'col');
    newTH.setAttribute('class', 'verifyCol');
    newText = document.createTextNode("Travel time[ms]");
    newTH.appendChild(newText);
    tableName.appendChild(newTH);

    rowCount = beaconTable.rows.length;
    for (row = 0; row < rowCount; row++) {
        newTH = document.createElement('th');
        newText = document.createTextNode(beaconTable.rows[row].cells[0].textContent);
        newTH.appendChild(newText);
        newTH.setAttribute('scope', 'col');
        newTH.setAttribute('class', 'verifyCol');
        tableName.appendChild(newTH);
    }
}
function createTableRow(tableName) {
    for (row = 0; row < rowCount; row++) {
        newTR = document.createElement('tr');
        newText = document.createTextNode(beaconTable.rows[row].cells[0].textContent);
        newTR.appendChild(newText);
        for (td = 0; td < rowCount + 1; td++) {
            newTD = document.createElement('td');
            newTD.setAttribute('class', 'verifyCell');
            newTR.appendChild(newTD);
        }
        if (row % 2 != 0) {
            newTR.setAttribute('class', 'even');
        }
        tableName.appendChild(newTR);
    }
}

function calculateTravelTimes(tableName, n) {
    var soundVelocity = document.getElementById("speedOfSound").value;
    for (row = 0; row < rowCount; row++) {
        var travelTime = (2 * 1000 * (beaconTable.rows[row].cells[n].textContent / soundVelocity)) + Number(beaconTable.rows[row].cells[4].textContent);
        tableName.rows[row].cells[0].textContent = Math.round(travelTime);
    }
}

function OKnotOK(tableName) {
//check if travelTimeDiff <125ms, if YES -> OK
    var travelTime1, travelTime2, travelTimeDiff;
    var row, column;

    for (row = 0; row < rowCount; row++) {
        travelTime1 = tableName.rows[row].cells[0].textContent;
        for (column = 0; column < rowCount; column++) {
            travelTime2 = tableName.rows[column].cells[0].textContent;
            travelTimeDiff = Math.sqrt((travelTime1 - travelTime2) * (travelTime1 - travelTime2));
            if (row == column) {
                tableName.rows[row].cells[column + 1].textContent = "-----";
            }
            else {
                if (travelTimeDiff > 125) {
                    tableName.rows[row].cells[column + 1].textContent = "OK";
                }
                else {
                    tableName.rows[row].cells[column + 1].textContent = "NOT OK";
                    newTD = tableName.rows[row].cells[column + 1];
                    newTD.setAttribute('class', 'notOK');
                }
            }

        }
    }
}

function drawTravelTimes() {
    var tableSHZ = document.getElementById("tableVerifySHZ");
    var tableWH = document.getElementById("tableVerifyWH");
    var travelTimeSHZ, travelTimeWH, travelTimeMin, travelTimeMax, travelTime;
    travelTimeMin = 20000;
    travelTimeMax = 0;

    //calculate max and min travel time to create a frame
    for (row = 0; row < rowCount; row++) {
        travelTime = tableSHZ.rows[row].cells[0].textContent;
        if (travelTime < travelTimeMin) {
            travelTimeMin = travelTime;
        }
        if (travelTime > travelTimeMax) {
            travelTimeMax = travelTime;
        }
        else {
            continue;
        }
    }
    for (row = 0; row < rowCount; row++) {
        travelTime = tableWH.rows[row].cells[0].textContent;
        if (travelTime < travelTimeMin) {
            travelTimeMin = travelTime;
        }
        if (travelTime > travelTimeMax) {
            travelTimeMax = travelTime;
        }
        else {
            continue;
        }
    }
    var scale = travelTimeMax - travelTimeMin;

    //draw frame
    context3.beginPath();
    context3.moveTo(50, 350);
    context3.lineTo(750, 350);
    context3.lineTo(750, 50);
    context3.lineTo(50, 50);
    context3.lineTo(50, 350);
    context3.closePath();
    context3.strokeStyle = "#000";
    context3.lineWidth = 0.5;
    context3.stroke();

    //draw title
    context3.font = "12px Arial";
    context3.fillStyle = "#000";
    context3.fillText("Travel times [ms]", 20, 30);
    context3.fillText("SHZ", 35, 370);
    context3.fillText("WH", 740, 370);
    context3.fillText("Beacon ID:", 70, 390);

    //draw 125ms sample
    context3.beginPath();

    context3.moveTo(768, 10);
    context3.lineTo(772, 10);
    context3.moveTo(770, 10);
    context3.lineTo(770, 10 + (125 / scale * 300));
    context3.moveTo(768, 10 + (125 / scale * 300));
    context3.lineTo(772, 10 + (125 / scale * 300));
    context3.closePath();
    context3.lineWidth = 1;
    context3.stroke();
    context3.font = "10px Arial";
    context3.fillText("125 ms", 730, 25);

    //draw travel times
    for (row = 0; row < rowCount; row++) {
        travelTimeSHZ = tableSHZ.rows[row].cells[0].textContent;
        travelTimeWH = tableWH.rows[row].cells[0].textContent;

        context3.beginPath();
        context3.strokeStyle = colors[row];
        context3.moveTo(50, 350 - (travelTimeSHZ - travelTimeMin) / scale * 300);
        context3.lineTo(750, 350 - (travelTimeWH - travelTimeMin) / scale * 300);
        context3.closePath();
        context3.stroke();

        context3.fillStyle = colors[row];
        context3.font = "12px Arial";
        context3.fillText((beaconTable.rows[row].cells[0].textContent), 50 * (row + 3), 390);
        context3.font = "10px Arial";
        context3.fillText(travelTimeSHZ, 22, 350 - (travelTimeSHZ - travelTimeMin - 5) / scale * 300);
        context3.fillText(travelTimeWH, 755, 350 - (travelTimeWH - travelTimeMin - 5) / scale * 300);
    }
}

var tableHeadSHZ = document.getElementById("TATTableHead");
var tableHeadWH = document.getElementById("TATTableHeadWH");
var beaconTable = document.getElementById('tableBody');
var row, td, rowCount;
var newTH, newText, newTR, newTD;