function click(e) {
    const lx = lab.grid.lx(e.pageX)
    const ly = lab.grid.ly(e.pageY)
    //log(`${lx}:${ly}`)

    lab.jeff.follow(lx, ly)
}
