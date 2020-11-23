import { RECEIVE_ALL_SONGS, RECEIVE_SONG } from '../actions/song_actions'

const songsReducer = (state = {}, action) => {
    Object.freeze(state)
    // debugger;
    switch (action.type) {
        case RECEIVE_ALL_SONGS:
            return action.songs
        case RECEIVE_SONG:
            return {...state, [action.song.song.id]: action.song };
        default:
            return state;
    }
}

export default songsReducer;