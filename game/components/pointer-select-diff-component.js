import * as Engine from "../../../engine/engine.js"

export default  class PointerSelectDiffComponent extends Engine.Component {
  constructor(gameObject, speed = 1) {
    super(gameObject);
    this.speed = speed;
  }
  onKeyDown(keys){
    let originalPosition = new Engine.Vector2(this.gameObject.transform.x, this.gameObject.transform.y);
    if(keys["a"] || keys["ArrowLeft"]) this.gameObject.transform.x -= 550 * this.speed
    if(keys["d"] || keys["ArrowRight"]) this.gameObject.transform.x += 550 * this.speed
    if(keys["w"] || keys["ArrowUp"]) this.gameObject.transform.y -= 10 * this.speed
    if(keys["s"] || keys["ArrowDown"]) this.gameObject.transform.y += 10 * this.speed
    if(keys["Enter"]) {
      if(this.gameObject.transform.x == -550){
        Engine.SceneManager.changeScene("EasyBattle");
      }
      else if(this.gameObject.transform.x == 0){
        Engine.SceneManager.changeScene("MedBattle");
      }
      else if(this.gameObject.transform.x == 550){
        Engine.SceneManager.changeScene("HardBattle");
      }
    }
    if(this.gameObject.transform.x < -550 || this.gameObject.transform.x > 550 || this.gameObject.transform.y < -275 || this.gameObject.transform.y > -275){
      this.gameObject.transform.x = originalPosition.x;
      this.gameObject.transform.y = originalPosition.y;
    }
  }
}