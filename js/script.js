// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран

const arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

/*Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут 
быть положительными и отрицательными. Выведите на экран только отрицательные 
числа, которые больше -10, но меньше -3.*/

const arr1 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
const arrNew1 = []

for(let i = 0; i < arr1.length; i++){

    if(arr1[i] > -10 && arr1[i] < -3){
        arrNew1.push(arr1[i]);
    }
}

console.log(arrNew1);

let arrNew2 = arr1.filter(item => {
    if(item > -10 && item < -3){
        return true;
    }
});
console.log(arrNew2);

/*Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и 
while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого 
массива. Запишите ее в переменную result и выведите.*/

const arr2 = [];
let result = 0;

for(let i = 23; i <= 57; i++) {
    arr2.push(i);
    result += i;
}

console.log(arr2);
console.log(result);

let i = 23;
const arr3 = [];

while(i <= 57){
    arr3.push(i);
    i++;
}

console.log(arr3);

/*Дан массив числами (строчного типа), например: ['10', '20', '30', '50', '235', '3000']. 
Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5 */

const arr4 = ['10', '20', '30', '50', '235', '3000'];
let arr5 = arr4.filter(item => {
    if(item[0] === '1' || item[0] === '2' || item[0] === '5'){
        return true;
    }
})

console.log(arr5);

/*Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все 
дни недели, а выходные дни выведите жирным.*/

const arrDaysWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for(i = 0; i < arrDaysWeek.length; i++){
    if(i <= 4){
        document.write(`<p>${arrDaysWeek[i]}</p>`);
    } else {
        document.write(`<p>${arrDaysWeek[i].bold()}</p>`);
    }
}

/*Создайте массив с произвольными данными. Добавьте в конец массива любой элемент, 
и получите последний элемент массива, используя свойство length.*/

const arrMix = ['Петя', 125, [1, 2], 'task', 89, -5];

arrMix.push('Вася');
console.log(arrMix);
console.log(arrMix[arrMix.length - 1]);

/*Запросите у пользователя по очереди числовые значения при помощи prompt и 
сохраните их в массив. Собирайте числа до теx пор пока пользователь не введет пустое 
значение. Выведите получившийся массив на экран. Выполните сортировку чисел 
массива, и выведите его на экран.*/

const arrNumber = [];
for(;;){
    let number = prompt('введите число');
    
    if(isNaN(number) || number === null || number === ' '){
        break;
    }

    arrNumber.push(+number);
    arrNumber.sort(function(a, b){
        return a - b;
    });    
}

console.log(arrNumber)

/*Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке), 
используя цикл while и метод reverse.*/

const arr6 = [12, false, 'Текст', 4, 2, -5, 0];
const arr6Revers = [];
let ind = arr6.length -1;

while(ind >= 0){
    arr6Revers.push(arr6[ind]);
    ind--;
}
console.log(arr6Revers);

const arr7 = arr6.reverse();
console.log(arr7);


