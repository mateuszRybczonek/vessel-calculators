function fImportCSV() {
    var fileInput = document.getElementById('fileInput'); //file pathname
    var file = fileInput.files[0]; //array of loaded files
    var reader = new FileReader();
    reader.onload = function (file) {
        // content of *.csv as plain text
        var content = file.target.result;

        // split csv in "\r\n" - new line mark Windows ("\n" - Linux, "\r" - Apple)
        var rows = file.target.result.split(/[\r\n|\n|\r]+/);

        var myTable = document.getElementById("tableBody");
        var myWHTable = document.getElementById("tableWHBody");
        // clear table
        myTable.innerHTML = "";
        var rowCount, newRow, cellCount, newCell, newText, column;
        // create rows using DOM
        for (rowCount = 0; rowCount < rows.length - 9; rowCount++) {
            //create new <tr>
            newRow = document.createElement('tr');

            //color code
            if (rowCount % 2 != 0) {
                newRow.setAttribute('class', 'even');
            }

            //get text from *.csv
            // create array of "words" to be put into the cells
            var array = rows[rowCount].split(';');
            // put "words" into cells

            //put data into beacons table
            for (column = 0; column < 10; column++) {
                //create new <td>
                newCell = document.createElement('td');
                //create "selected" row
                if (column == 9) {
                    newCell.setAttribute('class', 'selected');
                    var newInput = document.createElement('input');
                    newInput.setAttribute('type', 'checkbox');
                    newCell.appendChild(newInput);
                }
                else {
                    if (column < 5) {
                        newText = document.createTextNode(array[column]);
                    }
                    else {
                        newText = document.createTextNode("");
                    }
                }
                newCell.appendChild(newText);
                newRow.appendChild(newCell);
            }
            myTable.appendChild(newRow);
        }
        //put data into WH/SHZ table
        myWHTable.innerHTML = "<tr class=\"WHRow\" id=\"WHPosition\"><td></td><td></td><td></td><td></td></tr><tr class=\"WHRow\" id=\"SHZPosition\"><td></td><td></td><td></td><td></td></tr>";
        array = rows[rows.length - 9].split(';');
        for (column = 0; column < 4; column++) {
            newText = document.createTextNode(array[column]);
            myWHTable.rows[0].cells[column].appendChild(newText);
        }
        array = rows[rows.length - 8].split(';');
        for (column = 0; column < 4; column++) {
            newText = document.createTextNode(array[column]);
            myWHTable.rows[1].cells[column].appendChild(newText);
        }
        document.getElementById("iFieldName").value = rows[rows.length - 7];
        document.getElementById("iWellName").value = rows[rows.length - 6];
        document.getElementById("iDate").value = rows[rows.length - 5];
        document.getElementById("speedOfSound").value = rows[rows.length - 4];
        document.getElementById("draught").value = rows[rows.length - 3];
        document.getElementById("transducerDepth").value = rows[rows.length - 2];

    };
    reader.readAsText(file);
}

document.getElementById('bLoadFromCSV').addEventListener('click', fImportCSV, false);

