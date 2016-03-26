const patch = require("snabbdom").init([        // Init patch function with choosen modules
  require('snabbdom/modules/class'),          // makes it easy to toggle classes
  require('snabbdom/modules/props'),          // for setting properties on DOM elements
  require('snabbdom/modules/style'),          // handles styling on elements with support for animations
  require('snabbdom/modules/eventlisteners'), // attaches event listeners
]);
const h = require("snabbdom/h");

let old = document.querySelector("#app");
let _actions;

const bindActions = (actions) => _actions = actions

const ready = (model) => {
    return h('div', [
        h('button', {on: { click: function() {_actions.increment() }}}, '+'),
        h('div', "Counter: " + model),
        h('button', {on: { click: function() {_actions.decrement() }}}, '-'),
    ]);
}

const display = (representation) => {
    old = patch(old, representation);
}

module.exports = { bindActions, ready, display };
