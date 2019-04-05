import React, { Component } from 'react';
import Header from './components/Header'
import Navbar from './components/Navbar'
import MainContainer from './containers/MainContainer'
import './App.css';
import {connect} from 'react-redux'
import {fetchingSongs} from './redux/actionCreators'
import {fetchingArtists} from './redux/actionCreators'
import {fetchingAlbums} from './redux/actionCreators'
import {fetchingGenres} from './redux/actionCreators'
import {fetchingFavorites} from './redux/actionCreators'
import {fetchingPlaylists} from './redux/actionCreators'

class App extends Component {

  componentDidMount() {
    this.props.fetchingSongs()
    this.props.fetchingArtists()
    this.props.fetchingAlbums()
    this.props.fetchingGenres()
    this.props.fetchingFavorites()
    this.props.fetchingPlaylists()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <MainContainer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingSongs: () => dispatch(fetchingSongs()),
    fetchingArtists: () => dispatch(fetchingArtists()),
    fetchingAlbums: () => dispatch(fetchingAlbums()),
    fetchingGenres: () => dispatch(fetchingGenres()),
    fetchingFavorites: () => dispatch(fetchingFavorites()),
    fetchingPlaylists: () => dispatch(fetchingPlaylists())
  }
}

export default connect(null, mapDispatchToProps)(App);
