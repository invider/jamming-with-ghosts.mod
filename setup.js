function setup() {

    lab.spawn('Grid')

    for (let [name, ghost] of Object.entries(env.ghosts)) {
        if (name === 'name') continue
        ghost.name = name
        lab.spawn(dna.FloatingGhost, ghost)
    }

}
