export default{
    name: "Win",
    children: [
        {gameObject: {name: "MainCamera", components: [{name: "WorldCameraComponent"}]}},
        {gameObject: {name: "ScreenCamera", components: [{name: "ScreenCameraComponent"}],
            children: [
                {gameObject: {name: "WinText", components: [{name: "ScreenTextComponent", args: ["Won the battle!", {color: "green"}]}]}, x: 650, y: 200}
            ]}},
        {gameObject: {name: "WinExit", components: [{name: "EnterKeyComponent"}]}},
        {gameObject: {name: "EmptyChangeScene", components: [{name: "ChangeSceneComponent",}]}}
    ]
}