interface IAction {
    type: string;
    payload: any;
}
export declare function createReducer<T>(handlers: any, initState: T): (state: T, action: IAction) => any;
export declare function createAction(type: string): {
    <T>(payload: T): IAction;
    toString(): string;
};
export {};
