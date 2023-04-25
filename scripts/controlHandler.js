export default function  handleControls(scene){

    scene.input.on("pointerdown", pointer => {
        if (!scene.gameOver) {

            if (pointer.x < scene.scale.width / 2) {
                scene.emitter.emit("leftdown")
            }
            else {
                scene.emitter.emit("rightdown")

            }
        }
    }

    )
    scene.input.on("pointerup", (pointer) => {

        if (pointer.x < scene.scale.width / 2) {
            scene.emitter.emit("leftup")

        }
        else {
            scene.emitter.emit("rightup")

        }



    }

    )

}