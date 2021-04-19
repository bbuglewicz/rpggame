import * as Engine from "../../../engine/engine.js"

export default class EnterKeyComponent extends Engine.Component {
    constructor(gameObject) {
        super(gameObject);
      }

      onKeyDown(keys) {
        if (keys["Enter"]) {
            Engine.SceneManager.changeScene("DungSelect");
        }
      }
}