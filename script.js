const container = document.querySelector(".forecasts");
const forecastButton = document.querySelector('.forecast-btn');
const forecastItem = document.querySelector('#forecast-item');
const currentForecast = document.querySelector('.current-forecast');

forecastButton.addEventListener('click', function () {
    let content = predict();
    let resultForecast = numberGenerate(1, 100);
    currentForecast.querySelector('h1').textContent = content;
    currentForecast.querySelector('p').textContent = `Вероятность: ${resultForecast} %`;
    container.prepend(makeItem(content, resultForecast));
});

function makeItem(textPrediction, resultPrediction) {
    const item = forecastItem.content.cloneNode(true);
    item.querySelector('h3').textContent = textPrediction;
    item.querySelector('p').textContent = `Вероятность: ${resultPrediction} %`;
    return item;
}

function predict() {

    let textPrediction;
    switch (numberGenerate(1, 4)) {
        case 1:
            textPrediction = 'Совсем скоро ожидается новое приятное знакомство';
            break;
        case 2:
            textPrediction = 'Тебя ждет повышение';
            break;
        case 3:
            textPrediction = 'Сбудется все, что задумано!';
            break;
        case 4:
            textPrediction = 'Тебя ждет радостная новость!';
            break;
    }
    return textPrediction;
}

function numberGenerate(min, max) {
    return Math.floor(Math.random() * (max - min)) + 1;
}