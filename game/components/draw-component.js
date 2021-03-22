import Component from "../../engine/component.js"

class DrawComponent extends Component{
    static name = "DrawComponent"
    constructor(gameObject, color, diff){
        super(gameObject);
        this.color = color;
        this.diff = diff;
    }
    draw(ctx){
        if(this.diff == "easy"){
            ctx.strokeStyle = "white";
            ctx.strokeRect(this.gameObject.x, this.gameObject.y, 300, 500);
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.fillText("Easy", 225, 250);
        }
        else if(this.diff == "med"){
            ctx.strokeStyle = "white";
            ctx.strokeRect(this.gameObject.x, this.gameObject.y, 300, 500);
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.fillText("Medium", 700, 250);
        }
        else if(this.diff == "hard"){
            ctx.strokeStyle = "white";
            ctx.strokeRect(this.gameObject.x, this.gameObject.y, 300, 500);
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.fillText("Hard", 1250, 250);
        }
        else if(this.diff == "pointer1"){
            ctx.fillStyle = this.color;
            ctx.strokeStyle = "white";
            ctx.beginPath();
            ctx.moveTo(75, 50);
            ctx.lineTo(100, 75);
            ctx.lineTo(100, 25);
            ctx.closePath();
        }
    }
}

export default DrawComponent;