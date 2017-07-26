import * as ActionTypes from '../constants/actions';

const initialState = 101;

export function number(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case ActionTypes.UPDATED_NUMBER:
            return payload;
            
        default:
            return state;
    }

}

export default number;