import Component from "../../engine/component.js"

class DrawPointer extends Component{
    static name = "DrawPointer"
    constructor(gameObject, color, diff){
        super(gameObject);
        this.color = color;
        this.diff = diff;
    }
    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(100, 75);
        ctx.lineTo(100, 25);
        ctx.closePath();
    }
}

export default DrawPointer;