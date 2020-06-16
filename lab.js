/*
 * lab structure
 */
function drawEye(x, y, r) {
    // eyeball
    fill(.1, .1, 1)
    circle(x, y, r)

    const dir = bearing(x, y, mouse.x, mouse.y)
    const d = .4*r

    // iris
    fill(.24, .4, .4)
    circle(x + sin(dir) * d, y + cos(dir) * d, .35*r)

    // pupil
    fill('#000000')
    circle(x + sin(dir) * d, y + cos(dir) * d, .2*r)
}

function draw() {

    Object.keys(env.ghosts).forEach(k => {
        const def = env.ghosts[k]
        drawEye(def.x-40, def.y, 30)
        drawEye(def.x+40, def.y, 35)
    })

}
