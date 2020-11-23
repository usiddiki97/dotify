import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from "./components/root";

import { requestAllSongs, requestSong } from './actions/song_actions';
import { requestAllAlbums, requestAlbum } from './actions/album_actions';
import { requestAllArtists, requestArtist } from './actions/artist_actions';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    ReactDOM.render(<Root store={store} />, root);

    // TESTING
    window.getState = store.getState
    window.dispatch = store.dispatch
    window.requestAllSongs = requestAllSongs;
    window.requestSong = requestSong;
    window.requestAllAlbums = requestAllAlbums;
    window.requestAlbum = requestAlbum;
    window.requestAllArtists = requestAllArtists;
    window.requestArtist = requestArtist;
})