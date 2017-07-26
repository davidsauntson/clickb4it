import { combineReducers } from 'redux';
import number  from '../reducers/numberReducer';
import adjective from '../reducers/adjectiveReducer';

const rootReducer = combineReducers({
    number,
    adjective
});

export default rootReducer;