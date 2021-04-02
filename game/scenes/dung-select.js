export default {
    name: "DungSelect",
    children:[
        {gameObject: {name: "MainCamera", components: [{name: "WorldCameraComponent"}]}},
        {gameObject: {name: "ScreenCamera", components: [{name: "ScreenCameraComponent"}], 
            children:[
                    //{gameObject: {name: "EasyText", components: [{name: "ScreenTextComponent", args: ["Easy", {alignment: "center"}]}]}, x: 215, y: 250},
                    {gameObject: {name: "EasyText", components: [{name: "ScreenTextComponent", args: ["Easy", {color: "yellow"}, {alignment: "center"}]}]}, x: 167, y: 250},
                    //{gameObject: {name: "MonsterEasyText", components: [{name: "ScreenTextComponent", args: ["Monster", {alignment: "center"}]}]}, x: 215, y: 450},
                    {gameObject: {name: "MonsterEasyText", components: [{name: "ScreenTextComponent", args: ["Monster", {color: "blue"}, {alignment: "center"}]}]}, x: 138, y: 450},
                    //{gameObject: {name: "SlimeText", components: [{name: "ScreenTextComponent", args: ["Slime", {alignment: "center"}]}]}, x: 215, y: 550},
                    {gameObject: {name: "SlimeText", components: [{name: "ScreenTextComponent", args: ["Slime", {color: "green"}, {alignment: "center"}]}]}, x: 162, y: 550},
                    //{gameObject: {name: "MedText", components: [{name: "ScreenTextComponent", args: ["Medium", {alignment: "center"}]}]}, x: 770, y: 250},
                    {gameObject: {name: "MedText", components: [{name: "ScreenTextComponent", args: ["Medium", {color: "orange"}, {alignment: "center"}]}]}, x: 695, y: 250},
                    //{gameObject: {name: "MonsterMedText", components: [{name: "ScreenTextComponent", args: ["Monster", {alignment: "center"}]}]}, x: 770, y: 450},
                    {gameObject: {name: "MonsterMedText", components: [{name: "ScreenTextComponent", args: ["Monster", {color: "blue"}, {alignment: "center"}]}]}, x: 693, y: 450},
                    //{gameObject: {name: "GoblinText", components: [{name: "ScreenTextComponent", args: ["Goblin", {alignment: "center"}]}]}, x: 770, y: 550},
                    {gameObject: {name: "GoblinText", components: [{name: "ScreenTextComponent", args: ["Goblin", {color: "green"}, {alignment: "center"}]}]}, x: 708, y: 550},
                    //{gameObject: {name: "HardText", components: [{name: "ScreenTextComponent", args: ["Hard", {alignment: "center"}]}]}, x: 1320, y: 250},
                    {gameObject: {name: "HardText", components: [{name: "ScreenTextComponent", args: ["Hard", {color: "red"}, {alignment: "center"}]}]}, x: 1274, y: 250},
                    //{gameObject: {name: "MonsterHardText", components: [{name: "ScreenTextComponent", args: ["Monster", {alignment: "center"}]}]}, x: 1320, y: 450},
                    {gameObject: {name: "MonsterHardText", components: [{name: "ScreenTextComponent", args: ["Monster", {color: "blue"}, {alignment: "center"}]}]}, x: 1243, y: 450},
                    //{gameObject: {name: "OrcText", components: [{name: "ScreenTextComponent", args: ["Orc", {alignment: "center"}]}]}, x: 1320, y: 550},
                    {gameObject: {name: "OrcText", components: [{name: "ScreenTextComponent", args: ["Orc", {color: "green"}, {alignment: "center"}]}]}, x: 1286, y: 550}          
                ]
            }
        },
        {gameObject: {name: "EasyDung", components: [{name: "DrawComponent"}]}, x: -700, y: -200},
        {gameObject: {name: "MedDung", components: [{name: "DrawComponent"}]}, x: -150, y: -200},
        {gameObject: {name: "HardDung", components: [{name: "DrawComponent"}]}, x: 400, y: -200},
        {prefabName: "pointer", x: -550, y: -275},
        //{prefabName: "MainController"},
        {gameObject: {name: "EmptyChangeScene", components: [{name: "ChangeSceneComponent",}]}}
    ]
}