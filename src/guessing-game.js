class GuessingGame {
    constructor() {}

    left;
    right;
    result;
    setRange(min, max) {
        this.left = min;
        this.right = max;
    }

    guess() {
        this.result = Math.ceil((this.right + this.left)/2);
        return this.result
    }

    lower() {
        this.right = this.result;
    }

    greater() {
        this.left = this.result;
    }
}

module.exports = GuessingGame;