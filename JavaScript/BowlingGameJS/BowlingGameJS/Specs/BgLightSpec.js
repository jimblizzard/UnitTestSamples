/// <reference path="..\Scripts/BgLight.js" />
/// <reference path="..\Scripts/jasmine/jasmine.js" />

// BgLightSpec.js 
describe('BGL', function () {
    var bgl;
    var rolls = 20;
    var pinsKnocked = 0;

    beforeEach(function () {
        // Arrange
        bgl = new BGL();
    });

    it('should roll a gutter game equal 0', function () {
        // Act
        rollMultiple(bgl, rolls, pinsKnocked);
        
        // Assert
        expect(bgl.score()).toBe(0);
    });



    it('should roll all ones equal 20', function () {
        // Act 
        for (var i = 0; i < 20; i++) {
            bgl.roll(1);
        }
        // Assert
        expect(bgl.score()).toBe(20);
    });

    function rollMultiple(sut, rolls, pinsKnocked) {
        for (var i = 0; i < rolls; i++) {
            sut.roll(pinsKnocked);
        }
    }
});