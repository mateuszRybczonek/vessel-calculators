function addNewRowInside() {
    //select table as var
    var array1Table = document.getElementById("array1TableBody");
    var array2Table = document.getElementById("array2TableBody");

    checkTable(array1Table);
    checkTable(array2Table);
}

function checkTable(myTable) {
    var rowCount = myTable.rows.length;
    for (var row = 0; row < rowCount; row++) {
        if (myTable.rows[row].cells[8].firstChild.checked == 1) {
            myTable.insertRow(row + 1);
            //update rowCount
            rowCount = myTable.rows.length;

            myTable.rows[(row + 1)].insertCell(0);
            myTable.rows[(row + 1)].cells[0].textContent = row + 1;

            myTable.rows[(row + 1)].insertCell(1);
            myTable.rows[(row + 1)].cells[1].textContent = document.getElementById("nameBeacon").value;

            myTable.rows[(row + 1)].insertCell(2);
            myTable.rows[(row + 1)].cells[2].textContent = document.getElementById("newSerialNumber").value;

            myTable.rows[(row + 1)].insertCell(3);
            myTable.rows[(row + 1)].cells[3].textContent = "";

            myTable.rows[(row + 1)].insertCell(4);
            myTable.rows[(row + 1)].cells[4].textContent = "";

            myTable.rows[(row + 1)].insertCell(5);
            myTable.rows[(row + 1)].insertCell(6);

            myTable.rows[(row + 1)].insertCell(7);
            myTable.rows[(row + 1)].cells[7].textContent = document.getElementById("newFloatNo").value;

            myTable.rows[(row + 1)].insertCell(8).innerHTML = "<td><input type=\"checkbox\"<\td>";
            myTable.rows[(row + 1)].cells[8].setAttribute('class', 'selected');
        }
    }
    for (row = 0; row < rowCount; row++) {
        myTable.rows[row].cells[0].textContent = row + 1;
    }
    colorCodeTable();
}


document.getElementById("bInsertWPT").addEventListener('click', addNewRowInside, false);