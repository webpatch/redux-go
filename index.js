(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @param handlers  A object with action function as key and reducer function as value.
     * @param initState Initial state object.
     * @example
     *
     * createReducer({
     *   [changeData]: (state,action) => { ...state, data:action.payload }
     * },initState);
     *
     */
    function createReducer(handlers, initState) {
        return function reducer(state, action) {
            if (state === void 0) { state = initState; }
            if (handlers.hasOwnProperty(action.type)) {
                return handlers[action.type](state, action);
            }
            else {
                return state;
            }
        };
    }
    exports.createReducer = createReducer;
    /**
     * A curry function with type inject in.
     * @param type action type name
     * @return function action(payload) {...}
     *
     * @example
     * const changeData = createAction('changeData');
     * dispatch(changeData({user: 'tom'}));
     */
    function createAction(type) {
        function action(payload) {
            return {
                type: type,
                payload: payload,
            };
        }
        action.toString = function () { return type; };
        return action;
    }
    exports.createAction = createAction;
});
//# sourceMappingURL=index.js.map