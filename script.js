let minValue = parseInt(prompt('Минимальное значение числа для игры', '0'));
let maxValue = parseInt(prompt('Максимальное значение числа для игры', '100'));

minValue = (minValue < -999) ? minValue = -999 : (minValue > 999) ? minValue = 999 : minValue;
maxValue = (maxValue > 999) ? maxValue = 999 : (maxValue < -999) ? maxValue = -999 : maxValue;

if (maxValue < minValue) {
    [maxValue, minValue] = [minValue, maxValue]; 
}

if (Number.isNaN(maxValue) || Number.isNaN(minValue)) {
    minValue = 0;
    maxValue = 100;
}

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное значение числа для игры', '0'));
    maxValue = parseInt(prompt('Максимальное значение числа для игры', '100'));
    minValue = (minValue < -999) ? minValue = -999 : (minValue > 999) ? minValue = 999 : minValue;
    maxValue = (maxValue > 999) ? maxValue = 999 : (maxValue < -999) ? maxValue = -999 : maxValue;

if (maxValue < minValue) {
    [maxValue, minValue] = [minValue, maxValue]; 
}

if (Number.isNaN(maxValue) || Number.isNaN(minValue)) {
    minValue = 0;
    maxValue = 100;
}
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let askRandom = [
                `Вы загадали число ${answerNumber }?`,
                `Возможно это ${answerNumber }?`,
                `Похоже, Ваше число ${answerNumber }?`,
            ];
                answerField.innerText = askRandom[Math.round(Math.random() * 2)];


        }
    }
})
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (maxValue === minValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let askRandom = [
                `Вы загадали число ${answerNumber }?`,
                `Возможно это ${answerNumber }?`,
                `Похоже, Ваше число ${answerNumber }?`,
            ];
                answerField.innerText = askRandom[Math.round(Math.random() * 2)];

        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        let answerEqual = [
            `Я всегда угадываю!\n\u{1F60E}`,
            `Это магия!\n\u{1F60E}`,
            `А Вы не верили, что угадаю!\n\u{1F60E}`,
        ];
        answerField.innerText = answerEqual[Math.round(Math.random() * 2)];
        gameRun = false;

    }
})