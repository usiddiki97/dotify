import { RECEIVE_ALL_ARTISTS, RECEIVE_ARTIST } from '../actions/artist_actions'

const artistsReducer = (state = {}, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_ALL_ARTISTS:
            return action.artists
        case RECEIVE_ARTIST:
            return { ...state, [action.artist.artist.id]: action.artist };
        default:
            return state;
    }
}

export default artistsReducer;