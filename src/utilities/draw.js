const draw = (context, objects, fillColor, strokeStyle = "#146356") => {
    
    objects.forEach((object) => {

        context.fillStyle = fillColor;
        context.strokeStyle = strokeStyle;
        context.fillRect(object.x, object.y, 20, 20);
        context.strokeRect(object.x, object.y, 20, 20);
        
        
    });
}

export default draw;