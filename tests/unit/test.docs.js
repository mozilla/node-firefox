'use strict';

// See https://github.com/jshint/jshint/issues/1747 for context
/* global -Promise */
var Promise = require('es6-promise').Promise;

var fs = require('fs');
var path = require('path');
var teacher = require('teacher');

// List of words that fail spellcheck but are still acceptable.
var NEW_WORDS = fs.
   readFileSync(path.join(__dirname, '../words.txt')).
   toString().
   trim().
   toLowerCase().
   split('\n').
   map(function(word) {
  return new RegExp('^' + word.replace(/\*/g, '.*') + '$');
});

module.exports = {
  'Spellcheck README.md': function(test) {
    var file = '../../README.md';

    // Teacher should resolve with no errors in spelling or grammar.
    askTeacher(file).then(function(errors) {
      test.equal(0, errors);
      test.done();
    });
  },
  'Spellcheck CONTRIBUTING.md': function(test) {
    var file = '../../CONTRIBUTING.md';

    // Teacher should resolve with no errors in spelling or grammar.
    askTeacher(file).then(function(errors) {
      test.equal(0, errors);
      test.done();
    });
  }
};

function askTeacher(file, test) {
  var text = fs.readFileSync(path.join(__dirname, file)).toString();

  return new Promise(function(resolve, reject) {
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

      resolve(results);
    });
  });
}
