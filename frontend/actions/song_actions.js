import * as SongUtil from '../util/song_util';

export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';

const receiveAllSongs = songs => ({
    type: RECEIVE_ALL_SONGS,
    songs
})

const receiveSong = song => ({
    type: RECEIVE_SONG,
    song
})

// thunk action creators
export const requestAllSongs = () => dispatch => {
    return SongUtil.fetchSongs()
    .then(songs => dispatch(receiveAllSongs(songs)))
}

export const requestSong = (songId) => dispatch => {
    return SongUtil.fetchSong(songId)
    .then(song => dispatch(receiveSong(song)))
}