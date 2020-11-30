import { RECEIVE_ALL_PLAYLISTS, RECEIVE_PLAYLIST, REMOVE_PLAYLIST } from '../actions/playlist_actions';

const playlistsReducer = (state = {}, action) => {
    Object.freeze(state)
    // debugger;
    switch (action.type) {
        case RECEIVE_ALL_PLAYLISTS:
            return action.playlists
        case RECEIVE_PLAYLIST:
            return { ...state, [action.playlist.id]: action.playlist };
        case REMOVE_PLAYLIST:
            let newState = {...state};
            delete newState[action.playlistId];
            return newState;
        default:
            return state;
    }
}

export default playlistsReducer;