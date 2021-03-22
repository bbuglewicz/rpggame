/* Get the Scene Manager for the game */
import SceneManager from "./engine/scene-manager.js"

/* Get references to all the custom scenes from the game */
import FirstScene from "./game/scenes/first-scene.js"
import SecondScene from "./game/scenes/second-scene.js"
import DungSelect from "./game/scenes/dung-select.js"

/* Get references to all custom prefabs from the game */
import BlueRectangle from "./game/prefabs/blue-rectangle.js"
import RedRectangle from "./game/prefabs/red-rectangle.js"

/* Get references to all the components. Eventually this will include engine and game-based components */
import DrawComponent from "./game/components/draw-component.js"
import MoveComponent from "./game/components/move-component.js"
import ChangeSceneComponent from "./game/components/change-scene-component.js"

/* Import the scene object so we can call deserialize */
import Scene from "./engine/scene.js"

/* Import the static input information */
import Input from "./engine/input.js"

function boot() {

  /* Setup our canvas */
  let canvas = document.getElementById("canv");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight
  let ctx = canvas.getContext("2d");

  //Setup all the key listeners
  document.body.addEventListener('keydown', keydown);
  document.body.addEventListener('keyup', keyup);
  document.body.addEventListener('keypress', keypress);
  document.body.addEventListener('contextmenu', contextmenu);

  var up, down, left, right;

  function keydown(event) {
    console.log("Down: " + event.key);
    if (Input.keys[event.key] != true){
        Input.keysDown[event.key] = true;
        down = true;
    }
    Input.keys[event.key] = true;
  }

  function keyup(event) {
    console.log("Up: " + event.key)
    if (Input.keys[event.key] != false)
      Input.keysUp[event.key] = true;
    Input.keys[event.key] = false;
  }

  function keypress(event) {
    console.log(`Keys: ${event.key}, Modifier keys: Control: ${event.ctrlKey}, Alt: ${event.altKey}, Shift: ${event.shiftKey}, Meta Key: ${event.metaKey}`);
  }

  // Based on https://stackoverflow.com/questions/381795/how-to-disable-right-click-context-menu-in-javascript
  // Kills the right mouse context menu
  function contextmenu(event) {
    if (event.preventDefault != undefined)
      event.preventDefault();
    if (event.stopPropagation != undefined)
      event.stopPropagation();
    return false;
  }

  let allComponents = [MoveComponent, DrawComponent, ChangeSceneComponent]  //Get all possible components in a list
  let allPrefabs = [BlueRectangle, RedRectangle]      //Get all possible prefabs in a list
  //let firstScene = Scene.deserialize(FirstScene, allComponents, allPrefabs);  //Deserialize the scene definition
  //let secondScene = Scene.deserialize(SecondScene, allComponents, allPrefabs);

  SceneManager.allComponents = allComponents;
  SceneManager.allPrefabs = allPrefabs;

  SceneManager.allScenes.push(FirstScene);
  SceneManager.allScenes.push(SecondScene);
  SceneManager.allScenes.push(DungSelect);

  SceneManager.changeScene("DungSelect");


  /* Update and draw our game */
  function gameLoop() {
    clear();
    SceneManager.currentScene.draw(ctx);
    SceneManager.currentScene.update();
  }

  /* Erase what we had on the last frame */
  function clear() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  setInterval(gameLoop, 1000 / 60)
}

export default boot;