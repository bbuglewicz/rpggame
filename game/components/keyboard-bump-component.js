import * as Engine from "../../../engine/engine.js"

export default  class KeyboardBumpComponent extends Engine.Component {
  constructor(gameObject, speed = 1) {
    super(gameObject);
    this.speed = speed;
  }
  onKeyDown(keys){
    let originalPosition = new Engine.Vector2(this.gameObject.transform.x, this.gameObject.transform.y);
    if(keys["a"] || keys["ArrowLeft"]) this.gameObject.transform.x -= 1 * this.speed
    if(keys["d"] || keys["ArrowRight"]) this.gameObject.transform.x += 1 * this.speed
    if(keys["w"] || keys["ArrowUp"]) this.gameObject.transform.y -= 1 * this.speed
    if(keys["s"] || keys["ArrowDown"]) this.gameObject.transform.y += 1 * this.speed
    if(this.gameObject.transform.x < 0 
      || this.gameObject.transform.x > 600 
      || this.gameObject.transform.y <0 
      || this.gameObject.transform.y > 525){
      //We are out of bounds, so revert back
      this.gameObject.transform.x = originalPosition.x;
      this.gameObject.transform.y = originalPosition.y;
    }

  }

}