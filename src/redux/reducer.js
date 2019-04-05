
import { combineReducers } from 'redux'

const searchTextReducer = (oldState="", action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TEXT":
      return action.payload
    default:
      return oldState
  }
}

const searchTypeReducer = (oldState="songs", action) => {
  switch (action.type) {
    case "CHANGE_SEARCH_TYPE":
      return action.payload
    default:
      return oldState
  }
}

const loadingReducer = (oldState=false, action) => {
  switch (action.type) {
    case "LOADING_SONGS":
      return true
    case "FETCHED_SONGS":
      return false
    default:
      return oldState
  }
}

const songsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_SONGS":
      return action.payload
    default:
      return oldState
  }
}

const artistsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_ARTISTS":
      return action.payload
    default:
      return oldState
  }
}

const albumsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_ALBUMS":
      return action.payload
    default:
      return oldState
  }
}

const genresReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_GENRES":
      return action.payload
    default:
      return oldState
  }
}

const mySongsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_FAVORITES":
      return action.payload.my_songs
    default:
      return oldState
  }
}

const myArtistsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_FAVORITES":
      return action.payload.my_artists
    default:
      return oldState
  }
}

const myAlbumsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_FAVORITES":
      return action.payload.my_albums
    default:
      return oldState
  }
}

const myGenresReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_FAVORITES":
      return action.payload.my_genres
    default:
      return oldState
  }
}

const myPlaylistsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "FETCHED_PLAYLISTS":
      return action.payload.playlists
    case "CREATE_NEW_PLAYLIST":
      return [...oldState, action.payload]
    default:
      return oldState
  }
}

const activeItemReducer = (oldState={}, action) => {
  switch (action.type) {
    case "FETCHED_ITEM":
      return action.payload
    case "RESET_ACTIVE_ITEM":
      return {}
    default:
      return oldState
  }
}

const selectedPlaylistReducer = (oldState=null, action) => {
  switch (action.type) {
    case "CHANGE_SELECTED_PLAYLIST":
      return action.payload
    default:
      return oldState
  }
}

const newPlaylistTextReducer = (oldState="", action) => {
  switch (action.type) {
    case "UPDATE_NEW_PLAYLIST_TEXT":
      return action.payload
    default:
      return oldState
  }
}

const editingPlaylistReducer = (oldState={}, action) => {
  switch (action.type) {
    case "FETCHED_PLAYLIST_TO_EDIT":
      return action.payload
    default:
      return oldState
  }
}

const newPlaylistSongsReducer = (oldState=[], action) => {
  switch (action.type) {
    case "ADD_NEW_PLAYLIST_SONG":
      return [...oldState, action.payload]
    case "REMOVE_NEW_PLAYLIST_SONG":
      return oldState.filter(s => s.id !== action.payload.id)
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  searchText: searchTextReducer,
  searchType: searchTypeReducer,
  songs: songsReducer,
  artists: artistsReducer,
  albums: albumsReducer,
  genres: myGenresReducer,
  loading: loadingReducer,
  mySongs: mySongsReducer,
  myArtists: myArtistsReducer,
  myAlbums: myAlbumsReducer,
  myGenres: myGenresReducer,
  myPlaylists: myPlaylistsReducer,
  activeItem: activeItemReducer,
  selectedPlaylist: selectedPlaylistReducer,
  newPlaylistNameText: newPlaylistTextReducer,
  editingPlaylist: editingPlaylistReducer,
  newPlaylistSongs: newPlaylistSongsReducer
})

export default rootReducer
