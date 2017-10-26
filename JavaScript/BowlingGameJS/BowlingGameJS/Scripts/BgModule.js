// BgModule.js
// Refactored things to use a Module

(function (window) {
    var bowlingGameModule = (function () {
        return {
            roll: function (pins) {
                return;
            },
            score: function () {
                return 0;
            }
        };
    })();
    window.bowlingGameModule = bowlingGameModule;
})(window);