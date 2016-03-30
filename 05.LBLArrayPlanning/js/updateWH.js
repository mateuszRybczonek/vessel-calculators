var myWHTable = document.getElementById("tableWHBody");
var iteration;
var newText, item;

function updateWH() {
    item = document.getElementsByClassName("newBeaconInput");
    newText = document.createTextNode(item[0].value);
    for (iteration = 2; iteration < 4; iteration++) {
        newText = document.createTextNode(item[iteration + 1].value);
        myWHTable.rows[0].cells[iteration - 1].innerHTML = "";
        myWHTable.rows[0].cells[iteration - 1].appendChild(newText);
    }
}
var bUpdateWH = document.getElementById("bUpdateWH");
bUpdateWH.addEventListener('click', updateWH, false);

function readWH() {
    item = document.getElementsByClassName("newBeaconInput");
    for (iteration = 2; iteration < 4; iteration++) {
        newText = myWHTable.rows[0].cells[iteration - 1].innerHTML;
        item[iteration + 1].value = newText;
    }
}
var bGetWH = document.getElementById("bGetWH");
bGetWH.addEventListener('click', readWH, false);