import * as ActionTypes from '../constants/actions';
import {ADJECTIVES} from '../data/adjectives';
import {THINGS} from '../data/things';
import {SUBJECTS} from '../data/subjects';
import {ENDINGS} from '../data/endings';

export const generateTitle = () => {
    return function(dispatch) {
        dispatch(getNumber());
        dispatch(generateAction(ADJECTIVES, ActionTypes.UPDATED_ADJECTIVE));
        dispatch(generateAction(THINGS, ActionTypes.UPDATED_THING));
       // dispatch(generateAction(SUBJECTS, ActionTypes.UPDATED_SUBJECT));
    }
}


const getNumber = () => {
    const number =  Math.round(Math.random() * 101);

    return {
        type: ActionTypes.UPDATED_NUMBER,
        payload: number
    }
}

const generateAction = (array, actionType) => {
    const index = Math.round(Math.random() * array.length - 1);

    return {
        type: actionType,
        payload: {
            id: index,
            text: array[index]
        }
    }
}
