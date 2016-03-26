module.exports = function wiring(state, actions, model, view) {
    actions.bindModel(model);
    model.bindState(state);
    state.bindView(view);
    view.bindActions(actions);
};
