export default {
    name: "DungSelect",
    children:[
        {gameObject: {name: "MainCamera", components: [{name: "WorldCameraComponent"}]}},
        {gameObject: {name: "ScreenCamera", components: [{name: "ScreenCameraComponent"}], 
            children:[
                    {gameObject: {name: "EasyText", components: [{name: "ScreenTextComponent", args: ["1", {alignment: "center"}]}]}, x: 215, y: 250},
                    {gameObject: {name: "MedText", components: [{name: "ScreenTextComponent", args: ["2", {alignment: "center"}]}]}, x: 770, y: 250},
                    {gameObject: {name: "HardText", components: [{name: "ScreenTextComponent", args: ["3", {alignment: "center"}]}]}, x: 1320, y: 250}             
                ]
            }
        },
        {gameObject: {name: "EasyDung", components: [{name: "DrawComponent"}]}, x: -700, y: -200},
        {gameObject: {name: "MedDung", components: [{name: "DrawComponent"}]}, x: -150, y: -200},
        {gameObject: {name: "HardDung", components: [{name: "DrawComponent"}]}, x: 400, y: -200},
        {prefabName: "pointer", x: -550, y: -275},
        {prefabName: "MainController"},
        {gameObject: {name: "EmptyChangeScene", components: [{name: "ChangeSceneComponent",}]}}
    ]
}