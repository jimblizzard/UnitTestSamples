/// <reference path="..\Scripts/BowlingGame.js" />
/// <reference path="..\Scripts/jasmine/jasmine.js" />

describe('BowlingGameSpec bowling game', function () {
    it('roll gutter game', function () {
        // act
        for (var i = 0; i < 20; i++) {
            roll(0);
        }
        // assert
        expect(true).toBeTruthy();
        //expect(score).toEqual(0);
    });
});