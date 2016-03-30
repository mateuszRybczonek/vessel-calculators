function readBeacon() {
    //select table as var
    var array1Table = document.getElementById("array1TableBody");
    var array2Table = document.getElementById("array2TableBody");

    checkRead(array1Table);
    checkRead(array2Table);
}

function checkRead(myTable) {
    var rowCount = myTable.rows.length;
    for (var row = 0; row < rowCount; row++) {
        if (myTable.rows[row].cells[8].firstChild.checked == 1) {
            for (var iteration = 1; iteration < 3; iteration++) {
                newText = myTable.rows[row].cells[iteration].innerHTML;
                var item = document.getElementsByClassName("newBeaconInput");
                item[iteration - 1].value = newText;
            }
            newText = myTable.rows[row].cells[7].innerHTML;
            item[2].value = newText;
        }
    }
}
var bReadBeacon = document.getElementById("bReadBeacon");
bReadBeacon.addEventListener('click', readBeacon, false);