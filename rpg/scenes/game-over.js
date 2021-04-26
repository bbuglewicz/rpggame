export default{
    name: "GameOver",
    children: [
        {gameObject: {name: "MainCamera", components: [{name: "WorldCameraComponent"}]}},
        {gameObject: {name: "ScreenCamera", components: [{name: "ScreenCameraComponent"}],
            children: [
                {gameObject: {name: "WinText", components: [{name: "ScreenTextComponent", args: ["Game Over!", {color: "red"}]}]}, x: 650, y: 200}
            ]}},
        {gameObject: {name: "GameOverExit", components: [{name: "EnterKeyComponent"}]}},
        {gameObject: {name: "EmptyChangeScene", components: [{name: "ChangeSceneComponent",}]}}
    ]
}