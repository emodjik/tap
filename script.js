let topCounterValue = 21000000000.0000;
let bottomCounterValue = 0.00000;
let miningInterval = null; // Переменная для интервала майнинга

function updateCounters() {
    if (!miningInterval) {
        // Начать майнинг
        miningInterval = setInterval(function() {
            mine(); // Вызываем функцию майнинга
        }, 1000); // Интервал майнинга в миллисекундах (1000 мс = 1 секунда)
    } else {
        // Остановить майнинг
        clearInterval(miningInterval);
        miningInterval = null;
    }
}

function mine() {
    if (topCounterValue > 0) {
        topCounterValue -= 0.00001;
        bottomCounterValue += 0.00001;
        document.getElementById('topCounter').textContent = topCounterValue.toFixed(5);
        document.getElementById('bottomCounter').textContent = bottomCounterValue.toFixed(5);
        
        // Добавляем класс для анимации кнопки во время майнинга
        document.getElementById('actionButton').classList.add('mining');
    } else {
        // Если достигнут ноль, останавливаем майнинг
        clearInterval(miningInterval);
        miningInterval = null;
    }
}

