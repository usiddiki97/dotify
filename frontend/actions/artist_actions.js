import * as ArtistUtil from '../util/artist_util';

export const RECEIVE_ALL_ARTISTS = 'RECEIVE_ALL_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';

const receiveAllArtists = artists => ({
    type: RECEIVE_ALL_ARTISTS,
    artists
})

const receiveArtist = artist => ({
    type: RECEIVE_ARTIST,
    artist
})

// thunk action creators
export const requestAllArtists = () => dispatch => {
    return ArtistUtil.fetchArtists()
        .then(artists => dispatch(receiveAllArtists(artists)))
}

export const requestArtist = (artistId) => dispatch => {
    return ArtistUtil.fetchArtist(artistId)
        .then(artist => dispatch(receiveArtist(artist)))
}
