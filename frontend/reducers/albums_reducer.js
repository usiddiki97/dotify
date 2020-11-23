import { RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions'

const albumsReducer = (state = {}, action) => {
    Object.freeze(state)
    
    switch (action.type) {
        case RECEIVE_ALL_ALBUMS:
            return action.albums
        case RECEIVE_ALBUM:
            return { ...state, [action.album.album.id]: action.album };
        default:
            return state;
    }
}

export default albumsReducer;