import { combineReducers } from 'redux'
import axios from 'axios';

//INITAL STATE
const initialState = {
    blogposts: [],    
    currentPost: {}
}

//ACTIONS
export const acts = {
    GET_POSTS: 'GET_POSTS',
    GET_POST: 'GET_POST',    
    ADD_POST: 'ADD_POST',
    REMOVE_POST: 'REMOVE_POST'
}

//REDUCER ...yes, I like having a huge list so I can see them in one place
export default function rootReducer(state = initialState, action) {
    const assigner = (propy, val) => Object.assign({}, state, { [propy]: val });    
    switch (action.type) {
        case acts.GET_POSTS:
            return assigner('blogposts', action.val);
        case acts.GET_POST:
            return assigner('currentPost', action.val);
        case acts.ADD_POST:
            return assigner('blogposts', state.blogPosts.concat(action.val));
        case acts.REMOVE_CAMPUS:
        return assigner('blogposts', state.blogPosts.filter(bp => bp.id != action.val));
        default: return state
    }
}

//ACTION CREATOR
// Uses an extra param to take an input, so I don't have to write a dozen identical action creators
export const sendAction = (actType, val) => ({ type: actType, val });

//THUNKS

//For use with inserting thingTypes
export const stateProps = Object.assign({}, initialState);
Object.keys(initialState).forEach(key => {
    stateProps[key.toUpperCase()] = key;
});

export const fetchThings = (thingType, actionType, id = '') => dispatch => {
    axios.get(`/api/${thingType}/${id}`)
        .then(res => dispatch(sendAction(actionType, res.data)))
        .catch(err => console.error('Fetching ' + thingType + ' unsuccessful', err));
}

export const postNewThing = (thingType, actionType, newData) => dispatch => {
    axios.post(`/api/${thingType}`, newData)
        .then(res => dispatch(sendAction(actionType, res.data)))
        .catch(err => console.error('Posting ' + thingType + ' unsuccessful', err));
}

export const deleteThing = (thingType, actionType, id) => dispatch => {
    axios.delete(`/api/${thingType}/${id}`)
        .then(res => dispatch(sendAction(actionType, res.data)))
        .catch(err => console.error('Deleting ' + thingType + ' unsuccessful', err));
}
