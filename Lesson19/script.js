// HomeWork_JavaScript_3_(19)!
// =========================================================================================

"use strict";

// 1: Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, 
// что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, 
// если не так - false.

function isNumberInRange(a) {
    if( a > 0 && a < 10 ) {
        return true;
    } else {
        return false;
    }
}

isNumberInRange(1);

// Или:
function isNumberInRange(a) {
    if( a > 0 && a < 10 ) {
        return true;
    } else {
        return false;
    }
}

isNumberInRange(10); 

// Или:
function isNumberInRange(a) {
    alert( a > 0 && a < 10 );
}

isNumberInRange(10); 
// =========================================================================================

// 2:Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число 
// и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, 
// если нечетное - false.

function isEven(a) {
    if( a % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
var a = Math.round(3.5);

isEven(a);

// Или:
function isEven(a) {
    alert( a % 2 == 0);
}

var a = Math.round(3.5);

isEven(a);
// =========================================================================================

// 3: Переписать код из конструкции if в switch.

var value = +prompt('value?', '');

switch(value) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}
// =========================================================================================

// 4: Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.

function min(a, b) {
    if( a > b ) {
        return alert(b);
    } else if( a < b ) {
        return alert(a);
    } else {
        return alert("Неправильно введнены данные для данной задачи.")
    }
}

min(3, 3);

// Или:
function min(a, b) {
    if( a > b ) {
        return alert(b);
    } else {
        return alert(a);
    }   
}

min(3, 5);
// =========================================================================================