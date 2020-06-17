// @depends(dna/Ghost)

class FloatingGhost extends dna.Ghost {

    constructor(st) {
        super(st)

        this.dx = 0
        this.dy = 0
        this.timer = 0
    }

    evo(dt) {
        this.timer -= dt
    }
}
