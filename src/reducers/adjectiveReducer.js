import * as ActionTypes from '../constants/actions';

const initialState = {
    id: -1, 
    text: "dumb" 
};

export function adjective(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case ActionTypes.UPDATED_ADJECTIVE:
            return Object.assign({}, state, payload);

        default:
            return state;
    }

}

export default adjective;