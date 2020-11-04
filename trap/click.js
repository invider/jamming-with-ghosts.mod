function click(e) {
    const lx = lab.grid.lx(e.pageX)
    const ly = lab.grid.ly(e.pageY)
    log(`${lx}:${ly}`)

    if (lab.grid.within(lx, ly)) {
        const x = lab.grid.gx(lx)
        const y = lab.grid.gy(ly)
        lab.jeff.target = { x, y }
    }
}
