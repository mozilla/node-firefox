# Contributing to node-firefox

These are the general guidelines we're following when either porting modules from the previous node-fxos project, or when creating new modules:

1) **Remove as many dependencies as possible and make the code super simple**. Modules using underscore and Q create situations where the code is *cryptic*, unless you're familiar with those. So far using es6-promise and Promise.all has got us covered.

2) **Try to be as obvious as possible**. This means, for example, not using "B2G" if we can say "simulator" instead. Another example: `startB2G` can be renamed to `startSimulator` and it is so much evident what it is doing for someone who is not familiar with the moz-jargon.

3) **Only expose the API via promises**. Granted, you internally might need to use callbacks for other modules which are not promisified, but we want to make the whole API follow the same style, so once you learn to use one module, using another `node-firefox-` module is easy because the interface is the same: `makeACall().then(doSomethingElse)`.

4) **No CLI binary**. None of the existing examples/use cases we came up with were using the CLI, so there's either no need for that or we hate the CLI. Either way there was a lot of duplicated code between modules for doing CLI and it wasn't too consistent, and we do not have too much time for this first iteration, so no CLI for now.

5) **For naming, try to be as generic as possible but also as semantic as possible**. For example, if a module can be used to discover Firefox and Firefox OS runtimes, avoid adding 'os' to its name, so that it is more generic. Also consider that if something sounds weird, maybe it's because we're using the wrong name. E.g. `fx-simulators` sounded weird until it was renamed to `find-simulators`. When in doubt, discuss it with more people! Don't be afraid, specially if English is not your first language!

6) Use the [build-tools](https://github.com/mozilla/node-firefox-build-tools) module and gulpfile.js to **lint the code**.
