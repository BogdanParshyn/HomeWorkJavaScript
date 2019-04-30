// HomeWork_JavaScript_7_(23)!
// =========================================================================================

"use strict";

/* 1-е Задание: 
    1. Нужно вывести в консоль сколько минут осталось до конца текущего дня.
*/
console.log('1-е Задание:');

function getMinutesUntilEndDay() {
    var now = new Date(); // Узнаем текущее время.
    var endDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1 ); // Узнаем время, когда закончится текущий день.
    
    return Math.round( (endDay - now) / 60000 ); // Узнаем сколько мс остаолось до конца текущего дня и переводим их в мин, а потом значиние округляем до целого числа.
}

console.log("Еще " + getMinutesUntilEndDay() + " мин. осталось до конца дня.");

// Или так, меньше кода:
var now = new Date(); // Узнаем текущее время.
var endDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1 );
console.log( "Еще " + Math.round( (endDay - now) / 60000 ) + " мин. осталось до конца дня." );
// ========================================================================================= //

/* 2-е Задание:
   2. Нужно вывести в консоль сколько секунд прошло с начала текущего дня.
*/
console.log('\n2 Задание:');

function getSecondsStartDay() {
    var now = new Date(); // Узнаем текущее время.
    var StartDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() ); // Узнаем время, когда начался текущий день.
    
    return Math.round( (now - StartDay) / 1000 ); // Узнаем сколько мс прошло с начала текущего дня и переводим их в секунды, а потом значиние округляем до целого числа.
}

console.log( "Уже " + getSecondsStartDay() + " сек. прошло с начала дня.");

// Или так, меньше кода:
var now = new Date(); 
var StartDay = new Date( now.getFullYear(), now.getMonth(), now.getDate() );
console.log( "Уже " + Math.round((now - StartDay) / 1000) + " сек. прошло с начала дня.");
// ========================================================================================= //

/* 3-е Задание:
   3. Выведите в консоль название для недели (например: Понедельник), которая была 25 января 2013
*/
console.log('\n3 Задание:');

function getDayWeek(date) {
    var daysWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return daysWeek[date.getDay()];
}

var date = new Date(2013, 0, 25);
console.log(getDayWeek(date)); // 25.01.2013 - пятница.

// Или так, немного короче запись:
function getDayWeek(date) {
    var daysWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return daysWeek[date.getDay()];
}

console.log( getDayWeek( new Date(2013, 0, 25) ) ); // 25.01.2013 - пятница.

// Или так, другой метод:
var daysWeek = new Date(2013, 0, 25);
console.log( daysWeek.toLocaleString('ru', { weekday: 'long' }) );

// Или так, если барат во внимание первую заглавную букву:
var daysWeek = new Date(2013, 0, 25);
var d = daysWeek.toLocaleString('ru', { weekday: 'long' });
console.log( d[0].toUpperCase() + d.slice(1) );
// ========================================================================================= //

/* 4-е Задание:
   4. Сделайте скрипт, который будет просить пользователя ввести дату своего рождения в формате 1990-10-01
и в ответ будет выдавать сколько дней осталось до его дня рождения. 1985-05-25
*/
console.log('\n4 Задание:');

/*
function getDayLeft() {
    var now = new Date(); // Узнаем текущее время. //console.log(now);
    var birthday = new Date( prompt("Введите дату своего ДР в таком виде: YYYY-MM-DD:", ) ); // Узнаем время, когда закончится текущий день.

    birthday.setFullYear( now.getFullYear() ); // console.log(birthday);

    return Math.round( (birthday - now) / (1000 * 3600 * 24) ); // Узнаем сколько дней остаолось до ДР, путем разницы двух дат, и округляем до целого числа.
}

alert( "Еще " + getDayLeft() + " дн. осталось до Вашего Дня Рождения!" );
*/
// ========================================================================================= //

function getDayLeft() {
    var now = new Date(); // Узнаем текущее время. //console.log(now); 1985-05-25
    var inputBDay = prompt("Введите дату своего ДР в таком виде: YYYY-MM-DD:", "");
    
    var bDay = new Date(inputBDay);
    
    var getYearInNow = now.getFullYear();
    bDay.setFullYear(getYearInNow); 

    console.log(bDay);
    if (inputBDay == null || bDay <= now) {
        return "Вы неправильно ввели дату, повторите еще раз!";
    } else if (inputBDay.length == 10 && inputBDay[4, 7] == '-'){
        return "Еще " + Math.round( (bDay - now) / (1000 * 3600 * 24) ) + " дн. осталось до Вашего Дня Рождения!";
    } else {
        return "Вы неправильно ввели дату, повторите еще раз!!!";
    }
}

alert( getDayLeft() );