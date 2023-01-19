let minValue;
let maxValue;
let gameRun;
let orderNumber;
let buttonStart = document.getElementById('btnStart');
buttonStart.addEventListener('click', function startGame() {                     // запускаем кнопку старт
    const inputWindowMin = document.getElementById('inputWindowMin').value;         //вводим минимальное и максимальное значение
    const inputWindowMax = document.getElementById('inputWindowMax').value;
    const windowText = document.getElementById('windowText');
    minValue = parseInt(inputWindowMin);
    maxValue = parseInt(inputWindowMax);

    minValue = (minValue < -999) ? minValue = -999 : (minValue > 999) ? minValue = 999 : minValue; //проверка на допустимые числа 
    maxValue = (maxValue > 999) ? maxValue = 999 : (maxValue < -999) ? maxValue = -999 : maxValue;

    if (maxValue < minValue) {
        [maxValue, minValue] = [minValue, maxValue];
    }

    if (Number.isNaN(maxValue) || Number.isNaN(minValue)) {           // замена Nan на числа
       minValue = 0;
       maxValue = 100;
    }

    windowText.innerText = `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`;
    let answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    const orderNumberField = document.getElementById('orderNumberField');
    const answerField = document.getElementById('answerField');
    orderNumberField.innerText = orderNumber;
  
    let units = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть','семь', 'восемь', 'девять'];
    let teens = ['', 'десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать','шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    let dozens = ['', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят','восемьдесят', 'девяносто'];
    let hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
    
    function numberToText() {            // преобразование числа из цифр в слова в пределах от -999 до 999.
        let number = Math.abs(answerNumber);
        let text = '';
        if (number == 0) {
            text = 'ноль';
            return text;
        }
    
        if (number <= 9) {
            return units[Math.floor(Math.abs(number) / 1)];
        }
    
        if (number > 9 && number < 20) {
            return teens[Math.floor(number / 10 + number % 10)];
        }
    
        if (number >= 20 && number <= 99) {
            return dozens[(Math.floor(number / 10)) - 1] + " " + units[Math.floor(number % 10)];
        }
    
        if (number >= 100 && number <= 999) {
            return hundreds[Math.floor(number / 100)] + " " + numberToTextHundreds();
        }
    }
    
    function numberToTextHundreds() { // остаток от сотого числа для последующего присоединения к функции numberToText() расчитывающей сотни hundreds.
        let unitsTeensDozens = Math.abs(answerNumber) % 100;
        
        if (unitsTeensDozens <= 9) {
            return units[Math.floor(unitsTeensDozens / 1)];
        }
    
        if (unitsTeensDozens > 9 && unitsTeensDozens < 20) {
            return teens[(Math.floor(unitsTeensDozens / 10)) + (unitsTeensDozens % 10)];
        }
    
        if (unitsTeensDozens >= 20 && unitsTeensDozens <= 99) {
            return dozens[(Math.floor(unitsTeensDozens / 10)) - 1] + " " + units[Math.floor(unitsTeensDozens % 10)];
        }
    }
    
    orderNumberField.innerText = orderNumber; 
    answerField.innerText = answerNumber >= 0 ? numberToText().length < 20 && answerNumber >= 0 ? `Вы загадали число ${numberToText()}?` : `Вы загадали число ${answerNumber}?`: numberToText().length < 20 ? `Вы загадали число минус ${numberToText()}?` : `Вы загадали число ${answerNumber}?`;
    
    document.getElementById('btnRetray').addEventListener('click', function () {
    location.reload();

    })
     
    document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Вы меня обманываете...\n\u{1F92F}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
        orderNumberField.innerText = orderNumber;
            let askRandom = [
                `Вы загадали число `,
                `Возможно это `,
                `Похоже, Ваше число `,
            ];
            let answPrase = askRandom[Math.round(Math.random() * 2)];
            let answerText = answerNumber >= 0 ? numberToText().length < 20 && answerNumber >= 0 ? ` ${numberToText()}?` : `${answerNumber}?`: numberToText().length < 20 ? `минус ${numberToText()}?` : `${answerNumber}?`;
            answerField.innerText = (answPrase + answerText);


        }
    }
})
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue || minValue == answerNumber) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Вы меня обманываете...\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let askRandom = [
                `Вы загадали число `,
                `Возможно это `,
                `Похоже, Ваше число `,
            ];
           let answPrase = askRandom[Math.round(Math.random() * 2)];
            let answerText = answerNumber >= 0 ? numberToText().length < 20 && answerNumber >= 0 ? ` ${numberToText()}?` : `${answerNumber}?`: numberToText().length < 20 ? `минус ${numberToText()}?` : `${answerNumber}?`;
            answerField.innerText = (answPrase + answerText);

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
})
