/// <reference path="..\Scripts/jasmine/jasmine.js" />
/// <reference path="..\Scripts/SpySUT.js" />

// SpySpec.js

describe("A spy, when configured to fake a return value", function () {
    var foo, bar, fetchedBar;
    var setBar = mySUT.setBar;
    var getBar = mySUT.getBar;

    beforeEach(function () {
        foo = {
            setBar: function (value) {
                bar = value;
            },
            getBar: function () {
                return bar;
            }
        };

        spyOn(foo, 'getBar').and.callThrough();

        foo.setBar(123);
        fetchedBar = foo.getBar();
    });


    it("tracks that the spy was called", function () {
        expect(foo.getBar).toHaveBeenCalled();
    });

    it("should not affect other functions", function () {
        expect(bar).toEqual(123);
    });

    it("when called returns the requested value", function () {
        expect(fetchedBar).toEqual(745);
    });
});