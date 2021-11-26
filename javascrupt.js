alert ("Все формулы считаются еcли мы знаем хоть одну сторону фигуры");


function perSquare() {
    let a = document.form1.num1.value
    let s = a * 4
    return document.form1.res.value = s
}


function perTringle() {
    let a = document.form2.num2.value
    let s = a * 3
    return document.form2.res.value = s
}

function perCube() {
    let a = document.form3.num3.value
    let s = a * 12
    return document.form3.res.value = s
}

function squareSquare() {
    let a = document.form4.num4.value
    let s = a ** 2 //or Math.pow (a,2)
    return document.form4.res.value = s
}

function squareTringle() {
    let a = document.form5.num5.value
    let b = Math.pow(a, 2)
    let s = b * Math.sqrt(3) / 4
    return document.form5.res.value = s
}

function squareCube() {
    let a = document.form6.num6.value
    let s = 6 * a ** 2  // or Math.pow (a,2)
    return document.form6.res.value = s
}

// VAR не использовать!!
// дробные числа с точкой!
// ** - возведение в сеперь
// поиск остатка - %  9%7 = 2 - часто на собесах бывает
