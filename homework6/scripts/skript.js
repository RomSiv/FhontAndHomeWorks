//Написать программу, которая через prompt считывает число и выводит
// в консоль число равное 10% от введенного числа

// let figure = prompt("Enter u figure:")
// result = figure/100*10
// console.log(`10% of u firure its ${result}`)

// =======================================================================================


//Написать программу, которая получает два числа и выводит наименьшее

// let firstFigure = prompt("Enter u first figure:")
// let secondFigure = prompt("Enter u second figure:")

// if(firstFigure > secondFigure) {
//     console.log(`${firstFigure} is more`)
// } if(secondFigure > firstFigure) {
//     console.log(`${secondFigure} is more`)
// } else {
//     console.log(`Figures equals`)
// }

// =======================================================================================

//Написать программу, которая считывает через prompt число и
//  выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’

// let uFigure = prompt("Enter u figure:")

// if(uFigure > 100) {
//     console.log(`Число больше 100`)
// } if(uFigure < 100) {
//     console.log(`Число меньше 100`)
// } else {
//     console.log(`Число равно 100`)
// }

// =======================================================================================


// Написать программу, которая запрашивает у пользователя его имя
//  и возраст (в годах) и выводит в консоль сообщение ‘Hello, ’,
//  если пользователь совершеннолетний, или ‘Hi, ’, если пользователь
//  несовершеннолетний.


// const name = prompt("Write your name")
// let age = +prompt("How old are u?")

// if(age >= 18) {
//     console.log(`Hello, ${name}`)
// }else{
//     console.log(`Hi, ${name}`)
// }

// =======================================================================================


// Создайте массив из строк, чисел, NaN и объектов. Пример:
//  ['hello', 1, { name: 'John' }, 'world', 2, { name: 'Jane' }, NaN]

// const array = ['hello', 1, { name: 'John' }, 'world', 2, { name: 'Jane' }, NaN]

// Задача 1
// Пройдитесь по массиву циклом for и выведите в консоли, чем является каждый элемент массива: 
// строкой, числом или ни тем, ни другим (используя функции isNaN и typeof)

// for (let index = 0; index < array.length; index++) {
    
    // console.log(typeof(array[index]))
    // console.log(isNaN(array[index]))
// }

// =======================================================================================

// Задача 2
// Просуммируйте все числа в массиве и выведите результат в консоли. Игнорируйте нечисловые элементы.

// const array = ['hello', 1, { name: 'John' }, 'world', 2, { name: 'Jane' }, NaN]

// for (let index = 0; index < array.length; index++) {
   
//    let sum = 0


//     if(isNaN(array[index] === false)) {
//         sum += array[index]

//         console.log(sum)

//     }


// }