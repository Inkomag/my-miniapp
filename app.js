const grid = [
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
                    const value = this.value;
                    if (!isNaN(value) && value >= 1 && value <= 9) {
                        grid[i][j] = parseInt(value);
                    } else {
                        this.value = '';
                        grid[i][j] = 0; // сброс если неверное значение
                    }
                };
                cell.appendChild(input);
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

function checkSolution() {
    const messageElement = document.getElementById("message");
    if (isValidSudoku(grid)) {
        messageElement.innerText = "Правильное решение!";
        messageElement.style.color = "green";
    } else {
        messageElement.innerText = "Ошибка в решении! Попробуйте снова.";
        messageElement.style.color = "red";
    }
}

function isValidSudoku(grid) {
    for (let i = 0; i < 9; i++) {
        if (!isValidRow(grid, i) || !isValidColumn(grid, i) || !isValidBox(grid, i)) {
            return false;
        }
    }
    return true;
}

function isValidRow(grid, row) {
    let seen = new Set();
    for (let col = 0; col < 9; col++) {
        const value = grid[row][col];
        if (value !== 0) {
            if (seen.has(value)) {
                return false;
            }
            seen.add(value);
        }
    }
    return true;
}

function isValidColumn(grid, col) {
    let seen = new Set();
    for (let row = 0; row < 9; row++) {
        const value = grid[row][col];
        if (value !== 0) {
            if (seen.has(value)) {
                return false;
            }
            seen.add(value);
        }
    }
    return true;
}

function isValidBox(grid, box) {
    let seen = new Set();
    const startRow = Math.floor(box / 3) * 3;
    const startCol = (box % 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const value = grid[startRow + i][startCol + j];
            if (value !== 0) {
                if (seen.has(value)) {
                    return false;
                }
                seen.add(value);
            }
        }
    }
    return true;
}

function resetGame() {
    renderGrid();
    document.getElementById("message").innerText = '';
}

// Упрощенная подсказка
function getHint() {
    alert("Подсказка не реализована.");
}

// Рендеринг сетки при загрузке страницы
window.onload = function() {
    renderGrid();
};
