// HomeWork_JavaScript_3 (19)!
// =========================================================================================

"use strict";

// 1:
/*
function isNumberInRange(a) {
    if( a > 0 && a < 10 ) {
        alert(a = true);
    } else {
        alert(a = false);
    }
}

isNumberInRange(1);

// Или:


function isNumberInRange(a) {
    if( a > 0 && a < 10 ) {
        return alert(true);
    } else {
        return alert(false);
    }
}

isNumberInRange(10);

/*1. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно 
больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
*/
// =========================================================================================

// 2:

function isEven(a) {
    if( a % 2 == 0) {
        alert(a = true);
    } else {
        alert(a = false);
    }
}

isEven(3);
/*2. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число 
и проверяет: четное оно или нет. Если четное - пусть функция возвращает true,
если нечетное - false.
*/