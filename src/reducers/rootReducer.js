import { combineReducers } from 'redux';
import number  from '../reducers/numberReducer';
import adjective from '../reducers/adjectiveReducer';
import thing from '../reducers/thingReducer';
import subject from '../reducers/subjectReducer';

const rootReducer = combineReducers({
    number,
    adjective,
    subject,
    thing
});

export default rootReducer;