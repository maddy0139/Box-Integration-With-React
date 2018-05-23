import * as types from '../actions/actionTypes';

export default  function groupOffsetReducer (state = {}, action){
    switch(action.type) {
        case types.GROUP_OFFSET:
            //state.push(aciton.course);
            return  Object.assign(state, action.groupOffset);
            //return [...state,Object.assign({}, action.groupLoaded)];
        default:
            return state;
    }
}

