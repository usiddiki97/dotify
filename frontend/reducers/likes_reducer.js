import { RECEIVE_ALL_LIKES } from '../actions/likes_actions';

const likesReducer = ( state = {}, action ) => {
    Object.freeze(state)
    // debugger;
    switch(action.type) {
        case RECEIVE_ALL_LIKES:
            return action.likedSongs;
        default:
            return state;
    }
}

export default likesReducer;