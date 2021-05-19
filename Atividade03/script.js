var table = document.getElementById("tabel1");
getSum();

function getSum() {
    var sumVal = 0;
    for (var i = 1; i < table.rows.lenht; i++)
        sumVal = sumVal + parseInt(table.rows[i].cells[2].innerHTML);

    console.log("Sum =>" + sumVal);
}