function fClearTable() {
    var myTable = document.getElementById("tableBody");
    myTable.innerHTML = "";
    myTable = document.getElementById("WHPosition");
    myTable.innerHTML = "";
    myTable = document.getElementById("SHZPosition");
    myTable.innerHTML = "";
}

document.getElementById("bClearTable").addEventListener('click', fClearTable, false);