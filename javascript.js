function circSquare() {
    let a = document.form1.num1.value;
    let s = ((a * a) / 4) * Math.PI;
    return document.form1.res.value = s.toFixed(2);
}
function circumference() {
    let a = document.form2.num2.value;
    let s = a * Math.PI;
    return document.form2.res.value = s.toFixed(2);
}

function eurUsd() {
    let a = document.form3.num3.value;
    let s = a / 1.1;
    return document.form3.res.value = s.toFixed(2);
}
function blrUkr() {
    let a = document.form4.num1.value;
    let b = document.form4.num2.value;
    let c = a / b;
    return document.form4.res.value = c.toFixed(2);
}
function mowBer() {
    let a = document.form5.num1.value;
    let b = document.form5.num2.value;
    let c = a / b;
    return document.form5.res.value = c.toFixed(2);
}

function old() {
    let a = +document.form6.num1.value;  // если перед document не ставить + то форма возвращает string и под кейсы с number не пройдет.
    switch (a) {
        case 17:
            alert('Рановато');
            break;
        case 18:
            alert('предъявите паспорт');
            break;
        case 20:
            alert('Уже можно');
            break;
        case 30:
            alert('Уже можно, но стоит подумать надо ли');
            break;
        default:
            alert("Неверный ответ");
    }

}

function season() {
    let a = +document.form7.num1.value; 
    switch (a) {
        case 12:
        case 1:
        case 2:
            alert('Зима');
            break;
        case 3:
        case 4:
        case 5:
            alert('Весна');
            break;
        case 6:
        case 7:
        case 8:
            alert('Лето');
            break;
        case 9:
        case 10:
        case 11:
            alert('Осень');
            break;
        default:
            alert("Такого месяца нет!");
    }

}

function matrixRed () {
    alert ("ты оказываешься в стране чудес и я покажу тебе, насколько она глубока.");
}
function matrixBlue () {
    alert ("история заканчивается, ты просыпаешься в своей кровати и веришь, в то, во что хочешь верить.");
}

function bank() {
    let a = +document.form9.num1.value;
    let b = +document.form9.num2.value;
    let p = 3.50;
    let c = (((a * p)/100 ) * b) + a;
    return document.form9.res.value = c;
}







/* 207 600 - Belarus
603 628 - Ukraine
2511 MOW
891.8 BER
 */
