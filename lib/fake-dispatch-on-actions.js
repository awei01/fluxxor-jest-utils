'use strict';
function _bindActions(target, actions, binder) {
	for (var key in actions) {
		if (actions.hasOwnProperty(key)) {
			if (typeof actions[key] === "function") {
				target[key] = actions[key].bind(binder);
			} else if (typeof actions[key] === "object") {
				target[key] = {};
				_bindActions(target[key], actions[key], binder);
			} else {
				target[key] = actions[key];
			}
		}
	}
};

module.exports = function(jest, actions) {
	var result = {};
	_bindActions(result, actions, result);
	result.dispatch = jest.genMockFn();
	return result;
};
