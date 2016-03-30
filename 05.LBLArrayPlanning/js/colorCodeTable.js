function colorCodeTable() {
    var array1Table = document.getElementById("array1TableBody");
    var array2Table = document.getElementById("array2TableBody");
    changeClass(array1Table);
    changeClass(array2Table);
}

function changeClass(myTable) {
    var rowCount = myTable.rows.length;

    var rowsArray = myTable.getElementsByTagName("tr");
    for (var row = 0; row < rowCount; row++) {
        if (row % 2 == 0) {
            rowsArray[row].className = "";
        }
        else {
            rowsArray[row].className = "even";
        }
    }
}
