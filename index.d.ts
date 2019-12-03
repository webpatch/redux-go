interface IAction {
    type: string;
    payload: any;
}
interface IHandler<T> {
    [action: string]: (state: T, action: IAction) => T;
}
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
export declare function createReducer<T>(handlers: IHandler<T>, initState: T): (state: T, action: IAction) => T;
/**
 * A curry function with type inject in.
 * @param type action type name
 * @return function action(payload) {...}
 *
 * @example
 * const changeData = createAction('changeData');
 * dispatch(changeData({user: 'tom'}));
 */
export declare function createAction(type: string): {
    <T>(payload: T): IAction;
    toString(): string;
};
export {};
