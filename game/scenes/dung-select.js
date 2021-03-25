export default {
    name: "DungSelect",
    children:[
        {gameObject: {name: "MainCamera", components: [{name: "WorldCameraComponent"}]}},
        {gameObject: {name: "ScreenCamera", components: [{name: "ScreenCameraComponent"}], 
            children:[
                    {gameObject: {name: "EasyText", components: [{name: "ScreenTextComponent", args: ["Easy", {alignment: "center"}]}]}, x: 215, y: 250},
                    {gameObject: {name: "MedText", components: [{name: "ScreenTextComponent", args: ["Medium", {alignment: "center"}]}]}, x: 770, y: 250},
                    {gameObject: {name: "HardText", components: [{name: "ScreenTextComponent", args: ["Hard", {alignment: "center"}]}]}, x: 1320, y: 250}             
                ]
            }
        },
        {gameObject: {name: "EasyDung", components: [{name: "DrawComponent"}]}, x: -700, y: -200},
        {gameObject: {name: "MedDung", components: [{name: "DrawComponent"}]}, x: -150, y: -200},
        {gameObject: {name: "HardDung", components: [{name: "DrawComponent"}]}, x: 400, y: -200},
        {gameObject: {name: "Pointer",components: [{name: "DrawComponent",args: ["dungSelect"]}]}, x: -600, y: 175},
        {gameObject: {name: "EmptyChangeScene", components: [{name: "ChangeSceneComponent",}]}}
    ]
}