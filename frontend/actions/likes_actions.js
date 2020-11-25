import * as LikesUtil from '../util/likes_util';
import { receiveAllSongs } from './song_actions';

export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES';

const receiveAllLikes = likedSongs => {
    return {
    type: RECEIVE_ALL_LIKES,
    likedSongs
}}

// thunk action creators

export const requestAllLikes = () => dispatch => {
    return LikesUtil.fetchLikes()
    .then( likedSongs => dispatch(receiveAllSongs(likedSongs)))
}

export const toggleLike = songId => dispatch => {
    // debugger;
    return LikesUtil.toggleLike(songId)
    .then( likedSongs => dispatch(receiveAllLikes(likedSongs)))
}