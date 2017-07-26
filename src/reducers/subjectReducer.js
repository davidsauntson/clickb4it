import * as ActionTypes from '../constants/actions';

const initialState = {
    id: -1, 
    text: "I" 
};

export function subject(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case ActionTypes.UPDATED_SUBJECT:
            return Object.assign({}, state, payload);

        default:
            return initialState;
    }

}

export default subject;