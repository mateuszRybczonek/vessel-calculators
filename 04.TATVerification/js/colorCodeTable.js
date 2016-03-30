function colorCodeTable() {
    var myTable = document.getElementById("tableBody");
    var rowCount = myTable.rows.length;

    var rowsArray = myTable.getElementsByTagName("tr");
    for (var row = 0; row < rowCount + 4; row++) {
        if (row % 2 == 0) {
            rowsArray[row].className = "";
        }
        else {
            rowsArray[row].className = "even";
        }
    }
}