import Vector2 from "./vector-2.js"

class Input{
  static keys = [];
  static keysDown = [];
  static keysUp = [];
  static frameKeysDown = [];
  static frameKeysUp = [];

  static SwapArrays(){
    this.frameKeysDown = this.keysDown;
    this.frameKeysUp = this.keysUp;
    this.keysDown = [];
    this.keysUp = [];
  }

  static getKey(key){
    return this.keys[key];
  }
  static keyDown(key){
    return this.frameKeysDown[key];
  }
  static keyUp(key){
    return this.frameKeysUp[key];
  }
}

export default Input;