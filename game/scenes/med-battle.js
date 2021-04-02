export default{
    name: "MedBattle",
    children: [
        {gameObject: {name: "MainCamera", components: [{name: "WorldCameraComponent"}]}},
        {gameObject: {name: "ScreenCamera", components: [{name: "ScreenCameraComponent"}],
            children: [
                {gameObject: {name: "HeroName", components: [{name: "ScreenTextComponent", args: ["Hero"]}]}, x: 225, y: 200},
                {gameObject: {name: "FightCommand", components: [{name: "ScreenTextComponent", args: ["Fight", {alignment: "left"}]}]}, x: 500, y: 650},
                {gameObject: {name: "MagicCommand", components: [{name: "ScreenTextComponent", args: ["Magic", {alignment: "center"}]}]}, x: 1000, y: 650},
            ]}},
        {prefabName: "player", x: -500, y: -100},
        {prefabName: "slime", x: 500, y: -100},
        {prefabName: "BattleCommands", x: -220, y: 190},
        {gameObject: {name: "EmptyChangeScene", components: [{name: "ChangeSceneComponent",}]}}
    ]
}