function doCSV() {
    var myTable = document.getElementById("tableBody");
    var iteration, exportData = "";
    var rowCount = myTable.rows.length;

    //from beacons table
    for (iteration = 0; iteration < rowCount; iteration++) {
        if (myTable.rows[iteration].cells[0] != "") {
            exportData = exportData + myTable.rows[iteration].cells[0].textContent + ";" + myTable.rows[iteration].cells[1].textContent + ";" + myTable.rows[iteration].cells[2].textContent + ";" + myTable.rows[iteration].cells[3].textContent + ";" + myTable.rows[iteration].cells[4].textContent + "\r\n";
        }
    }
    //from WH/SHZ table
    var myWHTable = document.getElementById("tableWHBody");
    rowCount = myWHTable.rows.length;

    for (iteration = 0; iteration < rowCount; iteration++) {
        if (myWHTable.rows[iteration].cells[0] != "") {
            exportData = exportData + myWHTable.rows[iteration].cells[0].textContent + ";" + myWHTable.rows[iteration].cells[1].textContent + ";" + myWHTable.rows[iteration].cells[2].textContent + ";" + myWHTable.rows[iteration].cells[3].textContent + ";" + "\r\n";
        }
    }

    exportData = exportData + document.getElementById("iFieldName").value + "\r\n" + document.getElementById("iWellName").value + "\r\n" + document.getElementById("iDate").value + "\r\n" + document.getElementById("speedOfSound").value + "\r\n" + document.getElementById("draught").value + "\r\n" + document.getElementById("transducerDepth").value + "\r\n";


    //create default file name
    var fileName = document.getElementById("iWellName").value + "-TAT-Config";
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

var bDoCSV = document.getElementById("bExportCSV");
bDoCSV.addEventListener('click', doCSV, false);