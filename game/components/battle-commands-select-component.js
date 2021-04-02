import * as Engine from "../../../engine/engine.js"

export default  class BattleCommandsSelectComponent extends Engine.Component {
  constructor(gameObject, speed = 1) {
    super(gameObject);
    this.speed = speed;
  }
  onKeyDown(keys){
    let originalPosition = new Engine.Vector2(this.gameObject.transform.x, this.gameObject.transform.y);
    if(keys["a"] || keys["ArrowLeft"]) this.gameObject.transform.x -= 455 * this.speed
    if(keys["d"] || keys["ArrowRight"]) this.gameObject.transform.x += 455 * this.speed
    if(keys["w"] || keys["ArrowUp"]) this.gameObject.transform.y -= 10 * this.speed
    if(keys["s"] || keys["ArrowDown"]) this.gameObject.transform.y += 10 * this.speed
    if(keys["Enter"]) {
      if(this.gameObject.transform.x == -220){
        //Fight command
        
        Engine.SceneManager.changeScene("DungSelect");
      }
      else if(this.gameObject.transform.x == 235){
        //Magic command
        Engine.SceneManager.changeScene("MedBattle");
      }
    }
    if(this.gameObject.transform.x < -220 || this.gameObject.transform.x > 235 || this.gameObject.transform.y < 190 || this.gameObject.transform.y > 190){
      this.gameObject.transform.x = originalPosition.x;
      this.gameObject.transform.y = originalPosition.y;
    }
  }
}