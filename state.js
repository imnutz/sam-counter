let _view;

const bindView = (view) => _view = view

const render = (model) => _view.display(representation(model))

const representation = (model) => _view.ready(model)

const nextAction = (model) => { }

module.exports = { render, bindView };

