function fRemoveSelectedRow() {
    var array1Table = document.getElementById("array1TableBody");
    var array2Table = document.getElementById("array2TableBody");
    checkRemove(array1Table);
    checkRemove(array2Table);
}
function checkRemove(myTable) {
    var rowCount = myTable.rows.length;
    for (var row = 0; row < rowCount; row++) {
        //check if "checked"
        if (myTable.rows[row].cells[8].firstChild.checked == 1) {
            myTable.deleteRow(row);

            //change WPT nos. by one for each next row
            for (var i = row; i < rowCount - 1; i++) {
                myTable.rows[i].cells[0].textContent = (myTable.rows[i].cells[0].textContent) - 1;
            }

            //reduce row by one to check again the same row number (all rows shifts up)
            row--;

            //update rowCount (one row was removed)
            rowCount = myTable.rows.length;
        }
    }
    colorCodeTable();
}


document.getElementById("bRemoveRow").addEventListener('click', fRemoveSelectedRow, false);