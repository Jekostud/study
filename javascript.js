function circSquare() {
    let a = document.form1.num1.value;
    let s = ((a*a)/4) * Math.PI;
    return document.form1.res.value = s.toFixed( 2 );
}
function circumference() {
    let a = document.form2.num2.value;
    let s = a * Math.PI;
    return document.form2.res.value = s.toFixed( 2 );
}

function eurUsd() {
    let a = document.form3.num3.value;
    let s = a / 1.1;
    return document.form3.res.value = s.toFixed( 2 );
}
function blrUkr() {
    let a = document.form4.num1.value;
    let b = document.form4.num2.value;
    let c = a / b;
    return document.form4.res.value = c.toFixed( 2 );
}
function mowBer() {
    let a = document.form5.num1.value;
    let b = document.form5.num2.value;
    let c = a / b;
    return document.form5.res.value = c.toFixed( 2 );
}

/* 207 600 - Belarus
603 628 - Ukraine
2511 MOW
891.8 BER
 */
