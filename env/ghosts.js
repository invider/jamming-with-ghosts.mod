const ghosts = {
    "inky": {
        "x": 100,
        "y": 200,
        "eyeHue": 0.16,
        "bandHue": 0.2,
    },
    "pinky": {
        "x": 500,
        "y": 300,
        "eyeHue": 0.96,
        "bandHue": 0.9
    },
    "clyde": {
        "x": 200,
        "y": 500,
        "eyeHue": 0.50,
        "bandHue": 0.64
    },
    "bliky": {
        "x": 620,
        "y": 560,
        "eyeHue": 0.25,
        "bandHue": 0.35
    },
    "jeff": {
        "x": 800,
        "y": 260,
        "eyeHue": 0.87,
        "bandHue": 0.5
    }
}

const randomWalker = {
        init: function() {
            this.follow(0, 0)
        },

        onTouch: function() {
            setTimeout(() => {
                this.follow(
                    RND(lab.cam.grid.gw-1),
                    RND(lab.cam.grid.gh-1)
                )
            }, 1000)
        },
}

Object.values(ghosts).forEach(ghost => {
    augment(ghost, randomWalker)
})
