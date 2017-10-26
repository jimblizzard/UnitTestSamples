// BgLight.js
function BGL() {
    this.totalScore = 0;
}
BGL.prototype.roll = function (pins) {
    this.totalScore += pins;
}
BGL.prototype.score = function () {
    return this.totalScore;
}