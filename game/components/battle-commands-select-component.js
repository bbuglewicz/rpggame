import * as Engine from "../../../engine/engine.js"
import StatsComponent from "./stats-component.js";

const SceneManager = Engine.SceneManager;

export default class BattleCommandsSelectComponent extends Engine.Component {
  constructor(gameObject, speed = 1) {
    super(gameObject);
    this.speed = speed;
    this.screen = "fight";
  }
  onKeyDown(keys) {
    let originalPosition = new Engine.Vector2(this.gameObject.transform.x, this.gameObject.transform.y);
    if (keys["a"] || keys["ArrowLeft"]) {
      if (this.screen == "fight") {
        this.gameObject.transform.x -= 455 * this.speed;
      }
      else {
        this.gameObject.transform.x -= 10 * this.speed;
      }
    }
    if (keys["d"] || keys["ArrowRight"]) {
      if (this.screen == "fight") {
        this.gameObject.transform.x += 455 * this.speed;
      }
      else {
        this.gameObject.transform.x += 10 * this.speed;
      }
    }
    if (keys["w"] || keys["ArrowUp"]) {
      if (this.screen == "fight") {
        this.gameObject.transform.y -= 10 * this.speed;
      }
      else {
        this.gameObject.transform.y -= 50 * this.speed;
      }
    }
    if (keys["s"] || keys["ArrowDown"]) {
      if (this.screen == "fight") {
        this.gameObject.transform.y += 10 * this.speed;
      }
      else {
        this.gameObject.transform.y += 50 * this.speed;
      }
    }
    if (keys["Enter"]) {
      if (this.gameObject.transform.x == -220) {

        //Fight command
        this.player = SceneManager.currentScene.getGameObject("player");
        let playerHp = this.player.getComponent("StatsComponent").getHp();
        let playerAtt = this.player.getComponent("StatsComponent").getAtt();
        let playerDef = this.player.getComponent("StatsComponent").getDef();

        let playerTextHp = SceneManager.currentScene.getGameObject("HeroHP").getComponent("ScreenTextComponent");
        let monsterTextHp = SceneManager.currentScene.getGameObject("MonsterHP").getComponent("ScreenTextComponent");

        //Determines which monster you are fighting
        if (SceneManager.currentScene.name == "EasyBattle") {
          this.monster = SceneManager.currentScene.getGameObject("slime");
          let monsterHp = this.monster.getComponent("StatsComponent").getHp();
          let monsterAtt = this.monster.getComponent("StatsComponent").getAtt();
          let monsterDef = this.monster.getComponent("StatsComponent").getDef();

          //Damage can be from 0 - 6 to the monster
          let max = Math.floor((playerAtt - monsterDef) / 1.25);
          let damage = Math.floor(Math.random() * max);
          this.monster.getComponent("StatsComponent").setHp((monsterHp - damage));
          playerTextHp.string = this.player.getComponent("StatsComponent").getHp();

          //Determines if monster is dead
          if (this.monster.getComponent("StatsComponent").getHp() <= 0) {
            Engine.SceneManager.changeScene("Win");
          }

          //Figures out how much damage the monster will hit the player. Damage can be from 0 - 3
          max = Math.floor((monsterAtt - playerDef) / 1.25);
          damage = Math.floor(Math.random() * max);
          this.player.getComponent("StatsComponent").setHp((playerHp - damage));
          monsterTextHp.string = this.monster.getComponent("StatsComponent").getHp();

          //Determines if the player dies
          if (this.player.getComponent("StatsComponent").getHp() <= 0) {
            Engine.SceneManager.changeScene("GameOver");
          }
        }
        else if (SceneManager.currentScene.name == "MedBattle") {
          this.monster = SceneManager.currentScene.getGameObject("goblin");
          let monsterHp = this.monster.getComponent("StatsComponent").getHp();
          let monsterAtt = this.monster.getComponent("StatsComponent").getAtt();
          let monsterDef = this.monster.getComponent("StatsComponent").getDef();

          //Damage can be from 0 - 3 to the monster
          let max = Math.floor((playerAtt - monsterDef) / 1.25);
          let damage = Math.floor(Math.random() * max);
          this.monster.getComponent("StatsComponent").setHp((monsterHp - damage));
          playerTextHp.string = this.player.getComponent("StatsComponent").getHp();

          //Determines if monster is dead
          if (this.monster.getComponent("StatsComponent").getHp() <= 0) {
            Engine.SceneManager.changeScene("Win");
          }

          //Figures out how much damage the monster will hit the player. Damage can be from 0 - 7
          max = Math.floor((monsterAtt - playerDef) / 1.25);
          damage = Math.floor(Math.random() * max);
          this.player.getComponent("StatsComponent").setHp((playerHp - damage));
          monsterTextHp.string = this.monster.getComponent("StatsComponent").getHp();

          //Determines if the player dies
          if (this.player.getComponent("StatsComponent").getHp() <= 0) {
            Engine.SceneManager.changeScene("GameOver");
          }
        }
        else if (SceneManager.currentScene.name == "HardBattle") {
          this.player = SceneManager.currentScene.getGameObject("player");
          let playerHp = this.player.getComponent("StatsComponent").getHp();
          let playerAtt = this.player.getComponent("StatsComponent").getAtt();
          let playerDef = this.player.getComponent("StatsComponent").getDef();

          this.monster = SceneManager.currentScene.getGameObject("orc");
          let monsterHp = this.monster.getComponent("StatsComponent").getHp();
          let monsterAtt = this.monster.getComponent("StatsComponent").getAtt();
          let monsterDef = this.monster.getComponent("StatsComponent").getDef();

          //Damage can be from 0 - 1 to the monster
          let max = Math.floor((playerAtt - monsterDef) / 1.25);
          let damage = Math.floor(Math.random() * max);
          this.monster.getComponent("StatsComponent").setHp((monsterHp - damage));
          playerTextHp.string = this.player.getComponent("StatsComponent").getHp();

          //Determines if monster is dead
          if (this.monster.getComponent("StatsComponent").getHp() <= 0) {
            Engine.SceneManager.changeScene("Win");
          }

          //Figures out how much damage the monster will hit the player. Damage can be from 0 - 11
          max = Math.floor((monsterAtt - playerDef) / 1.25);
          damage = Math.floor(Math.random() * max);
          this.player.getComponent("StatsComponent").setHp((playerHp - damage));
          monsterTextHp.string = this.monster.getComponent("StatsComponent").getHp();

          //Determines if the player dies
          if (this.player.getComponent("StatsComponent").getHp() <= 0) {
            Engine.SceneManager.changeScene("GameOver");
          }
        }
      }
      else if (this.gameObject.transform.x == 235) {
        //Magic command
        this.screen = "magic";
        //Opens the magic screen to pick between fire, thunder, or ice magic attacks
        let fightCommand = SceneManager.currentScene.getGameObject("FightCommand").getComponent("ScreenTextComponent");
        fightCommand.color = "black";
        let magicCommand = SceneManager.currentScene.getGameObject("MagicCommand").getComponent("ScreenTextComponent");
        magicCommand.color = "black";
        let fireMagic = SceneManager.currentScene.getGameObject("FireMagic").getComponent("ScreenTextComponent");
        fireMagic.color = "red";
        let thunderMagic = SceneManager.currentScene.getGameObject("ThunderMagic").getComponent("ScreenTextComponent");
        thunderMagic.color = "yellow";
        let iceMagic = SceneManager.currentScene.getGameObject("IceMagic").getComponent("ScreenTextComponent");
        iceMagic.color = "aqua";

        //Changes the pointer to be on the magic attack screen
        this.gameObject.transform.x = 315;
        this.gameObject.transform.y = 155;
      }
      else if (this.gameObject.transform.x == 315) {
        //Figures out what monster the player is fighting
        if (SceneManager.currentScene.name == "EasyBattle") {
          this.monster = SceneManager.currentScene.getGameObject("slime");
        }
        else if (SceneManager.currentScene.name == "MedBattle") {
          this.monster = SceneManager.currentScene.getGameObject("goblin");
        }
        else if (SceneManager.currentScene.name == "HardBattle") {
          this.monster = SceneManager.currentScene.getGameObject("orc");
        }

        this.player = SceneManager.currentScene.getGameObject("player");
        let playerHp = this.player.getComponent("StatsComponent").getHp();
        let playerMp = this.player.getComponent("StatsComponent").getMp();
        let playerAtt = this.player.getComponent("StatsComponent").getAtt();
        let playerDef = this.player.getComponent("StatsComponent").getDef();

        let monsterHp = this.monster.getComponent("StatsComponent").getHp();
        let monsterAtt = this.monster.getComponent("StatsComponent").getAtt();
        let monsterDef = this.monster.getComponent("StatsComponent").getDef();

        let playerTextHp = SceneManager.currentScene.getGameObject("HeroHP").getComponent("ScreenTextComponent");
        let playerTextMp = SceneManager.currentScene.getGameObject("HeroMP").getComponent("ScreenTextComponent");
        let monsterTextHp = SceneManager.currentScene.getGameObject("MonsterHP").getComponent("ScreenTextComponent");

        if (playerMp <= 0) {
          //Changes the pointer back to the fight commands
          this.screen = "fight";
          let fightCommand = SceneManager.currentScene.getGameObject("FightCommand").getComponent("ScreenTextComponent");
          fightCommand.color = "white";
          let magicCommand = SceneManager.currentScene.getGameObject("MagicCommand").getComponent("ScreenTextComponent");
          magicCommand.color = "white";
          let fireMagic = SceneManager.currentScene.getGameObject("FireMagic").getComponent("ScreenTextComponent");
          fireMagic.color = "black";
          let thunderMagic = SceneManager.currentScene.getGameObject("ThunderMagic").getComponent("ScreenTextComponent");
          thunderMagic.color = "black";
          let iceMagic = SceneManager.currentScene.getGameObject("IceMagic").getComponent("ScreenTextComponent");
          iceMagic.color = "black";

          this.gameObject.transform.x = -220;
          this.gameObject.transform.y = 190;
        }

        //Figures out what spell is being used
        if (this.gameObject.transform.y == 155) {
          //Fire spell
          //Goblin is weak to this spell
          let max = 0;
          let damage = 0;

          //Damage can be from 1 - 10 to the monster
          if (this.monster.name == "slime") {
            max = Math.floor((playerAtt - monsterDef) / .9);
            damage = Math.floor(Math.random() * max + 1);
            this.monster.getComponent("StatsComponent").setHp((monsterHp - damage));
            playerTextHp.string = this.player.getComponent("StatsComponent").getHp();
          }
          //Damage can be from 3 - 8 to the monster
          else if (this.monster.name == "goblin") {
            max = Math.floor((playerAtt - monsterDef) / .75);
            damage = Math.floor(Math.random() * max + 3);
            this.monster.getComponent("StatsComponent").setHp((monsterHp - damage));
            playerTextHp.string = this.player.getComponent("StatsComponent").getHp();
          }
          //Damage can be from 5 - 7 to the monster
          else if (this.monster.name == "orc") {
            max = Math.floor((playerAtt - monsterDef) / .9);
            damage = Math.floor(Math.random() * max + 5);
            this.monster.getComponent("StatsComponent").setHp((monsterHp - damage));
            playerTextHp.string = this.player.getComponent("StatsComponent").getHp();
          }

          this.player.getComponent("StatsComponent").setMp(playerMp - 3);
          playerTextMp.string = this.player.getComponent("StatsComponent").getMp();

          //Determines if monster is dead
          if (this.monster.getComponent("StatsComponent").getHp() <= 0) {
            Engine.SceneManager.changeScene("Win");
          }

          //Figures out how much damage the monster will hit the player
          max = Math.floor((monsterAtt - playerDef) / 1.25);
          damage = Math.floor(Math.random() * max);
          this.player.getComponent("StatsComponent").setHp((playerHp - damage));
          monsterTextHp.string = this.monster.getComponent("StatsComponent").getHp();

          //Determines if the player dies
          if (this.player.getComponent("StatsComponent").getHp() <= 0) {
            Engine.SceneManager.changeScene("GameOver");
          }
        }
        else if (this.gameObject.transform.y == 205) {
          //Thunder spell
          //Slime is weak to this spell
          let max = 0;
          let damage = 0;

          //Damage can be from 4 - 13 to the monster
          if (this.monster.name == "slime") {
            max = Math.floor((playerAtt - monsterDef) / .75);
            damage = Math.floor(Math.random() * max + 2);
            this.monster.getComponent("StatsComponent").setHp((monsterHp - damage));
            playerTextHp.string = this.player.getComponent("StatsComponent").getHp();
          }
          //Damage can be from 3 - 7 to the monster
          else if (this.monster.name == "goblin") {
            max = Math.floor((playerAtt - monsterDef) / .9);
            damage = Math.floor(Math.random() * max + 3);
            this.monster.getComponent("StatsComponent").setHp((monsterHp - damage));
            playerTextHp.string = this.player.getComponent("StatsComponent").getHp();
          }
          //Damage can be from 4 - 6 to the monster
          else if (this.monster.name == "orc") {
            max = Math.floor((playerAtt - monsterDef) / .9);
            damage = Math.floor(Math.random() * max + 4);
            this.monster.getComponent("StatsComponent").setHp((monsterHp - damage));
            playerTextHp.string = this.player.getComponent("StatsComponent").getHp();
          }

          this.player.getComponent("StatsComponent").setMp(playerMp - 3);
          playerTextMp.string = this.player.getComponent("StatsComponent").getMp();

          //Determines if monster is dead
          if (this.monster.getComponent("StatsComponent").getHp() <= 0) {
            Engine.SceneManager.changeScene("Win");
          }

          //Figures out how much damage the monster will hit the player
          max = Math.floor((monsterAtt - playerDef) / 1.25);
          damage = Math.floor(Math.random() * max);
          this.player.getComponent("StatsComponent").setHp((playerHp - damage));
          monsterTextHp.string = this.monster.getComponent("StatsComponent").getHp();

          //Determines if the player dies
          if (this.player.getComponent("StatsComponent").getHp() <= 0) {
            Engine.SceneManager.changeScene("GameOver");
          }

        }
        else if (this.gameObject.transform.y == 255) {
          //Ice spell
          //Orc is weak to this spell
          let max = 0;
          let damage = 0;

          //Damage can be from 2 - 11 to the monster
          if (this.monster.name == "slime") {
            max = Math.floor((playerAtt - monsterDef) / .9);
            damage = Math.floor(Math.random() * max + 2);
            this.monster.getComponent("StatsComponent").setHp((monsterHp - damage));
            playerTextHp.string = this.player.getComponent("StatsComponent").getHp();
          }
          //Damage can be from 3 - 5 to the monster
          else if (this.monster.name == "goblin") {
            max = Math.floor((playerAtt - monsterDef) / .9);
            damage = Math.floor(Math.random() * (max - 2) + 3);
            this.monster.getComponent("StatsComponent").setHp((monsterHp - damage));
            playerTextHp.string = this.player.getComponent("StatsComponent").getHp();
          }
          //Damage can be from 6 - 9 to the monster
          else if (this.monster.name == "orc") {
            max = Math.floor((playerAtt - monsterDef) / .75);
            damage = Math.floor(Math.random() * max + 6);
            this.monster.getComponent("StatsComponent").setHp((monsterHp - damage));
            playerTextHp.string = this.player.getComponent("StatsComponent").getHp();
          }

          this.player.getComponent("StatsComponent").setMp(playerMp - 3);
          playerTextMp.string = this.player.getComponent("StatsComponent").getMp();

          //Determines if monster is dead
          if (this.monster.getComponent("StatsComponent").getHp() <= 0) {
            Engine.SceneManager.changeScene("Win");
          }

          //Figures out how much damage the monster will hit the player
          max = Math.floor((monsterAtt - playerDef) / 1.25);
          damage = Math.floor(Math.random() * max);
          this.player.getComponent("StatsComponent").setHp((playerHp - damage));
          monsterTextHp.string = this.monster.getComponent("StatsComponent").getHp();

          //Determines if the player dies
          if (this.player.getComponent("StatsComponent").getHp() <= 0) {
            Engine.SceneManager.changeScene("GameOver");
          }
        }

        //Changes the pointer back to the fight commands
        this.screen = "fight";
        let fightCommand = SceneManager.currentScene.getGameObject("FightCommand").getComponent("ScreenTextComponent");
        fightCommand.color = "white";
        let magicCommand = SceneManager.currentScene.getGameObject("MagicCommand").getComponent("ScreenTextComponent");
        magicCommand.color = "white";
        let fireMagic = SceneManager.currentScene.getGameObject("FireMagic").getComponent("ScreenTextComponent");
        fireMagic.color = "black";
        let thunderMagic = SceneManager.currentScene.getGameObject("ThunderMagic").getComponent("ScreenTextComponent");
        thunderMagic.color = "black";
        let iceMagic = SceneManager.currentScene.getGameObject("IceMagic").getComponent("ScreenTextComponent");
        iceMagic.color = "black";

        this.gameObject.transform.x = -220;
        this.gameObject.transform.y = 190;
      }
    }

    if (this.screen == "fight") {
      if (this.gameObject.transform.x < -220 || this.gameObject.transform.x > 235 || this.gameObject.transform.y < 190 || this.gameObject.transform.y > 190) {
        this.gameObject.transform.x = originalPosition.x;
        this.gameObject.transform.y = originalPosition.y;
      }
    }
    else {
      if (this.gameObject.transform.x < 315 || this.gameObject.transform.x > 315 || this.gameObject.transform.y < 155 || this.gameObject.transform.y > 255) {
        this.gameObject.transform.x = originalPosition.x;
        this.gameObject.transform.y = originalPosition.y;
      }
    }
  }
}