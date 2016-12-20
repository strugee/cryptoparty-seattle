// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
    cube = require('bespoke-theme-cube'),
    keys = require('bespoke-keys'),
touch = require('bespoke-touch'),
bullets = require('bespoke-bullets'),
scale = require('bespoke-scale'),
    hash = require('bespoke-hash'),
progress = require('bespoke-progress'),
state = require('bespoke-state');

// Bespoke.js
bespoke.from('article', [
	cube(),
	keys(),
	touch(),
	bullets('li, .bullet'),
	scale(),
	hash(),
	progress(),
	state()
]);

var signalNumber = localStorage.getItem('signal-number');
console.log(signalNumber);
if (signalNumber) {
	document.getElementById('signal-fillin-inner').innerHTML = signalNumber;
	document.getElementById('signal-fillin-outer').removeAttribute('hidden');
}
