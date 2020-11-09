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

    step() {
        // TODO evaluate all the ghosts
        this.cycle ++
        lab.cam._ls.forEach(g => {
            if (g.step) g.step()
        })
    }

    evo(dt) {
        this.timer += dt
        if (this.timer >= this.period) {
            this.step()
            this.timer = 0
        }
    }
}
