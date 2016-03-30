function addNewRow() {
    //select table as var
    var array1Table = document.getElementById("array1TableBody");
    var array2Table = document.getElementById("array2TableBody");
    var myTable;

    if (document.getElementById("selectArray1").checked == true) {
        myTable = array1Table;
    }
    else {
        if (document.getElementById("selectArray2").checked == true) {
            myTable = array2Table;
        }
    }
    var rowCount = myTable.rows.length;

    //DOM elements for table
    var newRow = document.createElement('tr');

    //set class to colorCode table
    if (rowCount % 2 != 0) {
        newRow.setAttribute('class', 'even');
    }

    var beacon = new Object();
    beacon.newID = document.getElementById("nameBeacon").value;
    beacon.newNorthing = "";
    beacon.newEasting = "";
    beacon.newSerialNumber = document.getElementById("newSerialNumber").value;
    beacon.floatNo = document.getElementById("newFloatNo").value;

    var newNo = document.createElement('td');
    var newID = document.createElement('td');
    var newSerialNo = document.createElement('td');
    var newNorthing = document.createElement('td');
    var newEasting = document.createElement('td');
    var newRangeFromWH = document.createElement('td');
    var newBearingFromWH = document.createElement('td');
    var newFloatNo = document.createElement('td');
    var newSelected = document.createElement('td');

    //create TextNodes to append to <td>
    var newNoText = document.createTextNode(rowCount + 1);
    var newIDText = document.createTextNode(beacon.newID);
    var newSerialNoText = document.createTextNode(beacon.newSerialNumber);
    var newNorthingText = document.createTextNode(beacon.newNorthing);
    var newEastingText = document.createTextNode(beacon.newEasting);
    var newFloatNoText = document.createTextNode(beacon.floatNo);
    //create input to append to selected <td>
    var selectedInput = document.createElement('input');
    selectedInput.setAttribute('type', 'checkbox');

    //append TextNodes to <td>
    newNo.appendChild(newNoText);
    newID.appendChild(newIDText);
    newSerialNo.appendChild(newSerialNoText);
    newNorthing.appendChild(newNorthingText);
    newEasting.appendChild(newEastingText);
    newFloatNo.appendChild(newFloatNoText);
    newSelected.appendChild(selectedInput);

    //append <td> to <tr>
    newRow.appendChild(newNo);
    newRow.appendChild(newID);
    newRow.appendChild(newSerialNo);
    newRow.appendChild(newNorthing);
    newRow.appendChild(newEasting);
    newRow.appendChild(newRangeFromWH);
    newRow.appendChild(newBearingFromWH);
    newRow.appendChild(newFloatNo);
    newRow.appendChild(newSelected);

    //append <tr> to <table>
    myTable.appendChild(newRow);
}

var bNewRow = document.getElementById("bAddNewRow");
bNewRow.addEventListener('click', addNewRow, false);

