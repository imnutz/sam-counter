let _model;

const bindModel = (model) => _model = model

const increment = () => _model.present(1)

const decrement = () => _model.present(-1)

module.exports = { bindModel, increment, decrement };
