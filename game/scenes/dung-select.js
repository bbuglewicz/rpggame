export default {
    name: "DungSelect",
    children:[
        {
            gameObject: {
                name: "EasyDung",
                components: [
                    {
                        name: "DrawComponent",
                        args: ["yellow","easy"]

                    }
                ]
            },
            x: 100,
            y: 200
        },
        {
            gameObject: {
                name: "MedDung",
                components: [
                    {
                        name: "DrawComponent",
                        args: ["red", "med"]
                    }
                ]
            },
            x: 600,
            y: 200
        },
        {
            gameObject: {
                name: "HardDung",
                components: [
                    {
                        name: "DrawComponent",
                        args: ["blue", "hard"]
                    }
                ]
            },
            x: window.innerWidth - 400,
            y: 200
        },
        {
            gameObject: {
                name: "Pointer",
                components: [
                    {
                        name: "DrawComponent",
                        args: ["white", "pointer1"]
                    }
                ]
            },
            x: 250,
            y: 100
        },
        {
            gameObject: {
                name: "EmptyChangeScene",
                components: [
                    {
                        name: "ChangeSceneComponent",
                    }
                ]
            }
        }
    ]
}