import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import songsReducer from './songs_reducer';
import albumsReducer from './albums_reducer';
import artistsReducer from './artists_reducer';
import likesReducer from './likes_reducer';
import playlistsReducer from './playlists_reducer';

export default combineReducers({
    users: usersReducer,
    songs: songsReducer,
    albums: albumsReducer,
    artists: artistsReducer,
    likes: likesReducer,
    playlists: playlistsReducer
})