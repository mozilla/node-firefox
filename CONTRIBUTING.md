# Contributing to node-firefox

These are the general guidelines we're following when either porting modules from the [previous node-fxos project](https://github.com/nicola/node-fxos/), or when creating new modules:

1) **Remove as many dependencies as possible and make the code super simple**. Modules using Underscore and Q create situations where the code is *cryptic*, unless you're familiar with those. Use `es6-promise` and `Promise.all` instead.

2) **Try to be as obvious as possible**. This means, for example, not using "B2G" if we can say "simulator". Example: `startB2G` can be renamed `startSimulator`. Make things clear to those not familiar with Mozilla jargon or code names.

3) **Only expose the API via promises**. We are shipping an ES6 Promise-based API for node-firefox. We want to make each module's API the same, so once you learn to use one module, using another `node-firefox-` module is easy because the interface is the same: `makeACall().then(doSomethingElse)`. Granted, _internally_ you might need to use callbacks for modules which are not using Promises, but these should not be exposed to the user.

4) **No CLI binary**. None of our existing examples/use cases use the CLI, so we are not shipping a CLI (for now).

5) **Use generic, semantic names**. For example, if a module can be used to discover Firefox and Firefox OS runtimes, avoid adding "OS" to its name. This makes it more generic. If something sounds weird, it's probably using the wrong name. Example: `fx-simulators` sounded weird until it was renamed to `find-simulators`. When in doubt, discuss it with more people! Don't be afraid, especially if English is not your first language!

6) **Lint your code and use shared build tools**. Use the [build-tools](https://github.com/mozilla/node-firefox-build-tools) module and `gulpfile.js` instead of writing your own. If you think the linter or code style needs to be updated, make a change in the _shared build tools_ instead of one module. This way, our style across all modules will be exactly the same.

## Talk to us!

If you have questions or concerns not addressed here, file an issue or talk to us on IRC! We're in the `#apps` and `#devtools` IRC channels on `irc.mozilla.org`. The best people to talk to are `brittanystoroz`, `sole`, and `tofumatt`.
