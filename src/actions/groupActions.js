import * as types from './actionTypes';

export function createCourse(course) {
    return { type: types.CREATE_COURSE, course };
}
export function setGroupLoader(groupLoaded){
    return {type:types.IS_GROUP_LOADING,groupLoaded};
}

export function setGroupOffset(groupOffset)
{
    return {type:types.GROUP_OFFSET,groupOffset};
}
