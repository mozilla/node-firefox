# node-firefox

As an overall project, node-firefox is a family of modules made for interacting
with Firefox via the [DevTools][] [Remote Protocol][].

As a module, `node-firefox` serves as a table of contents for the rest of the
modules in the node-firefox family. 

[DevTools]: https://developer.mozilla.org/en-US/docs/Tools
[Remote Protocol]:  https://searchfox.org/mozilla-central/source/devtools/docs/backend/protocol.md

## Installation

### npm

```bash
npm install node-firefox
```

### From git

```bash
git clone https://github.com/mozilla/node-firefox.git
cd node-firefox
npm install
```

If you want to update later on:

```bash
cd node-firefox
git pull origin master
npm install
```

## Usage

Using `require('node-firefox')` yields an object with properties that contain
instances of all the other modules in the `node-firefox` family installed as
dependencies.

For example:

```javascript
> var firefox = require('node-firefox');
> Object.keys(firefox)
[ 'findPorts',
  'findDevices',
  'forwardPorts',
  'findSimulators',
  'startSimulator',
  'connect',
  'findApp',
  'installApp',
  'uninstallApp',
  'launchApp',
  'reloadCss' ]
```

## Some of our grand goals

* Simplify app development for Firefox OS--make it look more like "normal" app development by enabling developers to use tools like Gulp to do things such as deploying to the device.
* "Close the circle" with Cordova + Firefox OS and make it possible to run `cordova emulate` or `cordova deploy`. ([In progress here](https://github.com/apache/cordova-firefoxos/pull/23).)
* Provide a command line tool which supports features of the [WebIDE](https://developer.mozilla.org/docs/Tools/WebIDE), for people who like typing more than clicking.
* Mega grand goal: control/debug any browser on the command line via DevTools via [Valence](https://developer.mozilla.org/docs/Tools/Valence).

## Current status

We're code reviewing and auditing the existing modules, and figuring out how to have them testable against a number of platforms (this includes both simulators and real, physical devices). We're using the [node-firefox-ports](https://github.com/mozilla/node-firefox-ports) module as the base to help us devise a framework that works well. For more details, you can ask [sole](https://github.com/sole/) or [tofumatt](https://github.com/tofumatt/) in `irc.mozilla.org` #apps.

### Supported platforms

Here's a very early stages support matrix. Bear with us as we make more progress ;)

<table>
	<tr>
		<th>Module / Platforms</th>
		<th>Linux</th>
		<th>Mac OS</th>
		<th>Windows</th>
	</tr>
	<tr>
		<td><a href="https://github.com/mozilla/node-firefox-find-ports"><tt>node-firefox-find-ports</tt></a></td>
		<td>
			<ul>
				<li>simulator: x</li>
				<li>browser: x</li>
			</ul>
		</td>
		<td>
			<ul>
				<li>simulator: x</li>
				<li>browser: x</li>
			</ul>
		</td>
		<td>
			<ul>
				<li>simulator: x</li>
				<li>browser: x</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td><a href="https://github.com/mozilla/node-firefox-find-devices"><tt>node-firefox-find-devices</tt></a></td>
		<td>
			<ul>
			</ul>
		</td>
		<td>
			<ul>
				<li>device: x</li>
			</ul>
		</td>
		<td>
			<ul>
			</ul>
		</td>
	</tr>
	<tr>
		<td><a href="https://github.com/mozilla/node-firefox-forward-ports"><tt>node-firefox-forward-ports</tt></a></td>
		<td>
			<ul>
			</ul>
		</td>
		<td>
			<ul>
				<li>device: x</li>
			</ul>
		</td>
		<td>
			<ul>
			</ul>
		</td>
	</tr>
	<tr>
		<td><a href="https://github.com/mozilla/node-firefox-find-simulators"><tt>node-firefox-find-simulators</tt></a></td>
		<td>
			<ul>
				<li>simulator: x</li>
			</ul>
		</td>
		<td>
			<ul>
				<li>simulator: x</li>
			</ul>
		</td>
		<td>
			<ul>
				<li>simulator: x</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td><a href="https://github.com/mozilla/node-firefox-start-simulator"><tt>node-firefox-start-simulator</tt></a></td>
		<td>
			<ul>
				<li>simulator: x</li>
			</ul>
		</td>
		<td>
			<ul>
				<li>simulator: x</li>
			</ul>
		</td>
		<td>
			<ul>
				<li>simulator: x</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td><a href="https://github.com/mozilla/node-firefox-connect"><tt>node-firefox-connect</tt></a></td>
		<td>
			<ul>
				<li>simulator: x</li>
			</ul>
		</td>
		<td>
			<ul>
				<li>simulator: x</li>
			</ul>
		</td>
		<td>
			<ul>
				<li>simulator: x</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td><a href="https://github.com/mozilla/node-firefox-find-app"><tt>node-firefox-find-app</tt></a></td>
		<td>
			<ul>
				<li>simulator: x</li>
			</ul>
		</td>
		<td>
			<ul>
				<li>simulator: x</li>
			</ul>
		</td>
		<td>
			<ul>
				<li>simulator: x</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td><a href="https://github.com/mozilla/node-firefox-install-app"><tt>node-firefox-install-app</tt></a></td>
		<td>
			<ul>
				<li>simulator: x</li>
			</ul>
		</td>
		<td>
			<ul>
				<li>simulator: x</li>
			</ul>
		</td>
		<td>
			<ul>
				<li>simulator: x</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td><a href="https://github.com/mozilla/node-firefox-uninstall-app"><tt>node-firefox-uninstall-app</tt></a></td>
		<td>
			<ul>
				<li>simulator: x</li>
			</ul>
		</td>
		<td>
			<ul>
				<li>simulator: x</li>
			</ul>
		</td>
		<td>
			<ul>
				<li>simulator: x</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td><a href="https://github.com/mozilla/node-firefox-launch-app"><tt>node-firefox-launch-app</tt></a></td>
		<td>
			<ul>
				<li>simulator: x</li>
			</ul>
		</td>
		<td>
			<ul>
				<li>simulator: x</li>
			</ul>
		</td>
		<td>
			<ul>
				<li>simulator: x</li>
			</ul>
		</td>
	</tr>
	<tr>
		<td><a href="https://github.com/mozilla/node-firefox-reload-css"><tt>node-firefox-reload-css</tt></a></td>
		<td>
			<ul>
				<li>simulator: x</li>
			</ul>
		</td>
		<td>
			<ul>
				<li>simulator: x</li>
			</ul>
		</td>
		<td>
			<ul>
				<li>simulator: x</li>
			</ul>
		</td>
	</tr>


</table>


*Note: Linux testing used Ubuntu 14.*

## Examples

### Installing a packaged app

<a href="https://github.com/mozilla/node-firefox-examples-install-packaged"><tt>node-firefox-examples-install-packaged</tt></a> is a full project that shows how to install a packaged app using `node-firefox`.

### Building with gulp + browserify

<a href="https://github.com/mozilla/node-firefox-examples-gulp"><tt>node-firefox-examples-gulp</tt></a> shows how to build, push and watch a packaged app using `node-firefox` with gulp and browserify.

## Dependencies

These are the dependencies between modules in the project (or closely related, like `firefox-client`).

We're only representing required dependencies to run a given module, not dependencies required for running the examples. Those are in the `devDependencies` section each module's `package.json`.

```
node-firefox-find-ports      +--> firefox-client


node-firefox-find-simulators +--> (no dependencies)


node-firefox-start-simulator +--> firefox-client
                             |
                             +--> node-firefox-find-simulators


node-firefox-connect         +--> firefox-client


node-firefox-find-app        +--> (no dependencies)


node-firefox-install-app     +--> (no dependencies)


node-firefox-launch-app      +--> (no dependencies)


node-firefox-reload-css      +--> (no dependencies)
```

## Contributing

It's still early stages, but we'd love to get you onboard, so we wrote some [guidelines for contributing](CONTRIBUTING.md).

## History

Based on early work on [node-fxos](https://github.com/nicola/node-fxos) by Nicola Greco.


