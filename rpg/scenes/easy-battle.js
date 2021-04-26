export default{
    name: "EasyBattle",
    children: [
        {gameObject: {name: "MainCamera", components: [{name: "WorldCameraComponent"}]}},
        {gameObject: {name: "ScreenCamera", components: [{name: "ScreenCameraComponent"}],
            children: [
                {gameObject: {name: "HeroName", components: [{name: "ScreenTextComponent", args: ["Hero"]}]}, x: 225, y: 200},
                {gameObject: {name: "SlimeName", components: [{name: "ScreenTextComponent", args: ["Slime"]}]}, x: 1215, y: 200},
                {gameObject: {name: "FightCommand", components: [{name: "ScreenTextComponent", args: ["Fight", {alignment: "left"}]}]}, x: 500, y: 650},
                {gameObject: {name: "MagicCommand", components: [{name: "ScreenTextComponent", args: ["Magic", {alignment: "center"}]}]}, x: 1000, y: 650},
                {gameObject: {name: "FireMagic", components: [{name: "ScreenTextComponent", args: ["Fire", {color: "black", alignment: "left"}]}]}, x: 1115, y: 550},
                {gameObject: {name: "ThunderMagic", components: [{name: "ScreenTextComponent", args: ["Thunder", {color: "black", alignment: "left"}]}]}, x: 1115, y: 600},
                {gameObject: {name: "IceMagic", components: [{name: "ScreenTextComponent", args: ["Blizzard", {color: "black", alignment: "left"}]}]}, x: 1115, y: 650},
                {gameObject: {name: "HeroHP", components: [{name: "ScreenTextComponent", args: ["100", {color: "darkgreen"}]}]}, x: 235, y: 400},
                {gameObject: {name: "HeroMP", components: [{name: "ScreenTextComponent", args: ["15", {color: "darkcyan"}]}]}, x: 235, y: 450},
                {gameObject: {name: "MonsterHP", components: [{name: "ScreenTextComponent", args: ["10", {color: "darkgreen"}]}]}, x: 1243, y: 400}
            ]}},
        {prefabName: "player", x: -500, y: -100},
        {prefabName: "slime", x: 500, y: -100},
        {prefabName: "BattleCommands", x: -220, y: 190},
        {gameObject: {name: "EmptyChangeScene", components: [{name: "ChangeSceneComponent",}]}}
    ]
}