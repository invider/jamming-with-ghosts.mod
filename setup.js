function setup() {

    const grid = lab.spawn('Grid')
    grid.x = (rx(1) - grid.w * grid.cw)/2
    grid.y = (ry(1) - grid.h * grid.ch)/2

    for (let [name, ghost] of Object.entries(env.ghosts)) {
        if (name === 'name') continue
        ghost.name = name
        lab.spawn(dna.FloatingGhost, ghost)
    }

}
