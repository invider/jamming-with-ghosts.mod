// @depends(dna/Ghost)

const SPEED = 200
const PRECISION = 10

class FloatingGhost extends dna.Ghost {

    constructor(st) {
        super(st)
    }

    evoOnTarget(dt) {
        const d = lib.math.distance(this.x, this.y, this.target.x, this.target.y)
        if (d < PRECISION) {
            // reached the target!
            this.x = this.target.x
            this.y = this.target.y
            delete this.target
            if (this.onTouch) this.onTouch()

        } else {
            const ba = bearing(this.x, this.y, this.target.x, this.target.y)
            this.x += cos(ba) * SPEED*dt
            this.y += sin(ba) * SPEED*dt
        }
    }

    evo(dt) {
        if (this.target) this.evoOnTarget(dt)
    }

    onTouch() {
        log('touched!')
    }
}
