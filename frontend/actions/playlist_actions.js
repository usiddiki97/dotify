import * as PlaylistUtil from '../util/playlist_util';

export const RECEIVE_ALL_PLAYLISTS = "RECEIVE_ALL_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";


const receiveAllPlaylists = playlists => ({
    type: RECEIVE_ALL_PLAYLISTS,
    playlists
})

const receivePlaylist = ({playlist, songs}) => ({
    type: RECEIVE_PLAYLIST,
    playlist,
    songs
})

const removePlaylist = playlistId => ({
    type: REMOVE_PLAYLIST,
    playlistId
})

// thunk action creators

export const requestAllPlaylists = () => dispatch => {
    return PlaylistUtil.fetchPlaylists()
    .then(playlists => dispatch(receiveAllPlaylists(playlists)))
}

export const requestPlaylist = (playlistId) => dispatch => {
    return PlaylistUtil.fetchPlaylist(playlistId)
    .then(response => dispatch(receivePlaylist(response)))
}

export const createPlaylist = (playlist) => (dispatch) => {
    return PlaylistUtil.createPlaylist(playlist)
    .then( payload  => dispatch(receivePlaylist(payload)) )
};

export const updatePlaylist = (playlist) => (dispatch) => {
    return PlaylistUtil.updatePlaylist(playlist)
    .then( payload  => dispatch(receivePlaylist(payload)) )
};

export const deletePlaylist = (playlistId) => dispatch => {
    return PlaylistUtil.deletePlaylist(playlistId)
    .then( ({id}) => dispatch(removePlaylist(id)))
};

export const addSongToPlaylist = (playlistId, songId) => dispatch => {
    return PlaylistUtil.addSongToPlaylist(playlistId, songId).then(
        playlist => dispatch(receivePlaylist(playlist)),
    )
}
export const removeSongFromPlaylist = (playlistId, songId) => dispatch => {
    return PlaylistUtil.removeSongFromPlaylist(playlistId, songId).then(
        playlist => dispatch(receivePlaylist(playlist)),
    )
}

