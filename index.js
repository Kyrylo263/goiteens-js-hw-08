let num = 0;
while (num < 10) {
    num += 1
    console.log(num)
};

const number = 20;
for (let i = 1; i < number; i += 1) {
    if (i % 2 === 1) {
        continue;
    }
    console.log(i);
};

const secondNumber = 7;
for (let ii = 1; ii <= 10; ii += 1) {
    console.log(ii*secondNumber);
};

const array = [1, 2, 3, 4, 5];
let index = 0;
while (index < array.length) {
    index += 1;
    console.log(index);
};

const secondArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let secondIndex = 0; secondIndex < secondArray.length; secondIndex += 1) {
    if (secondIndex === 8) {
        break;
    }
    console.log(secondIndex);
};

const n = 13;
for (let iii = 0; iii < n; iii += 1) {
    if (iii === n) {
        break;
    }
    console.log(iii);
};

const secondNum = 20;
for (let iiii = 0; iiii < secondNum; iiii += 1) {
    if (iiii % 3 === 0) {
        continue
    }
    console.log(iiii)
};