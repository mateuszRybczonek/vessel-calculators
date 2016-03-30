function fClearTable() {
    var myTable = document.getElementById("array1TableBody");
    myTable.innerHTML = "";
    var myTable = document.getElementById("array2TableBody");
    myTable.innerHTML = "";
    myTable = document.getElementById("WHPosition");
    myTable.innerHTML = "";
}

document.getElementById("bClearTable").addEventListener('click', fClearTable, false);