var Raven = require("nativescript-raven").Raven;
var raven = new Raven();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(raven.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(raven.functionname()).toEqual(jasmine.any(Promise));
  });
});