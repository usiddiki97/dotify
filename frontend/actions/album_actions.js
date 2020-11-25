import * as AlbumUtil from '../util/album_util';

export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';

const receiveAllAlbums = albums => ({
    type: RECEIVE_ALL_ALBUMS,
    albums
})

const receiveAlbum = ({songs, album, artist}) => ({
    type: RECEIVE_ALBUM,
    songs,
    album,
    artist
})

// thunk action creators
export const requestAllAlbums = () => dispatch => {
    return AlbumUtil.fetchAlbums()
        .then(albums => dispatch(receiveAllAlbums(albums)))
}

export const requestAlbum = (albumId) => dispatch => {
    return AlbumUtil.fetchAlbum(albumId)
        .then(response => dispatch(receiveAlbum(response)))
}
