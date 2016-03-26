let binder = require("./binder");
let view = require("./view");
let state = require("./state");
let actions = require("./actions");
let model = require("./model");

binder(state, actions, model, view);

view.display(view.ready(model.init()));
