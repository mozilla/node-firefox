"use strict";

var path = require("path");
var Mocha = require("mocha");
var mocha = new Mocha({
  ui: "bdd",
  reporter: "spec",
  timeout: 20000
});

mocha.addFile(require.resolve("./test.docs.js"));

mocha.run(function (failures) {
  process.exit(failures);
});
