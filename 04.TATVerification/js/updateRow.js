function updateRow() {
    var myTable = document.getElementById("tableBody");
    var rowCount = myTable.rows.length;

    var beacon = new Object();
    beacon.newID = document.getElementById("nameBeacon").value;
    beacon.newNorthing = document.getElementById("newNorthing").value;
    beacon.newEasting = document.getElementById("newEasting").value;
    beacon.newDepth = document.getElementById("newDepth").value;
    beacon.newTAT = document.getElementById("newTAT").value;

    for (var row = 0; row < rowCount; row++) {
        if (myTable.rows[row].cells[9].firstChild.checked == 1) {
            myTable.rows[row].cells[0].textContent = beacon.newID;
            myTable.rows[row].cells[1].textContent = beacon.newNorthing;
            myTable.rows[row].cells[2].textContent = beacon.newEasting;
            myTable.rows[row].cells[3].textContent = beacon.newDepth;
            myTable.rows[row].cells[4].textContent = beacon.newTAT;
            myTable.rows[row].cells[5].textContent = "";
            myTable.rows[row].cells[6].textContent = "";
            myTable.rows[row].cells[7].textContent = "";
            myTable.rows[row].cells[8].textContent = "";
        }
    }
}
document.getElementById("bUpdateRow").addEventListener('click', updateRow, false);