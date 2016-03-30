function updateRow() {
    //select table as var
    var array1Table = document.getElementById("array1TableBody");
    var array2Table = document.getElementById("array2TableBody");

    checkUpdate(array1Table);
    checkUpdate(array2Table);
}
function checkUpdate(myTable) {
    var rowCount = myTable.rows.length;

    var beacon = new Object();
    beacon.newID = document.getElementById("nameBeacon").value;
    beacon.newNorthing = document.getElementById("newNorthing").value;
    beacon.newEasting = document.getElementById("newEasting").value;
    beacon.newSerialNo = document.getElementById("newSerialNumber").value;
    beacon.newFloatNo = document.getElementById("newFloatNo").value;

    for (var row = 0; row < rowCount; row++) {
        if (myTable.rows[row].cells[8].firstChild.checked == 1) {
            myTable.rows[row].cells[1].textContent = beacon.newID;
            myTable.rows[row].cells[2].textContent = beacon.newSerialNo;
            myTable.rows[row].cells[3].textContent = beacon.newNorthing;
            myTable.rows[row].cells[4].textContent = beacon.newEasting;
            myTable.rows[row].cells[5].textContent = "";
            myTable.rows[row].cells[6].textContent = "";
            myTable.rows[row].cells[7].textContent = beacon.newFloatNo;
        }
    }
}
document.getElementById("bUpdateRow").addEventListener('click', updateRow, false);