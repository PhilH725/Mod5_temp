
import React, {Component} from 'react'
import {Modal, Header, Divider} from 'semantic-ui-react'
import {getVideoId, toggleMusicPlayback} from '../redux/actionCreators'
import {connect} from 'react-redux'

class SongItemModal extends Component {
  constructor() {
    super()
    this.state = {
      videoId: ""
    }
  }

  //im currently using local state and redux to save the video id. local state looks better for the current modal display
  //because it shows loading instead of the previous video, but redux will eventually be used to have the video play
  //in a different component. when i make a final decision to use one ill delete the other.
  componentDidMount() {
    fetch('http://localhost:3000/get_song_url', {
      method: 'POST',
      headers: {"Content-Type":"application/json", Accept:"application/json"},
      body: JSON.stringify({
        songName: this.props.song.name,
        artistName: this.props.song.artist
      })
    })
    .then(res => res.json())
    .then(id => this.setState({videoId: id.id}))

    this.props.getVideoId(this.props.song.name, this.props.song.artist)
    this.props.toggleMusicPlayback()
  }

  render() {
    return (
      <Modal.Content>
        <Modal.Description>
          <Header id="youtube-modal-name-header" as="h2">{this.props.song.name}</Header>
          <Header id="youtube-modal-info-header" as="h3">{this.props.song.artist} - {this.props.song.album.name}</Header>
          <Divider />
          {this.state.videoId.length > 0 ?
          <div id="youtube-video-container">
            <iframe id="youtube-video-player" title="song" src={`https://www.youtube.com/embed/${this.state.videoId}`}>
            </iframe>
          </div>
          :
          <h2>Loading video...</h2>}
        </Modal.Description>
      </Modal.Content>
    )
  }
}

const mapStateToProps = state => ({
  videoId: state.videoId
})

const mapDispatchToProps = dispatch => ({
  getVideoId: (song, artist) => dispatch(getVideoId(song, artist)),
  toggleMusicPlayback: () => dispatch(toggleMusicPlayback())
})

export default connect(mapStateToProps, mapDispatchToProps)(SongItemModal)
