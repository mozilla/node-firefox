# node-firefox

*node.js modules for interacting with Firefox via the [DevTools](https://developer.mozilla.org/en-US/docs/Tools) [remote protocol](https://wiki.mozilla.org/Remote_Debugging_Protocol).*

## Some of our grand goals

* Simplify app development for Firefox OS--make it look more like "normal" app development by enabling developers to use tools like Gulp to do things such as deploying to the device.
* "Close the circle" with Cordova + Firefox OS and make it possible to run `cordova emulate` or `cordova deploy`.
* Provide a command line tool which is somewhat equivalent in features to [WebIDE](https://developer.mozilla.org/en-US/docs/Tools/WebIDE), for people who like typing more than clicking.
* Mega grand goal: control/debug any browser on the command line via DevTools via [Valence](https://developer.mozilla.org/en-US/docs/Tools/Valence).

## Current status

We're code reviewing and auditing the existing modules, and figuring out how to have them testable against a number of platforms (this includes both simulators and real, physical devices). We're using the [node-firefox-ports](https://github.com/mozilla/node-firefox-ports) module as the base to help us devise a framework that works well. For more details, look at [sole's fork](https://github.com/sole/node-firefox-ports/) of the module (and [all the branches](https://github.com/sole/node-firefox-ports/branches)) or ask her in irc.mozilla.org #apps (generally online 11-19 GMT).

### Supported platforms

Here's a very early-stages support matrix. Bear with us as we make more progresses ;)

<table>
	<tr>
		<th>Module / Platforms</th>
		<th>Linux</th>
		<th>Mac OS</th>
		<th>Windows</th>
	</tr>
	<tr>
		<td><a href="https://github.com/mozilla/node-firefox-ports"><tt>node-firefox-ports</tt></a></td>
		<td>
			<ul>
				<li>simulator: x</li>
				<li>browser: ?</li>
			</ul>
		</td>
		<td>
			<ul>
				<li>simulator: x</li>
				<li>browser: ?</li>
			</ul>
		</td>
		<td></td>
	</tr>
</table>


*Note: Linux is tested on Ubuntu 14.*

## History

Based on early work on [node-fxos](https://github.com/nicola/node-fxos) by Nicola Greco.
