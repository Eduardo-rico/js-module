console.log("hello world");

var firstNumber = 10;
var secondNumber = 20;

(secondNumber % firstNumber) + (3*((firstNumber/2)+10));

(firstNumber%3 === 5 * (firstNumber * 2 + (3+secondNumber)));


var firstNumber = 10;
var secondNumber = 7;
var thirdNumber = 4;
(true &&  (100 > (((thirdNumber%2) !== (3 * firstNumber)) * 3 < firstNumber + (secondNumber * 2))));


/*
secondNumber * 2 => 14
firstNumber + 14 => 24
(true &&  (100 > (((thirdNumber%2) !== (3 * firstNumber)) * 3 < 24 )));

thirdNumber%2 => 0 
(thirdNumber%2) !== (3 * firstNumber)  0 !== 30 => true

(true &&  (100 > (( true ) * 3 < 24 )));

( true ) * 3 < 24 ) => true

(true &&  (100 > (true));
100 > true => true

true && true => true

*/
