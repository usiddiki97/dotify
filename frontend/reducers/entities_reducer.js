import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import songsReducer from './songs_reducer';
import albumsReducer from './albums_reducer';
import artistsReducer from './artists_reducer';

export default combineReducers({
    users: usersReducer,
    songs: songsReducer,
    albums: albumsReducer,
    artists: artistsReducer
})