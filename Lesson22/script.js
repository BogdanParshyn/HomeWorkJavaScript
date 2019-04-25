// HomeWork_JavaScript_6_(22)!
// =========================================================================================

"use strict";

/* 1-е Задание: 
    1. Дан массив с числами (Пример: var arr = [2, -5, 1, -2, 0, -3, 2, -14]) - массив может быть и другим.
    1) В начале вам нужно убрать из него все отрицательные числа используя filter
    2) Извлесь корень из каждого значения этого массива и записать в переменную. Используя map.
    3) Вывести массив в консоль
*/
console.log('1-е Задание:');

var arr = [2, -5, 1, -2, 0, -3, 2, -14];

var plusArr = arr.filter(function(numberPl) {
  return numberPl > 0;
});

var sqArr = plusArr.map(function(numberSq) {
    return Math.sqrt(numberSq);
  });

console.log( sqArr );
// ========================================================================================= //

/* 2-е Задание:
   2. Дан массив с числами (Пример: var arr = [4, 3, 5, 5, 0, 4, 8, 6]) - массив может быть и другим.
    Нужно найти сумму элементов от начала и до нуля. (В примере это первые 4 элемента)
    Использовать функция reduce
*/
console.log('\n2.1 Задание:');

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
  
console.log( result ); 

// ======================== Или так:
console.log('\n2.2 Задание:');

var arr = [4, 3, 5, 5, 0, 4, 8, 6];

if(arr.indexOf(0) != -1) {
    i = arr.indexOf(0);
} else { 
    i = arr.length;
}

var result = arr.slice(0, i).reduce(function(sum, number,) {
    return sum + number;
  }, 0);
  
console.log( result ); 

// ======================== Или так:
console.log('\n2.3 Задание:');

var arr = [4, 3, 5, 5, 0, 4, 8, 6], i = arr.indexOf(0);

i = (i != -1) ? i : i = arr.length;

var result = arr.splice(0, i).reduce(function(sum, number,) {
    return sum + number;
  }, 0);

console.log( result ); 

// ======================== Или так:
console.log('\n2.4 Задание:');

var arr = [4, 3, 5, 5, 0, 4, 8, 6], i = arr.indexOf(0);

var result = arr.splice( 0, (i = (i != -1) ? i : i = arr.length) ).reduce(function(sum, number,) {
    return sum + number;
  }, 0);

console.log( result ); 
// ========================================================================================= //

/* 3-е Задание:
   3. Напишите функцию summArguments, которая сложит все аргументы переданные в функцию. Например
    summArguments(10, 1, 2, 5); // 18
    summArguments(10); // 10
*/
console.log('\n3-е Задание:');

function summArgument(){
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    } return sum;
};

console.log( summArgument(10, 1, 2, 5) );
console.log( summArgument(10) );
// ========================================================================================= //