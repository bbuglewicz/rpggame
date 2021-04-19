export default{
    name: "Title",
    children: [
        {gameObject: {name: "MainCamera", components: [{name: "WorldCameraComponent"}]}},
        {gameObject: {name: "ScreenCamera", components: [{name: "ScreenCameraComponent"}],
            children: [
                {gameObject: {name: "TitleText", components: [{name: "ScreenTextComponent", args: ["RPG Game", {color: "orange"}]}]}, x: 650, y: 200},
                {gameObject: {name: "InstructionsText", components: [{name: "ScreenTextComponent", args: ["Press enter to start your adventure!", {color: "white"}]}]}, x: 425, y: 500}
            ]}},
        {gameObject: {name: "WinExit", components: [{name: "EnterKeyComponent"}]}},
        {gameObject: {name: "EmptyChangeScene", components: [{name: "ChangeSceneComponent",}]}}
    ]
}