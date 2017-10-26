// BgModule.js
// Refactored things to use a Module

(function (window) {
    var mySUT = (function () {
        return {
            setBar: function (value) {
                bar = value;
            },
            getBar: function () {
                return bar;
            }
        };
    })();
    window.mySUT = mySUT;
})(window);