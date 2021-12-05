function circSquare() {
    let a = document.form1.num1.value;
    let s = ((a*a)/4) * Math.PI;
    return document.form1.res.value = s.toFixed( 2 );
}
