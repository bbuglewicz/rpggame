import Component from "../component.js"
export default  class DrawComponent extends Component{
    constructor(gameObject, pointer){
        super(gameObject);
        this.pointer = pointer;
    }
    draw(ctx){     
        if(this.pointer == "dungSelect"){
            ctx.strokeStyle = "white";
            ctx.rotate(45 * Math.PI / 180);
            ctx.strokeRect(this.gameObject.transform.x, this.gameObject.transform.y, 50, 50);    
        }
        else {
            ctx.strokeStyle = "white";
            ctx.strokeRect(this.gameObject.transform.x, this.gameObject.transform.y, 300, 500);    
        }
    }
}