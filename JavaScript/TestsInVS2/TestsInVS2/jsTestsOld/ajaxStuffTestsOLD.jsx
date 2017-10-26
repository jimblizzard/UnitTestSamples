/// <reference path="..\CustomJS/ajaxStuff.js" />
/// <reference path="..\Scripts/jasmine/jasmine.js" />

describe('updateTools', function () {
    var testInput = [
        'Test',
        0,
        1,
        -1,
        null,
        undefined];



    xdescribe('#updateMessage()', function () {
        it('should add the given message to a target DOM element', function () {
            var $textStub = signon.stub($.fn, 'text');

            testInput.forEach(function (input) {
                updateTools.updateMessage(input);
                expect($textStub.updateMessage).toHaveBeenCalledWith(input)
            });
        });
    });
});