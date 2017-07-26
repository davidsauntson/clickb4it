import * as ActionTypes from '../constants/actions';
import {ADJECTIVES} from '../data/adjectives';
import {THINGS} from '../data/things';
import {SUBJECTS} from '../data/subjects';
import {ENDINGS} from '../data/endings';

export const generateTitle = () => {
    return function(dispatch) {
        dispatch(getNumber());
        dispatch(getRandomArrayElement(ADJECTIVES, ActionTypes.UPDATED_ADJECTIVE));
        dispatch(getRandomArrayElement(THINGS, ActionTypes.UPDATED_THING));
        dispatch(getSubjectAndEnding());
    }
}


const getNumber = () => {
    const number =  Math.round(Math.random() * 101);

    return {
        type: ActionTypes.UPDATED_NUMBER,
        payload: number
    }
}

const getRandomArrayElement = (array, actionType) => {
    const index = Math.round(Math.random() * array.length - 1);

    return {
        type: actionType,
        payload: {
            id: index,
            text: array[index]
        }
    }
}

const getSubjectAndEnding = () => {

    return function(dispatch) {
        const subjectIndex = Math.round(Math.random() * (SUBJECTS.length - 1));
        const endingIndex = Math.round(Math.random() * (ENDINGS.length - 1));

        const subject = SUBJECTS[subjectIndex];
        const ending = ENDINGS[endingIndex];

        dispatch(getSubject({
            id: subjectIndex,
            text: subject.text
        }))

        dispatch(getEnding({
            id: endingIndex,
            text: subject.shouldUseAltEnding ? ending.altEnding : ending.ending
        }))
    }
}

const getSubject = (subject) => {
    return {
        type: ActionTypes.UPDATED_SUBJECT,
        payload: {
            id: subject.id,
            text: subject.text
        }
    }
}

const getEnding = (ending) => {
    return {
        type: ActionTypes.UPDATED_ENDING,
        payload: {
            id: ending.id,
            text: ending.text
        }
    }
}