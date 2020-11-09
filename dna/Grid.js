
const df = {
    name: 'grid',
    x: 0,
    y: 0,
    gw: 16,
    gh: 12,
    cw: 48,
    ch: 48,
}

class Grid {

    constructor(st) {
        augment(this, df, st)
        this.x = -(this.gw * this.cw)/2
        this.y = -(this.gh * this.ch)/2
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
        return (x >= 0 && x < this.gw && y >= 0 && y < this.gh)
    }

    draw() {
        save()
        translate(this.x + this.cw/2, this.y + this.ch/2)
        for (let y = 0; y < this.gh; y++) {
            for (let x = 0; x < this.gw; x++) {
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
