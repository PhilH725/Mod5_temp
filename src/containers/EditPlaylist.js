
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchingPlaylistToEdit} from '../redux/actionCreators'

class EditPlaylist extends Component {

  componentDidMount() {
    this.props.fetchingPlaylistToEdit(this.props.id)
  }

  render() {
    return (
      this.props.editingPlaylist.songs ?
      <div>
        <h1>{this.props.editingPlaylist.name}</h1>
        <h3>Tracklist:</h3>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Song</th>
              <th>Artist</th>
              <th>Album</th>
            </tr>
          </thead>
          <tbody>
          {this.props.editingPlaylist.songs.map(s => {
            return (
              <tr>
                <button>Remove Song</button>
                <td>{s.name}</td>
                <td>{s.artist}</td>
                <td>{s.album}</td>
              </tr>
            )
          })}
          </tbody>
        </table>
        <button>Save Changes</button>
      </div>
      :
      <h3>loading...</h3>
    )
  }

}

const mapStateToProps = state => {
  return {
    editingPlaylist: state.editingPlaylist,
    songs: state.editingPlaylist.songs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingPlaylistToEdit: (id) => dispatch(fetchingPlaylistToEdit(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPlaylist)