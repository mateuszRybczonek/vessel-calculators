function fImportCSV() {
    var fileInput = document.getElementById('fileInput'); //file pathname
    var file = fileInput.files[0]; //array of loaded files
    var reader = new FileReader();
    reader.onload = function (file) {
        // content of *.csv as plain text
        var content = file.target.result;

        // split csv in "\r\n" - new line mark Windows ("\n" - Linux, "\r" - Apple)
        var rows = file.target.result.split(/[\r\n|\n|\r]+/);

        var array1Table = document.getElementById("array1TableBody");
        var array2Table = document.getElementById("array2TableBody");
        array1Table.innerHTML = "";
        array2Table.innerHTML = "";

        var myWHTable = document.getElementById("tableWHBody");

        var rowCount, newRow, cellCount, newCell, newText, column;
        // create rows using DOM
        for (rowCount = 0; rowCount < rows.length - 12; rowCount++) {
            //get text from *.csv
            // create array of "words" to be put into the cells
            var array = rows[rowCount].split(';');

            //create new <tr>
            newRow = document.createElement('tr');

            // put "words" into cells
            //put data into beacons table
            for (column = 1; column < 9; column++) {
                //create new <td>
                newCell = document.createElement('td');

                if (column < 9) {
                    newText = document.createTextNode(array[column]);

                }
                newCell.appendChild(newText);
                newRow.appendChild(newCell);
            }
            //create "selected" cell
            newCell = document.createElement('td');
            newCell.setAttribute('class', 'selected');
            var newInput = document.createElement('input');
            newInput.setAttribute('type', 'checkbox');
            newCell.appendChild(newInput);
            newRow.appendChild(newCell);

            //select table Array1 or Array2
            if (array[0] == "array1") {
                array1Table.appendChild(newRow);
            }
            else {
                array2Table.appendChild(newRow);
            }
            colorCodeTable();
        }
        //put data into WH table
        myWHTable.innerHTML = "<tr class=\"WHRow\" id=\"WHPosition\"><td></td><td></td><td></td><td></td></tr>";
        array = rows[rows.length - 12].split(';');
        for (column = 0; column < 3; column++) {
            newText = document.createTextNode(array[column]);
            myWHTable.rows[0].cells[column].appendChild(newText);
        }
        document.getElementById("iFieldName").value = rows[rows.length - 11];
        document.getElementById("iWellName").value = rows[rows.length - 10];
        document.getElementById("iDate").value = rows[rows.length - 9];
        document.getElementById("iUTMZone").value = rows[rows.length - 8];
        document.getElementById("heading").value = rows[rows.length - 7];
        document.getElementById("depth").value = rows[rows.length - 6];
        document.getElementById("draught").value = rows[rows.length - 5];
        document.getElementById("transducerDepth").value = rows[rows.length - 4];
        document.getElementById("angle").value = rows[rows.length - 3];
        document.getElementById("angleThreshold").value = rows[rows.length - 2];


    };
    reader.readAsText(file);
}

document.getElementById('bLoadFromCSV').addEventListener('click', fImportCSV, false);

