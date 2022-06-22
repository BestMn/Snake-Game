const initialState = {
    snake: [
        { x: 240, y: 240 },
        { x: 220, y: 240 },
        { x: 200, y: 240 },
    ],
    food: [{ x: 140, y: 140 }],
    direction: "RIGHT",
    score: 0,
    gameIsOver: false,
    gameIsPaused: true,
};

const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "MOVE_RIGHT": {
            return {
                ...state,
                snake: action.payload,
                direction: "RIGHT",
                gameIsPaused: false,
            };
        }

        case "MOVE_LEFT": {
            return {
                ...state,
                snake: action.payload,
                direction: "LEFT",
                gameIsPaused: false,
            };
        }

        case "MOVE_UP": {
            return {
                ...state,
                snake: action.payload,
                direction: "UP",
                gameIsPaused: false,
            };
        }

        case "MOVE_DOWN": {
            return {
                ...state,
                snake: action.payload,
                direction: "DOWN",
                gameIsPaused: false,
            };
        }

        case "FOOD_EATEN": {
            const newScore = state.score + 1;
            const snakeLength = state.snake.length;
            const newCell = {
                x: state.snake[snakeLength - 1].x,
                y: state.snake[snakeLength - 1].y,
            };
            const newSnake = [...state.snake, newCell];
            return { ...state, score: newScore, snake: newSnake };
        }

        case "PLACE_FOOD": {
            return { ...state, food: action.payload };
        }

        case "GAME_OVER": {
            return { ...state, gameIsOver: true };
        }

        case "RESET_GAME": {
            return initialState;
        }

        case "PAUSE_GAME": {
            return { ...state, gameIsPaused: true };
        }

        default:
            return state;
    }
};

export default reducer;
