var myWHTable = document.getElementById("tableWHBody");
var iteration;
var newText, item;

function updateWH(n) {
    for (iteration = 0; iteration < 4; iteration++) {
        item = document.getElementsByClassName("newBeaconInput");
        newText = document.createTextNode(item[iteration].value);
        myWHTable.rows[n].cells[iteration].innerHTML = "";
        myWHTable.rows[n].cells[iteration].appendChild(newText);
    }
    item[4].value = "N/A";
}
var bUpdateWH = document.getElementById("bUpdateWH");
bUpdateWH.addEventListener('click', function () {
    updateWH(0)
}, false);
var bUpdateSHZ = document.getElementById("bUpdateSHZ");
bUpdateSHZ.addEventListener('click', function () {
    updateWH(1)
}, false);

function readWH(n) {
    for (iteration = 0; iteration < 4; iteration++) {
        newText = myWHTable.rows[n].cells[iteration].innerHTML;
        item = document.getElementsByClassName("newBeaconInput");
        item[iteration].value = newText;
    }
    item[4].value = "N/A";
}
var bGetWH = document.getElementById("bGetWH");
bGetWH.addEventListener('click', function () {
    readWH(0)
}, false);
var bGetSHZ = document.getElementById("bGetSHZ");
bGetSHZ.addEventListener('click', function () {
    readWH(1)
}, false);