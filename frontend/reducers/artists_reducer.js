import { RECEIVE_ALL_ARTISTS, RECEIVE_ARTIST } from '../actions/artist_actions'
import { RECEIVE_SONG } from '../actions/song_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';

const artistsReducer = (state = {}, action) => {
    Object.freeze(state)
    debugger;
    switch (action.type) {
        case RECEIVE_ALL_ARTISTS:
            return action.artists
        case RECEIVE_ARTIST:
            return { ...state, [action.artist.id]: action.artist };
        case RECEIVE_SONG:
            return { ...state, [action.artist.id]: action.artist };
        case RECEIVE_ALBUM:
            return { ...state, [action.artist.id]: action.artist };
        default:
            return state;
    }
}

export default artistsReducer;