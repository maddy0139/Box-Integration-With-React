import {combineReducers} from 'redux';
import courses from './courseReducer';
import groupLoaded from './groupLoaderReducer';
import groupOffset from './groupOffsetReducer';

const rootReducer = combineReducers({
    courses,
    groupLoaded,
    groupOffset 
});

export default rootReducer;