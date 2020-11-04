const df = {
    a: 1,
    x: 0,
    y: 0,
    eyeHue: .35,
    bandHue: .2,
    scale: .25,
}

class Ghost {

    constructor(st) {
        augment(this, df, st)
        this.growTeeth()
        this.growHair()
    }

    growHair() {
        this.hair = []

        for (let i = 0; i < 30+RND(20); i++) {
            this.hair.push({
                x: RND(160)-80,
                y: -40,
                w: 5+RND(5),
                h: 30+RND(20),
            })

        }
    }

    growTeeth() {
        this.teeth = []

        let x = -50
        while(x < 50) {

            this.teeth.push({
                x: x,
                y: 40,
                w: 20,
            })

            x += 22 + RND(20)
        }
    }

    drawEye(x, y, r) {
        // eyeball
        fill(.1, .1, 1)
        circle(x, y, r)

        const tx = this.target? this.target.x : mouse.x
        const ty = this.target? this.target.y : mouse.y

        const dir = bearing(this.x + x, this.y + y, tx, ty)
        const d = .4*r

        // iris
        fill( hsl(this.eyeHue, .4, .4) )
        circle(x + cos(dir) * d, y + sin(dir) * d, .35*r)

        // pupil
        fill('#000000')
        circle(x + cos(dir) * d, y + sin(dir) * d, .2*r)
    }

    drawTeeth() {
        this.teeth.forEach(t => {
            fill('#fffff0')
            rect(t.x - t.w/2, t.y, t.w, 20)
        })
    }

    drawHair() {
        this.hair.forEach(h => {
            fill( hsl(this.bandHue, .4, .4) )
            rect(h.x-h.w/2, h.y-h.h, h.w, h.h)
        })
    }

    evo(dt) {}

    draw() {
        save()
        translate(this.x, this.y)
        scale(this.scale, this.scale)
        alpha(this.a)

        this.drawTeeth()

        // body
        fill('#404050')
        rect(-90, -40, 180, 80)

        // jaw
        rect(-70, 80, 140, 40)

        // band
        fill( hsl(this.bandHue, .3, .3) )
        rect(-90, -20, 180, 40)

        this.drawEye(-40, 0, 30)
        this.drawEye(+40, 0, 35)

        this.drawHair()

        restore()
    }
}
