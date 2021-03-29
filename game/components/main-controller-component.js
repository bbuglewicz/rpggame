import * as Engine from "../../../engine/engine.js"

const SceneManager = Engine.SceneManager;

export default class MainControllerComponent extends Engine.Component {
  constructor(gameObject) {
    super(gameObject);
  }
  start() {
    this.pointer = SceneManager.currentScene.getGameObject("pointer");
  }
  update() {
    //this.pointerX = this.pointer.x;
    
    if(this.pointerX = -550){
      if(SceneManager.currentScene.name == "DungSelect") return SceneManager.changeScene("EasyDung")
    }
    if(this.pointerX = 0){
        if(SceneManager.currentScene.name == "DungSelect") return SceneManager.changeScene("MedDung")
    }
    if(this.pointerX < 550){
        if(SceneManager.currentScene.name == "DungSelect") return SceneManager.changeScene("HardDung")
    }
  }
}