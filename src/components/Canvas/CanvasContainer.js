import Canvas from "./Canvas";
import React, { useEffect, useCallback } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { move, foodEaten } from "../../store/actions/actions";

const CanvasContainer = ({
    move,
    foodEaten,
    snake,
    food,
    direction,
    gameIsOver,
    gameIsPaused,
}) => {
    useEffect(() => {
        if (!gameIsOver) {
            window.addEventListener("keydown", onPressHandler);
            let moveTimer;
            if (!gameIsPaused) {
                moveTimer = setTimeout(() => move(direction), 80);
            }
            if (snake[0].x === food[0].x && snake[0].y === food[0].y) {
                foodEaten();
            }
            return () => {
                window.removeEventListener("keydown", onPressHandler);
                clearTimeout(moveTimer);
            };
        }
    });

    const onPressHandler = (event) => {
        switch (event.keyCode) {
            case 38:
            case 87: {
                move("UP");
                return;
            }
            case 68:
            case 39: {
                move("RIGHT");
                return;
            }
            case 83:
            case 40: {
                move("DOWN");
                return;
            }
            case 65:
            case 37: {
                move("LEFT");
                return;
            }
        }
    };

    return <Canvas snake={snake} food={food} gameIsOver={gameIsOver} />;
};

const mapStateToProps = (state) => {
    return {
        snake: state.snake,
        food: state.food,
        direction: state.direction,
        gameIsOver: state.gameIsOver,
        gameIsPaused: state.gameIsPaused,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ move, foodEaten }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CanvasContainer);
