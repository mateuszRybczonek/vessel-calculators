function addNewRow() {
    //select table as var
    var myTable = document.getElementById("tableBody");

    var rowCount = myTable.rows.length;

    //DOM elements for table
    var newRow = document.createElement('tr');

    //set class to colorCode table
    if (rowCount % 2 != 0) {
        newRow.setAttribute('class', 'even');
    }

    var beacon = new Object();
    beacon.newID = document.getElementById("nameBeacon").value;
    beacon.newNorthing = document.getElementById("newNorthing").value;
    beacon.newEasting = document.getElementById("newEasting").value;
    beacon.newDepth = document.getElementById("newDepth").value;
    beacon.newTAT = document.getElementById("newTAT").value;

    var newID = document.createElement('td');
    var newNorthing = document.createElement('td');
    var newEasting = document.createElement('td');
    var newDepth = document.createElement('td');
    var newTAT = document.createElement('td');
    var newSlantRangeWH = document.createElement('td');
    var newHorDistWH = document.createElement('td');
    var newSlantRangeSHZ = document.createElement('td');
    var newHorDistSHZ = document.createElement('td');
    var newSelected = document.createElement('td');

    //create TextNodes to append to <td>
    var newIDText = document.createTextNode(beacon.newID);
    var newNorthingText = document.createTextNode(beacon.newNorthing);
    var newEastingText = document.createTextNode(beacon.newEasting);
    var newDepthText = document.createTextNode(beacon.newDepth);
    var newTATText = document.createTextNode(beacon.newTAT);

    //create input to append to selected <td>
    var selectedInput = document.createElement('input');
    selectedInput.setAttribute('type', 'checkbox');

    //append TextNodes to <td>
    newID.appendChild(newIDText);
    newNorthing.appendChild(newNorthingText);
    newEasting.appendChild(newEastingText);
    newDepth.appendChild(newDepthText);
    newTAT.appendChild(newTATText);
    newTAT.appendChild(newSlantRangeWH);
    newSelected.appendChild(selectedInput);

    //append <td> to <tr>
    newRow.appendChild(newID);
    newRow.appendChild(newNorthing);
    newRow.appendChild(newEasting);
    newRow.appendChild(newDepth);
    newRow.appendChild(newTAT);
    newRow.appendChild(newSlantRangeWH);
    newRow.appendChild(newHorDistWH);
    newRow.appendChild(newSlantRangeSHZ);
    newRow.appendChild(newHorDistSHZ);
    newRow.appendChild(newSelected);

    //append <tr> to <table>
    myTable.appendChild(newRow);
}

var bNewRow = document.getElementById("bAddNewRow");
bNewRow.addEventListener('click', addNewRow, false);

