import draw from "../../utilities/draw";
import React, { useRef, useState, useEffect } from "react";

const Canvas = ({ snake, food, gameIsOver }) => {
    const canvasRef = useRef();
    const [context, setContext] = useState();

    useEffect(() => {
        setContext(canvasRef.current && canvasRef.current.getContext("2d"));
    }, [context]);

    useEffect(() => {
        if (context) {
            context.clearRect(0, 0, 500, 500);
            draw(context, snake, "#b7d9b1");
            draw(context, food, "#fe3f3f");
        }
    });

    const borderStyle = gameIsOver
        ? { border: "2px solid #fb3030" }
        : { border: "2px solid black" };

    return (
        <canvas ref={canvasRef} width={500} height={500} style={borderStyle} />
    );
};

export default Canvas;
