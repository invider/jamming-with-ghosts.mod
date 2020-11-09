// @depends(dna/FloatingGhost)

const NOP   = 0
const UP    = 1
const LEFT  = 2
const DOWN  = 3
const RIGHT = 4

class DotGhost extends dna.FloatingGhost {

    constructor(st) {
        super(st)
        this.cmd = []
    }

    pickRandomDir() {
        return RND(3)
    }

    step() {
        if (this.target) return

        let cmd = NOP
        if (this.cmd.length > 0) {
            cmd = this.cmd.shift()
        } else {
            cmd = this.pickRandomDir()
        }
        
        switch(cmd) {
            case NOP:   break;
            case UP:    this.follow( this.gx, this.gy - 1 ); break;
            case LEFT:  this.follow( this.gx - 1, this.gy ); break;
            case DOWN:  this.follow( this.gx, this.gy + 1 ); break;
            case RIGHT: this.follow( this.gx + 1, this.gy ); break;
            default: log('unknown command #' + cmd)
        }
    }

    up() {
        this.cmd.push(UP)
    }

    left() {
        this.cmd.push(LEFT)
    }

    down() {
        this.cmd.push(DOWN)
    }

    right() {
        this.cmd.push(RIGHT)
    }
}
