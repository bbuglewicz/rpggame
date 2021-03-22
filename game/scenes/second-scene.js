export default {
    name: "SecondScene", //Scene name
    children:[ //Game objects in the scene
      
      {
        prefabName: "RedRectangle",
        /* x and y are optional */
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