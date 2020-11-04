
const df = {
    name: 'grid',
    x: 0,
    y: 0,
    w: 16,
    h: 12,
    cw: 48,
    ch: 48,
}

class Grid {

    constructor(st) {
        augment(this, df, st)
    }

    lx(x) {
        return floor((x - this.x)/this.cw)
    }

    ly(y) {
        return floor((y - this.y)/this.ch)
    }

    gx(x) {
        return this.x + x*this.cw + this.cw/2 
    }

    gy(y) {
        return this.y + y*this.ch + this.ch/2
    }

    within(x, y) {
        return (x >= 0 && x < lab.grid.w && y >= 0 && y < lab.grid.h)
    }

    draw() {
        save()
        translate(this.x + this.cw/2, this.y + this.ch/2)
        for (let y = 0; y < this.h; y++) {
            for (let x = 0; x < this.w; x++) {
                const cx = x * this.cw
                const cy = y * this.ch

                lineWidth(4)
                fill('#555555')
                plot(cx-2, cy-2)
            }
        }

        restore()
    }
}
