export default {
    name: "EasyDung",
    children:[
        {gameObject: {name: "MainCamera", components: [{name: "WorldCameraComponent"}]}},
        {gameObject: {name: "ScreenCamera", components: [{name: "ScreenCameraComponent"}]}},
        {prefabName: "room", x: -50, y: -50},
        {prefabName: "player", x: 0, y: 0},
        {prefabName: "MainController"},
        {gameObject: {name: "EmptyChangeScene", components: [{name: "ChangeSceneComponent",}]}}
    ]
}