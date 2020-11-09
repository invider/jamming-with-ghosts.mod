// trap
function click(e) {
    const cam = lab.cam
    const grid = cam.grid
    const lx = grid.lx( cam.lx(e.pageX) )
    const ly = grid.ly( cam.ly(e.pageY) )
    //log(`${lx}:${ly}`)
    if (lab.cam.focus) lab.cam.focus.follow(lx, ly)
}

