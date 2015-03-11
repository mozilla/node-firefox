"use strict";

var fs = require("fs");
var path = require("path");
var chai = require("chai");
var expect = chai.expect;
var teacher = require("teacher");
var when = require("when");

describe("Spell Checking", function () {
  it("Spellcheck README.md", function (done) {
   var file = require.resolve("../README.md");

    fs.readFile(file, function (err, data) {
      if (err) {
        throw err;
      }
      askTeacher(data.toString()).then(done);
    });
  });

  it("Spellcheck CONTRIBUTING.md", function (done) {
   var file = require.resolve("../CONTRIBUTING.md");

    fs.readFile(file, function (err, data) {
      if (err) {
        throw err;
      }
      askTeacher(data.toString()).then(done);
    });
  });

  function askTeacher(text) {
    // get a list of words that fail spell check but are still acceptable
    var NEW_WORDS = fs.
       readFileSync(path.join(__dirname, "words.txt")).
       toString().
       trim().
       toLowerCase().
       split("\n").
       map(function(word) {
      return new RegExp("^" + word.replace(/\*/g, ".*") + "$");
    });

    return when.promise(function(resolve, reject) {
      teacher.check(text, function(err, data) {
        var results = data || [];
        results = results.filter(function(result) {
          var word = result.string.toLowerCase();

          // test if the word should be ignored
          for (var i = NEW_WORDS.length - 1; i >= 0; i--) {
            if (NEW_WORDS[i].test(word)) {
              return false;
            }
          }

          // ignore anything that is not in the text
          if (!(new RegExp(result.string)).test(text)) {
            return false;
          }

          return true;
        });

        if (results.length > 0) {
          console.log(results);
        }

        expect(results.length).to.be.equal(0);

        resolve();
      });
    });
  }
});
