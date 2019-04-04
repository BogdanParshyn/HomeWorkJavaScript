// HomeWork_JavaScript_1!


// 1:
var secInMin = 60;
var minInHour = 60;
var hour = 3;
console.log(secInMin * minInHour * hour);


// 2:
var num = 1;
num+=12;
num-=14;
num*=5;
num/=7;
num++;
num--;
alert(num);


// 3:
var a = 10, b = 2, c = 5;
alert(a + b + c);

// или так
var a = 10;
var b = 2;
var c = 5;
alert(a + b + c);


// 4:
var a = 17, b = 10, c = a - b, d = 7, result = c + d;
alert(result);

// или так
var a = 17;
var b = 10;
var c = a - b;
var d = 7;
var result = c + d;
alert(result);


// 5: 'Привет, %Имя%!'
var name = 'Bohdan';
alert('\'Привет %' + name + '%!\'');