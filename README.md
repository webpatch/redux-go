# Redux-go

Some redux helpers.

## Usage

```js

import { createAction, createReducer } from 'redux-go';

// define action
const changeData = createAction('changeData');

// define init state
const appState = { name: '' };

// define reducer 
const reducer = createReducer({
    [changeData]: (state, action) => {
        return {...state, name: action.payload};
    },
}, appState);

// dispatch action
dispatch(changeData('tom'))

```
