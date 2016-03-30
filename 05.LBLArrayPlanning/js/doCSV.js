function doCSV() {
    exportData = "";
    var array1Table = document.getElementById("array1TableBody");
    var array2Table = document.getElementById("array2TableBody");
    exportTable(array1Table, "array1");
    exportTable(array2Table, "array2");
    exportWHTable();

    //create default file name
    var fileName = document.getElementById("iWellName").value + "-LBL-Config";
    var uri = 'data:text/csv; charset=utf-8,' + escape(exportData);
    // generate temp <a /> tag
    var link = document.createElement("a");
    link.href = uri;
    //visibility hidden so it will not effect on your web-layout
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";
    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function exportTable(myTable, array) {
    var rowCount = myTable.rows.length;

    //from beacons table
    for (iteration = 0; iteration < rowCount; iteration++) {
        if (myTable.rows[iteration].cells[0] != "") {
            exportData = exportData + array + ";" + myTable.rows[iteration].cells[0].textContent + ";" + myTable.rows[iteration].cells[1].textContent + ";" + myTable.rows[iteration].cells[2].textContent + ";" + myTable.rows[iteration].cells[3].textContent + ";" + myTable.rows[iteration].cells[4].textContent + ";" + myTable.rows[iteration].cells[5].textContent + ";" + myTable.rows[iteration].cells[6].textContent + ";" + myTable.rows[iteration].cells[7].textContent + "\r\n";
        }
    }
}

function exportWHTable() {
    var myWHTable = document.getElementById("tableWHBody");
    exportData = exportData + myWHTable.rows[0].cells[0].textContent + ";" + myWHTable.rows[0].cells[1].textContent + ";" + myWHTable.rows[0].cells[2].textContent + ";" + "\r\n";

    exportData = exportData + document.getElementById("iFieldName").value + "\r\n" + document.getElementById("iWellName").value + "\r\n" + document.getElementById("iDate").value + "\r\n" + document.getElementById("iUTMZone").value + "\r\n" + document.getElementById("heading").value + "\r\n" + document.getElementById("depth").value + "\r\n" + document.getElementById("draught").value + "\r\n" + document.getElementById("transducerDepth").value + "\r\n" + document.getElementById("angle").value + "\r\n" + document.getElementById("angleThreshold").value + "\r\n";
}

var iteration, exportData;

var bDoCSV = document.getElementById("bExportCSV");
bDoCSV.addEventListener('click', doCSV, false);