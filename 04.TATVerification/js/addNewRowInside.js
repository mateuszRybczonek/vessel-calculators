function addNewRowInside() {
    var myTable = document.getElementById("tableBody");
    var rowCount = myTable.rows.length;
    for (var row = 0; row < rowCount; row++) {
        if (myTable.rows[row].cells[9].firstChild.checked == 1) {
            myTable.insertRow(row + 1);
            //update rowCount
            rowCount = myTable.rows.length;

            myTable.rows[(row + 1)].insertCell(0);
            myTable.rows[(row + 1)].cells[0].textContent = document.getElementById("nameBeacon").value;

            myTable.rows[(row + 1)].insertCell(1);
            myTable.rows[(row + 1)].cells[1].textContent = document.getElementById("newNorthing").value;

            myTable.rows[(row + 1)].insertCell(2);
            myTable.rows[(row + 1)].cells[2].textContent = document.getElementById("newEasting").value;

            myTable.rows[(row + 1)].insertCell(3);
            myTable.rows[(row + 1)].cells[3].textContent = document.getElementById("newDepth").value;

            myTable.rows[(row + 1)].insertCell(4);
            myTable.rows[(row + 1)].cells[4].textContent = document.getElementById("newTAT").value;

            myTable.rows[(row + 1)].insertCell(5);
            myTable.rows[(row + 1)].insertCell(6);
            myTable.rows[(row + 1)].insertCell(7);
            myTable.rows[(row + 1)].insertCell(8);
            myTable.rows[(row + 1)].insertCell(9).innerHTML = "<td class=\"selected\"><input type=\"checkbox\"<\td>"
        }
    }
    colorCodeTable();
}


document.getElementById("bInsertWPT").addEventListener('click', addNewRowInside, false);