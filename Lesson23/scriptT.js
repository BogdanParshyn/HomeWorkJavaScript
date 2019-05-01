"use strict";

/* 4-е Задание:
   4. Сделайте скрипт, который будет просить пользователя ввести дату своего рождения в формате 1990-10-01
и в ответ будет выдавать сколько дней осталось до его дня рождения. 1985-05-25
*/
console.log('\n4 Задание:');


function getDayLeft() {
    var now = new Date(); // Узнаем текущее время. //console.log(now); 1985-05-25
    var inputBDay = prompt("Введите дату своего ДР в таком виде: YYYY-MM-DD:", "");
    
    var bDay = new Date(inputBDay);
    
    var getYearInNow = now.getFullYear(); // берем из текущей даты год - 2019.
    
    var year = getYearInNow;

    var letters = new Date(year, 0, 1, 0, 0, 0, 0); // назначаем исключение при вводе букв.
    //console.log(letters);
    // console.log(bDay);
    // console.log(year);
    // console.log(bDay - letters);
    if (inputBDay == null || (bDay == 'Invalid Date')) {
        return "Вы неправильно ввели дату, повторите еще раз!";
    } else if (inputBDay.length == 10 && inputBDay[4, 7] == '-') {
        bDay.setFullYear(getYearInNow); // ДР присваиваем год текущей даты. 
        //console.log(bDay - now);
            
            if (bDay > now){
                return "Еще " + Math.round( (bDay - now) / (1000 * 3600 * 24) ) + " дн. до Вашего ДР!";
            } else if (Math.round( (bDay - now) / (1000 * 3600 * 24) ) == 0){
                return "ДР Сегодня!"
            } else {
                bDay.setFullYear(getYearInNow + 1);
                return "Еще " + Math.round( (bDay - now) / (1000 * 3600 * 24) ) + " дн. до Вашего ДР!!!";
            }  
    } 
    else {
        return "Вы неправильно ввели дату, повторите еще раз!!!";
    }
}

alert( getDayLeft() );



function getDayLeft() {
    var now = new Date(); // Узнаем текущее время. 
    var inputBDay = prompt("Введите дату своего ДР в таком виде: YYYY-MM-DD:", "");
    var bDay = new Date(inputBDay); // Узнаем дату рождения.
    
    if (inputBDay != null && bDay != 'Invalid Date' && inputBDay.length == 10 && inputBDay[4, 7] == '-') {
            bDay.setFullYear(now.getFullYear()); // ДР присваиваем год текущей даты. 
            var msInMin = (1000 * 3600 * 24);        
                if (bDay > now){
                    return "Еще " + Math.round( (bDay - now) / msInMin ) + " дн. до Вашего ДР!";
                } else if (Math.floor( (now - bDay) / msInMin ) == 0){
                    return "ДР Сегодня!"
                } else {
                    bDay.setFullYear(now.getFullYear() + 1);
                    return "Еще " + Math.round( (bDay - now) / msInMin ) + " дн. до Вашего ДР!!!";
                }  
    } 
    else {
        return "Вы неправильно ввели дату, повторите еще раз!!!";
    }
}

alert( getDayLeft() );