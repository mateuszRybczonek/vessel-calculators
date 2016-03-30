function readBeacon() {
    var myTable = document.getElementById("tableBody");
    var rowCount = myTable.rows.length;
    for (var row = 0; row < rowCount; row++) {
        if (myTable.rows[row].cells[9].firstChild.checked == 1) {
            for (var iteration = 0; iteration < 5; iteration++) {
                newText = myTable.rows[row].cells[iteration].innerHTML;
                var item = document.getElementsByClassName("newBeaconInput");
                item[iteration].value = newText;
            }
        }
    }
}
var bReadBeacon = document.getElementById("bReadBeacon");
bReadBeacon.addEventListener('click', readBeacon, false);