let _state;
let count = 0;

const bindState = (state) => _state = state

const init = () => 0

const present = (data) => {
    count += data;

    _state.render(count);
}

module.exports = { bindState, present, init };
