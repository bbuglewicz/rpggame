import * as Engine from "../../engine/engine.js"

class ChangeSceneComponent extends Engine.Component {
  constructor(gameObject) {
    super(gameObject);
  }
  next(){
    this.ticks++;
    let currectSceneName = Engine.SceneManager.currentScene.name;

    if (currentSceneName == "TitleScene")
        Engine.SceneManager.changeScene("DungSelect");
      else Engine.SceneManager.changeScene("TitleSelect")
  }

}

export default ChangeSceneComponent;