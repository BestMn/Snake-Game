const move = (newDir) => (dispatch, getState) => {
    const { snake, direction } = getState();
    let newSnake = [...snake];
    let newHead;
    switch (newDir) {
        case "UP": {
            newHead = { x: snake[0].x, y: snake[0].y - 20 };
            if (direction === "DOWN") {
                return;
            }
            break;
        }
        case "RIGHT": {
            newHead = { x: snake[0].x + 20, y: snake[0].y };
            if (direction === "LEFT") {
                return;
            }
            break;
        }
        case "DOWN": {
            newHead = { x: snake[0].x, y: snake[0].y + 20 };
            if (direction === "UP") {
                return;
            }
            break;
        }
        case "LEFT": {
            newHead = { x: snake[0].x - 20, y: snake[0].y };
            if (direction === "RIGHT") {
                return;
            }
            break;
        }
        case undefined:
            return;
    }
    newSnake.pop();
    if (newSnake.find((el) => JSON.stringify(el) === JSON.stringify(newHead))) {
        dispatch({
            type: "GAME_OVER",
        });
        return;
    }
    newSnake = [newHead, ...newSnake];
    if (
        newSnake[0].x < 0 ||
        newSnake[0].x >= 500 ||
        newSnake[0].y < 0 ||
        newSnake[0].y >= 500
    ) {
        dispatch({
            type: "GAME_OVER",
        });
        return;
    }
    dispatch({
        type: `MOVE_${newDir}`,
        payload: newSnake,
    });
};

const foodEaten = () => (dispatch, getState) => {
    dispatch({
        type: "FOOD_EATEN",
    });

    const { snake } = getState();
    let randomX;
    let randomY;

    do {
        randomX = Math.floor(Math.random() * 25) * 20;
        randomY = Math.floor(Math.random() * 25) * 20;
    } while (snake.find((el) => (el.x == randomX) & (el.y == randomY)));

    dispatch({
        type: "PLACE_FOOD",
        payload: [{ x: randomX, y: randomY }],
    });
};

const resetGame = () => (dispatch) => {
    dispatch({
        type: "RESET_GAME",
    });
};

const pauseGame = () => (dispatch) => {
    dispatch({
        type: "PAUSE_GAME",
    });
};

export { move, foodEaten, resetGame, pauseGame };
