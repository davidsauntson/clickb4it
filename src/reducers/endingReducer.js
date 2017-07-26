import * as ActionTypes from '../constants/actions';

const initialState = {
    id: -1, 
    text: "made" 
};

export function ending(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case ActionTypes.UPDATED_ENDING:
            return Object.assign({}, state, payload);

        default:
            return state;
    }

}

export default ending;