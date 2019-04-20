// HomeWork_JavaScript_4_(20)!
// =========================================================================================

"use strict";


// 1. Задание: Напишите функцию fib(n), которая возвращает n-е число Фибоначчи. 
// Последовательность чисел Фибоначчи имеет формулу Fn = Fn-1 + Fn-2. То есть, следующее число 
// получается как сумма двух предыдущих.Первые два числа равны 1, затем 2(1+1), 
// затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
// Главное условие, чтобы функция работала быстро.

var n = 2; // Ввод значения для определения числа Фибоначчи.
var a = 1, b = 1;

function fib(n) {
    
    for (var i = 3; i <= n; i++) {
      var c = a + b; 
      a = b;
      b = c;
    }
    return b;
  }

console.log( n + '-е значение Фибоначчи будет равно числу - ' + fib(n) );
// =========================================================================================

// 2. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50.
// Посчитайте количество итераций, необходимых для этого (итерация - 
// это проход цикла), и запишите его в переменную num.

var n = 1000, num = 0;

for (var i = 1; i <= n; i++){
    if(n > 50) {
        n /= 2;
        num++;
        console.log(n); // Выводим результат при каждой итерации.   
    } else {
        break;
    }   
}

console.log('Количество выполенных итераций: ' + num); 
// =========================================================================================