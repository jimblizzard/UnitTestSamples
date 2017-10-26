/// <reference path="..\Scripts/jasmine/jasmine.js" />
/// <reference path="..\Scripts/BgModule.js" />


// BgModuleSpec.js 

describe('BgModuleSpec bowling game', function () {
    var score = bowlingGameModule.score;
    var roll = bowlingGameModule.roll;

    it('bowl a gutter game', function () {
        roll(0); 
        expect(score()).toEqual(0);
    });
});