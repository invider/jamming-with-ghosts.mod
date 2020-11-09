// @depends(dna/FloatingGhost)

class DotGhost extends dna.FloatingGhost {
    constructor(st) {
        super(st)
    }

    step() {
        if (this.target) return

        const dir = RND(3)
        switch(dir) {
            case 0: this.follow( this.gx, this.gy - 1 ); break;
            case 1: this.follow( this.gx - 1, this.gy ); break;
            case 2: this.follow( this.gx, this.gy + 1 ); break;
            case 3: this.follow( this.gx + 1, this.gy ); break;
        }
    }
}
