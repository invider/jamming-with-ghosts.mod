function setup() {

    const cam = lab.spawn('SlideCamera', {
        name: 'cam',
        x: 0,
        y: 0,
        zoomOnPlusMinus: true,
    })

    const grid = lab.cam.spawn('Grid')

    for (let [name, ghost] of Object.entries(env.ghosts)) {
        if (name === 'name') continue
        ghost.name = name
        lab.cam.spawn(dna.FloatingGhost, ghost)
    }

}
