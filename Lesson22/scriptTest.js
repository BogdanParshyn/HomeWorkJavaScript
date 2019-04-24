// HomeWork_JavaScript_6_(22)!
// =========================================================================================

"use strict";


// ========================================================================================= //

/* 2-е Задание:
   2. Дан массив с числами (Пример: var arr = [4, 3, 5, 5, 0, 4, 8, 6]) - массив может быть и другим.
    Нужно найти сумму элементов от начала и до нуля. (В примере это первые 4 элемента)
    Использовать функция reduce
*/
console.log('\n2-е Задание:');

var arr = [4, 3, 5, 5, 0, 4, 8, 6];
var i = 0;

function searchArrZero(arr, item) {
    for (; i < arr.length; i++) {
        if (arr[i] === item) return i; // Вернет номер итерации, на которой нашли ноль.
      }
      return i; // Если не найдет, то укажет сколько всего было итераций.
}

/*var check = */searchArrZero(arr, 0); 
//console.log( "Проверка: " + check );

var result = arr.slice(0, i).reduce(function(sum, number,) {
    return sum + number;
  }, 0);
  
// console.log( result ); 

// Или так, но нужно подправить:

var arr = [4, 3, 5, 5, 0, 4, 8, 6];

if(arr.indexOf(0) != -1) {
    i = arr.indexOf(0);
} else { 
    i = arr.length;
}

// console.log(i);

var result = arr.slice(0, i).reduce(function(sum, number,) {
    return sum + number;
  }, 0);
  
// console.log( result ); 
// ========================================================================================= //

// Или так, но нужно подправить:

var arr = [4, 3, 5, 5, 0, 4, 8, 6];
var i = arr.indexOf(0);

console.log(i);

var result = arr.splice(0, arr.length).reduce(function(sum, number,) {
    return sum + number;
  }, 0);
  
console.log( result ); 
// ========================================================================================= //