/// <reference path="..\CustomJS/ajaxSUT.js" />
/// <reference path="..\Scripts/jasmine/jasmine.js" />
// see : http://blog.toast38coza.me/mocking-ajax-requests-with-jasmine/

xdescribe('ajaxTests', function () {
    beforeEach(function () {
        jasmine.Ajax.install();
    });
    afterEach(function () {
        jasmine.Ajax.uninstall();
    });

    it("Logs text from the service to the console", function () {

        var consoleSpy = spyOn(console, "log");

        jasmine.Ajax.stubRequest('/some/url').andReturn({
            "status": 200,
            "contentType": 'text/plain',
            "responseText": 'Hello from the world'
        });

        var result = Hello.callWorld();
        expect(consoleSpy).toHaveBeenCalledWith('Hello from the world');
    });
});