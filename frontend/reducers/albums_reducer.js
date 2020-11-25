import { RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions'
import { RECEIVE_SONG } from '../actions/song_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';

const albumsReducer = (state = {}, action) => {
    Object.freeze(state)
    // debugger;
    switch (action.type) {
        case RECEIVE_ALL_ALBUMS:
            return action.albums
        case RECEIVE_ALBUM:
            return { ...state, [action.album.id]: action.album };
        case RECEIVE_SONG:
            return {...state, [action.album.id]: action.album};
        case RECEIVE_ARTIST:
            // return {...state, albums: action.albums};
            return action.albums;
        default:
            return state;
    }
}

export default albumsReducer;