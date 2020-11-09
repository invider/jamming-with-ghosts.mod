const SLOW_STEP = 0

const df = {
    name: 'vm',
    mode: SLOW_STEP, // vm execution mode
    cycle: 0,
    period: 1,
    timer: 0,
}

class VM {

    constructor(st) {
        augment(this, df, st)
    }

    nextStep() {
        // TODO evaluate all the ghosts
        this.cycle ++
    }

    evo(dt) {
        this.timer += dt
        if (this.timer >= this.period) {
            this.nextStep()
            this.timer = 0
        }
    }
}
