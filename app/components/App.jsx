import React, { Component } from 'react'

import {GetSearchResults} from '../utils/helpers'
import Rebase from 're-base'

import Search from './Search'
import VideoList from './VideoList'
import SavedPlaylists from './SavedPlaylists'


const base = Rebase.createClass({
      apiKey: "AIzaSyDfkygwxY09jTYii6t6ZSicTS_9BS6sdpA",
      authDomain: "breakbeats-e01c5.firebaseapp.com",
      databaseURL: "https://breakbeats-e01c5.firebaseio.com",
      storageBucket: "breakbeats-e01c5.appspot.com",
      messagingSenderId: "443959380832"
}, 'App');

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideos: [],
      selectedVideosTitles: [],
      selectedVideosPosters: [],
      savedPlaylists: []
    }

    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
    this.addOrRemoveVideo = this.addOrRemoveVideo.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
  }


  componentWillMount () {
    this.ref = base.bindToState('playlists', {
      context: this,
      asArray: true,
      state: 'savedPlaylists'
    })
    console.log(this.state.savedPlaylists)
  }

  componentDidMount () {
    console.log(this.state.savedPlaylists)
  }
  

  componentWillUnmount () {
    base.removeBinding(this.ref)
  }
    
  

  handleSearchInput (e) {
    this.setState({
      inputSearch: e.target.value
    })
  }

  handleSearch (searchTerm) {
    GetSearchResults(searchTerm).then(data => {
      this.setState({
        videos: data.data.items
      })
    })
  }


  handleItemClick (video, title, poster) {
    if(typeof video === 'string' ) {
      return this.addOrRemoveVideo(video, title, poster)
    }
    let videoId = video.id.videoId
    let videoTitle = video.snippet.title
    let videoPoster = video.snippet.thumbnails.medium.url

    // add video clicked to array of selected videos, 3 max
    // otherwise, if it's in seleted videos, remove it
    // NOW prevent it from being added twice
    
    this.addOrRemoveVideo(videoId, videoTitle, videoPoster)
    
  }

  addOrRemoveVideo (videoId, videoTitle, videoPoster) {
    if(this.state.selectedVideos.length < 3 && this.state.selectedVideos.indexOf(videoId) === -1) {
      this.setState(
        { 
          selectedVideos: this.state.selectedVideos.concat(videoId),
          selectedVideosTitles: this.state.selectedVideosTitles.concat(videoTitle),
          selectedVideosPosters: this.state.selectedVideosPosters.concat(videoPoster)
        }
      )
    } else {
      this.setState({
        selectedVideos: this.state.selectedVideos.filter((selectedVideo) => selectedVideo !== videoId),
        selectedVideosTitles: this.state.selectedVideosTitles.filter((selectedVideoTitle) => selectedVideoTitle !== videoTitle),
        selectedVideosPosters: this.state.selectedVideosPosters.filter((selectedVideoPoster) => selectedVideoPoster !== videoPoster)
      })
    }
  }

  savePlaylist (playlistTitle) {
    // for reading from firebase
    // this.ref = base.bindToState('playlists', {
    //   context: this,
    //   asArray: true,
    //   state: 'selectedVideos'
    // })
    // save to firebase
    base.push('playlists/', {
      data: {
        playlistTitle: `${playlistTitle}`,
        videoIds: this.state.selectedVideos, 
        videoTitles: this.state.selectedVideosTitles,
        videoPosters: this.state.selectedVideosPosters
      }
    })

    this.setState({
      selectedVideos: []
    })
  }

  
  render(){
    return (
      <div className="container">
        <h1>Break Beats</h1>
        <SavedPlaylists savedPlaylists={this.state.savedPlaylists} />

        <Search handleSearch={this.handleSearch} handleSearchInput={this.handleSearchInput} />
        <VideoList 
          videos={this.state.videos} 
          onItemClick={this.handleItemClick} 
          selectedVideos={this.state.selectedVideos} 
          selectedVideosTitles={this.state.selectedVideosTitles} 
          selectedVideosPosters={this.state.selectedVideosPosters}
          savePlaylist={this.savePlaylist} />
          { this.props.children }
      </div>
    )
  }
}
