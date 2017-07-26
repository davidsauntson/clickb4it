import * as ActionTypes from '../constants/actions';

const initialState = {
    id: -1, 
    text: "things" 
};

export function thing(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case ActionTypes.UPDATED_THING:
            return Object.assign({}, state, payload);

        default:
            return state;
    }

}

export default thing;