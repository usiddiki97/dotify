import { RECEIVE_ALL_SONGS, RECEIVE_SONG } from '../actions/song_actions'
import { RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';

const songsReducer = (state = {}, action) => {
    Object.freeze(state)
    debugger;
    switch (action.type) {
        case RECEIVE_ALL_SONGS:
            return action.songs
        case RECEIVE_SONG:
            return {...state, [action.song.id]: action.song };
        case RECEIVE_ALBUM:
            // return {...state, songs: action.songs };
            return action.songs;
        case RECEIVE_ARTIST:
            // return {...state, songs: action.songs };
            return action.songs;
        default:
           return state;
    }
}
        
export default songsReducer;











