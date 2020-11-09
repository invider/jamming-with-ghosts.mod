function setup() {

    const cam = lab.spawn('SlideCamera', {
        name: 'cam',
        x: 0,
        y: 0,
        zoomOnPlusMinus: true,
    })

    const grid = lab.cam.spawn('Grid', {
        Z: 1,
    })
    const vm = lab.spawn('VM')

    for (let [name, ghostSt] of Object.entries(env.ghosts)) {
        if (name === 'name') continue
        ghostSt.name = name
        const ghost = lab.cam.spawn(dna.FloatingGhost, ghostSt)
        ghost.teleport(RND(lab.cam.grid.gw-1), RND(lab.cam.grid.gh-1))
    }

}
