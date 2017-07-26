import * as ActionTypes from '../constants/actions';
import {ADJECTIVES} from '../data/adjectives';

export const generateTitle = () => {
    return function(dispatch) {
        dispatch(getNumber());
        dispatch(getAdjective());
    }
}


const getNumber = () => {
    const number =  Math.round(Math.random() * 101);

    return {
        type: ActionTypes.UPDATED_NUMBER,
        payload: number
    }
}

const getAdjective = () => {
    console.log(ADJECTIVES.length);
    const index = Math.round(Math.random() *ADJECTIVES.length);
    console.log(index);
    return {
        type: ActionTypes.UPDATED_ADJECTIVE,
        payload: {
            id: index,
            text: ADJECTIVES[index]
        }
    }
}