
/* Учитывая список целых чисел, определите, является ли сумма его элементов нечетной или четной.

https://www.codewars.com/kata/even-or-odd

Дайте ответ в виде совпадения строки "odd"или "even".

Если входной массив пуст, рассматривайте его как: [0](массив с нулем). */

console.log(oddOrEven([0]));
console.log(oddOrEven([0, 1, 4]));
console.log(oddOrEven([0, -1, -5]));
function oddOrEven(array) {

    const sum = array.reduce((sum, digit) => sum + digit);
    
    return (sum % 2 !== 0) ? 'odd' : 'even';

 }