import * as types from '../actions/actionTypes';

export default  function groupLoaderReducer (state = [], action){
    switch(action.type) {
        case types.IS_GROUP_LOADING:
            //state.push(aciton.course);
            //return  Object.assign(state, action.groupLoaded);
            return [...state,Object.assign({}, action.groupLoaded)];
        default:
            return state;
    }
}

