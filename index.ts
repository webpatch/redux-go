interface IAction {
  type: string,
  payload: any
}

interface IHandler<T> {
  [action: string]: (state: T, action: IAction) => T
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
export function createReducer<T>(handlers: IHandler<T>, initState: T) {
  return function reducer(state = initState, action: IAction) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}

/**
 * A curry function with type inject in.
 * @param type action type name
 * @return function action(payload) {...}
 *
 * @example
 * const changeData = createAction('changeData');
 * dispatch(changeData({user: 'tom'}));
 */
export function createAction(type: string) {
  function action<T>(payload: T): IAction {
    return {
      type,
      payload,
    };
  }

  action.toString = () => type;
  return action;
}
