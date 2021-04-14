export default {
    data: {
        timer: 0,
        multiplier: 1
    },
    increment() {
        if (this.timer == 0) {
            this.timer = this.multiplier
        }else {
            this.timer = this.timer + this.multiplier
        }
    },
    decrement() {
        this.timer = this.timer - this.multiplier
        if (this.timer <= 0) {
            this.timer = 0
        }
    },
    oneMultiple() {
        this.multiplier = 1
    },
    fiveMultiples() {
        this.multiplier = 5
    },
    tenMultiples() {
        this.multiplier = 10
    }
}
