const grid = [
    // Пример генерации судоку: 0 обозначает пустые клетки
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

window.onload = function() {
    renderGrid();
};

function renderGrid() {
    const table = document.getElementById("sudoku-grid");
    table.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement("td");
            if (grid[i][j] !== 0) {
                cell.innerText = grid[i][j];
            } else {
                const input = document.createElement("input");
                input.type = "text";
                input.maxLength = 1;
                input.oninput = function() {
                    const value = parseInt(this.value);
                    if (!isNaN(value) && value > 0 && value <= 9) {
                        grid[i][j] = value;
                    } else {
                        this.value = '';
                        grid[i][j] = 0;
                    }
                };
                cell.appendChild(input);
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Получение информации от Telegram WebApp API
    const telegram = window.Telegram.WebApp;
    const user = telegram.initDataUnsafe.user;

    if (user) {
        document.getElementById("greeting").innerText = `Привет, ${user.first_name}!`;
    }

    // Автоматически расширяем приложение на весь экран
    telegram.expand();
});

function buttonClicked() {
    alert("Кнопка нажата!");
}

function checkSolution() {
    if (isValidSudoku(grid)) {
        alert("Правильное решение!");
    } else {
        alert("Неправильно! Попробуйте снова.");
    }
}

function isValidSudoku(grid) {
    // Функция для проверки правильности заполнения судоку
    // Реализуйте вашу логику проверки
    return true;
}

function resetGame() {
    renderGrid();
}

function getHint() {
    // Реализуйте логику подсказки
    alert("Подсказка не реализована");
}
