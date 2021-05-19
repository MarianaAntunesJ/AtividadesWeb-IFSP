function getSum() {
    var sumVal = 0;
    var elem1 = parseInt(document.getElementById('elem1').innerHTML);
    var elem2 = parseInt(document.getElementById('elem2').innerHTML);
    var elem3 = parseInt(document.getElementById('elem3').innerHTML);
    var elem4 = parseInt(document.getElementById('elem4').innerHTML);

    sumVal = (elem1 + elem2 + elem3 + elem4);
    document.getElementById('total').innerHTML = sumVal;
}