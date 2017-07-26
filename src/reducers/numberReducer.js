import * as ActionTypes from '../constants/actions';

const initialState = {
    text: 101
};

export function number(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case ActionTypes.UPDATED_NUMBER:
            return {
                text: payload
            }

        default:
            return initialState;
    }

}

export default number;